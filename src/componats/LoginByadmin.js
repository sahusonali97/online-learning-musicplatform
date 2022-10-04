import React, { useEffect,useContext } from 'react';
import ProcessTake5 from './ProcessTake5';
import LoginWithEmail from './LoginWithEmail';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import { authContext } from '../auth/AuthContext';
import {Link } from "react-router-dom";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './main.css';


const LoginByadmin =(props)=>{
    const { stid } = useParams();

    const {setAuthData} = useContext(authContext);


    //function LoginByadmin(stid){

     useEffect(()=>{

        Api.studentloginbyadmin(stid).then(
            (response)=>{
 
                if(response.data.success){
                    setAuthData(response.data.data);
                    window.location.href = '/student-dashboard-0';   
                  /*  alert.show(response.data.message, {
                        timeout: 1000, // custom timeout just for this one alert
                        type: 'success',
                        onOpen: () => {
                           
                         // console.log('hey')
                        },  // callback that will be executed after this alert open
                        onClose: () => {
                            //return <Redirect to='/' />
                            window.location.href = '/student-dashboard';
                         // console.log('closed')
                        } 
                        
                    });*/


                }
               
            }
        );

    },);
   //LoginByadmin(stid);


	return (
			<>
            <div class="auth_main_wrapper">
        <div class="auth_login_wrapper">
            <div class="auth_detail">
                <div class="auth_logo">
                    <a href="/"><img src="assets/images/logo.png" class="img-fluid" alt=""/></a>
                </div>

                <h1>Login</h1>
             
                
               
            </div>
            <ProcessTake5/>
        </div>
    </div>
               
		</>
	);
	
}
export default LoginByadmin;