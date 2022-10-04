import React, { useContext } from 'react';
import ProcessTake5 from './ProcessTake5';
import LoginWithEmail from './LoginWithEmail';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import { authContext } from '../auth/AuthContext';
//import { Redirect } from 'react-router';
import { Redirect } from "react-router-dom";
import {Link } from "react-router-dom";
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './main.css';
import { Button } from 'react-bootstrap';
import Loader from './Loader';

const Login =(props)=>{
 const [selected, setSelected] = useState('');
    const [isLoading, setLaoding] = useState(false);
    const {setAuthData} = useContext(authContext);
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
       Api.loginWithMobileAndEmail(JSON.stringify(data)).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
                setAuthData(response.data.data);
                e.target.reset(); // reset after form submit   
               
                alert.show(response.data.message, {
                    timeout: 1000, // custom timeout just for this one alert
                    type: 'success',
                    onOpen: () => {
                       
                     // console.log('hey')
                    },  // callback that will be executed after this alert open
                    onClose: () => {
                        //return <Redirect to='/' />
                        if(response.data.data.is_summercamp==1){
                            window.location.href = '/summercamp2022_thanks';
                          }else{
                            window.location.href = '/student-dashboard-0';
                        }
                     // console.log('closed')
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

                <h2 className="h2">Login</h2>
             
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div  class="form-group">
                        <label>Mobile Number / Email</label>
                        <div class="auth_input opt_feild">
                            
                            <input type="text" {...register('emailMobile', { required: true })} name="emailMobile" id="emailMobile" class="form-control" placeholder=""/>
                            {errors.emailMobile && <p class="error">Mobile Number / Email is required.</p>}
                        </div>
                    </div>
                    <div  class="form-group">
                        <label>Password</label>
                        <div class="auth_input">
                            <input name="password" {...register('password', { required: true  })} type="password" name="password" id="password" class="form-control" placeholder="Enter your password"/>
                            {errors.password && <p class="error">Password is required.</p>}
                        </div>
                    </div>

                    <button class="take_btn auth_login_btn" type="submit"> Submit <img src="assets/images/arrowright.png" alt=""/></button>      

                </form>
                <div class="auth_forget_password text-center">
                    <span class="take_orange"> <Link to ="forgot_password" class="take_orange">Forgot Password</Link> </span>
                </div>
                <p class="auth_create_account text-center">Don’t have an account ?  <Link to ="register" class="take_orange">create free account</Link>  </p>
            </div>
            <ProcessTake5/>
        </div>
    </div>
               
		</>
	);
	
}
export default Login;