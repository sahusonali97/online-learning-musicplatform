import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import {
	Link
	
 } from "react-router-dom";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { useAlert } from 'react-alert';
import { CartContext } from '../auth/CartContext';

import { useForm } from 'react-hook-form';




const Instruments =(props)=>{
    const { cat_id,subcategoryId } = useParams();
  	const [instrumentData,setInstrumentData] = useState([]);
    const [step1,setStep1] = useState(1);
    const [step2,setStep2] = useState(0);
    const [step3,setStep3] = useState(0);
    const [step4,setStep4] = useState(0);
    
 
    
    const alert = useAlert()
  

    useEffect(()=>{
        Api.getInstrument().then(
            (response)=>{
              //  console.log(response.data.data);
              setInstrumentData(response.data.data);
               
               
            }
        )
	
	}, [setInstrumentData]);

    function funStep1(){
        setStep1(0);
        setStep2(1);
        console.log(step1);
        console.log(step2);

    }


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });
    

      const onSubmit = (data,e) => {

        console.log("dddd");

      }


       
    function Popup1 (){


      

        confirmAlert({ 
            closeOnEscape: false,
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2>
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12 col-sm-9  text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                
                                                <p>Fill all form field to go to next step</p>
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform" onSubmit={handleSubmit(onSubmit)}>
                                                         
                                                            <ul id="progressbar">
                                                                <li class="active" id="account"><strong>Login</strong></li>
                                                                <li id="personal"><strong>Instrument </strong></li>
                                                                <li id="payment"><strong>Class Days</strong></li>
                                                                <li id="confirm"><strong>Class Time</strong></li>
                                                                <li id="confirm"><strong>Duration </strong></li>
                                                                <li id="confirm"><strong>Book free trail</strong></li>
                                                            </ul> 

                                                            
                                                          

                                                            <fieldset>
                                                                <div class="form-card col-md-12">
                                                                    <h2 class="fs-title">Login </h2>
                                                                    <div class="col-md-12"> 
                                                                    <input id="emailMobile"  {...register('emailMobile', { required: true })} type="text" name="emailMobile" placeholder="Email Id /Mobile Number" /> 
                                                                    {errors.emailMobile && <p class="error"> First Name is required.</p>}
                                                                    <input type="password" name="password" id="password" placeholder="Password" />
                                                                    </div>
                                                                </div> 
                                                                <input type="button" name="next" class="next action-button" onClick={(e) => { Popup2() }} value="Next Step" />
                                                            </fieldset>
                                                          
                                                            


                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };



    function Popup2 (){

        var emailMobile = document.getElementById('emailMobile');
        var pass = document.getElementById('password');
        if(emailMobile.value &&  pass.value){
            const  parm ={};
            parm['emailMobile'] = emailMobile.value;
            parm['password'] = pass.value;
            console.log(parm);

            Api.loginUserWithMailMobile(parm).then(
                (response)=>{
                     console.log(response.data.data);
                     if(response.data.success){
                       // e.target.reset(); // reset after form submit   
                        alert.show(response.data.message, {
                            timeout: 3000, // custom timeout just for this one alert
                            type: 'success',
                            /*onOpen: () => {
                              console.log('hey')
                            }, // callback that will be executed after this alert open
                            */
                            onClose: () => {
                                //return <Redirect to='/LoginWithEmail' />
                                window.location.href = '/LoginWithEmail';
                              //console.log('closed')
                            } 
                        });
        
                    

        confirmAlert({ 
            closeOnEscape: false,
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2>
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12 col-sm-9  text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                
                                                <p>Fill all form field to go to next step</p>
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform">
                                                         
                                                        <ul id="progressbar">
                                                                <li  id="account"><strong>Login</strong></li>
                                                                <li class="active" id="personal"><strong>Instrument </strong></li>
                                                                <li id="payment"><strong>Class Days</strong></li>
                                                                <li id="confirm"><strong>Class Time</strong></li>
                                                                <li id="confirm"><strong>Duration </strong></li>
                                                                <li id="confirm"><strong>Book free trail</strong></li>
                                                            </ul> 

                                                            <fieldset>
                                                                <div class="form-card">
                                                                    <h2 class="fs-title">Instrument</h2> <input type="text" name="fname" placeholder="First Name" /> 
                                                                </div> <input type="button" name="previous" class="previous action-button-previous" onClick={(e) => { Popup1() }} value="Previous" /> <input type="button" name="next" class="next action-button" onClick={(e) => { Popup3() }} value="Next Step" />
                                                            </fieldset>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
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




        }else if(!emailMobile.value){
            let message = 'Please enter Email / Mobile';
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

        }else{

            let message = 'Please enter Password';
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
      
    };


    function Popup3 (){
        confirmAlert({ 
            closeOnEscape: false,
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2> 
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12  text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                <p>Fill all form field to go to next step</p>
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform">
                                                         
                                                            <ul id="progressbar">
                                                                <li  id="account"><strong>Login</strong></li>
                                                                <li  id="personal"><strong>Instrument </strong></li>
                                                                <li class="active" id="payment"><strong>Class Days</strong></li>
                                                                <li id="confirm"><strong>Class Time</strong></li>
                                                                <li id="confirm"><strong>Duration </strong></li>
                                                                <li id="confirm"><strong>Book free trail</strong></li>
                                                            </ul> 

                                                             
                                                            <fieldset>
                                                                <div class="form-card">
                                                                    <h2 class="fs-title">Class Days </h2>
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-md-12"> <label class="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                                                       
                                                                    </div>
                                                                    
                                                                </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" onClick={(e) => { Popup2() }} /> <input type="button" name="make_payment" class="next action-button" value="Next Step" onClick={(e) => { Popup4() }} />
                                                            </fieldset>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };


    function Popup4(){
        confirmAlert({
            closeOnEscape: false,
            closeOnClickOutside: false, 
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2> 
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12  text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                <p>Fill all form field to go to next step</p>
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform">
                                                         
                                                            <ul id="progressbar">
                                                                <li  id="account"><strong>Login</strong></li>
                                                                <li  id="personal"><strong>Instrument </strong></li>
                                                                <li  id="payment"><strong>Class Days</strong></li>
                                                                <li class="active" id="confirm"><strong>Class Time</strong></li>
                                                                <li id="confirm"><strong>Duration </strong></li>
                                                                <li id="confirm"><strong>Book free trail</strong></li>
                                                            </ul> 

                                                             
                                                            <fieldset>
                                                                <div class="form-card">
                                                                    <h2 class="fs-title">Class Time </h2>
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-md-12"> <label class="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                                                       
                                                                    </div>
                                                                    
                                                                </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" onClick={(e) => { Popup3() }} /> <input type="button" name="make_payment" class="next action-button" value="Next Step" onClick={(e) => { Popup5() }} />
                                                            </fieldset>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };


    function Popup5 (){
        confirmAlert({ 
            closeOnEscape: false,
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2> 
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12  text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                <p>Fill all form field to go to next step</p>
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform">
                                                         
                                                            <ul id="progressbar">
                                                                <li  id="account"><strong>Login</strong></li>
                                                                <li  id="personal"><strong>Instrument </strong></li>
                                                                <li id="payment"><strong>Class Days</strong></li>
                                                                <li id="confirm"><strong>Class Time</strong></li>
                                                                <li class="active"  id="confirm"><strong>Duration </strong></li>
                                                                <li id="confirm"><strong>Book free trail</strong></li>
                                                            </ul> 

                                                             
                                                            <fieldset>
                                                                <div class="form-card">
                                                                    <h2 class="fs-title">Duration </h2>
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-md-12"> <label class="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                                                       
                                                                    </div>
                                                                    
                                                                </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" onClick={(e) => { Popup4() }} /> <input type="button" name="make_payment" class="next action-button" value="Next Step" onClick={(e) => { Popup6() }} />
                                                            </fieldset>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };


    function Popup6(){
        confirmAlert({ 
            closeOnEscape: false,
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2> 
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12  text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                <p>Fill all form field to go to next step</p>
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform">
                                                         
                                                            <ul id="progressbar">
                                                                <li  id="account"><strong>Login</strong></li>
                                                                <li  id="personal"><strong>Instrument </strong></li>
                                                                <li  id="payment"><strong>Class Days</strong></li>
                                                                <li id="confirm"><strong>Class Time</strong></li>
                                                                <li id="confirm"><strong>Duration </strong></li>
                                                                <li class="active" id="confirm"><strong>Book free trail</strong></li>
                                                            </ul> 

                                                             
                                                            <fieldset>
                                                                <div class="form-card">
                                                                    <h2 class="fs-title">Book free trail </h2>
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-md-12"> <label class="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                                                       
                                                                    </div>
                                                                    
                                                                </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" onClick={(e) => { Popup5() }} /> <input type="button" name="make_payment" class="next action-button" value="Confirm" onClick={(e) => { Popup7() }} />
                                                            </fieldset>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };


    function Popup7(){
        confirmAlert({ 
            
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                               <h2><strong>Take5 Music</strong></h2> 
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>

                              
                                <div class="container-fluid" id="grad1">
                                    <div class="row justify-content-center mt-0">
                                        <div class="col-md-12 text-center p-0 mt-3 mb-2">
                                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                               
                                                <div class="row">
                                                    <div class="col-md-12 mx-0">
                                                        <form id="msform">
                                                         
                                                            
                                                            

                                                          
                                                            <fieldset>
                                                                <div class="form-card">
                                                                    <div class="row justify-content-center">
                                                                        <div class="col-md-12 text-center">
                                                                            <h5>You Have Successfully Booked </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </fieldset>
                                                         

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };



	return (
			<>
				<Header  />
				
                <div class="take_section take_instrument_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="take_heading_wrapper text-center">
                           
                            <h2 className="h2">Instruments</h2>
                            <p>Our Psychological Model is accurate, verified and tested over thousands of individuals.<br/>The most meaningful social media platform, ever.</p>
                        </div>

                        <div class="row">
                        { instrumentData.map((iitem,key)=>{  
                           return <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                <div class="take_instrument_box text-center">
                                    <span class="take_icon">
                                        <img src={iitem.img} class="img-fluid" alt=""/>
                                    </span>
                                    <h2 className="h2">{iitem.iname}</h2>
                                    <h5>{iitem.number_of_teacher} Teachers</h5>
                                </div>
                            </div>
                                })}
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>

                
				<Footer/>
		</>
	);
	
}
export default Instruments;