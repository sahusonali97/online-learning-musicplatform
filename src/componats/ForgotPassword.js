import React, { useContext } from 'react';

import ProcessTake5 from './ProcessTake5';

import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import { authContext } from '../auth/AuthContext';
//import { Redirect } from 'react-router';

import {Link } from "react-router-dom";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Loader from './Loader';

const ForgotPassword =(props)=>{
  const [isLoading, setLaoding] = useState(false);
    const [otpBox, setOTPBox] = useState(0);
    const alert = useAlert();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

      const onSubmit = (data,e) => {
        setLaoding(true);
       // alert(JSON.stringify(data));
       Api.forgotpasswordWithEmailANDMobile(JSON.stringify(data)).then(
        (response)=>{
            // console.log(response.data.data);
             if(response.data.success){
              
                localStorage.setItem("forgotuserid",response.data.data);
              //  e.target.reset(); // reset after form submit   
               
                alert.show(response.data.message, {
                    timeout: 4000, // custom timeout just for this one alert
                    type: 'success',
                    onOpen: () => {
                       
                     // console.log('hey')
                    },  // callback that will be executed after this alert open
                    onClose: () => {
                        //return <Redirect to='/' />
                         window.location.href = '/verify-OTP-forgot';
                     // console.log('closed')
                    } 
                    
                });

             }else{
              setLaoding(false);
               // console.log(response.data.message);
                alert.show(response.data.message, {
                    timeout: 4000, // custom timeout just for this one alert
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
	return (
			<>

{isLoading ?  <Loader/> :null}
<div class="auth_main_wrapper">
        <div class="auth_login_wrapper">
            <div class="auth_detail">
                <div class="auth_logo">
                    <a href="/"><img src="assets/images/logonew.png" class="img-fluid" alt=""/></a>
                </div>

                <h2 className="h2">Forgot Password</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div  class="form-group">
                        <label>Mobile Number / Email</label>
                        <div class="auth_input opt_feild">
                            
                            <input type="text" {...register('emailMobile', { required: true })} name="emailMobile" id="emailMobile" class="form-control" placeholder=""/>
                            {errors.emailMobile && <p class="error">Mobile Number / Email is required.</p>}
                        </div>
                    </div>
                    

                    <button class="take_btn auth_login_btn" type="submit"> Get OTP <img src="assets/images/arrowright.png" alt=""/></button>      

                </form>
                
                <p class="auth_create_account text-center">Already have an account ?  <Link to ="login" class="take_orange">Login</Link>  </p>
            </div>
            <ProcessTake5/>
        </div>
    </div>

				               
		</>
	);
	
}
export default ForgotPassword;