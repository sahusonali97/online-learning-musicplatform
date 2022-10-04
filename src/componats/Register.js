import React, {  useEffect,useState } from 'react';

import ProcessTake5 from './ProcessTake5';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import {Link } from "react-router-dom";
import './main.css';
import axios from 'axios';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addDays,getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import Loader from './Loader';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';




const Register =(props)=>{

  const [dobip, setdobip] = useState(false);
  const [className, setclassName] = useState('col-lg-6 col-md-6 col-sm-6 hide_calander');

     const [startDate, setStartDate] = useState(null);
     const [isLoading, setLaoding] = useState(false);
     const years = range(1990, getYear(new Date()) + 1, 1);
     const months = [
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "November",
       "December",
     ];



     const onChangeNumber = (value, country, e, formattedValue) => {
      let country_Code= country.countryCode;
      let dial_Code= country.dialCode;
      let dial_Codelength= dial_Code.length;
      value = value.substring(dial_Codelength);
      setValue('mobile',value);
      setValue('dialCode',dial_Code);
      setValue('countryCode',country_Code);
      setCountryCode(countryCode);
      }



    const [countryCode, setCountryCode] = useState('IN');
   
    const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		console.log('haresh'+res.data.country_code);
      	setCountryCode(res.data.country_code)
	  }

    getData();
    const alert = useAlert()
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

     

      const onSubmit = (data,e) => {
        setLaoding(true);
         //console.log(data);   
       // alert(JSON.stringify(data));
      // data['countryCode'] = countryCode;
      // data['dob'] = startDate;
       // console.log(data);    return;
       Api.registerUserWithMail(JSON.stringify(data)).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
                e.target.reset(); // reset after form submit   
                localStorage.setItem("registeruserid",response.data.data);
                alert.show(response.data.message, {
                    timeout: 2000, // custom timeout just for this one alert
                    type: 'success',
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    */
                    onClose: () => {
                       // return <Redirect to='/verify-OTP' />
                        window.location.href = '/verify-OTP';
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


      }


      const onChangeDOB = (data,e) =>{
        let new_dob=moment(data).format("DD/MM/YYYY");
        setValue('dob',new_dob);
        if(!dobip){
          setclassName('col-lg-6 col-md-6 col-sm-6  hide_calander');
        }
      } 
      const eventTarget= document.getElementById('root');
      let target=eventTarget.addEventListener('click', (e) => {
        let is_cal=false;
        if(e.target.classList)
       {
        let test= e.target.classList; 
        let substring='react-calendar';
        is_cal= (test[0] && test[0].indexOf(substring)!=-1);
        }
        console.log(is_cal);
        
        if(e.target.id && e.target.id==="dob"){
          setclassName('col-lg-6 col-md-6 col-sm-6  show_calander');
        }
        if(is_cal ||(e.target.tagName && e.target.tagName=="ABBR") ||(e.target.tagName && e.target.tagName=="INPUT"))
        {
            
        }else{
          setclassName(' col-lg-6 col-md-6 col-sm-6 hide_calander');
        }
        return(e.target);
      });
      
	
		return (
            <>
             {isLoading ?  <Loader/> :null}
             <div class="auth_main_wrapper Signup">
        <div class="auth_login_wrapper">
            <div class="auth_detail">
                <div class="auth_logo">
                    <a href="/"><img src="assets/images/logonew.png" class="img-fluid" alt=""/></a>
                </div>

                <h2 className="h2">Create new Account</h2>
                

                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div  class="form-group">
                        <label>First  Name</label>
                        <input type="text" {...register('name', { required: true })} name="name" id="" placeholder="Enter First Name" class="form-control" />
                        {errors.name && <p class="error">First Name is required.</p>}
                    </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6">
                    <div  class="form-group">
                        <label>Last Name</label>
                        <input type="text" {...register('last_name', { required: true })} name="last_name" placeholder="Enter Last Name" id="last_name" class="form-control" />
                        {errors.last_name && <p class="error">Last Name is required.</p>}
                    </div>
                    </div>



                    <div class="col-lg-6 col-md-6 col-sm-6">
                    <div  class="form-group">
                        <label>Email Address</label>
                        <input type="text"  {...register('email', { required: true,pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        }, })} name="email" id="" class="form-control"  placeholder="Enter Email Address"/>
                        {errors.email && <p class="error">Please enter a valid email Address.</p>}
                    </div>

                    </div>
                

                    <div class="col-lg-6 col-md-6 col-sm-6">
                            <div  class="form-group">
                            <label>Mobile Number</label>
       
                                <PhoneInput
                                inputProps={{
                                  name: 'phone',
                                  required: true,
                                  autoFocus: true
                                }}
                                inputClass="form-control widthcls"
                                onChange={onChangeNumber}
                                country={countryCode.toLowerCase()}
                                enableSearch={true}
                                containerClass=""
                                
                              />
            
                          </div>
                          {errors.mobile && <p class="error">Mobile Number is required.</p>}

                          <input type="text" name="mobile" {...register('mobile', { required: true ,pattern: {
                                          value: /^[1-9]\d*(\.\d+)?$/,
                                          message: 'Enter a valid email',
                                      },})}style={{opacity:0,width:'0%',height:'0%'}}/> 
                      </div>
                         




                    <div class="col-lg-6 col-md-6 col-sm-6">
                            <div  class="form-group">
                                <label>Date of Birth</label>
                                <div class="input-group date_picker">
                                <Calendar onChange={(value, event) => onChangeDOB(value, event)} value={new Date()} className={className} maxDate={new Date()}/>
                               <input id="dob" type="text" {...register('dob', { required: true })} name="dob" placeholder="DD/MM/YYYY"  id="dob" class="form-control"  readOnly />     


                          {/*      <DatePicker
                                    renderCustomHeader={({
                                      date,
                                      changeYear,
                                      changeMonth,
                                      decreaseMonth,
                                      increaseMonth,
                                      prevMonthButtonDisabled,
                                      nextMonthButtonDisabled,
                                    }) => (
                                      <div
                                        style={{
                                          margin: 10,
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                          {"<"}
                                        </button>
                                        <select
                                          value={getYear(date)}
                                          onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                          {years.map((option) => (
                                            <option key={option} value={option}>
                                              {option}
                                            </option>
                                          ))}
                                        </select>

                                        <select
                                          value={months[getMonth(date)]}
                                          onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                          }
                                        >
                                          {months.map((option) => (
                                            <option key={option} value={option}>
                                              {option}
                                            </option>
                                          ))}
                                        </select>

                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                          {">"}
                                        </button>
                                      </div>
                                    )}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    maxDate={addDays(new Date(), 0)}
                                    className="form-control" 
                                    placeholderText="DD/MM/YYYY"
                                    dateFormat="dd/MM/yyyy"
                                    fixedHeight={true}
                                  />
                                          */}               
                                  
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div  class="form-group">
                                <label>Gender</label>
                                <div class="input-group">
                                    <label class="take_genderbtn">
                                        <input type="radio" {...register('gender')} name="gender" id="" value="1" class="d-none" checked="true"/>
                                        <span class="form-control">Male</span>
                                    </label>
                                    <label class="take_genderbtn">
                                        <input type="radio" {...register('gender')} name="gender" value="2" id="" class="d-none"/>
                                        <span class="form-control">Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 ">
                    <div class="form-check">
                    <input type="checkbox" {...register('term', { required: true })} id="term" name="term"  class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1"><a href="/privacy-policy" target="_new">Terms & conditions</a></label>
                    {errors.term && <p class="error"> Terms & conditions is required.</p>}
                  </div>
                  </div>

                  <div class="col-lg-12 ">     

                    <button class="take_btn auth_login_btn" type="submit"> Get Otp <img src="assets/images/arrowright.png" alt=""/></button> 
                    </div>    
                </div>
                </form>
                
                <p class="auth_create_account text-center">Already have an account ? <Link to ="login" class="take_orange">Login</Link>  </p>
            </div>
            <ProcessTake5/>
        </div>
    </div>

        </>
    );
	
}
export default Register;