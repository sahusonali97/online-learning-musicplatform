import React, { useContext, useEffect,useState } from 'react';

import CheckoutForm from "./CheckoutForm";
import Header_Inner from './Header_Inner';
import Footer from './Footer';
import Sidebar_inner from './Sidebar_Inner';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import axios from 'axios';
import moment from "moment";
import AlertMessage from './AlertMessage';
import { useParams } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";







import { authContext } from '../auth/AuthContext'; 



import Helper from '../auth/Helper';
import Timer from './Timer';

import RatingStars from './RatingStars';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ReactStars from "react-rating-stars-component";
import Loader from './Loader';
import TimezoneSelect from 'react-timezone-select';


import {
	Link
	
 } from "react-router-dom";
import { useImperativeHandle } from 'react';




const StudentDashboard =(props)=>{

    const { types } = useParams();

    console.log(types);

    const alert = useAlert();
    const { auth  } = useContext(authContext);
    const [isLoading, setLaoding] = useState(false);
     
    const [ClassData,setClassData] = useState([]); 
    const [UpcommingClassData,setUpcommingClassData] = useState([]); 
    const [HistoryClassData,setHistoryClassData] = useState([]); 
    const [ClassDataDemo,setClassDataDemo] = useState([]); 
    const [paymentHistoryClassData,setPaymentHistoryClassData] = useState([]); 
    const [userId,setUserId] = useState(0); 
    const [isClass,setIsClass] = useState(0); 
    const [instrumentData,setInstrumentData] = useState([]);

     const [isinstruemt,setInstruemt] = useState([]);
     const [classTimes, setclassTimes] = useState([]);
     const [classDuration, setclassDuration] = useState([]);  
     const [classDays, setclassDays] = useState([]);   

     const [nextPaymentDateData,setNextPaymentDateData] = useState([]); 


     const [countryCode, setCountryCode] = useState('');
   
     const getData = async () => {
         const res = await axios.get('https://geolocation-db.com/json/')
         console.log('haresh'+res.data.country_code);
          localStorage.setItem('country_code', res.data.country_code);
           setCountryCode(res.data.country_code)
       }

       const [selectedTimezone,setSelectedTimezone] =  useState(Intl.DateTimeFormat().resolvedOptions().timeZone); //useState('Pacific/Midway'); 
       
       localStorage.setItem('isTimeZone', selectedTimezone);
       
       const classTimeZoneSelect=(insId)=>{
        localStorage.setItem('isTimeZone', insId.value);
       }
 
 

    
    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
            
            let user_id  = result.id;
            let register_country  = result.register_country;
            localStorage.setItem('register_country',register_country);
            localStorage.setItem('user_id',user_id);
            setUserId(user_id);

            if(result.is_summercamp==1){
                window.location.href = '/summercamp2022_thanks';
            }



          Api.getInstrument().then(
                (response)=>{
                  //  console.log(response.data.data);
                  setInstrumentData(response.data.data);
                 let insData = response.data.data;  
                 if(insData.length>0){ 
                     localStorage.setItem('instrumentData', JSON.stringify(insData));
                 }


                
            Api.getDemoClass(user_id).then(
                (response)=>{
                    setClassDataDemo(response.data.data);
                    setIsClass(response.data.is_demo);
                   
                    if(response.data.is_demo==0){
                        Api.classesTimeAvailableAndDays(user_id).then(
                            (response)=>{ 
                                if(insData.length>0){ 
                                    localStorage.setItem('classTimes', JSON.stringify(response.data.data));
                                }
                                setclassTimes(response.data.data);
                              // console.log("sssssssssssssss",response.data.days);

                               localStorage.setItem('classDayslocal', JSON.stringify(response.data.days)); 

                                setclassDays(response.data.days);

                                instrumentModelDemo(insData);
                    }
                    );
                           
                     
                    }    
                  
                    
                }
            );


        }
        )

            Api.getTodayClass(user_id).then(
                (response)=>{
                    setClassData(response.data.data);
                }
            );

            Api.getUpcommingClass(user_id).then(
                (response)=>{
                    setUpcommingClassData(response.data.data);
                }
            );

            Api.getHistoryClass(user_id).then(
                (response)=>{
                    setHistoryClassData(response.data.data);
                }
            );


            Api.getNextPaymentDate(user_id).then(
                (response)=>{
                    setNextPaymentDateData(response.data);
                  
                }
            );

            Api.getPlanList(user_id).then(
                (response)=>{
                    
                    localStorage.setItem('classDuration', JSON.stringify(response.data.data));
                    setclassDuration(response.data.data);
                }
            );

        });

        getData();

       /* Api.classesTimeAvailable().then(
            (response)=>{
                setclassTimes(response.data.data);
            }
        );*/


       
            
       
        
    }, [setClassData,setUserId,setUpcommingClassData,setHistoryClassData,setInstrumentData,setclassTimes,setNextPaymentDateData]);

    //console.log('aaaa'+classTimes);

    /*  class submit */ 

   // setTimeout( instrumentModel, 1000);

  /*  setTimeout(function(){ 
        console.log(isClass);
        if(isClass===0){
            instrumentModel();
        }

    }, 3000);
    
*/

    function submitStartCourse(){
       
        var obj = {
            userId: localStorage.getItem('user_id'),
            instruemtId: localStorage.getItem('isinstruemt'),
            durationId: localStorage.getItem('isDuration'),
            classtimeId: localStorage.getItem('isTimeDay'),
            classDayId: localStorage.getItem('isclassDay'),
        };

        Api.submitStartCourseAPI(obj).then(
            (response)=>{
                // console.log(response.data.data);
                 if(response.data.success){
                   
                     // reset after form submit   
                   
                    alert.show(response.data.message, {
                        timeout: 2000, // custom timeout just for this one alert
                        type: 'success',
                        onOpen: () => {
                            
                         // console.log('hey')
                        },  // callback that will be executed after this alert open
                        onClose: () => {
                            //return <Redirect to='/' />
                            window.location.href = '/student-dashboard-0';
                         // console.log('closed')
                        } 
                        
                    });
       
                 }else{
       
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
            ) 

    }


    function submitStartCourseDemo(){
       
        var obj = {
            userId: localStorage.getItem('user_id'),
            instruemtId: localStorage.getItem('isinstruemt'),
            durationId: localStorage.getItem('isDuration'),
            classtimeId: localStorage.getItem('isTimeDay'),
            classtimeZone: localStorage.getItem('isTimeZone'),

            classDayId: localStorage.getItem('isclassDay'),
            demootp:localStorage.getItem('demootp'),
        };

      

        Api.submitStartCourseAPIDemo(obj).then(
            (response)=>{
                // console.log(response.data.data);
                 if(response.data.success){
                   
                     // reset after form submit   
                   
                    alert.show(response.data.message, {
                        timeout: 2000, // custom timeout just for this one alert
                        type: 'success',
                        onOpen: () => {
                            
                         // console.log('hey')
                        },  // callback that will be executed after this alert open
                        onClose: () => {
                            //return <Redirect to='/' />
                            window.location.href = '/student-dashboard';
                         // console.log('closed')
                        } 
                        
                    });
       
                 }else{
       
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
            ) 

    }
    

 
    


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });


       const recaptchaRef = React.useRef();

       function onChangeCaptcha(value) {
        console.log("Captcha value:", value);
      }


      const onSubmit = (data,e) => {
           // console.log(data);
         let rating =  localStorage.getItem("rating");   
        // alert(JSON.stringify(data));
        Api.review_rating(JSON.stringify(data),userId,rating).then(
         (response)=>{
             // console.log(response.data.data);
              if(response.data.success){
                
                  // reset after form submit   
                
                 alert.show(response.data.message, {
                     timeout: 3000, // custom timeout just for this one alert
                     type: 'success',
                     onOpen: () => {
                         
                      // console.log('hey')
                     },  // callback that will be executed after this alert open
                     onClose: () => {
                         //return <Redirect to='/' />
                        // window.location.href = '/';
                      // console.log('closed')
                     } 
                     
                 });
    
              }else{
    
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
         ) 
    
    
       }

     function message(type,message){
     if(type) {  
      
       alert.show(message, {
           timeout: 20000, // custom timeout just for this one alert
           type: 'success',
         
           /*onOpen: () => {
             console.log('hey')
           }, // callback that will be executed after this alert open
           */
           onClose: () => {
               //return <Redirect to='/LoginWithEmail' />
              // window.location.href = '/LoginWithEmail';
             //console.log('closed')
           } 
       });

   }else{

       alert.show(message, {
           timeout: 5000, // custom timeout just for this one alert
           type: 'error',
         
           /*onOpen: () => {
             console.log('hey')
           }, // callback that will be executed after this alert open
           */
           onClose: () => {
               //return <Redirect to='/LoginWithEmail' />
              // window.location.href = '/LoginWithEmail';
             //console.log('closed')
           } 
       });
   } 

    }


    function instrumentModel(instrumentData1){

       let instrumentData =   JSON.parse(localStorage.getItem('instrumentData'));
      //  console.log(instrumentData);

        localStorage.removeItem('isinstruemt');
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function instrumentValidate(){
                    let isinstruemt = localStorage.getItem('isinstruemt');
                  
                   if(isinstruemt) {
                    classDaysModel();
                    }else{
                         erroeMessage = "Please select  Instrument";
                         message(0,erroeMessage);
                        
                    }
                }
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start a Course</h5>
                        <button  onClick={() => { onClose(); }}  type="button" class="close" data-dismiss="modal" aria-label="Close">
                            
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="4">
                                              <span>4</span>
                                              Duration
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="5">
                                              <span>5</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                                  <div class="take_step1 " data-target="step1">
                                      <h3 class="take_step_title">Select Instruments</h3>
                                      <div class="take_search_wrapper">
                                          <input type="text" name="" id="" class="form-control" placeholder="Search instruments, teachers"/>
                                          <span><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.54838 0.446259C2.09995 0.446259 0.119629 2.49637 0.119629 5.03109C0.119629 7.56581 2.09995 9.61593 4.54838 9.61593C5.42253 9.61593 6.23155 9.35044 6.91744 8.89955L9.54448 11.6192C9.85735 11.9431 10.3764 11.9431 10.6893 11.6192C10.9875 11.3105 10.9872 10.8209 10.6886 10.5126L8.06533 7.80391C8.63317 7.03274 8.97713 6.07722 8.97713 5.03109C8.97713 2.49637 6.99681 0.446259 4.54838 0.446259ZM4.54879 1.52508C6.42429 1.52508 7.93548 3.08952 7.93548 5.03113C7.93548 6.97273 6.42429 8.53718 4.54879 8.53718C2.67329 8.53718 1.1621 6.97273 1.1621 5.03113C1.1621 3.08952 2.67329 1.52508 4.54879 1.52508Z" fill="#17204F"/></svg></span>
                                      </div>
                                      <div class="take_class_boxes">

                                      { instrumentData.map((iitem,key)=>{  
                                        return  <label key={key} class="take_class_wrap" onClick={(event) => instrumentSelect(iitem.id)}>
                                                     <input type="radio" name="instrument" class="d-none" id="" value=""></input>
                                                    <div   class="take_class_box text-center">
                                                        <a >
                                                            <img src={iitem.img} alt="" class="img-fluid"/>
                                                            
                                                            <h4>{iitem.iname}</h4>
                                                        </a>
                                                    </div>
                                                 </label>
                                       })}                                     
                                  </div>
                                  </div>
                                                                                           
                                       <div>{isinstruemt}</div>
                              </div>
                              <div class="take_step_btns">
                                  <a onClick={()=>instrumentValidate()}  class="take_btn take_next">
                                      next
                                  </a>
                                
                                  <a href="javascript:;" class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        
        
     


              );
            }
          });
      

    }   

    /*function instrumentValidate(){


       /* console.log(isinstruemt.length);
        if(isinstruemt.length>0) {
            setInstruemtMessage('Please select instruemt');
        }
    }*/
  //  console.log(instruemtMessage);

    const instrumentSelect=(insId)=>{
        localStorage.setItem('isinstruemt', insId);

       
    }

    const classDaySelect=(insId)=>{
        localStorage.setItem('isclassDay', insId);

       
    }
    const classTimeSelect=(insId)=>{
        localStorage.setItem('isTimeDay', insId);

       
    }

    const durationSelect=(insId)=>{
        localStorage.setItem('isDuration', insId);

    }


    

    

    function classDaysModel(){
        localStorage.removeItem('isclassDay');
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function classDayValidate(){
                    let isinstruemt = localStorage.getItem('isclassDay');
                  
                   if(isinstruemt) {
                    classTimeModel();
                    }else{
                         erroeMessage = "Please select  Class Days";
                         message(0,erroeMessage);
                        
                    }
                }
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start a Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="4">
                                              <span>4</span>
                                              Duration
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="5">
                                              <span>5</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step2" data-target="step2">
                              <h3 class="take_step_title">Select Class Days</h3>
  
                              <div class="take_schedule_wrapper">
                                  
                                  <label class="take_schedule_box take_selectclassday"  onClick={()=>classDaySelect(1)}>
                                      <input type="radio" name="schedule" id="" class="d-none"/>
                                      <div class="take_schedule">
                                          <div class="take_icon">
                                              <svg width="25" height="28" viewBox="0 0 25 28" xmlns="http://www.w3.org/2000/svg"><path d="M17.0843 3.04587e-06C17.6577 -0.00134379 18.111 0.444122 18.1124 1.03808L18.1137 2.0505C21.834 2.34207 24.2916 4.87718 24.2956 8.76488L24.3103 20.1445C24.3156 24.3832 21.6527 26.9912 17.3843 26.9979L6.958 27.0114C2.71627 27.0168 0.0200198 24.3467 0.014686 20.0959L8.95077e-06 8.84992C-0.0053159 4.93657 2.36557 2.40822 6.08592 2.0667L6.08458 1.05427C6.08325 0.46032 6.52329 0.0135051 7.11001 0.0135051C7.69673 0.0121552 8.13677 0.457621 8.1381 1.05157L8.13944 1.9965L16.0602 1.9857L16.0588 1.04078C16.0575 0.446821 16.4975 0.001356 17.0843 3.04587e-06ZM17.6283 19.1672H17.615C17.0016 19.182 16.5095 19.6963 16.5229 20.3173C16.5242 20.9382 17.0189 21.4498 17.6323 21.4633C18.2577 21.462 18.7644 20.9477 18.7631 20.3132C18.7631 19.6788 18.255 19.1672 17.6283 19.1672ZM6.64063 19.1685C6.02724 19.1955 5.5472 19.7098 5.54853 20.3308C5.57653 20.9517 6.08325 21.4377 6.69664 21.4093C7.29803 21.3823 7.77674 20.868 7.74874 20.2471C7.7354 19.6396 7.24069 19.1672 6.64063 19.1685ZM12.1345 19.1618C11.5211 19.1901 11.0424 19.7031 11.0424 20.324C11.0704 20.945 11.5771 21.4296 12.1905 21.4026C12.7905 21.3743 13.2706 20.8613 13.2426 20.239C13.2292 19.6329 12.7345 19.1604 12.1345 19.1618ZM6.63397 14.3089C6.02058 14.3359 5.54186 14.8502 5.5432 15.4712C5.56987 16.0921 6.07791 16.5781 6.6913 16.5497C7.29136 16.5227 7.77007 16.0084 7.74207 15.3875C7.72873 14.78 7.23535 14.3075 6.63397 14.3089ZM12.1291 14.2616C11.5158 14.2886 11.0357 14.803 11.037 15.4239C11.0637 16.0449 11.5718 16.5295 12.1851 16.5025C12.7852 16.4741 13.2639 15.9612 13.2372 15.3402C13.2226 14.7328 12.7292 14.2603 12.1291 14.2616ZM17.623 14.2684C17.0096 14.2819 16.5295 14.7814 16.5309 15.4023V15.4172C16.5442 16.0381 17.0509 16.5092 17.6657 16.4957C18.2657 16.4809 18.7444 15.9666 18.7311 15.3456C18.7031 14.7517 18.2217 14.2671 17.623 14.2684ZM16.0628 4.06454L8.14211 4.07534L8.14344 5.16741C8.14344 5.74921 7.70473 6.20818 7.11801 6.20818C6.53129 6.20953 6.08992 5.75191 6.08992 5.17011L6.08858 4.13069C3.48834 4.39122 2.04954 5.9193 2.05353 8.84722L2.05487 9.26704L22.2434 9.24004V8.76758C22.1861 5.8653 20.7299 4.34262 18.1164 4.11584L18.1177 5.15526C18.1177 5.73571 17.6657 6.19603 17.0923 6.19603C16.5055 6.19738 16.0642 5.73841 16.0642 5.15796L16.0628 4.06454Z"/></svg>
                                          </div>
                                          <div class="take_detail">
                                              <p>Schedule 1</p>
                                              <div class="take_days">
                                                  <a href="javascript:;" class="take_btn">Monday</a>
                                                  <a href="javascript:;" class="take_btn">Wednesday</a>
                                                  <a href="javascript:;" class="take_btn">Friday</a>
                                              </div>
                                          </div>
  
                                      </div>
                                      <span></span>
                                  </label>
                                  <label class="take_schedule_box take_selectclassday" onClick={()=>classDaySelect(2)}>
                                      <input type="radio" name="schedule" id="" class="d-none" />
                                      <div class="take_schedule">
                                          <div class="take_icon">
                                              <svg width="25" height="28" viewBox="0 0 25 28" xmlns="http://www.w3.org/2000/svg"><path d="M17.0843 3.04587e-06C17.6577 -0.00134379 18.111 0.444122 18.1124 1.03808L18.1137 2.0505C21.834 2.34207 24.2916 4.87718 24.2956 8.76488L24.3103 20.1445C24.3156 24.3832 21.6527 26.9912 17.3843 26.9979L6.958 27.0114C2.71627 27.0168 0.0200198 24.3467 0.014686 20.0959L8.95077e-06 8.84992C-0.0053159 4.93657 2.36557 2.40822 6.08592 2.0667L6.08458 1.05427C6.08325 0.46032 6.52329 0.0135051 7.11001 0.0135051C7.69673 0.0121552 8.13677 0.457621 8.1381 1.05157L8.13944 1.9965L16.0602 1.9857L16.0588 1.04078C16.0575 0.446821 16.4975 0.001356 17.0843 3.04587e-06ZM17.6283 19.1672H17.615C17.0016 19.182 16.5095 19.6963 16.5229 20.3173C16.5242 20.9382 17.0189 21.4498 17.6323 21.4633C18.2577 21.462 18.7644 20.9477 18.7631 20.3132C18.7631 19.6788 18.255 19.1672 17.6283 19.1672ZM6.64063 19.1685C6.02724 19.1955 5.5472 19.7098 5.54853 20.3308C5.57653 20.9517 6.08325 21.4377 6.69664 21.4093C7.29803 21.3823 7.77674 20.868 7.74874 20.2471C7.7354 19.6396 7.24069 19.1672 6.64063 19.1685ZM12.1345 19.1618C11.5211 19.1901 11.0424 19.7031 11.0424 20.324C11.0704 20.945 11.5771 21.4296 12.1905 21.4026C12.7905 21.3743 13.2706 20.8613 13.2426 20.239C13.2292 19.6329 12.7345 19.1604 12.1345 19.1618ZM6.63397 14.3089C6.02058 14.3359 5.54186 14.8502 5.5432 15.4712C5.56987 16.0921 6.07791 16.5781 6.6913 16.5497C7.29136 16.5227 7.77007 16.0084 7.74207 15.3875C7.72873 14.78 7.23535 14.3075 6.63397 14.3089ZM12.1291 14.2616C11.5158 14.2886 11.0357 14.803 11.037 15.4239C11.0637 16.0449 11.5718 16.5295 12.1851 16.5025C12.7852 16.4741 13.2639 15.9612 13.2372 15.3402C13.2226 14.7328 12.7292 14.2603 12.1291 14.2616ZM17.623 14.2684C17.0096 14.2819 16.5295 14.7814 16.5309 15.4023V15.4172C16.5442 16.0381 17.0509 16.5092 17.6657 16.4957C18.2657 16.4809 18.7444 15.9666 18.7311 15.3456C18.7031 14.7517 18.2217 14.2671 17.623 14.2684ZM16.0628 4.06454L8.14211 4.07534L8.14344 5.16741C8.14344 5.74921 7.70473 6.20818 7.11801 6.20818C6.53129 6.20953 6.08992 5.75191 6.08992 5.17011L6.08858 4.13069C3.48834 4.39122 2.04954 5.9193 2.05353 8.84722L2.05487 9.26704L22.2434 9.24004V8.76758C22.1861 5.8653 20.7299 4.34262 18.1164 4.11584L18.1177 5.15526C18.1177 5.73571 17.6657 6.19603 17.0923 6.19603C16.5055 6.19738 16.0642 5.73841 16.0642 5.15796L16.0628 4.06454Z"/></svg>
                                          </div>
                                          <div class="take_detail">
                                              <p>Schedule 2</p>
                                              <div class="take_days">
                                                  <a href="javascript:;" class="take_btn">Tuesday</a>
                                                  <a href="javascript:;" class="take_btn">Thursday</a>
                                                  <a href="javascript:;" class="take_btn">Saturday</a>
                                              </div>
                                          </div>
  
                                      </div>
                                      <span></span>
                                  </label>
                              </div>
                              </div>
                          </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>instrumentModel(instrumentData)} class="take_btn with_border take_prev ">
                                      Previous 
                                  </a>
                                  <a onClick={()=>classDayValidate()}  class="take_btn take_next">
                                      next
                                  </a>
                                
                                  <a href="javascript:;"  class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        
        
     


              );
            }
          });
      

    }   


    function classTimeModel(){
        localStorage.removeItem('isTimeDay');
        let classTimes =   JSON.parse(localStorage.getItem('classTimes'));
      
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function classTimeValidate(){
                    let isinstruemt = localStorage.getItem('isTimeDay');
                  
                   if(isinstruemt) {
                        classDurationModel();
                    }else{
                         erroeMessage = "Please select  Class Time";
                         message(0,erroeMessage);
                        
                    }
                }
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start a Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active" data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="4">
                                              <span>4</span>
                                              Duration
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="5">
                                              <span>5</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step3 " data-target="step3">
                              <h3 class="take_step_title">Select Class Time</h3>
  
                              <div class="take_schedule_wrapper">

                              { classTimes.map((iitem,key)=>{
                                 return <label key={key} class="take_schedule_box"  onClick={()=>classTimeSelect(iitem.id)}>
                                      <input type="radio" name="classTime" id="" class="d-none" />
                                      <div class="take_schedule take_classTime">
                                          <div class="take_time">
                                              <span>{iitem.time_from} <span>{iitem.time_format} </span></span>
                                              <span>{iitem.time_to}  <span>{iitem.time_format}</span></span>
                                          </div>
                                          <div class="take_hours">
                                              <p>{iitem.hours} Hour</p>
                                          </div>
                                          <span class="take_tag">Available</span>
                                      </div>
                                      <span></span>
                                  </label>
                              })}
                                
                                 
                              </div>
                          </div>
                          </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>classDaysModel()}  class="take_btn with_border take_prev ">
                                      Previous 
                                  </a>
                                  <a onClick={()=>classTimeValidate()}  class="take_btn take_next">
                                      next
                                  </a>
                                  
                                
                                  <a href="javascript:;" class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        
        
     


              );
            }
          });
      

    }   




    function classDurationModel(){
      //  localStorage.removeItem('isDuration');

      let classDuration =   JSON.parse(localStorage.getItem('classDuration'));
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function durationValidate(){
                    let isinstruemt = localStorage.getItem('isDuration');
                  
                   if(isinstruemt) {
                         classFinishModel();
                    }else{
                         erroeMessage = "Please Select Duration";
                         message(0,erroeMessage);
                        
                    }
                }
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start a Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#" class="active"  data-value="4">
                                              <span>4</span>
                                              Duration
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="5">
                                              <span>5</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step4 " data-target="step4">
                              <h3 class="take_step_title">Select Course Duration</h3>
                              <div class="take_schedule_wrapper">

                                
                              
                              { classDuration.map((iitem,key)=>{
                                  return <label key={key} class="take_schedule_box" onClick={()=>durationSelect(iitem.id)}>
                                      <input type="radio" name="duration" id="{key}" class="d-none" />
                                      <div class="take_schedule take_duration">
                                         <h4>{iitem.name}</h4>
                                         <p>{iitem.number_of_classes}  Classes</p>
                                      </div>
                                      <span></span>
                                  </label>
                              })}
                                 
                              </div>
                          </div>
                          </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>classTimeModel()} class="take_btn with_border take_prev ">
                                      Previous 
                                  </a>
                                  
                                  <a onClick={()=>durationValidate()}  class="take_btn take_next">
                                      next
                                  </a>
                                
                                  <a href="javascript:;" class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        
        
     


              );
            }
          });
      

    }   

            
  
    function classFinishModel(){
        //localStorage.removeItem('isDuration');
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function finishValidate(){
                  
                   // let isAttendDemo = localStorage.getItem('isAttendDemo');
                  let isAttendDemo =  document.getElementById('customCheck1').checked;
                  console.log(isAttendDemo);
                   if(isAttendDemo) {
                        
                    submitStartCourse();

                    }else{
                         erroeMessage = "Please Ckeck Demo classs";
                         message(0,erroeMessage);
                        
                    }
                }

            let isinstruemt = localStorage.getItem('isinstruemt');    
            let insName = '';
            let insImage = '';

            instrumentData.forEach(element => {
                if(element.id==isinstruemt){
                    insName = element.iname;
                    insImage=  element.img;
                }

            });
         
            
            let isDuration = localStorage.getItem('isDuration');
            console.log(isDuration);
            let durname ='';
            let number_of_classes ='';
            classDuration.forEach(element => {
                if(element.id==isDuration){
                    durname = element.name;
                    number_of_classes=  element.number_of_classes;
                }

            });    

            let isTimeDay =   localStorage.getItem('isTimeDay');
            
            let  time_from = '';
            let  time_to = '';
            let  hours = '';
            let  time_format = '';

            classTimes.forEach(element => {
                if(element.id==isTimeDay){
                    time_from = element.time_from;
                    time_to=  element.time_to;
                    hours=  element.hours;
                    time_format=  element.time_format;
                }

            });    

            let isclassDay =   localStorage.getItem('isclassDay');
            
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start a Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#" class="active_before"  data-value="4">
                                              <span>4</span>
                                              Duration
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active"   data-value="5">
                                              <span>5</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step5 " data-target="step5">
                              <h3 class="take_step_title">Demo Class Summary</h3>
  
                              <div class="take_class_info">
                                  <label class="take_schedule_box">
                                      <div class="take_schedule take_info">
                                          <div class="take_left">
                                              <div class="take_icon">
                                                  <img src={insImage} class="img-fluid" alt=""/>
                                              </div>
                                              <div class="take_detail">
                                                
                                                  <h4>{insName} Class</h4>
                                              </div>
                                          </div>
                                          <div class="take_right">
                                              <span>{number_of_classes} Classes</span>
                                              <p>{durname}</p>
                                          </div>
                                      </div>
                                  </label>
                              </div>
                              <div class="take_timeday_wrap">
                                  <div class="take_time_wrapper">
                                      <p class="take_step_subtitle">CLASS TIME</p>
                                      <label class="take_schedule_box">
                                          <div class="take_schedule take_classTime">
                                              <div class="take_icon">
                                                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.166 0C16.9725 0 21.666 4.704 21.666 10.5C21.666 16.3065 16.9725 21 11.166 21C5.37002 21 0.666016 16.3065 0.666016 10.5C0.666016 4.704 5.37002 0 11.166 0ZM10.7985 5.1765C10.368 5.1765 10.011 5.523 10.011 5.964V11.2665C10.011 11.5395 10.158 11.7915 10.3995 11.9385L14.5155 14.3955C14.6415 14.469 14.778 14.511 14.925 14.511C15.1875 14.511 15.45 14.3745 15.597 14.1225C15.8175 13.755 15.702 13.272 15.324 13.041L11.586 10.815V5.964C11.586 5.523 11.229 5.1765 10.7985 5.1765Z" fill="#F68B00"/></svg>
                                              </div>
                                              <div class="take_time">
                                                  <span>{time_from} <span>{time_format}</span></span>
                                                  <span>{time_to} <span>{time_format}</span></span>
                                              </div>
                                              <div class="take_hours">
                                                  <p>{hours} Hours per day</p>
                                              </div>
                                             
                                          </div>
                                      </label>
                                  </div>
                                  <div class="take_day_wrapper">
                                      <p class="take_step_subtitle">CLASS DAYS</p>
                                      <label class="take_schedule_box">
                                          <div class="take_schedule">
                                              <div class="take_icon">
                                                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9146 2.48077e-06C14.3816 -0.00109448 14.7509 0.361724 14.752 0.845481L14.7531 1.67007C17.7832 1.90755 19.7848 3.97231 19.788 7.13873L19.8 16.4071C19.8043 19.8594 17.6355 21.9835 14.159 21.989L5.66708 22C2.21232 22.0044 0.0163055 19.8297 0.0119613 16.3675L7.29013e-06 7.20799C-0.00432964 4.02069 1.92669 1.96142 4.95679 1.68326L4.95571 0.858675C4.95462 0.374917 5.31302 0.0109995 5.79089 0.0109995C6.26875 0.00990001 6.62715 0.372718 6.62824 0.856476L6.62933 1.62609L13.0805 1.61729L13.0794 0.84768C13.0784 0.363923 13.4368 0.00110442 13.9146 2.48077e-06ZM14.3577 15.6111H14.3469C13.8473 15.6232 13.4465 16.0421 13.4574 16.5478C13.4585 17.0536 13.8614 17.4702 14.361 17.4812C14.8704 17.4801 15.2831 17.0613 15.282 16.5445C15.282 16.0278 14.8682 15.6111 14.3577 15.6111ZM5.40859 15.6122C4.90901 15.6342 4.51802 16.0531 4.51911 16.5588C4.54192 17.0646 4.95462 17.4604 5.45421 17.4373C5.94402 17.4153 6.33392 16.9964 6.31111 16.4906C6.30025 15.9959 5.89732 15.6111 5.40859 15.6122ZM9.88316 15.6067C9.38358 15.6298 8.99368 16.0476 8.99368 16.5533C9.01649 17.0591 9.42919 17.4538 9.92878 17.4318C10.4175 17.4087 10.8085 16.9909 10.7857 16.484C10.7748 15.9904 10.3719 15.6056 9.88316 15.6067ZM5.40316 11.6542C4.90358 11.6762 4.51368 12.095 4.51476 12.6008C4.53649 13.1065 4.95028 13.5023 5.44986 13.4792C5.93859 13.4573 6.32849 13.0384 6.30568 12.5326C6.29482 12.0379 5.89298 11.6531 5.40316 11.6542ZM9.87882 11.6157C9.37923 11.6377 8.98825 12.0566 8.98933 12.5623C9.01106 13.0681 9.42485 13.4628 9.92443 13.4408C10.4132 13.4177 10.8031 12.9999 10.7813 12.4941C10.7694 11.9994 10.3675 11.6146 9.87882 11.6157ZM14.3534 11.6212C13.8538 11.6322 13.4628 12.039 13.4639 12.5447V12.5568C13.4748 13.0626 13.8875 13.4463 14.3881 13.4353C14.8769 13.4232 15.2668 13.0043 15.2559 12.4985C15.2331 12.0148 14.841 11.6201 14.3534 11.6212ZM13.0827 3.31045L6.6315 3.31924L6.63258 4.2087C6.63258 4.68256 6.27527 5.05637 5.7974 5.05637C5.31954 5.05747 4.96005 4.68476 4.96005 4.21089L4.95897 3.36432C2.84115 3.57651 1.66929 4.82109 1.67254 7.20579L1.67363 7.54772L18.1166 7.52573V7.14093C18.0699 4.77711 16.8839 3.53693 14.7552 3.35222L14.7563 4.1988C14.7563 4.67156 14.3881 5.04648 13.9211 5.04648C13.4433 5.04757 13.0838 4.67376 13.0838 4.201L13.0827 3.31045Z" fill="#F68B00"/></svg>
                                              </div>
                                              <div class="take_detail">
                                              {isclassDay == 2 &&
                                                  <div class="take_days">
                                                      <a href="javascript:;" class="take_btn">Tuesday</a>
                                                      <a href="javascript:;" class="take_btn">Thursday</a>
                                                      <a href="javascript:;" class="take_btn">Saturday</a>
                                                  </div>
                                                }


                                                {isclassDay == 1 &&
                                                  <div class="take_days">
                                                      <a href="javascript:;" class="take_btn">Monday</a>
                                                      <a href="javascript:;" class="take_btn">Wednesday</a>
                                                      <a href="javascript:;" class="take_btn">Friday</a>
                                                  </div>
                                                }       

                                              </div>
                                              
                                          </div>
                                      </label>
                                  </div>

                              </div>

                              <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" value="1" />
                                    <label class="custom-control-label" for="customCheck1">You can check this first for demo class</label>
                                </div> 
                          </div>

                               </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>classDurationModel()} href="javascript:;" class="take_btn with_border take_prev ">
                                      Previous 
                                  </a> 
                                  <a onClick={()=>finishValidate()}  class="take_btn take_next">
                                      Submit
                                  </a>
                                
                                  <a href="javascript:;" class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        


              );
            }
          });
      

    }   

    function paymentSelect(id,amount){

        localStorage.setItem('paymentDuration',id);
        localStorage.setItem('paymentAmount',amount);

    }
    // strip integration
    
    useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    /*fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })*/

