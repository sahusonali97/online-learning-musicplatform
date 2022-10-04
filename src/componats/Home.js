import React from  'react';
import Header from './Header';
import Footer from './Footer';
import StudentFeedbackSlider from './StudentFeedbackSlider';
import ParentFeedbackSlider  from './ParentFeedbackSlider';
import TeacherFeedbackSlider from './TeacherFeedbackSlider';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import axios from 'axios';


//import '../style.css';

import {
	Link
	
 } from "react-router-dom";
import Api from '../Api';



class Home extends React.Component{

	constructor(){
		super();
		this.state = {
			categoryData : [],
			cartData : [],
			productData : [],

		};
	}

	componentDidMount(){
		//localStorage.removeItem("cartLocalData");
		/*Api.getCategortyItems().then(
			(response)=>{
				this.setState({categoryData:response.data.data});
			}
		);

		Api.getAllProduct().then(
			(response)=>{
				this.setState({productData:response.data.data});
			}
		);*/

        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      
        const getData = async () => {
            const res = await axios.get('https://geolocation-db.com/json/')
            console.log('haresh'+res.data.country_code);
            if(res.data.country_code==='IN'){
               // setIsIndia(0);
                localStorage.setItem('isIndia',0);
            }else{
                localStorage.setItem('isIndia',1);
               // setIsIndia(1);
            }
            
              //setCountryCode(res.data.country_code)
          }
    
        getData();


       /* if(vw < 768){
            summercampModel_mobile();
        }else{
            summercampModel_full();
        }*/

        // summercampModel();


		/*let  cartdata =   JSON.parse(localStorage.getItem('cartLocalData'));
		this.setState({	cartData :cartdata });
		cart_data={this.state.cartData}*/


        function summercampModel(){

          
             confirmAlert({ 
                 customUI: ({ onClose }) => {
                   
                   
                   return ( 



                    <div class="take_offer_wrapper">
                        <div className="take_offer_inner">
                    <div class="d-flex justify-content-between">
                        
                        <div class="take_left">
                           <div class="take_logo">
                               <a href="#"><img src="assets/images/logo_pop.png"  alt=""/></a>
                           </div>
                            <img src="assets/images/left_img.png"  alt=""/>
                       </div>
                       <div class="take_right">
                            <h2><span>Free</span> 5-day<br/>
                                Music Summer<br/>
                                Camp
                                </h2>
                            <h4>Monday - Friday, April 18th  to 22nd</h4>
            
                            <div class="take_day_wrap">
                                <span class="take_day_box">
                                    <span><b>Day 1</b></span>
                                    <span>Basics of Music Education</span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 2</b></span>
                                    <span>
                                        Types of
                                        Instruments</span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 3</b></span>
                                    <span>Pitch & Rhythm </span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 5</b></span>
                                    <span>Summary &
                                        Certificate Issue</span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 4</b></span>
                                    <span>Hit Songs</span>
                                </span>
                            </div>
            
                            <button class="take_btn_regi">Register now</button>     
                       </div>                       
                    </div>
                    <p>No Instruments Required</p>
                    </div>
            
                </div>


                         
             
          
     
     
                   );
                 }
               });
           
     
         } 



         function summercampModel_full(){

          
            confirmAlert({ 
                customUI: ({ onClose }) => {
                  
                  
                  return (           
                   <> 
                    <div class="take_offer_wrapper">
                        <div className="take_offer_inner">
                    <div class="d-flex justify-content-between">
                        
                        <div class="take_left offer-left">
                           <div class="take_logo">
                               <a href="#"><img src="assets/images/logo_pop.png"  alt=""/></a>
                               <button class="desktop_close_button" onClick={onClose}>X</button>
                           </div>
                            <img src="assets/images/left_img.png"  alt=""/>
                       </div>
                       <div class="take_right">
                           <div class="take_day_wrap_header">
                            <h2><span>Free</span> 5-day<br/>
                                Music Summer<br/>
                                Camp
                                </h2>
                            <h4>Monday - Friday, April 18th  to 22nd</h4>
            </div>
                            <div class="take_day_wrap">
                                <span class="take_day_box">
                                    <span><b>Day 1</b></span>
                                    <span>Basics of Music Education</span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 2</b></span>
                                    <span>
                                        Types of
                                        Instruments</span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 3</b></span>
                                    <span>Pitch & Rhythm </span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 5</b></span>
                                    <span>Summary &
                                        Certificate Issue</span>
                                </span>
                                <span class="take_day_box">
                                    <span><b>Day 4</b></span>
                                    <span>Hit Songs</span>
                                </span>
                            </div>
            
                            <button class="take_btn_regi"><a href="/summercamp2022">Register now</a></button>     
                       </div>                       
                    </div>
                    <p>No Instruments Required</p>
                    </div>
            
                </div>


                    </>
                                    
                  );
                }
              });
          
    
        } 

        function summercampModel_mobile(){

          
             confirmAlert({ 
                 customUI: ({ onClose }) => {
                   
                   
                   return (           
                    <> 
                    <div id="react-confirm-alert">
                     <div class="react-confirm-alert-overlay undefined">
                     <div class="react-confirm-alert">
                     <div class="take_offer_mobile">
                     <div class="take_offer_summer">
                     <div class="align-items-center">
                     <div class="take_left_mobile">
                     <div class="take_logo take_logo_mobile">
                     <a href="#"><img src="assets/images/logo_pop.png" alt=""/></a>
                     <button class="mobile_close_button" onClick={onClose}>X</button>
                     </div>
                     <div class="take_mobile_right">
                     <div class="take_mobile_wrap_header"><h2><span>Free</span> 5-day Music <br/>Summer Camp</h2><h4 class="m-auto text-sm">Monday - Friday, April 18th  to 22nd</h4></div><p class="font-weight-bold text-dark lower-mobile-text">No Instruments Required</p>
                     </div>
                     </div>
                     </div>
                     <div class="row">
                      <div class="left_img_mobile">
                     <img src="assets/images/left_img_mobile.png" alt=""/>
                     </div>
                     <div class="take_mobile_wrap ">
                     <div class="button_mobile_1"><span class="take_day_box_mobile"><span><b>Day 1</b></span><span>Basics of Music Education</span></span></div>
                     <div class="button_mobile_2">
                     <span class="take_day_box_mobile"><span><b>Day 2</b></span><span>Types of Instruments</span></span>
                     </div> <div class="button_mobile_3"><span class="take_day_box_mobile"><span><b>Day 3</b></span><span>Pitch &amp; Rhythm </span></span> </div><div class="button_mobile_5"><span class="take_day_box_mobile"><span><b>Day 4</b></span><span>Hit Songs</span></span> </div> <div class="button_mobile_4"><span class="take_day_box_mobile"><span><b>Day 5</b></span><span>Summary &amp; Certificate Issue</span></span> </div> </div>
                    
                     </div>
                     </div><button class="take_btn_regi_mobile"><a href="/summercamp2022" >Register now</a></button></div></div>
                     </div></div><div id="__react-alert__"></div></>
                                     
                   );
                 }
               });
           
     
         } 
       




	}	




        




