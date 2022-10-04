import React, { useContext, useEffect,useState } from 'react';

import Helper from '../auth/Helper';

import Sidebar_inner from './Sidebar_Inner';
import io from "socket.io-client";
import Api from '../Api';  

const userId=localStorage.getItem('user_id');
const socket = io.connect("https://take5music.in:3002/",{query:'loggeduser='+userId});
const Message =(props)=>{


    const [userId,setUserId] = useState(0); 
    const [room, setRoom] = useState("");
    const [username, setUsername] = useState("");
    const [chatname, setChatname] = useState("No Chats");
    const [receiver, setReceiver] = useState("");
    const [teacher, setTeacher] = useState("");

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [memberList, setMemberList] = useState(null);
    const [chat_left, setChat_left] = useState("take_chat_left chat_show");
    const [chat_right, setChat_right] = useState("take_chat_right chat_hide");
   // const [socket, connectSocket] = useState("null");

    const joinRoom = () => {
        
        if (username !== "" && room !== "") {
          socket.emit("join_room", {room,username});
        }
        var myDiv = document.getElementById("chat_wrap");
        myDiv.scrollTop = myDiv.scrollHeight;
      };



      const switchClass =() => {
          if(chat_left==="take_chat_left chat_show"){
            setChat_left("take_chat_left chat_hide");
            setChat_right("take_chat_right chat_show");
          }else{
            setChat_left("take_chat_left chat_show");
            setChat_right("take_chat_right chat_hide");
          }

      }
        const sendMessage = async () => {
        if (currentMessage !== "") {
          const messageData = {
            room_id: room,
            sender_id: userId,
            receiver_teacher: teacher,
            receiver_id:receiver,
            content: currentMessage,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
              sender_teacher:"0",
          
          };
          await socket.emit("send_message", messageData);
          //console.log(messageList);
          //console.log(messageData);
          var list=messageList;
          //console.log(list);
          setMessageList([...messageList, messageData]);
         // console.log(messageList);
          setCurrentMessage("");
        }
        var myDiv = document.getElementById("chat_wrap");
        myDiv.scrollTop = myDiv.scrollHeight;
      };

     
      socket.on("receive_message_new", (data) => {
       // console.log("61");
     //   setMessageList((list) => [...list, data]);
      });

    
    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
          let userId = result.id;
            setUserId(userId);
            setUsername(userId);
            var msgData= socket.emit("get_message", {userId});
           // console.log(msgData);
            Api.getGroupMember(userId).then(
                (response)=>{
                  setMemberList(response.data.data);
                }
            );
  
            socket.on("receive_message", (data) => {
                //console.log(data);
                setMessageList(data);
                //console.log(messageList);
              });

              var myDiv = document.getElementById("chat_wrap");
              myDiv.scrollTop = myDiv.scrollHeight;
        });

       
         
       //console.log(msgData);

   
        
    }, [setUserId,socket]);  


      	
		return (
            <>
                <div className="take_admin_main_wrapper">
                <Sidebar_inner />

                <div className="take_top_header">               
                    
                    <h2 className="take_title h2">Dashboard</h2>
                    <p></p>

                    </div>

                <div className="take_body">
                <div className="take_chat_panel">
                    <div className={chat_left}>
                        <div className="take_leftchattitle">
                            <h2>All Conversations</h2>
                            <span><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.2475 0C9.6979 0 12.495 2.73532 12.495 6.10952C12.495 7.70188 11.8721 9.15196 10.8515 10.2394L12.8586 12.1963C13.0468 12.3799 13.0472 12.6778 12.8595 12.8618C12.6889 13.029 12.4216 13.0445 12.2331 12.9081L12.1791 12.8626L10.1483 10.8821C9.07929 11.7187 7.72314 12.219 6.2475 12.219C2.7971 12.219 0 9.48371 0 6.10952C0 2.73532 2.7971 0 6.2475 0ZM6.2475 0.94103C3.32856 0.94103 0.962283 3.25504 0.962283 6.10952C0.962283 8.964 3.32856 11.278 6.2475 11.278C9.16645 11.278 11.5327 8.964 11.5327 6.10952C11.5327 3.25504 9.16645 0.94103 6.2475 0.94103Z" fill="black"/>
                                </svg>
                                </span>
                        </div>

                        <div className="take_conversation_wrapper">
                            <div className="take_chat_title">
                                <span>Chats</span>
                                <span className="take_new_chat take_orange">New Chat</span>
                            </div>
                            <div className="take_chat_boxes">
                            {memberList && memberList.map(function(object, i){
                                return <div onClick={(event) => {
                                    setRoom(object.room_id);
                                    setChatname(object.name);
                                    setReceiver(object.user_id);
                                    setTeacher(object.teacher_id);
                                    joinRoom();
                                    switchClass();
                                    }} className="take_teacherBox take_chat_box online">
                                <div className="take_img">
                                    <img src="assets/images/teacher1.jpg" alt=""/>
                                </div>
                                <div className="take_info">
                                    <h5>{object.name}</h5>
                                    <p>Hey , What’s up how are you doing ...</p>
                                </div>
                                <span className="take_time">23m</span>
                            </div>;
                                })}

                            </div>
                        </div>
                    </div>
                    <div className={chat_right}>
                        <div className="take_rightchat_title">
                            <div className="take_teacherBox">
                            <div onClick={switchClass} className="arrow_chat_show take_img">
                                    <img src="assets/images/svg/back_arrow.svg" alt=""/>
                            </div>
                                <div className="take_img">
                                    <img src="assets/images/c3.png" alt=""/>
                                </div>
                                <div className="take_info">
                                    <h5>{chatname}</h5>
                                    <p>Active 10 Minutes ago</p>
                                </div>
                            </div>

                            <span><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30.8155" height="31" rx="15.4077" fill="#F5F5F5"/>
                                <rect x="9.1123" y="14.0908" width="2.80141" height="2.81818" rx="1.4007" fill="#9B9B9B"/>
                                <rect x="14.1367" y="14.0908" width="2.80141" height="2.81818" rx="1.4007" fill="#9B9B9B"/>
                                <rect x="19.1865" y="14.0908" width="2.80141" height="2.81818" rx="1.4007" fill="#9B9B9B"/>
                                </svg>
                                </span>
                        </div>
                        <div id="chat_wrap" className="take_chat_wrapper">
                        {console.log(messageList)}

                        {messageList  &&  messageList.map((messageContent) => {
                           if (messageContent.room_id === room) {
                            return <div className={userId === messageContent.sender_id ? "take_send" : "take_recieve"}><div><span>{messageContent.content}</span>{messageContent.name && messageContent.name!=0 && <p>{messageContent.name}</p>}{messageContent.teacher && messageContent.teacher!=0 && <p>{messageContent.teacher}</p>}</div>
                            </div>;
                          }
                
                            
                        })}    

                           
                        </div>

                        <div className="take_sendmsg_box">
                            <div className="form-group">
                                <input  
                                 value={currentMessage}
                                onChange={(event) => {
                                    setCurrentMessage(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && sendMessage();
                                }}
          
          type="text" name="" className="form-control" placeholder="Message Here" id=""/>
                                <span className="take_add">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.75C4.67 0.75 0.75 4.67 0.75 9.5C0.75 14.33 4.67 18.25 9.5 18.25C14.33 18.25 18.25 14.33 18.25 9.5C18.25 4.67 14.33 0.75 9.5 0.75ZM13.875 10.375H10.375V13.875H8.625V10.375H5.125V8.625H8.625V5.125H10.375V8.625H13.875V10.375Z" fill="#F68B00"/></svg>
                                </span>
                                <span></span>
                                <span className="take_emoji">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.45833 17.4167C14.2678 17.4167 18.1667 13.5178 18.1667 8.70833C18.1667 3.89885 14.2678 0 9.45833 0C4.64885 0 0.75 3.89885 0.75 8.70833C0.75 13.5178 4.64885 17.4167 9.45833 17.4167Z" fill="#F68B00"/><path d="M5.83741 11.4276C5.85919 11.5142 6.40249 13.5462 9.45863 13.5462C12.5153 13.5462 13.0581 11.5142 13.0798 11.4276C13.1065 11.3227 13.059 11.2138 12.9652 11.1596C12.8708 11.1059 12.7528 11.1219 12.6749 11.1969C12.6657 11.2061 11.7296 12.0948 9.45863 12.0948C7.18769 12.0948 6.25106 11.2061 6.24235 11.1973C6.19591 11.1514 6.13398 11.1272 6.07206 11.1272C6.03142 11.1272 5.99029 11.1374 5.95304 11.1582C5.85822 11.2123 5.81081 11.3222 5.83741 11.4276Z" fill="white"/><path d="M6.55519 8.22447C7.22318 8.22447 7.76468 7.46636 7.76468 6.53118C7.76468 5.596 7.22318 4.83789 6.55519 4.83789C5.88721 4.83789 5.3457 5.596 5.3457 6.53118C5.3457 7.46636 5.88721 8.22447 6.55519 8.22447Z" fill="white"/><path d="M12.3609 8.22447C13.0288 8.22447 13.5704 7.46636 13.5704 6.53118C13.5704 5.596 13.0288 4.83789 12.3609 4.83789C11.6929 4.83789 11.1514 5.596 11.1514 6.53118C11.1514 7.46636 11.6929 8.22447 12.3609 8.22447Z" fill="white"/></svg>
                                </span>
                                <span className="take_gif">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45833 0.583252C1.58388 0.583252 0.875 1.29213 0.875 2.16659V14.8333C0.875 15.7077 1.58388 16.4166 2.45833 16.4166H18.2917C19.1661 16.4166 19.875 15.7077 19.875 14.8333V2.16659C19.875 1.29213 19.1661 0.583252 18.2917 0.583252H2.45833ZM8.60519 8.06292V11.2549C7.92119 11.7014 7.11369 11.9484 6.21119 11.9484C4.13069 11.9484 2.98119 10.5804 2.98119 8.55692C2.98119 6.52392 4.22569 5.14642 6.24919 5.14642C7.05669 5.14642 7.73119 5.33642 8.25369 5.63092L8.03519 7.04642C7.54119 6.73292 6.96169 6.48592 6.28719 6.48592C5.15669 6.48592 4.60569 7.32192 4.60569 8.54742C4.60569 9.78242 5.17569 10.6469 6.30619 10.6469C6.66719 10.6469 6.92369 10.5709 7.18969 10.4379V9.26942H5.96419V8.06292H8.60519ZM10.0172 5.26992H11.6417V11.8249H10.0172V5.26992ZM17.0823 5.26992V6.62842H14.7738V7.96792H16.5978V9.32642H14.7738V11.8249H13.1588V5.26992H17.0823Z" fill="#F68B00"/></svg>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


                </div>
               
        </>
    );
	
}
export default Message;
