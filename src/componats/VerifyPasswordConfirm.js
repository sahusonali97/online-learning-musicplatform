
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

const VerifyPasswordConfirm =(props)=>{
  const [isLoading, setLaoding] = useState(false);
    const alert = useAlert()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

   
      const onSubmit = (data,e) => {
      let  user_id = localStorage.getItem("forgotuserid");
      if(user_id){
        setLaoding(true);
       Api.forgotpasswordUpdate(JSON.stringify(data),user_id).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
              localStorage.removeItem("forgotuserid");

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
                        window.location.href = '/login';
                      //console.log('closed')
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
     
        }else{
          setLaoding(false);
            let  message = 'Invalid details';
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
                     
                        <h1>Create Password</h1>
                      


                        <form onSubmit={handleSubmit(onSubmit)}>

                          
                        <div  class="form-group">
                                <label>Password</label>
                                <div class="auth_input">
                                    <input {...register('password', { required: true })} type="password" name="password" id="password" class="form-control" placeholder=""/>
                                    {errors.password && <p class="error">Password is required.</p>}
                                </div>
                            </div>
                            <div  class="form-group">
                                <label>Confirm Password</label>
                                <div class="auth_input">
                                    <input {...register('confirm_password', { required: true })} type="password" name="confirm_password" id="confirm_password" class="form-control" placeholder=""/>
                                    {errors.confirm_password && <p class="error">Confirm Password is required.</p>}
                                </div>
                            </div>

                            <button class="take_btn auth_login_btn" type="submit">Submit <img src="assets/images/arrowright.png" alt=""/></button>      
                        </form>
                        
                        <p class="auth_create_account text-center">Already have an account ? <Link to ="login" class="take_orange">Login</Link>  </p>
                    </div>
                    <ProcessTake5/>
                </div>
            </div>

        </>
    );
	
}
export default VerifyPasswordConfirm;