	render(){
		return (
		<>		

		<div className="take_main_wrapper">
		<Header  />

		<div className="take_banner_wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="take_banner_video">

                        <iframe className="take_banner_video" src="https://www.youtube.com/embed/dGruF8_2TUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <span className="d-none"><img src="assets/images/svg/play.svg" alt=""/></span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="take_banner_detail">
                            <p className="take_subheading text-uppercase">THE FINEST ONLINE MUSIC LEARNING PLATFORM</p>
                            <h1>Learning Music <span className="take_orange">Made Easy</span>  and Fun Only at Take5 Music!</h1>
                            <p>Take5 Music offers various interactive live music classes. Your first class with us will tell you everything! Book a free demo today!

                            </p>

                            <div className="take_btn_wrapper">
                                <a target="_new" href="/register" className="take_btn with_arrow take_enroll_btn">Book a free trial
                                    <span><img className="arrow1" src="assets/images/svg/btn_arrow1.svg" alt=""/><img  className="arrow2" src="assets/images/svg/btn_arrow2.svg" alt=""/></span>
                                </a>
                                <a href="javascript:;" className="take_btn with_border d-none">Book a free trial
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span className="take_banner_wave"><img src="assets/images/wave_white.png" alt=""/></span>
        </div>

        <div className="take_section take_instrumentcourses_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="take_heading_wrapper text-center">
                            <h2 className="h2">Wondering how to learn music online from professionals?</h2>
                            <p>With our interactive Online LIVE lessons, you can learn your favorite instrument from professionals! From Guitar and Piano classes to Carnatic vocal and Hindusthani vocal classes, we connect you with music in an artistic way.</p>
                            <p>Explore our different instrumental courses and choose what fascinates you!</p>
                        </div>


                        <ul class="take_instrument_new">
                        <li>
                                <span class="take_course">
                                    <span class="take_icon"><img src="assets/images/c1.png" alt=""/></span>

                                    Carnatic Vocals
                                </span>
                                <span class="take_course tc2">
                                    <span class="take_icon"><img src="assets/images/c2.png" alt=""/></span>

                                    Guitar
                                </span>
                                <span class="take_course tc3">
                                    <span class="take_icon"><img src="assets/images/c3.png" alt="c3.png"/></span>

                                    Violin
                                </span>
                                <span class="take_course tc4">
                                    <span class="take_icon"><img src="assets/images/c4.png" alt=""/></span>

                                    Flute
                                </span>
                                <span class="take_course tc5">
                                    <span class="take_icon"><img src="assets/images/c7.png" alt=""/></span>

                                    Drums
                                </span>
                            </li>
                            <li>
                                <span class="take_course tc6">
                                    <span class="take_icon"><img src="assets/images/c6.png" alt=""/></span>

                                    Piano
                                </span>
                                <span class="take_course tc7">
                                    <span class="take_icon"><img src="assets/images/c5.png" alt=""/></span>

                                    Western Vocals
                                </span>
                                <span class="take_course tc8">
                                    <span class="take_icon"><img src="assets/images/c8.png" alt=""/></span>

                                    Hindustani Vocals
                                </span>
                                <span class="take_course tc9">
                                    <span class="take_icon"><img src="assets/images/c9.png" alt=""/></span>

                                    Tabla
                                </span>
                                <span class="take_course tc10">
                                    <span class="take_icon"><img width="83" height="104" src="assets/images/sarangi1.png" alt=""/></span>

                                    Sarangi
                                </span>
                            </li>
                        </ul>
                        <div class="text-center">
                            <a target="_new" href="/login" class="take_btn with_border">Login Now
                            </a>
                        </div> 

                       
                    </div>
                </div>
            </div>
        </div>

        <div class="take_section take_process_wrapper">
            <div class="container">
                <div  class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="take_heading_wrapper text-center">
                            <h2 className="h2"><span class="take_orange">Process at </span> Take5Music</h2>
                            <p>Our Psychological Model is accurate, verified and tested over thousands of individuals.<br/>The most meaningful social media platform, ever.</p>
                        </div>

                        <div class="take_process_inner">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="take_process_box step1">
                                        <span class="take_icon">
                                            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49 7H21C20.0717 7 19.1815 7.36875 18.5251 8.02513C17.8687 8.6815 17.5 9.57174 17.5 10.5V22.75H32.375L26.46 16.9925C26.1733 16.6577 26.0235 16.2271 26.0405 15.7867C26.0575 15.3462 26.2401 14.9284 26.5518 14.6168C26.8634 14.3051 27.2812 14.1225 27.7217 14.1055C28.1621 14.0885 28.5927 14.2383 28.9275 14.525L39.06 24.6575L28.9275 34.79C28.5927 35.0767 28.1621 35.2265 27.7217 35.2095C27.2812 35.1925 26.8634 35.0099 26.5518 34.6982C26.2401 34.3866 26.0575 33.9688 26.0405 33.5283C26.0235 33.0879 26.1733 32.6573 26.46 32.3225L32.375 26.25H17.5V52.5C17.5 53.4283 17.8687 54.3185 18.5251 54.9749C19.1815 55.6313 20.0717 56 21 56H49C49.9283 56 50.8185 55.6313 51.4749 54.9749C52.1313 54.3185 52.5 53.4283 52.5 52.5V10.5C52.5 9.57174 52.1313 8.6815 51.4749 8.02513C50.8185 7.36875 49.9283 7 49 7Z" fill="#FF697B"/><path d="M17.5 22.75H7C6.53587 22.75 6.09075 22.9344 5.76256 23.2626C5.43437 23.5908 5.25 24.0359 5.25 24.5C5.25 24.9641 5.43437 25.4092 5.76256 25.7374C6.09075 26.0656 6.53587 26.25 7 26.25H17.5V22.75Z" fill="#FF697B"/></svg>
                                        </span>
                                        <h4>Login</h4>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="take_process_box step2">
                                        <span class="take_icon">
                                            <svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.7906 0H6.25C4.5924 0 3.00268 0.65848 1.83058 1.83058C0.65848 3.00269 0 4.5924 0 6.25V43.75C0 45.4076 0.65848 46.9973 1.83058 48.1694C3.00268 49.3415 4.5924 50 6.25 50H31.25C32.9076 50 34.4973 49.3415 35.6694 48.1694C36.8415 46.9973 37.5 45.4076 37.5 43.75V14.7094C37.4998 13.8806 37.1705 13.0859 36.5844 12.5L25 0.915625C24.4141 0.329533 23.6194 0.000176992 22.7906 0V0ZM23.4375 10.9375V4.6875L32.8125 14.0625H26.5625C25.7337 14.0625 24.9388 13.7333 24.3528 13.1472C23.7667 12.5612 23.4375 11.7663 23.4375 10.9375ZM28.125 20.75V26.2188L21.875 27.7813V39.0625C21.875 40.6094 20.9344 41.8219 19.8063 42.5719C18.6688 43.3312 17.1844 43.75 15.625 43.75C14.0625 43.75 12.5813 43.3312 11.4438 42.5719C10.3188 41.8219 9.375 40.6094 9.375 39.0625C9.375 37.5156 10.3156 36.3031 11.4438 35.5531C12.5813 34.7938 14.0656 34.375 15.625 34.375C16.7375 34.375 17.8125 34.5875 18.75 34.9875V21.5312C18.75 20.8346 18.9828 20.1579 19.4114 19.6087C19.84 19.0595 20.4399 18.6693 21.1156 18.5L24.2406 17.7188C24.7014 17.6033 25.1824 17.5945 25.6472 17.6928C26.1119 17.7912 26.5481 17.9942 26.9225 18.2865C27.297 18.5787 27.6 18.9525 27.8083 19.3793C28.0167 19.8062 28.125 20.275 28.125 20.75Z" fill="#00A693"/></svg>
                                        </span>
                                        <h4>Select Instrument</h4>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="take_process_box step3">
                                        <span class="take_icon">
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9775 0.5C10.5575 0.5 0.5 10.58 0.5 23C0.5 35.42 10.5575 45.5 22.9775 45.5C35.42 45.5 45.5 35.42 45.5 23C45.5 10.58 35.42 0.5 22.9775 0.5ZM32 32C31.7919 32.2086 31.5446 32.3741 31.2724 32.487C31.0002 32.5999 30.7084 32.658 30.4138 32.658C30.1191 32.658 29.8273 32.5999 29.5551 32.487C29.2829 32.3741 29.0357 32.2086 28.8275 32L21.425 24.5975C21.2124 24.3891 21.0433 24.1406 20.9274 23.8664C20.8115 23.5922 20.7512 23.2977 20.75 23V14C20.75 12.7625 21.7625 11.75 23 11.75C24.2375 11.75 25.25 12.7625 25.25 14V22.0775L32 28.8275C32.8775 29.705 32.8775 31.1225 32 32Z" fill="#F6C000"/></svg>
                                        </span>
                                        <h4>Select Class Time</h4>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="row flex-column-reverse flex-md-row">
                                <div class="col-lg-4 col-md-4 col-sm-12 ">
                                    <div class="take_finish_box">
                                        <div class="take_finishbox_inner">
                                            <span class="take_icon">
                                                <svg width="60" height="37" viewBox="0 0 60 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.6081 0.873712C42.286 0.629143 41.9166 0.448171 41.5213 0.341241C41.1259 0.234311 40.7123 0.203541 40.3045 0.250704C39.8966 0.297867 39.5025 0.422031 39.145 0.61603C38.7874 0.810029 38.4735 1.07002 38.2212 1.38101L16.4423 28.2377L5.77068 15.7643C5.52037 15.4447 5.20566 15.1766 4.84524 14.9759C4.48482 14.7752 4.08603 14.646 3.67256 14.596C3.25908 14.546 2.83934 14.5761 2.43824 14.6847C2.03715 14.7932 1.66288 14.9779 1.33765 15.2279C1.01243 15.4778 0.742868 15.7879 0.544981 16.1397C0.347095 16.4915 0.224912 16.8778 0.185687 17.2757C0.146461 17.6737 0.190993 18.0751 0.316636 18.4562C0.44228 18.8374 0.646476 19.1904 0.917103 19.4944L13.8911 34.9519C14.1839 35.2981 14.5539 35.577 14.9739 35.7681C15.3938 35.9591 15.8531 36.0575 16.3179 36.056C16.8113 36.0771 17.3028 35.9853 17.7518 35.7881C18.2009 35.591 18.5945 35.2941 18.9002 34.9221L43.2615 5.08126C43.5099 4.76503 43.6901 4.40455 43.7918 4.02083C43.8935 3.63711 43.9145 3.23782 43.8537 2.84622C43.7929 2.45462 43.6515 2.07855 43.4376 1.7399C43.2238 1.40125 42.9418 1.1068 42.6081 0.873712ZM58.1645 0.873712C57.8424 0.629143 57.473 0.448171 57.0776 0.341241C56.6822 0.234311 56.2687 0.203541 55.8608 0.250704C55.453 0.297867 55.0589 0.422031 54.7013 0.61603C54.3438 0.810029 54.0298 1.07002 53.7776 1.38101L31.9987 28.2377L30.1008 25.9997L26.1806 30.8339L29.603 34.9221C29.8958 35.2683 30.2658 35.5472 30.6858 35.7382C31.1057 35.9293 31.565 36.0277 32.0298 36.0262C32.4971 36.0241 32.958 35.9211 33.3781 35.7248C33.7982 35.5285 34.1668 35.2439 34.4566 34.8922L58.8178 5.05142C59.0613 4.73611 59.2376 4.37783 59.3366 3.9971C59.4356 3.61636 59.4553 3.22064 59.3946 2.83259C59.3339 2.44455 59.194 2.07179 58.9829 1.73566C58.7718 1.39952 58.4937 1.10662 58.1645 0.873712Z" fill="white"/><path d="M17.996 21.3148L22.0095 16.4806L21.3873 15.7645C21.1416 15.4381 20.8297 15.1627 20.4702 14.955C20.1107 14.7472 19.7111 14.6114 19.2955 14.5556C18.8798 14.4999 18.4567 14.5253 18.0516 14.6305C17.6465 14.7357 17.2677 14.9184 16.9382 15.1676C16.6185 15.4139 16.3528 15.7183 16.1563 16.0634C15.9597 16.4084 15.8362 16.7874 15.7928 17.1784C15.7495 17.5694 15.7871 17.9647 15.9036 18.3417C16.02 18.7187 16.213 19.07 16.4715 19.3752L17.996 21.3148Z" fill="white"/></svg>
                                            </span>
                                            <h4>Finish</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="take_process_box step5 arrow">
                                        <span class="take_icon">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 40.8C0 44.88 3.12 48 7.2 48H40.8C44.88 48 48 44.88 48 40.8V21.6H0V40.8ZM40.8 4.8H36V2.4C36 0.96 35.04 0 33.6 0C32.16 0 31.2 0.96 31.2 2.4V4.8H16.8V2.4C16.8 0.96 15.84 0 14.4 0C12.96 0 12 0.96 12 2.4V4.8H7.2C3.12 4.8 0 7.92 0 12V16.8H48V12C48 7.92 44.88 4.8 40.8 4.8Z" fill="#B5C312"/></svg>
                                        </span>
                                        <h4>Select Course Duration</h4>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="take_process_box step4">
                                        <span class="take_icon">
                                           <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.97578 0.455078C3.83535 0.455078 2.74163 0.908113 1.93522 1.71452C1.12882 2.52093 0.675781 3.61465 0.675781 4.75508V16.2217C0.675781 17.3622 1.12882 18.4559 1.93522 19.2623C2.74163 20.0687 3.83535 20.5217 4.97578 20.5217H30.7758C31.9162 20.5217 33.0099 20.0687 33.8163 19.2623C34.6227 18.4559 35.0758 17.3622 35.0758 16.2217V4.75508C35.0758 3.61465 34.6227 2.52093 33.8163 1.71452C33.0099 0.908113 31.9162 0.455078 30.7758 0.455078H4.97578ZM4.97578 23.3884C3.83535 23.3884 2.74163 23.8414 1.93522 24.6479C1.12882 25.4543 0.675781 26.548 0.675781 27.6884V39.1551C0.675781 40.2955 1.12882 41.3892 1.93522 42.1956C2.74163 43.002 3.83535 43.4551 4.97578 43.4551H30.7758C31.9162 43.4551 33.0099 43.002 33.8163 42.1956C34.6227 41.3892 35.0758 40.2955 35.0758 39.1551V27.6884C35.0758 26.548 34.6227 25.4543 33.8163 24.6479C33.0099 23.8414 31.9162 23.3884 30.7758 23.3884H4.97578ZM43.6758 27.5078C42.8285 27.7248 41.9429 27.7454 41.0865 27.5681C40.2301 27.3907 39.4256 27.02 38.7342 26.4844C38.0429 25.9487 37.483 25.2622 37.0974 24.4773C36.7118 23.6923 36.5106 22.8296 36.5091 21.9551C36.5088 20.6838 36.931 19.4484 37.7094 18.4433C38.4878 17.4381 39.5782 16.7202 40.8091 16.4023C41.7493 16.1602 42.7355 16.1602 43.6758 16.4023C44.9077 16.7191 45.9994 17.4366 46.7789 18.4418C47.5584 19.4471 47.9814 20.683 47.9814 21.9551C47.9814 23.2271 47.5584 24.4631 46.7789 25.4683C45.9994 26.4736 44.9077 27.1911 43.6758 27.5078ZM42.2424 0.455078C42.6226 0.455078 42.9871 0.60609 43.2559 0.874892C43.5247 1.14369 43.6758 1.50827 43.6758 1.88841V13.4726C42.7268 13.3133 41.758 13.3133 40.8091 13.4726V1.88841C40.8091 1.50827 40.9601 1.14369 41.2289 0.874892C41.4977 0.60609 41.8623 0.455078 42.2424 0.455078ZM42.2424 30.5551C41.7551 30.5551 41.2764 30.5149 40.8091 30.4375V42.0217C40.8091 42.4019 40.9601 42.7665 41.2289 43.0353C41.4977 43.3041 41.8623 43.4551 42.2424 43.4551C42.6226 43.4551 42.9871 43.3041 43.2559 43.0353C43.5247 42.7665 43.6758 42.4019 43.6758 42.0217V30.4375C43.2085 30.5149 42.7298 30.5551 42.2424 30.5551Z" fill="#2EC5CE"/></svg>
                                        </span>
                                        <h4>Book a Free Trial</h4>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="take_section take_teacher_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12">
                        <div class="take_heading_wrapper text-left">
                            <img src="assets/images/wave.png" alt=""/>
                            <h2 className="h2"><span class="take_orange">Learn from experienced Musicians!</span></h2>
                            <p>At Take5 Music, you get a chance to learn music from talented musicians. Whether you’re looking for violin classes or western vocal classes, we have it all.</p>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div class="take_teacher_box text-center">
                                    <div class="take_teacherimg">
                                        <img src="assets/images/teacher1.jpg" class="img-fluid" alt=""/>
                                        <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                    </div>
                                    <h3>Swapnika</h3>
                                    <p>Vocals</p>
                                    <a target="_new" href="/register" class="take_btn">Book a free trial</a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div class="take_teacher_box text-center">
                                    <div class="take_teacherimg">
                                        <img src="assets/images/teacher2.jpg" class="img-fluid" alt=""/>
                                        <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                    </div>
                                    <h3>Vikram</h3>
                                    <p>Violin</p>
                                    <a target="_new" href="/register" class="take_btn">Book a free trial</a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div class="take_teacher_box text-center">
                                    <div class="take_teacherimg">
                                        <img src="assets/images/teacher3.jpg" class="img-fluid" alt=""/>
                                        <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                    </div>
                                    <h3>Deepesh</h3>
                                    <p>Tabla</p>
                                    <a target="_new" href="/register" class="take_btn">Book a free trial</a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <div class="take_teacher_box text-center">
                                    <div class="take_teacherimg">
                                        <img src="assets/images/teacher4.jpg" class="img-fluid" alt=""/>
                                        <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                    </div>
                                    <h3>Sarah</h3>
                                    <p>Keyboard</p>
                                    <a target="_new"  href="/register" class="take_btn">Book a free trial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="take_section take_features_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="take_heading_wrapper text-center">
                            <h2 className="h2">The Take5 Music Advantage!</h2>
                            <p>We are with you from your first chord to your first concert!</p>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div className="take_feature_box f1">
                                    <img src="assets/images/f1.png" alt=""/>
                                    <h3>Easy on the Pocket Plans</h3>
                                    <p>Take5 Music offers customized music learning plans at the most affordable fees. We make sure that every music aspirant gets access to our live classes.</p>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div className="take_feature_box f2">
                                    <img src="assets/images/f2.png" alt=""/>
                                    <h3>A Free Trial Session</h3>
                                    <p>Pay after you trust us! We provide a demo class where you get a chance to learn about us and know how promising our live music classes are.</p>
                                  
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div className="take_feature_box f3">
                                    <img src="assets/images/f3.png" alt=""/>
                                    <h3>Inbuilt Video Call Interactive Platform</h3>
                                    <p>With our exclusive inbuilt video call and chat feature, we offer live group and 1:1 music classes. An intake of no more than 5 learners in a batch is ensured for smooth learning.</p>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div className="take_feature_box f4">
                                    <img src="assets/images/f6.png" alt=""/>
                                    <h3>Ideal Virtual Technology</h3>
                                    <p>Take5’s online learning platform uses cutting edge technology where tutors are trained for online sessions, who make the learning experience simple by breaking down the lessons per students' pace of learning.</p>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div className="take_feature_box f5">
                                    <img src="assets/images/f4.png" alt=""/>
                                    <h3>Multiple Instrument Courses</h3>
                                    <p>We offer various instrument courses - Guitar classes, Piano classes, Carnatic Vocal classes, Western Vocal classes, Violin classes, Hindusthani Vocal classes, Drums classes, Flute classes and Tabla classes.</p>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                <div className="take_feature_box f6">
                                    <img src="assets/images/f5.png" alt=""/>
                                    <h3>On-Call Support</h3>
                                    <p>Have queries about how to start? No worries. Our team is available round the clock to address all your concerns. We are just a click away.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="take_section take_future_wrapper">
            <div className="container-fluid">
                <div className="row"> 
                    <div className="col-lg-12">
                        <div className="take_future_inner">
                            <div className="take_heading_wrapper text-center">
                                <h2 className="take_white h2">We are the future of online music learning</h2>
                                <p className="take_white">Learn Music through Interactive Live Classes by Experienced Tutors!</p>
                            </div>


                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                    <div className="take_future_box text-center">
                                        <h2 className="h2"><span className="take_countto" data-to="100" data-speed="1500">100</span> +</h2>
                                        <h5>100+ Tutors</h5>
                                        <p>Our tutors are precisely trained to make online learning simple and interactive.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                    <div className="take_future_box text-center">
                                        <h2 className="h2"><span className="take_countto" data-to="10" data-speed="1500">10</span></h2>
                                        <h5>10 Instruments</h5>
                                        <p>At Take5 Music, you master the instrument learned from our outstanding professionals.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="take_future_box text-center">
                                        <h2 className="h2"><span className="take_countto" data-to="10" data-speed="1500">10</span>K+</h2>
                                        <h5>10K+ Successful Classes</h5>
                                        <p>We are transforming the way of online music learning and ‘10K+ classes” are the proof!.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="take_section take_banners">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="take_banner_img">
                            <img src="assets/images/banner_img.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="take_detail">
                            <img src="assets/images/wave.png" alt=""/>
                            <h2 className="h2">We have online music classes for all ages!</h2>
                            <p>The professionals at Take5 Music make learning fun! No matter whether the learner is a 6-year-old kid or a 60-year-old gentleman. The professionals at Take5 Music teach even the most complex instrumental lessons in an easy way!</p>
                            <Link target="_new" to="/register" className="take_btn"> Join Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <span className="take_shape"><img src="assets/images/circle.png" alt=""/></span>
        </div>

        <div className="take_section take_testimonial_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="take_heading_wrapper text-center">
                             <span class="take_icon"><svg width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.312 36.067C24.014 37.9483 23.5373 39.7413 22.8818 41.4462C22.2264 43.0923 21.4219 44.562 20.4685 45.8554C19.5151 47.1487 18.4723 48.1775 17.3401 48.9418C16.2676 49.6473 15.1652 50 14.033 50C11.8878 50 9.68307 49.6767 7.41872 49.03C5.21396 48.3833 3.48591 47.2957 2.23455 45.7672C1.87703 45.2381 1.5195 44.6208 1.16197 43.9153C0.80444 43.2099 0.536293 42.3574 0.357529 41.358C0.178764 40.3586 0.0595881 39.1534 0 37.7425C0 36.3316 0.14897 34.6855 0.446911 32.8042C0.80444 30.0999 1.37053 27.4838 2.14517 24.9559C2.91982 22.428 4.11158 19.8413 5.72046 17.1958C7.38893 14.5503 9.56389 11.846 12.2454 9.08289C14.9864 6.26102 18.4723 3.23339 22.7031 0L27.351 6.43739C22.1072 10.3175 18.3531 13.7566 16.0888 16.7549C13.884 19.6943 12.6327 22.281 12.3347 24.515C12.2156 25.5732 12.5433 26.3962 13.3179 26.9841C14.0926 27.572 15.1056 28.0423 16.3569 28.3951C18.9788 29.0417 21.0048 30.0705 22.4349 31.4815C23.9246 32.8336 24.5503 34.3621 24.312 36.067ZM55.5957 36.067C55.2978 37.9483 54.8211 39.7413 54.1656 41.4462C53.5101 43.0923 52.7057 44.562 51.7523 45.8554C50.7989 47.1487 49.7561 48.1775 48.6239 48.9418C47.5513 49.6473 46.4489 50 45.3168 50C43.1716 50 40.9668 49.6767 38.7025 49.03C36.4977 48.3833 34.7697 47.2957 33.5183 45.7672C33.1608 45.2381 32.8033 44.6208 32.4457 43.9153C32.0882 43.2099 31.8201 42.3574 31.6413 41.358C31.4625 40.3586 31.3434 39.1534 31.2838 37.7425C31.2838 36.3316 31.4327 34.6855 31.7307 32.8042C32.0882 30.0999 32.6543 27.4838 33.4289 24.9559C34.2036 22.428 35.3953 19.8413 37.0042 17.1958C38.6727 14.5503 40.8477 11.846 43.5291 9.08289C46.2702 6.26102 49.7561 3.23339 53.9868 0L58.6347 6.43739C53.391 10.3175 49.6369 13.7566 47.3726 16.7549C45.1678 19.6943 43.9165 22.281 43.6185 24.515C43.4993 25.5732 43.8271 26.3962 44.6017 26.9841C45.3764 27.572 46.3894 28.0423 47.6407 28.3951C50.2626 29.0417 52.2886 30.0705 53.7187 31.4815C55.2084 32.8336 55.8341 34.3621 55.5957 36.067Z" fill="#F68B00"/></svg></span>
                            <h2 className="h2"><span className="take_orange">User</span> Testimonials</h2>
                            <p>Here’s what our learners are saying about us!</p>
                        </div>

                        <div class="row justify-content-center desktop-slider">


                        <div class="col-lg-12 col-md-12 ">
                                <div class="take_tesimonial_section">
                                    <h3>Learners’ Applaud</h3>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <div class="take_testdetail">
                                                <p>It has been a month for me, since I started my learning with TAKE5. I would say this is the best place to learn music and sharpen your passion. Thank you for re-igniting the passion for Carnatic music among today's generation and all your efforts to keep the art alive is much appreciated.</p>
        
                                                <a href="#">Amit Kumar, Violinist</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <div class="take_testdetail">
                                                <p>I joined TAKE5 for vocals. Their mentoring base is vast with instructors of 15 to 20 years experience in their art form. Their individual attention to every student and reasonable price is quite a plus. No doubts, this is the best choice to kindle my passion for Singing.</p>
        
                                                <a href="#"> Priyanka Nahata, Vocalist</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="take_testdetail">
                                                <p>Great place great folks. Heard about this place from friends. They are committed to their vision and are very genuine with their approach. One of the best schools in Himayathnagar to learn music.</p>
        
                                                <a href="#"> Venkat Reddy, Tabla</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="take_tesimonial_section">
                                    <h3>Parents/Guardians’ Applaud</h3>

                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <div class="take_testdetail">
                                                <p>Best music school in Hyderabad. Good team of teachers for every instrument tabla, drums, vocals, Guitar, keyboard. Best part is they offer every day class to students, no other institute offering everyday classes to students.</p>
        
                                                <a href="#"> Beagari Jagan</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <div class="take_testdetail">
                                                <p>My kids are learning and having a great time @Take5. Good thing is they have different trainers for different instruments. Good Ambience and Service. They understand the child's pace and give them space and time to involve themselves into the practice.</p>
        
                                                <a href="#">Hema Devi</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="take_testdetail">
                                                <p>Best Music school in Hyderabad and way of teaching is very good ,awesome teacher. It is the best place for music learn for kids and adults.</p>
        
                                                <a href="#"> Prerana Adarsh</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                        <div class="row justify-content-center mobile-slider">
                           <div class="col-lg-4 col-md-4 col-sm-6">
                            <StudentFeedbackSlider/>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">                                   
                                    <ParentFeedbackSlider/>                              
                            </div>
                            
                        </div>    
                        


                    </div>
                </div>
            </div>
        </div>

        


        <div className="take_section take_certificate_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="take_heading_wrapper">
                            <h2 className="h2">Prepare confidently for <span className="take_orange">global certification courses</span></h2>
                            <p>We prepare you for various certification courses like Trinity, ABRSM and Rockschool</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="take_certi_images text-center">
                            <img src="assets/images/certi1.png" className="img-fluid take_c1" alt=""/>
                            <img src="assets/images/certi2.png" alt="" className="img-fluid take_c2"/>
                            <img src="assets/images/certi5.png" alt="" className="img-fluid take_c3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="take_section take_banners">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="take_banner_img">
                            <img src="assets/images/group24792.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="take_detail">
                            <img src="assets/images/wave.png" alt=""/>
                            <h2 className="h2">Are you a music teacher? Join the Take5 Music Family!</h2>
                            <p>At Take5 Music, we make sure that you’re paid more than any other platform. Also, connect with your potential students from all over the World today!.</p>
                            <Link target="_new" to="/registerTeacher" className="take_btn"> Join Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <span className="take_shape_left"><img src="assets/images/circle1.png" alt=""/></span>
        </div>

        <div className="take_section take_blog_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="take_heading_wrapper text-center">
                            
                            <h2 className="h2">Blog</h2>
                            <p>Our Psychological Model is accurate, verified and tested over thousands of individuals.<br/>The most meaningful social media platform, ever.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="take_blog">
                                    <div className="take_blog_img">
                                        <img src="assets/images/blogs/blog1.jpg"  className="img-fluid" alt=""/>
                                        <span><img src="assets/images/svg/reply.svg" alt=""/></span>
                                    </div>
                                    <p>Introducing our world of Music to you through online</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="take_blog">
                                    <div className="take_blog_img">
                                        <img src="assets/images/blogs/blog2.jpg"  className="img-fluid" alt=""/>
                                        <span><img src="assets/images/svg/reply.svg" alt=""/></span>
                                    </div>
                                    <p>Why Choose Guitar</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="take_blog">
                                    <div className="take_blog_img">
                                        <img src="assets/images/blogs/blog3.jpg"  className="img-fluid" alt=""/>
                                        <span><img src="assets/images/svg/reply.svg" alt=""/></span>
                                    </div>
                                    <p>The Effect of Music on Intellectual Capacity</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a target="_new" href="/blog" className="take_btn with_border">Read More Blog</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

	
	  <Footer/>
	  </div>
	  </>
		);
	}
	
}

export default Home;