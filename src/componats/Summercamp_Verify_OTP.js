import React, { useState } from 'react';

import ProcessTake5 from './ProcessTake5';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import {Link } from "react-router-dom";
import './main.css';
import { Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import OtpInput from 'react-otp-input';
import Loader from './Loader';


const Summercamp_Verify_OTP =(props)=>{
    const alert = useAlert()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });


      
      const [isLoading, setLaoding] = useState(false);

      const [otp,handleChange] = useState('');

      const onSubmit = (data,e) => {
      let  user_id = localStorage.getItem("registeruserid");
      let  digittotal  = (otp.toString().length);   
      if(digittotal==4){
        setLaoding(true);
       Api.verifyRegisterOTP(user_id,otp).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
             // localStorage.removeItem("registeruserid");

                e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success',
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    */
                    onClose: () => {
                        //return <Redirect to='/LoginWithEmail' />
                        window.location.href = '/register-password';
                      //console.log('closed')
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
        ) 
      }else{
        setLaoding(false);
        let message = 'Please Enter OTP';
        alert.show(message, {
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
	
		return (
            <>
               {isLoading ?  <Loader/> :null}
             <div class="auth_main_wrapper Signup">
                <div class="auth_login_wrapper">
                    <div class="auth_detail">
                        <div class="auth_logo">
                            <a href="javascript:;"><img src="assets/images/logonew.png" class="img-fluid" alt=""/></a>
                        </div>
                        <Link to="summercamp2022" class="auth_goback"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.242742 7.80868L5.549 13.8627C5.87275 14.2321 6.3978 14.2321 6.72155 13.8627C7.04536 13.4933 7.04536 12.8944 6.72155 12.5249L2.83067 8.08573L17.002 8.08573C17.4598 8.08573 17.8311 7.66217 17.8311 7.13978C17.8311 6.61747 17.4598 6.19383 17.002 6.19383L2.83067 6.19383L6.72142 1.75462C7.04523 1.38517 7.04523 0.786269 6.72142 0.41682C6.55957 0.232247 6.34732 0.139771 6.13514 0.139771C5.92296 0.139771 5.71077 0.232247 5.54886 0.41682L0.242742 6.47088C-0.0810721 6.84033 -0.0810721 7.43923 0.242742 7.80868Z" fill="#F68B00"/></svg> Go Back</Link>
                        <h1>Let’s verify</h1>
                      


                        <form onSubmit={handleSubmit(onSubmit)} class="auth_opt_form">

                            <div  class="form-group">
                                <label>Enter OTP</label>
                                <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={4}
                            isInputNum={true} 
                            containerStyle={'auth_input auth_opt_feild'}
                            inputStyle={'form-control'}
                            separator={<span class="setrator"></span>}
                          />
                            </div>

                            <button class="take_btn auth_login_btn" type="submit"> Verify OTP <img src="assets/images/arrowright.png" alt=""/></button>      
                        </form>
                        
                        <p class="auth_create_account text-center">Already have an account ? <Link to ="login" class="take_orange">Login</Link>  </p>
                    </div>
                    <ProcessTake5/>
                </div>
            </div>

        </>
    );
	
}
export default Summercamp_Verify_OTP;