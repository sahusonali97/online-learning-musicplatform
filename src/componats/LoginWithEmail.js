import React, { useContext } from 'react';
import Header from './Header';
import './main.css';
import Footer from './Footer';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import { authContext } from '../auth/AuthContext';
//import { Redirect } from 'react-router';
import { Redirect } from "react-router-dom";
import {Link } from "react-router-dom";
import './main.css';
import { Button } from 'react-bootstrap';

const LoginWithEmail =(props)=>{
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

       // alert(JSON.stringify(data));
       Api.loginWithEmail(JSON.stringify(data)).then(
        (response)=>{
            // console.log(response.data.data);
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
                       let classid = localStorage.getItem('plan_class_id');
                       if(classid){
                        window.location.href = '/plans-'+classid; 
                       }else{
                        window.location.href = '/student-dashboard';
                        }
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
	return (
			<>
				<Header />

                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                <div class="account-content">
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-7 col-lg-6 login-left">
                                            <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Login"/>
                                        </div>
                                        <div class="col-md-12 col-lg-6 login-right">
                                            <div class="login-header">
                                                <h3>Login With Email<span></span></h3>
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div class="form-group form-focus">
                                                    <input {...register('email', {  required: "Email is required",
                                                  pattern: {
                                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                    message: "Invalid email address"
                                                  } })} type="email" class="form-control floating"/>
                                                  {errors.email && <p class="error">*{errors.email.message}</p>}
                                                    <label class="focus-label">Email</label>
                                                </div>
                                                <div class="form-group form-focus">
                                                    <input {...register('password', { required: true })} type="password" class="form-control floating"/>
                                                    {errors.password && <p class="error">Password is required.</p>}
                                                    <label class="focus-label">Password</label>
                                                </div>

                                                <div class="text-right">
                                                    <Link class="forgot-link"  to="/forgot_password"> 
                                                            Forgot Password ?
                                                    </Link>   
                                                </div>

                                                <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>   

                                                
                                                <div class="login-or">
                                                    <span class="or-line"></span>
                                                    <span class="span-or">or</span>
                                                </div>
                                                 <div class="btn">
                                                 <Link to="/login"><Button variant="outline-success"  type="submit">Login With Mobile Number</Button>{' '}</Link>
                                             </div>
                                                
                                                <div class="text-center dont-have">Don’t have an account? <Link to="/register"><a>Register With Email</a></Link></div>
                                            </form>
                                        </div>
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
export default LoginWithEmail;