import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import {Link } from "react-router-dom";
import  { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './main.css';
import { Button } from 'react-bootstrap';


const ForgotPasswordMobile =(props)=>{
const [selected, setSelected] = useState('IN');
const [otpBox, setOTPBox] = useState(0);

console.log(selected);

     const alert = useAlert()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

      const onSubmit = (data,e) => {

     
       Api.forgotpasswordWithMobile(JSON.stringify(data)).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
                
                if(response.data.is_varify){
                    e.target.reset();
                    setOTPBox(0);
                 }else{
                    setOTPBox(1);
                }
               // console.log("ssssss");
                //e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 4000, // custom timeout just for this one alert
                    type: 'success'
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    onClose: () => {
                      console.log('closed')
                    } */
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

                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="account-content">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 col-lg-6 login-left">
                                            <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login"/>
                                        </div>
                                        <div className="col-md-12 col-lg-6 login-right">
                                            <div className="login-header">
                                                <h3>Forgot Password <span></span></h3>
                                            </div>
                                            <form  onSubmit={handleSubmit(onSubmit)}>
                                                <div className="phone">
                                                      <div className="CountryCode">
                                               <ReactFlagsSelect
                                                selected={selected} 
                                                {...register('countrycode')}
                                                onSelect={code => setSelected(code)}
                                                searchable
                                                searchPlaceholder="Search countries"
                                                />
                                                 {errors.countrycode && <p class="error"> Country is required.</p>}
                                                      </div>
                                                      <div >
                                                      <input {...register('mobile', { required: true })}  className="form-control floating" type="text" name="mobile" placeholder="Mobile"/>
                                                      {errors.mobile && <p class="error"> Mobile is required.</p>}
                                                      </div>
                                                </div>

                                              



                                                {(otpBox == 1 ) ? (
                                                <div className="form-group form-focus">
                                                    <input  {...register('otp', { required: true })}  type="Number" className="form-control floating"/>
                                                    <label className="focus-label">Please Enter OTP</label>
                                                </div>
                                                ) : null}

                                                 <input {...register('selectedcountry')} name="selectedcountry" id="hide-input" value={selected} />
                                                 
                                                <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">{ otpBox==1 ?'Verify OTP':'Reset Password' }</button>      

                                                <div className="login-or">
                                                    <span className="or-line"></span>
                                                    <span className="span-or">or</span>
                                                </div>
                                                 <div className="btn">
                                                    <Link to="/forgot_password"><Button variant="outline-success"  type="submit">Forgot Password With Email</Button>{' '}</Link>
                                                </div>
                                                
                                               
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
export default ForgotPasswordMobile;