// this is php api you can use

        /*  Api.stripePayment({ id: "xl-tshirt" }).then(
            (response)=>{ 
                    
               console.log(response.data);    
              // setClientSecret(response.data.clientSecret)
        }
        )*/
       // .then((res) => res.json())
       // .then((data) => setClientSecret(data.clientSecret));



    }, []);






 

    function paymentModel(){

        

         localStorage.removeItem('paymentDuration');
          confirmAlert({ 
              customUI: ({ onClose }) => {
                
                  let erroeMessage = '';
                  function paymentValidate(){
                      let durationId = localStorage.getItem('paymentDuration');
                      let paymentAmount = localStorage.getItem('paymentAmount');
                      let register_country = localStorage.getItem('register_country');

                      
                    
                     if(durationId && paymentAmount) {
                         if(register_country=='IN'){
                          window.open(
                            'https://take5music.in/take5app1/studentApi/index.php/razorpayPayment/'+userId+'/'+durationId,
                            '_blank' // <- This is what makes it open in a new window.
                          );
                        }else{
                            window.location.href = '/paymentStripe';    

                        }

                      
                    }else{
                           erroeMessage = "Please Select Class Duration";
                           message(0,erroeMessage);
                          
                      }
                  }
                
                return (           
                  <div class="take_modal">
                  <div class="take_modal_inner">
                      <div class="take_modal_header">
                          <h5 class="take_modaltitle" id="exampleModalLabel">Select Class Duration</h5>
                          <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="take_modal_body">
                            <div class="take_step_wrapper">
                                
                                
                                <div class="take_step_body_wrapper">
                                <div class="take_step4 " data-target="step4">
                               
                                <div class="take_schedule_wrapper">
  
                                  
                                
                                { classDuration.map((iitem,key)=>{
                                    return <label key={key} class="take_schedule_box" onClick={()=>paymentSelect(iitem.id,iitem.amount)}>
                                        <input type="radio" name="duration" id="{key}" class="d-none" />
                                        <div class="take_schedule take_duration">
                                           <h4>{iitem.name}</h4>
                                           <p>{iitem.number_of_classes} Live Classes  </p>
                                           <p>{iitem.amount}</p>
                                        </div>
                                        <span></span>
                                    </label>
                                })}
                                   
                                </div>
                            </div>
                            </div>
  
                                <div class="take_step_btns">
                                  
                                     <a onClick={()=>paymentValidate()}  class="take_btn take_next">
                                        Payment 
                                    </a>
                                   
                                   
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
          
          
       
  
  
                );
              }
            });
        
  
      }   

    //  demo start here
    
    
    function instrumentModelDemo(instrumentData1){
        console.log("ins demo");
        let instrumentData =   JSON.parse(localStorage.getItem('instrumentData'));
       //  console.log(instrumentData);
 
         localStorage.removeItem('isinstruemt');
         confirmAlert({ 
             customUI: ({ onClose }) => {
               
                 let erroeMessage = '';
                 function instrumentValidateDemo(){
                     let isinstruemt = localStorage.getItem('isinstruemt');
                   
                    if(isinstruemt) {
                     classDaysModelDemo(classDays);
                     }else{
                          erroeMessage = "Please select  Instrument";
                          message(0,erroeMessage);
                         
                     }
                 }
               
               return (           
                 <div class="take_modal">
                 <div class="take_modal_inner">
                     <div class="take_modal_header">
                         <h5 class="take_modaltitle" id="exampleModalLabel">Start your Course </h5>
                         <button  onClick={() => { onClose(); }}  type="button" class="close" data-dismiss="modal" aria-label="Close">
                             
                           <span aria-hidden="true">&times;</span>
                         </button>
                       </div>
                       <div class="take_modal_body">
                           <div class="take_step_wrapper">
                               
                               <div class="take_steps" >
                                   <ul>
                                       <li>
                                           <a href="#" class="active" data-value="1">
                                               <span>1</span>
                                               Instrument
                                           </a>
                                       </li>
                                       <li>
                                           <a href="#"  class="" data-value="2">
                                               <span>2</span>
                                               Class Days
                                           </a>
                                       </li>
                                       <li>
                                           <a href="#"  data-value="3">
                                               <span>3</span>
                                               Class Time
                                           </a>
                                       </li>
                                      
                                       <li>
                                           <a href="#"  data-value="5">
                                               <span>4</span>
                                               Finish
                                           </a>
                                       </li>
                                   </ul>
                               </div>
                               <div class="take_step_body_wrapper">
                                   <div class="take_step1 " data-target="step1">
                                       <h3 class="take_step_title">Select Instruments</h3>
                                       <div class="take_search_wrapper d-none">
                                           <input type="text" name="" id="" class="form-control" placeholder="Search instruments, teachers"/>
                                           <span><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.54838 0.446259C2.09995 0.446259 0.119629 2.49637 0.119629 5.03109C0.119629 7.56581 2.09995 9.61593 4.54838 9.61593C5.42253 9.61593 6.23155 9.35044 6.91744 8.89955L9.54448 11.6192C9.85735 11.9431 10.3764 11.9431 10.6893 11.6192C10.9875 11.3105 10.9872 10.8209 10.6886 10.5126L8.06533 7.80391C8.63317 7.03274 8.97713 6.07722 8.97713 5.03109C8.97713 2.49637 6.99681 0.446259 4.54838 0.446259ZM4.54879 1.52508C6.42429 1.52508 7.93548 3.08952 7.93548 5.03113C7.93548 6.97273 6.42429 8.53718 4.54879 8.53718C2.67329 8.53718 1.1621 6.97273 1.1621 5.03113C1.1621 3.08952 2.67329 1.52508 4.54879 1.52508Z" fill="#17204F"/></svg></span>
                                       </div>
                                       <div class="take_class_boxes">
 
                                       { instrumentData.map((iitem,key)=>{  
                                         return  <label key={key} class="take_class_wrap" onClick={(event) => instrumentSelect(iitem.id)}>
                                                      <input type="radio" name="instrument" class="d-none" id="" value=""></input>
                                                     <div   class="take_class_box text-center">
                                                         <a >
                                                             <img src={iitem.img} alt="" class="img-fluid"/>
                                                             
                                                             <h4>{iitem.iname}</h4>
                                                         </a>
                                                     </div>
                                                  </label>
                                        })}                                     
                                   </div>
                                   </div>
                                                                                            
                                        <div>{isinstruemt}</div>
                               </div>
                               <div class="take_step_btns">
                                   <a onClick={()=>instrumentValidateDemo()}  class="take_btn take_next">
                                       next
                                   </a>
                                 
                                   <a href="javascript:;" class="take_btn take_finish d-none">
                                       Start Free Trial
                                   </a>
                               </div>
                           </div>
                       </div>
                 </div>
             </div>
         
         
      
 
 
               );
             }
           });
       
 
     }   


     function classDaysModelDemo(){
       // console.log(classDays); 
       // let classDays =   JSON.parse(localStorage.getItem('classDays'));
        let  classDays = '';
       let user_id  =localStorage.getItem('user_id'); 
       Api.classesTimeAvailableAndDays(user_id).then(
        (response)=>{ 
                localStorage.setItem('classDayslocal', JSON.stringify(response.data.days)); 
                setclassDays(response.data.days);
                classDays =    response.data.days;                 

          


        localStorage.removeItem('isclassDay');
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function classDayValidateDemo(){
                    let isinstruemt = localStorage.getItem('isclassDay');
                  
                   if(isinstruemt) {
                    classTimeModelDemo();
                    }else{
                         erroeMessage = "Please select  Class Days";
                         message(0,erroeMessage);
                        
                    }
                }
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start your Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                     
                                      <li>
                                          <a href="#"  data-value="5">
                                              <span>4</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step2" data-target="step2">
                              <h3 class="take_step_title">Select Class Days</h3>
                                
                              <div class="take_schedule_wrapper">

                            {   
                             classDays.map((dayssch,key)=>{ 
                                // console.log(dayssch);
                               let daysName = dayssch.daysName;
                                 return <label key={key} class="take_schedule_box take_selectclassday"  onClick={()=>classDaySelect(dayssch.id)}>
                                      <input type="radio" name="schedule" id="" class="d-none"/>
                                      <div class="take_schedule">
                                          <div class="take_schedule_icondetail">
                                          <div class="take_icon">
                                              <svg width="25" height="28" viewBox="0 0 25 28" xmlns="http://www.w3.org/2000/svg"><path d="M17.0843 3.04587e-06C17.6577 -0.00134379 18.111 0.444122 18.1124 1.03808L18.1137 2.0505C21.834 2.34207 24.2916 4.87718 24.2956 8.76488L24.3103 20.1445C24.3156 24.3832 21.6527 26.9912 17.3843 26.9979L6.958 27.0114C2.71627 27.0168 0.0200198 24.3467 0.014686 20.0959L8.95077e-06 8.84992C-0.0053159 4.93657 2.36557 2.40822 6.08592 2.0667L6.08458 1.05427C6.08325 0.46032 6.52329 0.0135051 7.11001 0.0135051C7.69673 0.0121552 8.13677 0.457621 8.1381 1.05157L8.13944 1.9965L16.0602 1.9857L16.0588 1.04078C16.0575 0.446821 16.4975 0.001356 17.0843 3.04587e-06ZM17.6283 19.1672H17.615C17.0016 19.182 16.5095 19.6963 16.5229 20.3173C16.5242 20.9382 17.0189 21.4498 17.6323 21.4633C18.2577 21.462 18.7644 20.9477 18.7631 20.3132C18.7631 19.6788 18.255 19.1672 17.6283 19.1672ZM6.64063 19.1685C6.02724 19.1955 5.5472 19.7098 5.54853 20.3308C5.57653 20.9517 6.08325 21.4377 6.69664 21.4093C7.29803 21.3823 7.77674 20.868 7.74874 20.2471C7.7354 19.6396 7.24069 19.1672 6.64063 19.1685ZM12.1345 19.1618C11.5211 19.1901 11.0424 19.7031 11.0424 20.324C11.0704 20.945 11.5771 21.4296 12.1905 21.4026C12.7905 21.3743 13.2706 20.8613 13.2426 20.239C13.2292 19.6329 12.7345 19.1604 12.1345 19.1618ZM6.63397 14.3089C6.02058 14.3359 5.54186 14.8502 5.5432 15.4712C5.56987 16.0921 6.07791 16.5781 6.6913 16.5497C7.29136 16.5227 7.77007 16.0084 7.74207 15.3875C7.72873 14.78 7.23535 14.3075 6.63397 14.3089ZM12.1291 14.2616C11.5158 14.2886 11.0357 14.803 11.037 15.4239C11.0637 16.0449 11.5718 16.5295 12.1851 16.5025C12.7852 16.4741 13.2639 15.9612 13.2372 15.3402C13.2226 14.7328 12.7292 14.2603 12.1291 14.2616ZM17.623 14.2684C17.0096 14.2819 16.5295 14.7814 16.5309 15.4023V15.4172C16.5442 16.0381 17.0509 16.5092 17.6657 16.4957C18.2657 16.4809 18.7444 15.9666 18.7311 15.3456C18.7031 14.7517 18.2217 14.2671 17.623 14.2684ZM16.0628 4.06454L8.14211 4.07534L8.14344 5.16741C8.14344 5.74921 7.70473 6.20818 7.11801 6.20818C6.53129 6.20953 6.08992 5.75191 6.08992 5.17011L6.08858 4.13069C3.48834 4.39122 2.04954 5.9193 2.05353 8.84722L2.05487 9.26704L22.2434 9.24004V8.76758C22.1861 5.8653 20.7299 4.34262 18.1164 4.11584L18.1177 5.15526C18.1177 5.73571 17.6657 6.19603 17.0923 6.19603C16.5055 6.19738 16.0642 5.73841 16.0642 5.15796L16.0628 4.06454Z"/></svg>
                                          </div>
                                          <div class="take_detail">
                                              <p>Schedule {key+1}</p>
                                              <div class="take_days">
                                                 {  daysName.map((days,key)=>{ 
                                                     
                                                  return <a  key={key} href="javascript:;" class="take_btn">{days}</a>
                                                })  }
                                                 
                                              </div>
                                          </div>
                                          </div>
                                          <div>
                                            <p>Your free demo will be scheduled on any of these days.</p> 
                                          </div>
                                      </div>
                                      <span></span>
                                  </label>
                                })  } 
                                  <label class="take_schedule_box take_selectclassday d-none" onClick={()=>classDaySelect(2)}>
                                      <input type="radio" name="schedule" id="" class="d-none" />
                                      <div class="take_schedule">
                                          <div class="take_icon">
                                              <svg width="25" height="28" viewBox="0 0 25 28" xmlns="http://www.w3.org/2000/svg"><path d="M17.0843 3.04587e-06C17.6577 -0.00134379 18.111 0.444122 18.1124 1.03808L18.1137 2.0505C21.834 2.34207 24.2916 4.87718 24.2956 8.76488L24.3103 20.1445C24.3156 24.3832 21.6527 26.9912 17.3843 26.9979L6.958 27.0114C2.71627 27.0168 0.0200198 24.3467 0.014686 20.0959L8.95077e-06 8.84992C-0.0053159 4.93657 2.36557 2.40822 6.08592 2.0667L6.08458 1.05427C6.08325 0.46032 6.52329 0.0135051 7.11001 0.0135051C7.69673 0.0121552 8.13677 0.457621 8.1381 1.05157L8.13944 1.9965L16.0602 1.9857L16.0588 1.04078C16.0575 0.446821 16.4975 0.001356 17.0843 3.04587e-06ZM17.6283 19.1672H17.615C17.0016 19.182 16.5095 19.6963 16.5229 20.3173C16.5242 20.9382 17.0189 21.4498 17.6323 21.4633C18.2577 21.462 18.7644 20.9477 18.7631 20.3132C18.7631 19.6788 18.255 19.1672 17.6283 19.1672ZM6.64063 19.1685C6.02724 19.1955 5.5472 19.7098 5.54853 20.3308C5.57653 20.9517 6.08325 21.4377 6.69664 21.4093C7.29803 21.3823 7.77674 20.868 7.74874 20.2471C7.7354 19.6396 7.24069 19.1672 6.64063 19.1685ZM12.1345 19.1618C11.5211 19.1901 11.0424 19.7031 11.0424 20.324C11.0704 20.945 11.5771 21.4296 12.1905 21.4026C12.7905 21.3743 13.2706 20.8613 13.2426 20.239C13.2292 19.6329 12.7345 19.1604 12.1345 19.1618ZM6.63397 14.3089C6.02058 14.3359 5.54186 14.8502 5.5432 15.4712C5.56987 16.0921 6.07791 16.5781 6.6913 16.5497C7.29136 16.5227 7.77007 16.0084 7.74207 15.3875C7.72873 14.78 7.23535 14.3075 6.63397 14.3089ZM12.1291 14.2616C11.5158 14.2886 11.0357 14.803 11.037 15.4239C11.0637 16.0449 11.5718 16.5295 12.1851 16.5025C12.7852 16.4741 13.2639 15.9612 13.2372 15.3402C13.2226 14.7328 12.7292 14.2603 12.1291 14.2616ZM17.623 14.2684C17.0096 14.2819 16.5295 14.7814 16.5309 15.4023V15.4172C16.5442 16.0381 17.0509 16.5092 17.6657 16.4957C18.2657 16.4809 18.7444 15.9666 18.7311 15.3456C18.7031 14.7517 18.2217 14.2671 17.623 14.2684ZM16.0628 4.06454L8.14211 4.07534L8.14344 5.16741C8.14344 5.74921 7.70473 6.20818 7.11801 6.20818C6.53129 6.20953 6.08992 5.75191 6.08992 5.17011L6.08858 4.13069C3.48834 4.39122 2.04954 5.9193 2.05353 8.84722L2.05487 9.26704L22.2434 9.24004V8.76758C22.1861 5.8653 20.7299 4.34262 18.1164 4.11584L18.1177 5.15526C18.1177 5.73571 17.6657 6.19603 17.0923 6.19603C16.5055 6.19738 16.0642 5.73841 16.0642 5.15796L16.0628 4.06454Z"/></svg>
                                          </div>
                                          <div class="take_detail">
                                              <p>Schedule 2</p>
                                              <div class="take_days">
                                                  <a href="javascript:;" class="take_btn">Tuesday</a>
                                                  <a href="javascript:;" class="take_btn">Thursday</a>
                                                  <a href="javascript:;" class="take_btn">Saturday</a>
                                                  
                                              </div>
                                          </div>
                                          <p>Your free demo will be scheduled on any of these days.</p> 
                                      </div>
                                      <span></span>
                                  </label>
                              </div>
                              </div>
                          </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>instrumentModelDemo(instrumentData)} class="take_btn with_border take_prev ">
                                      Previous 
                                  </a>
                                  <a onClick={()=>classDayValidateDemo()}  class="take_btn take_next">
                                      next
                                  </a>
                                
                                  <a href="javascript:;"  class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        
        
     


              );
            }
          });

        }   
        ) ;
      

    }   

    function classTimeModelDemo(){
        localStorage.removeItem('isTimeDay');
        let classTimes =   JSON.parse(localStorage.getItem('classTimes'));
      
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let erroeMessage = '';
                function classTimeValidateDemo(){
                    let isinstruemt = localStorage.getItem('isTimeDay');
                  
                   if(isinstruemt) {
                    classFinishModelDemo();
                    }else{
                         erroeMessage = "Please select  Class Time";
                         message(0,erroeMessage);
                        
                    }
                }
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start your Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active" data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                      
                                      <li>
                                          <a href="#"  data-value="5">
                                              <span>4</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                                        <div class="take_step3 " data-target="step3">
                                            <h3 class="take_step_title">Select Time Zone</h3>
                                                        <TimezoneSelect absolute={true}
                                                            value={selectedTimezone}
                                                            onChange={(e)=>classTimeZoneSelect(e)}
                                                        />
                                        </div>
                                    </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step3 " data-target="step3">
                              <h3 class="take_step_title">Select Class Time</h3>
  
                              <div class="take_schedule_wrapper">
                                  

                              { classTimes.map((iitem,key)=>{
                                 return <label key={key} class="take_schedule_box"  onClick={()=>classTimeSelect(iitem.id)}>
                                      <input type="radio" name="classTime" id="" class="d-none" />
                                      <div class="take_schedule take_classTime">
                                          <div class="take_time">
                                              <span>{iitem.time_from} <span>{iitem.time_format} </span></span>
                                              <span>{iitem.time_to}  <span>{iitem.time_format}</span></span>
                                            
                                          </div>
                                          
                                          <span class="take_tag d-none">Available</span>
                                          <div>
                                           <p>Your free demo will be scheduled at this time.</p>
                                           </div>
                                      </div>
                                      <span></span>
                                  </label>
                              })}
                                
                                 
                              </div>


                              
                          </div>
                          </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>classDaysModelDemo()}  class="take_btn with_border take_prev ">
                                      Previous 
                                  </a>
                                  <a onClick={()=>classTimeValidateDemo()}  class="take_btn take_next">
                                      next 
                                  </a>
                                  
                                
                                  <a href="javascript:;" class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        
        
     


              );
            }
          });
      

    }   

  



    function classFinishModelDemo(){

   
        //localStorage.removeItem('isDuration');
        confirmAlert({ 
            customUI: ({ onClose }) => {
              
                let otpsent =0;        
                   
                function  sendDemoOTP(){
                  
                   /* Api.sendDemoOTP(localStorage.getItem('user_id'),  localStorage.getItem('country_code')).then(
                        (response)=>{
                            otpsent =1;  
                            let erroeMessage = "OTP sent your register number";
                            message(1,erroeMessage);
                            console.log(response.data.data);

                        
                        }
                    )*/
                

                } 



                let erroeMessage = '';
                function finishValidateDemo(){
                  
                   // let isAttendDemo = localStorage.getItem('isAttendDemo');
                  //let isAttendDemo =  document.getElementById('demootp').value;
                  let isAttendDemo = recaptchaRef.current.getValue();
  
                  console.log(isAttendDemo);
                   if(isAttendDemo) {
                    localStorage.setItem('demootp',isAttendDemo);   
                    submitStartCourseDemo();

                    }else{
                         erroeMessage = "Please Verify Captcha";
                         message(0,erroeMessage);
                        
                    }
                }

            let isinstruemt = localStorage.getItem('isinstruemt');    
            let insName = '';
            let insImage = '';

            let instrumentData =  JSON.parse(localStorage.getItem('instrumentData'));   

            instrumentData.forEach(element => {
                if(element.id==isinstruemt){
                    insName = element.iname;
                    insImage=  element.img;
                }

            });
         
            
            let isDuration = localStorage.getItem('isDuration');
            console.log(isDuration);
            let durname ='';
            let number_of_classes ='';
            
            classDuration.forEach(element => {
                if(element.id==isDuration){
                    durname = element.name;
                    number_of_classes=  element.number_of_classes;
                }

            });    

            let isTimeDay =   localStorage.getItem('isTimeDay');
            
            let  time_from = '';
            let  time_to = '';
            let  hours = '';
            let  time_format = '';
            let classTimes =   JSON.parse(localStorage.getItem('classTimes'));
            classTimes.forEach(element => {
                if(element.id==isTimeDay){
                    time_from = element.time_from;
                    time_to=  element.time_to;
                    hours=  element.hours;
                    time_format=  element.time_format;
                }

            });    

            let isclassDay =   localStorage.getItem('isclassDay');

           let  classDayslocal = JSON.parse(localStorage.getItem('classDayslocal')); 
            console.log(classDayslocal);
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Start your Course</h5>
                        <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              <div class="take_steps" >
                                  <ul>
                                      <li>
                                          <a href="#" class="active_before" data-value="1">
                                              <span>1</span>
                                              Instrument
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="2">
                                              <span>2</span>
                                              Class Days
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#"  class="active_before" data-value="3">
                                              <span>3</span>
                                              Class Time
                                          </a>
                                      </li>
                                     
                                      <li>
                                          <a href="#"  class="active"   data-value="5">
                                              <span>4</span>
                                              Finish
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div class="take_step_body_wrapper">
                              <div class="take_step5 " data-target="step5">
                              <h3 class="take_step_title">Demo Class Summary</h3>
  
                              <div class="take_class_info">
                                  <label class="take_schedule_box">
                                      <div class="take_schedule take_info">
                                          <div class="take_left">
                                              <div class="take_icon">
                                                  <img src={insImage} class="img-fluid" alt=""/>
                                              </div>
                                              <div class="take_detail">
                                                
                                                  <h4>{insName} Class  <span>(Your class will be scheduled automatically)</span></h4> 
                                              </div>
                                          </div>
                                        
                                      </div>
                                  </label>
                              </div>
                              <div class="take_timeday_wrap">
                                  <div class="take_time_wrapper">
                                      <p class="take_step_subtitle">CLASS TIME</p>
                                      <label class="take_schedule_box">
                                          <div class="take_schedule take_classTime">
                                              <div class="take_icon">
                                                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.166 0C16.9725 0 21.666 4.704 21.666 10.5C21.666 16.3065 16.9725 21 11.166 21C5.37002 21 0.666016 16.3065 0.666016 10.5C0.666016 4.704 5.37002 0 11.166 0ZM10.7985 5.1765C10.368 5.1765 10.011 5.523 10.011 5.964V11.2665C10.011 11.5395 10.158 11.7915 10.3995 11.9385L14.5155 14.3955C14.6415 14.469 14.778 14.511 14.925 14.511C15.1875 14.511 15.45 14.3745 15.597 14.1225C15.8175 13.755 15.702 13.272 15.324 13.041L11.586 10.815V5.964C11.586 5.523 11.229 5.1765 10.7985 5.1765Z" fill="#F68B00"/></svg>
                                              </div>
                                              <div class="take_time">
                                                  <span>{time_from} <span>{time_format}</span></span>
                                                  <span>{time_to} <span>{time_format}</span></span>
                                              </div>
                                              <div class="take_hours">
                                                  <p>{hours} Hours per day</p>
                                              </div>
                                             
                                          </div>
                                      </label>
                                  </div>
                                  <div class="take_day_wrapper">
                                      <p class="take_step_subtitle">CLASS DAYS</p>
                                      <label class="take_schedule_box">
                                          <div class="take_schedule">
                                              <div class="take_icon">
                                                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9146 2.48077e-06C14.3816 -0.00109448 14.7509 0.361724 14.752 0.845481L14.7531 1.67007C17.7832 1.90755 19.7848 3.97231 19.788 7.13873L19.8 16.4071C19.8043 19.8594 17.6355 21.9835 14.159 21.989L5.66708 22C2.21232 22.0044 0.0163055 19.8297 0.0119613 16.3675L7.29013e-06 7.20799C-0.00432964 4.02069 1.92669 1.96142 4.95679 1.68326L4.95571 0.858675C4.95462 0.374917 5.31302 0.0109995 5.79089 0.0109995C6.26875 0.00990001 6.62715 0.372718 6.62824 0.856476L6.62933 1.62609L13.0805 1.61729L13.0794 0.84768C13.0784 0.363923 13.4368 0.00110442 13.9146 2.48077e-06ZM14.3577 15.6111H14.3469C13.8473 15.6232 13.4465 16.0421 13.4574 16.5478C13.4585 17.0536 13.8614 17.4702 14.361 17.4812C14.8704 17.4801 15.2831 17.0613 15.282 16.5445C15.282 16.0278 14.8682 15.6111 14.3577 15.6111ZM5.40859 15.6122C4.90901 15.6342 4.51802 16.0531 4.51911 16.5588C4.54192 17.0646 4.95462 17.4604 5.45421 17.4373C5.94402 17.4153 6.33392 16.9964 6.31111 16.4906C6.30025 15.9959 5.89732 15.6111 5.40859 15.6122ZM9.88316 15.6067C9.38358 15.6298 8.99368 16.0476 8.99368 16.5533C9.01649 17.0591 9.42919 17.4538 9.92878 17.4318C10.4175 17.4087 10.8085 16.9909 10.7857 16.484C10.7748 15.9904 10.3719 15.6056 9.88316 15.6067ZM5.40316 11.6542C4.90358 11.6762 4.51368 12.095 4.51476 12.6008C4.53649 13.1065 4.95028 13.5023 5.44986 13.4792C5.93859 13.4573 6.32849 13.0384 6.30568 12.5326C6.29482 12.0379 5.89298 11.6531 5.40316 11.6542ZM9.87882 11.6157C9.37923 11.6377 8.98825 12.0566 8.98933 12.5623C9.01106 13.0681 9.42485 13.4628 9.92443 13.4408C10.4132 13.4177 10.8031 12.9999 10.7813 12.4941C10.7694 11.9994 10.3675 11.6146 9.87882 11.6157ZM14.3534 11.6212C13.8538 11.6322 13.4628 12.039 13.4639 12.5447V12.5568C13.4748 13.0626 13.8875 13.4463 14.3881 13.4353C14.8769 13.4232 15.2668 13.0043 15.2559 12.4985C15.2331 12.0148 14.841 11.6201 14.3534 11.6212ZM13.0827 3.31045L6.6315 3.31924L6.63258 4.2087C6.63258 4.68256 6.27527 5.05637 5.7974 5.05637C5.31954 5.05747 4.96005 4.68476 4.96005 4.21089L4.95897 3.36432C2.84115 3.57651 1.66929 4.82109 1.67254 7.20579L1.67363 7.54772L18.1166 7.52573V7.14093C18.0699 4.77711 16.8839 3.53693 14.7552 3.35222L14.7563 4.1988C14.7563 4.67156 14.3881 5.04648 13.9211 5.04648C13.4433 5.04757 13.0838 4.67376 13.0838 4.201L13.0827 3.31045Z" fill="#F68B00"/></svg>
                                              </div>
                                              <div class="take_detail">
                                                
                                             
                                             { classDayslocal.map((rows,key)=>{           
                                                 
                                                  console.log(rows.id); 
                                                  console.log(isclassDay); 
                                                  let daysName  = rows.daysName;                  
                                                  return  <div class="take_days">
                                                       {  (parseInt(isclassDay) == parseInt(rows.id))? daysName.map((days,key)=>{ 
                                                        return  <a href="javascript:;" class="take_btn">{days}</a>
                                                    }):null }
                                                     
                                                  </div>
                                            
                                                
                                            })}     

                                                {isclassDay == 1 &&
                                                  <div class="take_days d-none">
                                                      <a href="javascript:;" class="take_btn">Monday</a>
                                                      <a href="javascript:;" class="take_btn">Wednesday</a>
                                                      <a href="javascript:;" class="take_btn">Friday</a>
                                                  </div>
                                                }       

                                              </div>
                                              
                                          </div>
                                      </label>
                                  </div>

                              </div>


                              <div class="take_otp_wrapper">   
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    onChange={onChangeCaptcha}
                                    sitekey="6LdE29weAAAAAGn5HEG2TvNcD3UtfO1A_5ir4ZON"
                                    />
                                    
                                </div>                       
                              <div class="take_otp_wrapper d-none"><label for="inputPassword" class="take_step_subtitle">Please enter the otp to book your free demo class </label><div class="take_otp_input"><input type="" maxlength="6" minlength="6" class="form-control" name="demootp" id="demootp" placeholder=""/></div><button class="take_btn" onClick={()=>sendDemoOTP()} > { otpsent==0 ?'Send OTP':'Resend OTP' } </button> </div>                              

                            
                          </div>

                               </div>

                              <div class="take_step_btns">
                                  <a onClick={()=>classTimeModelDemo()} href="javascript:;" class="take_btn with_border take_prev ">
                                      Previous 
                                  </a> 
                                  <a onClick={()=>finishValidateDemo()}  class="take_btn take_next">
                                      Submit
                                  </a>
                                
                                  <a href="javascript:;" class="take_btn take_finish d-none">
                                      Start Free Trial
                                  </a>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        


              );
            }
          });
      

    }   

    function remindMe(){

           //localStorage.removeItem('isDuration');
           confirmAlert({ 
            customUI: ({ onClose }) => {
              
              return (           
                <div class="take_modal">
                <div class="take_modal_inner1">
                    <div class="take_modal_header">
                        <h5 class="take_modaltitle" id="exampleModalLabel">Remind</h5>
                      
                      </div>
                      <div class="take_modal_body">
                          <div class="take_step_wrapper">
                              
                              
                              <div class="take_step_body_wrapper">
                              <div class="take_step5 " data-target="step5">
                              <h3 class="take_step_title ">You will be reminded 15 min before the demo session!</h3>
                            
                          </div>

                               </div>

                              <div class="take_step_btns remind">
                                  <a onClick={() => { onClose(); }}  class="take_btn take_next">
                                      ok
                                  </a>
                                
                                
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        


              );
            }
          });
        
        
    }

    // demo end here 


    
	
		return (
            <>
                <div className="take_admin_main_wrapper">



                <Sidebar_inner />
               
                {isClass == 3 &&

                    <div>

                    <div class="take_top_header">               
                    <Header_Inner/>              
                    <AlertMessage  messageTypes={types} />
                    <h2 class="take_title h2">Dashboard</h2> 
                    <p></p>

                    </div>
                <div className="take_body">
                <div className="take_dashboard">
                    
                    
                    { nextPaymentDateData.payment_show == 1 && 
                        <div className="take_dashboard_boxes democomplate">                        
                            <div className="take_dashboard_box ">
                                <div className="take_left">
                                    <span className="take_startclass">{nextPaymentDateData.message}  </span>
                                </div>
                                <div className="take_right">
                                    <a href="javascript:;"  onClick={(event) => paymentModel()} className="take_btn" > Pay</a>
                                </div>
                            </div>
                        </div>
                    }




                    <div className="take_today_class">

                        
                        <h2 className="take_dash_title d-none">Today Class</h2>
                        
                        

                        { (ClassData.length>0)?  ClassData.map((classs,key)=>{  
                    let ctime = classs.class_time;       
                    const time = new Date(ctime);

                       return <div className="take_dashboard_box take_todayclass_box">
                            <div>
                                <div className="take_left">
                                    <div className="take_img">
                                        <img src={classs.instrumentimage} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="take_detail">
                                        <span></span>
                                        <h2 className="take_Classname h2">{classs.classtitle} Class (Today’s Class)</h2>

                                        <p className="class_time" ><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.85106 0.000254581C5.61966 -0.00485318 5.40335 0.122849 5.28765 0.322064C5.16691 0.526388 5.16691 0.781791 5.28765 0.986115C5.40335 1.18533 5.61966 1.31303 5.85106 1.30792H6.49497V2.64624C2.89312 2.98338 0.0559082 6.06355 0.0559082 9.80778C0.0559082 13.7717 3.2352 17 7.13888 17C11.0426 17 14.2218 13.7717 14.2218 9.80778C14.2218 6.06355 11.3846 2.98338 7.78278 2.64624V1.30792H8.42669C8.65809 1.31303 8.87441 1.18533 8.99011 0.986115C9.11084 0.781791 9.11084 0.526388 8.99011 0.322064C8.87441 0.122849 8.65809 -0.00485318 8.42669 0.000254581H5.85106ZM12.2851 2.60535C12.0185 2.61045 11.782 2.7688 11.6864 3.0191C11.5858 3.26429 11.6462 3.54523 11.8323 3.72912L13.2006 5.11852C13.3666 5.2922 13.6031 5.3586 13.8294 5.30241C14.0558 5.24112 14.2319 5.06233 14.2923 4.83247C14.3476 4.60261 14.2822 4.36253 14.1162 4.19907L12.7479 2.80967C12.6221 2.68197 12.4561 2.60535 12.2851 2.60535ZM7.13889 3.92329C10.3484 3.92329 12.934 6.54884 12.934 9.8078C12.934 13.0668 10.3484 15.6923 7.13889 15.6923C3.92942 15.6923 1.34373 13.0668 1.34373 9.8078C1.34373 6.54884 3.92942 3.92329 7.13889 3.92329ZM4.5532 6.52842C4.29162 6.53353 4.05518 6.69188 3.9596 6.94217C3.85899 7.18736 3.91936 7.46831 4.11052 7.6522L6.68614 10.2675C6.84712 10.4412 7.08355 10.5076 7.30993 10.4514C7.5363 10.3901 7.71237 10.2113 7.77273 9.98148C7.82807 9.75162 7.76267 9.51154 7.59163 9.34808L5.01601 6.73274C4.89528 6.60504 4.72927 6.52842 4.5532 6.52842Z" fill="#939D9F"/></svg> 
                                          {moment(classs.classtime).format("D MMM  YYYY  ( dddd )   hh:mm A")} 
                                        </p>

                                        <div className="take_processbar">
                                            <span className="take_proc_status"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="take_right"> 
                                       
                                       <div class="take_classstart">
                                           <p>Class Starts in</p>
                                           <h3>    <Timer roomid={classs.roomid}  expiryTimestamp={time} class_end_time={classs.class_end_time}  class_id={classs.id}  user_id={userId}  /> </h3>
                                       </div>
                                       
                                   </div> 

                                
                            </div>
                        </div>
                          }):<div>No class Today</div> }

                    </div>
                    <div className="take_today_class take_upcoming_classes">
                        <h2 className="take_dash_title d-none">Upcoming Classes</h2>
                        <div className="take_upcoming_boxes">

                        
                        { (UpcommingClassData.length>0)?  UpcommingClassData.map((classs,key)=>{  
                    let ctime = classs.class_time;       
                    const time = new Date(ctime);

                           return <div className="take_dashboard_box take_todayclass_box">
                                <div>
                                    <div className="take_left">
                                        <div className="take_img">
                                            <img src={classs.instrumentimage} class="img-fluid" alt=""/>
                                        </div>
                                        <div className="take_detail">
                                            
                                            <h2 className="take_Classname h2">{classs.classtitle} Class   <a className="take_btn day_btn">  {moment(classs.classtime).format("dddd")} </a></h2>

                                            <p><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.85106 0.000254581C5.61966 -0.00485318 5.40335 0.122849 5.28765 0.322064C5.16691 0.526388 5.16691 0.781791 5.28765 0.986115C5.40335 1.18533 5.61966 1.31303 5.85106 1.30792H6.49497V2.64624C2.89312 2.98338 0.0559082 6.06355 0.0559082 9.80778C0.0559082 13.7717 3.2352 17 7.13888 17C11.0426 17 14.2218 13.7717 14.2218 9.80778C14.2218 6.06355 11.3846 2.98338 7.78278 2.64624V1.30792H8.42669C8.65809 1.31303 8.87441 1.18533 8.99011 0.986115C9.11084 0.781791 9.11084 0.526388 8.99011 0.322064C8.87441 0.122849 8.65809 -0.00485318 8.42669 0.000254581H5.85106ZM12.2851 2.60535C12.0185 2.61045 11.782 2.7688 11.6864 3.0191C11.5858 3.26429 11.6462 3.54523 11.8323 3.72912L13.2006 5.11852C13.3666 5.2922 13.6031 5.3586 13.8294 5.30241C14.0558 5.24112 14.2319 5.06233 14.2923 4.83247C14.3476 4.60261 14.2822 4.36253 14.1162 4.19907L12.7479 2.80967C12.6221 2.68197 12.4561 2.60535 12.2851 2.60535ZM7.13889 3.92329C10.3484 3.92329 12.934 6.54884 12.934 9.8078C12.934 13.0668 10.3484 15.6923 7.13889 15.6923C3.92942 15.6923 1.34373 13.0668 1.34373 9.8078C1.34373 6.54884 3.92942 3.92329 7.13889 3.92329ZM4.5532 6.52842C4.29162 6.53353 4.05518 6.69188 3.9596 6.94217C3.85899 7.18736 3.91936 7.46831 4.11052 7.6522L6.68614 10.2675C6.84712 10.4412 7.08355 10.5076 7.30993 10.4514C7.5363 10.3901 7.71237 10.2113 7.77273 9.98148C7.82807 9.75162 7.76267 9.51154 7.59163 9.34808L5.01601 6.73274C4.89528 6.60504 4.72927 6.52842 4.5532 6.52842Z" fill="#939D9F"/></svg> 
                                               
                                            {moment(classs.classtime).format("D MMMM YYYY  hh:mm A")} 


                                            </p>    

                                            <div className="take_processbar">
                                                <span className="take_proc_status" ></span>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>

                            }):null }

                            
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            }

                {isClass == 2 &&

            <div>

            <div class="take_top_header">
            <Header_Inner/>               

            <h2 class="h2 take_title">Dashboard</h2> 
            <p>Demo Completed</p>

            </div>    

                <div className="take_body">
                <div className="take_dashboard">
                    <div className="take_dashboard_boxes democomplate">

                        
                        
                        <div className="take_dashboard_box ">
                            <div className="take_left">
                                <span className="take_startclass">Congratulations on Finishing the Free demo With Take5 Music. Now you can start enjoying the sessions. Please click to schedule regular Classes  </span>
                            </div>
                            <div className="take_right">
                                <a href="javascript:;"  onClick={(event) => paymentModel()} className="take_btn" ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.59375 14.3577C7.59375 15.0824 8.20312 15.6366 9 15.6366C9.79688 15.6366 10.4062 15.0824 10.4062 14.3577V9.24194H16.0312C16.8281 9.24194 17.4375 8.68774 17.4375 7.96301C17.4375 7.23828 16.8281 6.68407 16.0312 6.68407H10.4062V1.56833C10.4062 0.843603 9.79688 0.289398 9 0.289398C8.20312 0.289398 7.59375 0.843603 7.59375 1.56833V6.68407H1.96875C1.17188 6.68407 0.5625 7.23828 0.5625 7.96301C0.5625 8.68774 1.17188 9.24194 1.96875 9.24194H7.59375V14.3577Z" fill="white"/></svg> Click</a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div> 
            }


                {isClass == 1 &&
                <div>

                <div class="take_top_header">
                                
                <Header_Inner/>
                <h2 class="take_title h2">Dashboard</h2> 
                </div>

                { (ClassDataDemo.length>0)?  ClassDataDemo.map((classs,key)=>{  
                    let ctime = classs.class_time;       
                    const time = new Date(ctime);

              return <div class="take_body">
               <div class="take_dashboard take_demo_dash">

                <div className="take_dashboard_box ">
                         
                            <a href="javascript:;"  onClick={(event) => paymentModel()} className="take_btn" ><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.59375 14.3577C7.59375 15.0824 8.20312 15.6366 9 15.6366C9.79688 15.6366 10.4062 15.0824 10.4062 14.3577V9.24194H16.0312C16.8281 9.24194 17.4375 8.68774 17.4375 7.96301C17.4375 7.23828 16.8281 6.68407 16.0312 6.68407H10.4062V1.56833C10.4062 0.843603 9.79688 0.289398 9 0.289398C8.20312 0.289398 7.59375 0.843603 7.59375 1.56833V6.68407H1.96875C1.17188 6.68407 0.5625 7.23828 0.5625 7.96301C0.5625 8.68774 1.17188 9.24194 1.96875 9.24194H7.59375V14.3577Z" fill="white"/></svg> Pay now</a>
                            </div>
                           
                    

                   <div class="take_today_class">

                 
                      
                       <div class="take_dashboard_box take_todayclass_box">
                           <div>
                               <div>
                                   <div class="take_left">
                                      
                                       <div class="take_detail">
                                           <img src={classs.instrumentimage} class="img-fluid" alt=""/>
                                          
                                           <h2 class="take_Classname h2">Demo {classs.classtitle} Class
                                             
                                           </h2>

                                           <p  class="booked_time d-none">Booked {classs.bookedDay}</p>
                                       </div>
                                   </div>
                                   <div class="take_right"> 
                                       <span class="take_setting d-none"><svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.59013 1.47874C3.59013 2.29542 2.78645 2.95748 1.79507 2.95748C0.803678 2.95748 0 2.29542 0 1.47874C0 0.662054 0.803678 0 1.79507 0C2.78645 0 3.59013 0.662054 3.59013 1.47874ZM14.3605 1.47874C14.3605 2.29542 13.5569 2.95748 12.5655 2.95748C11.5741 2.95748 10.7704 2.29542 10.7704 1.47874C10.7704 0.662054 11.5741 0 12.5655 0C13.5569 0 14.3605 0.662054 14.3605 1.47874ZM7.18028 2.95748C8.17166 2.95748 8.97534 2.29542 8.97534 1.47874C8.97534 0.662054 8.17166 0 7.18028 0C6.18889 0 5.38521 0.662054 5.38521 1.47874C5.38521 2.29542 6.18889 2.95748 7.18028 2.95748Z" fill="#ABB8BA"/></svg></span>
                                       <div class="take_classstart">
                                           <p>Class Starts in</p>
                                           <h3>    <Timer roomid={classs.roomid}  expiryTimestamp={time} class_end_time={classs.class_end_time}  class_id={classs.id}  user_id={userId}  /> </h3>
                                       </div>
                                       
                                   </div> 
                               </div> 
                               <div class="take_teacherBox take_schedulebox">
                                   <div class="take_img">
                                       <svg width="25" height="28" viewBox="0 0 25 28" xmlns="http://www.w3.org/2000/svg"><path d="M17.0843 3.04587e-06C17.6577 -0.00134379 18.111 0.444122 18.1124 1.03808L18.1137 2.0505C21.834 2.34207 24.2916 4.87718 24.2956 8.76488L24.3103 20.1445C24.3156 24.3832 21.6527 26.9912 17.3843 26.9979L6.958 27.0114C2.71627 27.0168 0.0200198 24.3467 0.014686 20.0959L8.95077e-06 8.84992C-0.0053159 4.93657 2.36557 2.40822 6.08592 2.0667L6.08458 1.05427C6.08325 0.46032 6.52329 0.0135051 7.11001 0.0135051C7.69673 0.0121552 8.13677 0.457621 8.1381 1.05157L8.13944 1.9965L16.0602 1.9857L16.0588 1.04078C16.0575 0.446821 16.4975 0.001356 17.0843 3.04587e-06ZM17.6283 19.1672H17.615C17.0016 19.182 16.5095 19.6963 16.5229 20.3173C16.5242 20.9382 17.0189 21.4498 17.6323 21.4633C18.2577 21.462 18.7644 20.9477 18.7631 20.3132C18.7631 19.6788 18.255 19.1672 17.6283 19.1672ZM6.64063 19.1685C6.02724 19.1955 5.5472 19.7098 5.54853 20.3308C5.57653 20.9517 6.08325 21.4377 6.69664 21.4093C7.29803 21.3823 7.77674 20.868 7.74874 20.2471C7.7354 19.6396 7.24069 19.1672 6.64063 19.1685ZM12.1345 19.1618C11.5211 19.1901 11.0424 19.7031 11.0424 20.324C11.0704 20.945 11.5771 21.4296 12.1905 21.4026C12.7905 21.3743 13.2706 20.8613 13.2426 20.239C13.2292 19.6329 12.7345 19.1604 12.1345 19.1618ZM6.63397 14.3089C6.02058 14.3359 5.54186 14.8502 5.5432 15.4712C5.56987 16.0921 6.07791 16.5781 6.6913 16.5497C7.29136 16.5227 7.77007 16.0084 7.74207 15.3875C7.72873 14.78 7.23535 14.3075 6.63397 14.3089ZM12.1291 14.2616C11.5158 14.2886 11.0357 14.803 11.037 15.4239C11.0637 16.0449 11.5718 16.5295 12.1851 16.5025C12.7852 16.4741 13.2639 15.9612 13.2372 15.3402C13.2226 14.7328 12.7292 14.2603 12.1291 14.2616ZM17.623 14.2684C17.0096 14.2819 16.5295 14.7814 16.5309 15.4023V15.4172C16.5442 16.0381 17.0509 16.5092 17.6657 16.4957C18.2657 16.4809 18.7444 15.9666 18.7311 15.3456C18.7031 14.7517 18.2217 14.2671 17.623 14.2684ZM16.0628 4.06454L8.14211 4.07534L8.14344 5.16741C8.14344 5.74921 7.70473 6.20818 7.11801 6.20818C6.53129 6.20953 6.08992 5.75191 6.08992 5.17011L6.08858 4.13069C3.48834 4.39122 2.04954 5.9193 2.05353 8.84722L2.05487 9.26704L22.2434 9.24004V8.76758C22.1861 5.8653 20.7299 4.34262 18.1164 4.11584L18.1177 5.15526C18.1177 5.73571 17.6657 6.19603 17.0923 6.19603C16.5055 6.19738 16.0642 5.73841 16.0642 5.15796L16.0628 4.06454Z" fill="#F68B00"></path></svg>
                                   </div>
                                   <div class="take_info">
                                       <h5>Scheduled on :</h5>
                                       <p> {classs.classdate} <span> {classs.classactutime} </span> <span>{classs.classday}</span></p>
                                   </div>
                               </div>
                               <div class="take_teacherBox">
                                   <div class="take_img">
                                       <img src={classs.teacherimage} alt=""/>
                                   </div>
                                   <div class="take_info">
                                       <span>TEACHER</span>
                                       <h5>{classs.teachername}</h5>
                                       <p>{classs.about}</p>
                                   </div>
                               </div>

                               <div class="justify-content-end"  onClick={(event) => remindMe()}>
                                   <a href="#" class="take_btn take_remind">Remind me <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94634 5.27108L0.771291 1.91435C0.629728 1.76476 0.631173 1.52542 0.77418 1.37584L1.34188 0.787961C1.48777 0.638373 1.72178 0.638373 1.86624 0.789456L5.90655 5.00033C5.97878 5.07512 6.01489 5.17236 6.01489 5.27108C6.01489 5.36981 5.97878 5.46704 5.90655 5.54184L1.86624 9.75271C1.72178 9.90379 1.48777 9.90379 1.34188 9.75421L0.77418 9.16633C0.631173 9.01674 0.629728 8.7774 0.771291 8.62782L3.94634 5.27108Z" fill="white"/></svg>
                                       </a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            }):null }
           </div>        
               
            }

            {isClass <= 0 &&
             <>
                  <div class="take_top_header">
                 <Header_Inner/>     
                 </div>
                <div class="take_body">
                    
                <div class="take_dash_empty text-center">
                    <img src="assets/images/empty.png" class="img-fluid" alt=""/>
                    <h2 className="h2">You don’t have any classes<br/> started yet.</h2> 
                    <p>Tap + and start a new course!</p>
                    <div class="text-center">
                        <a href="javascript:;" onClick={(event) => instrumentModelDemo(instrumentData)} class="take_btn">Demo Class <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.59375 14.3577C7.59375 15.0824 8.20312 15.6366 9 15.6366C9.79688 15.6366 10.4062 15.0824 10.4062 14.3577V9.24194H16.0312C16.8281 9.24194 17.4375 8.68774 17.4375 7.96301C17.4375 7.23828 16.8281 6.68407 16.0312 6.68407H10.4062V1.56833C10.4062 0.843603 9.79688 0.289398 9 0.289398C8.20312 0.289398 7.59375 0.843603 7.59375 1.56833V6.68407H1.96875C1.17188 6.68407 0.5625 7.23828 0.5625 7.96301C0.5625 8.68774 1.17188 9.24194 1.96875 9.24194H7.59375V14.3577Z" fill="white"/></svg></a>
                    </div>
                    <div class="text-center d-none">
                        <a href="javascript:;"  class="take_btn with_border">Start a Free Trial</a>
                    </div>
                </div>
                </div>
                 </>
                
            }    
               
              </div>
          

        </>
    );
	
}
export default StudentDashboard;