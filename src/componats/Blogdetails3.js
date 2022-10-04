import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Helper from '../auth/Helper';
import Api from '../Api';


const Blogdetails3 =(props)=>{

  const [blogsData, setBlogsData] = useState([]);   
    
  const { bid } = props; 
  useEffect(async()=>{
   /* await Helper.getAtuhData().then((result)=>{
      let userId  =1;//= result.id;


       

    });*/

    Api.getBlogsData().then(
        (response)=>{
          setBlogsData(response.data.data);
           
        }
    )
   
    
}, [setBlogsData]);



	return (
			<>
				<Header  />
				
        <div class="take_section take_blog_wrapper ">
            <div class="container">
           
                <div  class="row">
                <div class="col-lg-12">
                        <div class="take_heading_wrapper">
                            <h1>Why Take5 music?</h1>
                        </div>

                        <div class="take_blog_tag">
                            <span class="take_withbg">music</span>
                            <span>6 min read</span>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="take_blog_img">
                                    <img src="assets/images/blog-single.jpg" class="img-fluid" alt=""/>

                                    <div class="take_blogmeta">
                                        <span>
                                                <svg width="19" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.03125 0.125C2.99525 0.125 2.00168 0.53655 1.26911 1.26911C0.53655 2.00168 0.125 2.99525 0.125 4.03125V4.8125H18.875V4.03125C18.875 2.99525 18.4634 2.00168 17.7309 1.26911C16.9983 0.53655 16.0048 0.125 14.9688 0.125H4.03125ZM0.125 14.9688V6.375H18.875V14.9688C18.875 16.0048 18.4634 16.9983 17.7309 17.7309C16.9983 18.4634 16.0048 18.875 14.9688 18.875H4.03125C2.99525 18.875 2.00168 18.4634 1.26911 17.7309C0.53655 16.9983 0.125 16.0048 0.125 14.9688ZM5.20312 11.0625C5.51393 11.0625 5.812 10.939 6.03177 10.7193C6.25153 10.4995 6.375 10.2014 6.375 9.89062C6.375 9.57982 6.25153 9.28175 6.03177 9.06198C5.812 8.84221 5.51393 8.71875 5.20312 8.71875C4.89232 8.71875 4.59425 8.84221 4.37448 9.06198C4.15472 9.28175 4.03125 9.57982 4.03125 9.89062C4.03125 10.2014 4.15472 10.4995 4.37448 10.7193C4.59425 10.939 4.89232 11.0625 5.20312 11.0625ZM6.375 13.7969C6.375 13.4861 6.25153 13.188 6.03177 12.9682C5.812 12.7485 5.51393 12.625 5.20312 12.625C4.89232 12.625 4.59425 12.7485 4.37448 12.9682C4.15472 13.188 4.03125 13.4861 4.03125 13.7969C4.03125 14.1077 4.15472 14.4057 4.37448 14.6255C4.59425 14.8453 4.89232 14.9688 5.20312 14.9688C5.51393 14.9688 5.812 14.8453 6.03177 14.6255C6.25153 14.4057 6.375 14.1077 6.375 13.7969ZM9.5 14.9688C9.8108 14.9688 10.1089 14.8453 10.3286 14.6255C10.5484 14.4057 10.6719 14.1077 10.6719 13.7969C10.6719 13.4861 10.5484 13.188 10.3286 12.9682C10.1089 12.7485 9.8108 12.625 9.5 12.625C9.1892 12.625 8.89113 12.7485 8.67136 12.9682C8.45159 13.188 8.32812 13.4861 8.32812 13.7969C8.32812 14.1077 8.45159 14.4057 8.67136 14.6255C8.89113 14.8453 9.1892 14.9688 9.5 14.9688ZM10.6719 9.89062C10.6719 9.57982 10.5484 9.28175 10.3286 9.06198C10.1089 8.84221 9.8108 8.71875 9.5 8.71875C9.1892 8.71875 8.89113 8.84221 8.67136 9.06198C8.45159 9.28175 8.32812 9.57982 8.32812 9.89062C8.32812 10.2014 8.45159 10.4995 8.67136 10.7193C8.89113 10.939 9.1892 11.0625 9.5 11.0625C9.8108 11.0625 10.1089 10.939 10.3286 10.7193C10.5484 10.4995 10.6719 10.2014 10.6719 9.89062ZM13.7969 11.0625C14.1077 11.0625 14.4057 10.939 14.6255 10.7193C14.8453 10.4995 14.9688 10.2014 14.9688 9.89062C14.9688 9.57982 14.8453 9.28175 14.6255 9.06198C14.4057 8.84221 14.1077 8.71875 13.7969 8.71875C13.4861 8.71875 13.188 8.84221 12.9682 9.06198C12.7485 9.28175 12.625 9.57982 12.625 9.89062C12.625 10.2014 12.7485 10.4995 12.9682 10.7193C13.188 10.939 13.4861 11.0625 13.7969 11.0625Z" fill="#868686"/>
                                                </svg>  
                                                April 07 2022                   
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    <p>Any person at one point in their life must have wanted to learn guitar either to impress someone, to really learn and enjoy playing it, or just to spend their leisure time an interesting way – as a hobby.</p>
                       

                       <h4>If you are looking for interactive and professional tutors to guide you at every stage, then you are at the correct place. Know more why we are the best that you’ll find on the internet here -</h4>
                       <ol>
                           <li>
                             <h6>Well organized classes </h6>
                                <p>We have categorized our online guitar classes into various modules – based on the level of learning for each individual.</p>
                                <p>This is designed in order to give you a hassle-free experience during online guitar classes sessions. Simultaneously we get to observe your learning, assist you one-on-one and provide personal guidance from the beginning. </p>
                           </li>

                           <li>
                             <h6>Top-notch trainers</h6>
                                <p>Join us to learn the A – Z of Guitar. Our professional instructors will make sure your online guitar classes are joyous as well as most insightful sessions that you will ever experience. </p>
                                <p> We provide a certification of completion at the end of the course in order to support and boost your confidence levels and to continue learning through our online guitar classes.</p>
                              
                               </li>


                           <li>
                             <h6>Affordable packages</h6>
                                <p>Since the classes are categorized based on the level of learning, the online guitar classes fees at Take5 Music is modest. Anyone can opt us for our remarkable course structure aligning with our budget-friendly courses.</p>
                               <p>Wait. Still can’t decide? That’s alright. We provide a free demo session to help you right here. Book a session today to discover the best online guitar classes provided by professionals.</p> 
                                <p>Looking forward for all music lovers out there to join our live interactive online guitar classes and get the best of out of it. </p>
                            
                            </li>


                          


                       </ol>

                      

                        <div class="take_related_tags">
                            <h2>Related Tags :</h2>
                            <a href="javascript:;">FRIENDS</a>
                            <a href="javascript:;">PHYSCOLOGY</a>
                            <a href="javascript:;">COMPATIBILITY</a>
                            <a href="javascript:;">PUZZLE</a>
                            <a href="javascript:;">FUN</a>
                            <a href="javascript:;">PLATFORM</a>
                        </div>

                        <div class="take_updated_wrapper">
                            <div class="take_left">
                                <h2>Stay Updated !</h2>
                                <p>Can’t wait to see you all and begin an extraordinary journey together, virtually!</p>

                                <div class="take_newsletter">
                                    <input type="text" name="" placeholder="Enter your Email I’d" class="form-control" id=""/>

                                    <span>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0927 8.83157L1.29393 8.68496" stroke="white" stroke-width="2.11386" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1543 1.771L18.0927 8.83157L11.0321 15.77" stroke="white" stroke-width="2.11386" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </span>
                                </div>
                            </div>
                            <div class="take_right">
                                <img src="assets/images/newsletter.png" class="img-fluid" alt=""/>
                            </div>
                        </div>

                       
                    </div>
                    
                </div>



               






            </div>
        </div>

                
				<Footer/>
		</>
	);
	
}
export default Blogdetails3;