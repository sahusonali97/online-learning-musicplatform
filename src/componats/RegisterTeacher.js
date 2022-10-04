import React, {  useEffect,useState } from 'react';


import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';

import './main.css';

import Header from './Header';
import Footer from './Footer';


import "react-datepicker/dist/react-datepicker.css";
import { addDays,getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import Loader from './Loader';
//import validator from 'validator';


const RegisterTeacher =(props)=>{
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



   
    const [resume, setResume] = useState(null);
    const [instrument, setInstrumentData] = useState([]);
    const [selectedInstrument, setSelectedInstrumentData] = useState(null);
	const [resumeName, setResumeName] = useState('');

    const [resumeError, setResumeError] = useState('');
   
   
    const alert = useAlert();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });
      useEffect(()=>{
        Api.getInstrument().then(
            (response)=>{
              //  console.log(response.data.data);
              setInstrumentData(response.data.data);
               
               
            }
        )
	
	}, [setInstrumentData]);
     

      const onSubmit = (data,e) => {

        setLaoding(true);
       //  console.log(data);   
       // alert(JSON.stringify(data));
      
       data['dob'] = startDate;
       data['resume'] = resume;
      // data['instruments'] = selectedInstrument;
       Api.registerTeacherWithMail(JSON.stringify(data),resume).then(
        (response)=>{
     //        console.log(response.data.data);
             if(response.data.success){
                e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 2000, // custom timeout just for this one alert
                    type: 'success',
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    */
                    onClose: () => {
						 setLaoding(false);
                       // return <Redirect to='/verify-OTP' />
                        //window.location.href = '/';
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
      
	  const onFileUpload = (e) => {
        // console.log(e.target.files[0] );
        
            if(e.target.files[0])
            {
                
            var fileInput =
            e.target.files[0];
            
            var filePath = fileInput.name;
            var fileSize = fileInput.size;
            var sizeInMB = (fileSize / (1024*1024)).toFixed(2);
        console.log(e.target.files[0]);
            // Allowing file type
            var allowedExtensions =
                    /(\.pdf|\.doc|\.docx|\.docs)$/i;
            if (!allowedExtensions.exec(filePath)) {
                setResumeError('Only pdf, doc, docs and docx format allowed.');
                fileInput.value = '';
                return false;
            }
            else if (sizeInMB>30) {
                setResumeError('File size upto 30MB allowed.');
                fileInput.value = '';
                console.log(resumeError);
                return false;
            }
            else
            {
                setResume(e.target.files[0]);
                setResumeName(e.target.files[0]['name']);
                setValue('resumeName',e.target.files[0]['name']);
            }
            }else{
                setResume(null);
                setResumeName('');
            }
       
          }
	  
      const onMultiselect = (e) => {
     console.log(e.target.value);
     setSelectedInstrumentData(e.target.value);

      }
	
		return (
            <>
			{isLoading ?  <Loader/> :null}
            <div className="take_main_wrapper">
    		<Header  />
             
             <div class="take_section take_faq_wrapper take_teacher_form_wrapper ">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                        <div class="take_teacher_form">
                            <div class="take_heading_wrapper text-left">
                                <h1>Teacher Registration</h1>
                                <p>Welcome to Take5 Music Family</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="">Full Name</label>

                                            <input type="text" {...register('name', { required: true })} name="name" id="" placeholder="Enter Full Name" class="form-control" />
                                            {errors.name && <p class="error">Full Name is required.</p>}
                                        </div>
                                        <div class="form-group">
                                            <label for="">Mobile Number</label>

                                            <input type="text" name="mobile" {...register('mobile', { required: true ,pattern: {
                                                value: /^[1-9]\d*(\.\d+)?$/,
                                                message: 'Enter a valid email',
                                            },})} id="" class="form-control" placeholder="Enter Mobile Number" />
                                            {errors.mobile && <p class="error">Mobile is required.</p>}
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="">Email Address</label>

                                            <input type="text"  {...register('email', { required: true,pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Please enter a valid email',
                                            }, })} name="email" id="" class="form-control"  placeholder="Enter Email Address"/> 
                                            {errors.email && <p class="error">Please enter a valid email Address.</p>}
                                        </div>
                                       <div class="form-group">
                                            <label for="">Expert in Instruments</label>
                                            <select value={selectedInstrument}  onChange={onMultiselect} {...register('instruments', { required: true })} class="form-control" >
                                            <option value="">Select Instruments</option>
                                            {instrument.map((ins)=>(
                                                <option value={ins.iname}>{ins.iname}</option>
                                            ))}
                                            </select>
                                            {errors.instruments && <p class="error">Instruments is required.</p>}
                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="">Performance link 1</label>
                                            <input type="text" {...register('links1', { required: true })} name="links1" id="" placeholder="Enter Your Performance link (youtube, drive)" class="form-control" />
                                            {errors.links1 && <p class="error">Performance link 1 is required.</p>}
                                        </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="">Performance link 2</label>
                                            <input type="text" {...register('links2', {  })} name="links2" id="" placeholder="Enter Your Performance link (youtube, drive)" class="form-control" />
                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label for="">Resume</label>
                                            <div class="take_drag_wrapper">
                                            <input type="file" onChange={onFileUpload} name="resume"  style={{opacity:0,width:'100%',position:'absolute',top: 0,left: 0,height: '132px'}} />
                                                <div class="take_icon"><svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 0.25V8.125C13 9.02011 13.3951 9.87855 14.0983 10.5115C14.8016 11.1444 15.7554 11.5 16.75 11.5H25.5V28.375C25.5 29.2701 25.1049 30.1286 24.4017 30.7615C23.6984 31.3944 22.7446 31.75 21.75 31.75H4.25C3.25544 31.75 2.30161 31.3944 1.59835 30.7615C0.895088 30.1286 0.5 29.2701 0.5 28.375V3.625C0.5 2.72989 0.895088 1.87145 1.59835 1.23851C2.30161 0.605579 3.25544 0.25 4.25 0.25H13ZM15.5 0.8125V8.125C15.5 8.42337 15.6317 8.70952 15.8661 8.9205C16.1005 9.13147 16.4185 9.25 16.75 9.25H24.875L15.5 0.8125Z" fill="#F68B00"></path></svg></div>
                                                <div class="take_text">
                                                {resumeName && <p>{resumeName}</p>}
                                                {!resumeName && <p>Attach Resume DRAG OR Clock to select</p>}
                                                    <span class="take_orange">Max 30MB</span>
                                                <input type="text" {...register('resumeName',{ required: true })} style={{opacity:0,width:'0%'}} name="resumeName" value={resumeName}/>
                                                </div>
                                            </div>
                                            {resumeError &&  !resumeName && <p class="error">{resumeError}</p>}
                                        {!resumeError && errors.resumeName && !resumeName && <p class="error">Please upload your updated resume.</p>}
                                        </div>
                                        
                                    </div>
                                </div>
								
                                <button type="submit" class="take_btn">Send <img src="assets/images/arrowright.png" alt=""/></button>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
	  </div>
        </>
    );
	
}
export default RegisterTeacher;