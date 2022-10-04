import React, { useContext, useEffect, useState } from 'react';
import Sidebar_inner from './Sidebar_Inner';
import Api from '../Api';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Helper from '../auth/Helper';
import { authContext } from '../auth/AuthContext';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {RegisterPopup} from "./RegistrationPopup";
import Loader from './Loader';


const Profile = (props) => {




  const alert = useAlert();
  const [userId, setUserId] = useState(0);
  const [profileData, setAllProfileData] = useState(0);
  const {setAuthData} = useContext(authContext);
  const { auth } = useContext(authContext);
  const userdata = auth.data;

  const [isLoading, setLaoding] = useState(false);
  const [image, setImage] = useState('');
  const [imageData, setImageData] = useState('');
  const [imageError, setImageError] = useState('');

  //console.log(userdata);

  
  useEffect(async()=>{
    await Helper.getAtuhData().then((result)=>{
        let user_id  = result.id;
        localStorage.setItem('user_id',user_id);
        setUserId(user_id);   
        setImage(result.img);
           Api.getProfileData(user_id).then(
              (response)=>{
               // console.log(response);
                setAllProfileData(response.data.data);
          
              }
          );

    });
    
}, [setUserId,setImage,setAllProfileData]);
  


  const handleChange = e => {
    //console.log(e.target.files[0]);

    if(e.target.files[0])
    {
        
    var fileInput =
    e.target.files[0];
    
    var filePath = fileInput.name;
    var fileSize = fileInput.size;
    var sizeInMB = (fileSize / (1024*1024)).toFixed(2);
console.log(e.target.files[0]);
    // Allowing file type
    var allowedExtensions =
            /(\.png|\.jpg|\.jpeg)$/i;
    if (!allowedExtensions.exec(filePath)) {
        setImageError('Only png, jpg and jpeg format allowed.');
        fileInput.value = '';
        return false;
    }
    else if (sizeInMB>30) {
      setImageError('File size upto 30MB allowed.');
        fileInput.value = '';
        //console.log(imageError);
        return false;
    }
    else
    {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageData(e.target.files[0]);
    }
    }else{
      setImage(null);
      setImageData('');
      alert.show(imageError, {
        timeout: 3000, // custom timeout just for this one alert
        type: 'error'
      });
    }
  };

  

  const handleUpload = async e => {
    
   
    e.preventDefault();
    let data={userId};
   // console.log(data);
     // return;
     const formData = new FormData();
     formData.append("selectedFile", imageData);
     formData.append("params", JSON.stringify(data));
    // console.log(formData);
    setLaoding(true);
    Api.updateProfileImage(formData).then(
      (response)=>{
        //        console.log(response.data.data);
                if(response.data.success){
                 // console.log(response.data.data);
                  setAuthData(response.data.data);
                  setImage(response.data.data.img);
                   alert.show(response.data.message, {
                       timeout: 2000, // custom timeout just for this one alert
                       type: 'success',
                       onClose: () => {
                        setLaoding(false);
                       } 
                   });
   
                }else{
                 setLaoding(false);
                  // console.log(response.data.message);
                   alert.show(response.data.message, {
                       timeout: 3000, // custom timeout just for this one alert
                       type: 'error'
                       /*onOpen: () => {
                         console.log('hey')
                       }, // callback that will be executed after this alert open
                       onClose: () => {
                         console.log('closed')
                       } */
                   });
   
                }
           }
    );
 
 
 
  };
  

  const deleteImage = (e) => {
    e.preventDefault();
    setImage(userdata.img);
  }
  // ---------------------------------------------------------

  return (
    <>
     {isLoading ?  <Loader/> :null}
      <RegisterPopup />
      <div className="take_admin_main_wrapper">
        <Sidebar_inner />

        <div className="take_top_header">
          <div className="take_topheader_inner">
            <div className="take_logo d-none ">
              <a href="#">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            <span className="take_toggle d-none "><img src="assets/images/toggle.png" alt="" /></span>
            <div className="take_search_wrapper d-none">
              <input type="text" name="" id="" className="form-control" placeholder="Search instruments, teachers" />
              <span><img src="assets/images/svg/search.svg" alt="" /></span>
            </div>
          </div>


        </div>
        <div className="take_body take_profile_wrapper">
          <div className="take_profile">
            <h2>My Profile</h2>
            <i class="far fa-edit" style={{ color: "red" }}></i>

            <div className="take_profile_data">
            

              {image && <img src={image} style={{
                border: " 3px solid #FFFFFF",
                background: "#fff",
                borderRadius: "112px",
                marginBottom: "19px",
              }}
                width="230"
                height="230" alt="" />}
              {!image && <img src={userdata.img} alt="" />}
  


             {(image == userdata.img)&& <div>

                <label htmlFor="upload-img">
               
                <img src="assets/images/image_2022_02_14T10_48_59_662Z.png" style={{ width: "51px",  marginTop: "-97px" ,marginLeft: "164px"  }} />
                </label>
                <input
                  type="file"
                  id="upload-img"
                  style={{ display: "none" }}
                  onChange={handleChange}
                  accept=".jpg, .jpeg, .png"
                />
              </div>}
              {(image != userdata.img) ? (
                <div>
                   <img onClick={deleteImage} src="assets/images/delete_xyz_copy.png" style={{ width: "51px",  marginTop: "-97px",marginLeft: "3px" }} />
                  <img  onClick={handleUpload} src="assets/images/image_2022_02_14T10_48_59_665Z.png" style={{ width: "51px",  marginTop: "-97px" ,marginLeft: "112px"  }} />
                </div>
              ) : null
              }




              <div class="file-upload">


              </div>

              


              <h3> {userdata.name} {userdata.last_name}</h3>
              <p>{userdata.iname}  </p>
          
              <a
                href="#"
                className="take_btn"
                data-toggle="modal"
                data-target="#vaildateId"
              >Edit Profile</a>


            </div>
           
          </div>
          <div className="take_profile_boxes">
            <div className="take_dashboard_box">
              <div className="take_left">
                <span><img src="assets/images/finish-courses.png" alt="" /></span>
                <span className="take_class">Finished Live Classes</span>
              </div>
              <div className="take_right">
                <span className="take_classTotal">{profileData && profileData.completed}</span>
              </div>
            </div> 
            <div className="take_dashboard_box">
              <div className="take_left">
                <span><img src="assets/images/music.png" alt="" /></span>
                <span className="take_class">Upcoming Live Classes</span>
              </div>
              <div className="take_right">
                <span className="take_classTotal">{profileData && profileData.upcoming}</span>
              </div>
            </div>
        
          </div>  
         { profileData && profileData.upcoming >0 && <div className="take_today_class take_upcoming_classes">
            <h2 className="take_dash_title">My Classes</h2>
            <div className="take_upcoming_boxes">
              <div className="take_dashboard_box take_todayclass_box">
                <div>
                  <div className="take_left">
                    <div className="take_img">
                      <img src="assets/images/c3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="take_detail">
                      <h2 className="take_Classname h2">{profileData && profileData.details.classtitle} Class ({ profileData.details.class_days})</h2>

                      <p><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.85106 0.000254581C5.61966 -0.00485318 5.40335 0.122849 5.28765 0.322064C5.16691 0.526388 5.16691 0.781791 5.28765 0.986115C5.40335 1.18533 5.61966 1.31303 5.85106 1.30792H6.49497V2.64624C2.89312 2.98338 0.0559082 6.06355 0.0559082 9.80778C0.0559082 13.7717 3.2352 17 7.13888 17C11.0426 17 14.2218 13.7717 14.2218 9.80778C14.2218 6.06355 11.3846 2.98338 7.78278 2.64624V1.30792H8.42669C8.65809 1.31303 8.87441 1.18533 8.99011 0.986115C9.11084 0.781791 9.11084 0.526388 8.99011 0.322064C8.87441 0.122849 8.65809 -0.00485318 8.42669 0.000254581H5.85106ZM12.2851 2.60535C12.0185 2.61045 11.782 2.7688 11.6864 3.0191C11.5858 3.26429 11.6462 3.54523 11.8323 3.72912L13.2006 5.11852C13.3666 5.2922 13.6031 5.3586 13.8294 5.30241C14.0558 5.24112 14.2319 5.06233 14.2923 4.83247C14.3476 4.60261 14.2822 4.36253 14.1162 4.19907L12.7479 2.80967C12.6221 2.68197 12.4561 2.60535 12.2851 2.60535ZM7.13889 3.92329C10.3484 3.92329 12.934 6.54884 12.934 9.8078C12.934 13.0668 10.3484 15.6923 7.13889 15.6923C3.92942 15.6923 1.34373 13.0668 1.34373 9.8078C1.34373 6.54884 3.92942 3.92329 7.13889 3.92329ZM4.5532 6.52842C4.29162 6.53353 4.05518 6.69188 3.9596 6.94217C3.85899 7.18736 3.91936 7.46831 4.11052 7.6522L6.68614 10.2675C6.84712 10.4412 7.08355 10.5076 7.30993 10.4514C7.5363 10.3901 7.71237 10.2113 7.77273 9.98148C7.82807 9.75162 7.76267 9.51154 7.59163 9.34808L5.01601 6.73274C4.89528 6.60504 4.72927 6.52842 4.5532 6.52842Z" fill="#939D9F" /></svg>
                       { profileData.details.first_class }  To { profileData.details.last_class },   { profileData.details.class_time} 
                      </p>

                      <div className="take_processbar">
                        <span className="take_proc_status" style={{ width: 40 + '%' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>}
        </div>




      </div>

    </>
  );

}
export default Profile;