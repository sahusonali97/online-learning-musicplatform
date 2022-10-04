import React, { useEffect, useState } from 'react';
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';





const FindClasses =(props)=>{
    const { teacherid } = useParams();

    const [startDate, setStartDate] = useState(new Date());
    const [startDatePicker, setStartDatePicker] = useState(new Date());
  	const [instrumentData,setInstrumentData] = useState([]);
    const [classTimeData,setclassTimeData] = useState([]);
    const [findClassesData,setFindClassesData] = useState([]);
    const [classesDBData,setClassesDBData] = useState([]);
    const [classDuration,setClassDuration] = useState(1);
    const [classDurationEndDate,setClassDurationEndDate] = useState(new Date());
    const [classStartTime,setclassStartTime] = useState(0);
    

    /*const [toglleData,setToglleData] = useState(0);
    const { setCardData} = useContext(CartContext);*/
    
    const alert = useAlert()
  

    useEffect(()=>{
        Api.getInstrument().then(
            (response)=>{
              //  console.log(response.data.data);
              setInstrumentData(response.data.data);
               
               
            }
        )

        Api.getClassTime().then(
            (response)=>{
              //  console.log(response.data.data);
              setclassTimeData(response.data.data);
               
               
            }
        )

        Api.findClasses(teacherid).then(
            (response)=>{
              //  console.log(response.data.data);
              setFindClassesData(response.data.data);
              setClassesDBData(response.data.data);
               
            }
        )   

	
	}, [setInstrumentData,setclassTimeData,setFindClassesData,setClassesDBData]);

    function findByInstrument(instrurmrntId){
       // console.log(instrurmrntId);
        let classDBDataArr = []; 
        classesDBData.map(
            (item,key)=>{
               if(instrurmrntId ==0){
                 return classDBDataArr.push(item);
               }else{ 
                    if(item.instrument===instrurmrntId){
                        return classDBDataArr.push(item);
                    }
              }

            }
        )
        setFindClassesData(classDBDataArr);
    }


  



   function changeClassDuration(id){
     setClassDuration(id);
     
   }  

  function changeStartDatePicker(date){
    setStartDatePicker(date);
    var jan312009 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
     jan312009.setMonth(jan312009.getMonth()+parseInt(classDuration));
     setClassDurationEndDate(jan312009);

    let times = Moment(date).format('H'); 


    let classDBDataArr = []; 
        classesDBData.map(
            (item,key)=>{
                let time_s = Moment(item.classtime).format('H'); 
                if(times===time_s){
                    return classDBDataArr.push(item);
                }

            }
        )
    setFindClassesData(classDBDataArr);

    setclassStartTime(times);       
    //console.log(times);      


  }  

  function getDate(date){
       
    
    let daySelect = startDatePicker.getDay();
    let  day = date.getDay();
    if(date >= startDatePicker && date<=classDurationEndDate){

        if(daySelect==1 || daySelect==3 || daySelect==5){
            if(day==1 || day==3 || day==5){
                return 'random';
            }else{
                return '';
            }
        }

        if(daySelect==2 || daySelect==4 || daySelect==6){
            if(day==2 || day==4 || day==6){
                return 'random';
            }else{
                return '';  
            }
        }
    }
   

  }


  function checkIsSelected(e,class_id){
   
    localStorage.setItem("startDatePicker", 0); 

    e.preventDefault();
    let isRedirect = true;
    var e = document.getElementById("instruement");
    if(e.value ==0){
        isRedirect = false;
        alert.show('Please Select Instrument', {
			timeout: 3000, // custom timeout just for this one alert
			type: 'error',
			/*onOpen: () => {
			  console.log('hey')
			}, */ // callback that will be executed after this alert open
			onClose: () => {
			
               // window.location.href = '/LoginWithEmail';
				
				
				
			} 
		});
    }
    var e1 = document.getElementById("timeduration");
    if(e1.value ==0){
        isRedirect = false;
        alert.show('Please Select Class Duaration', {
			timeout: 3000, // custom timeout just for this one alert
			type: 'error',
			/*onOpen: () => {
			  console.log('hey')
			}, */ // callback that will be executed after this alert open
			onClose: () => {
			
               // window.location.href = '/LoginWithEmail';
				
				
				
			} 
		});

    }

    if(classStartTime ==0){
        isRedirect = false;
        alert.show('Please Select Class Start day and Time', {
			timeout: 3000, // custom timeout just for this one alert
			type: 'error',
			/*onOpen: () => {
			  console.log('hey')
			}, */ // callback that will be executed after this alert open
			onClose: () => {
			
               // window.location.href = '/LoginWithEmail';
				
				
				
			} 
		});
    }
    

    if( isRedirect){

   
        localStorage.setItem("startDatePicker", Moment(startDatePicker).format('YYYY_MM_DD'));
        localStorage.setItem("startTime", Moment(startDatePicker).format('HH_mm'));
        window.location.href = '/book-class-'+class_id;

    }

   

  }



	return (
			<>
				<Header  />
				
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Find Classes</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Find Live Classes</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <div class="container">
                        <div class="row" >

              
                            <div class="col-sm-12" data-select2-id="11">
                                <div class="card" data-select2-id="10">
                                    <div class="card-body" data-select2-id="9">
                                        <h4 class="card-title">Find Classes</h4>
                                        <div class="profile-box" data-select2-id="8">
                                            <div class="row" data-select2-id="7">
                                               
                                                <div class="col-lg-4" data-select2-id="6">
                                                    <div class="form-group" >
                                                        <label>Select Class Duration</label>
                                                         <select id="timeduration" name="timeduration" class="form-control"  onChange={e => changeClassDuration(e.target.value)} >
                                                         <option value="0"> Select Month </option>     
                                                           <option value="1"> 1 Month </option>     
                                                           <option value="3"> 3 Months </option>     
                                                           <option value="6"> 6 Months </option>     
                                                        </select>   
                                                    </div>
                                                </div>  



                                                 <div class="col-lg-4" data-select2-id="6">
                                                    <div class="form-group" >
                                                    <label>Select Class Time</label>
                                                   

                                                    </div>
                                                </div>                    


                                             


                                                <div class="col-lg-4" data-select2-id="6">
                                                    <div class="form-group" >
                                                        <label>Select Class Days</label>
                                                        <DatePicker
                                                        selected={startDatePicker}
                                                        onChange={(date) => changeStartDatePicker(date)}
                                                        //highlightDates={highlightWithRanges}
                                                        placeholderText="This highlight two ranges with custom classes"
                                                        className ='form-control'
                                                       // dayClassName={handleColor}
                                                       dayClassName={(date) =>
                                                        getDate(date)// < Math.random() * 31 ? "random" : "random"
                                                      }   
                                                      shouldCloseOnSelect={false} 

                                                       showTimeSelect
                                                       timeFormat="HH:mm"
                                                       timeIntervals={60}
                                                       timeCaption="time"
                                                        dateFormat="MMMM d, yyyy h:mm aa"
                                                        minDate={Moment().toDate()}
                                                        />       


                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card schedule-widget mb-0">
                                                  
                                                        <div class="tab-content schedule-cont">
                                                            
                                                            <div id="slot_monday" class="tab-pane fade show active">
                                                                <h4 class="card-title d-flex justify-content-between">
                                                                    <span>Time Slots</span>
                                                                    
                                                                </h4>
                                                                <div class="col-md-12 col-lg-12 col-xl-12">
                                                                { findClassesData.map((item,key)=>{    
                                                                     


                                                                return <div key={key} class="card">
                                                                    <div class="card-body">
                                                                        <div class="doctor-widget">
                                                                            <div class="doc-info-left">
                                                                                <div class="doctor-img">
                                                                                    <a href="#">
                                                                                    <img src={item.teacherimage} class="img-fluid" alt="User Image"/>
                                                                                    </a>
                                                                                </div>
                                                                                <div class="doc-info-cont">
                                                                                    <h4 class="doc-name"><a href="doctor-profile.html">{item.teachername}</a></h4>
                                                                                    <h4  class="doc-department"><img src={item.instrumentimage} class="img-fluid" alt="Speciality"/>{item.instrumentname}</h4>
                                                                                    <div class="rating">
                                                                                        <i class="fas fa-star filled"></i>
                                                                                        <i class="fas fa-star filled"></i>
                                                                                        <i class="fas fa-star filled"></i>
                                                                                        <i class="fas fa-star filled"></i>
                                                                                        <i class="fas fa-star"></i>
                                                                                        <span class="d-inline-block average-rating">(17)</span>
                                                                                    </div>
                                                                                    <div class="clinic-details">
                                                                                        <p class="doc-location"><i class="fa fa-language"></i> {item.classtitle}</p>
                                                                                        <p class="doc-location"><i class="fa fa-clock"></i>  { Moment( item.classtime).format('H:mm ')}</p>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="doc-info-right">
                                                                                <div class="clini-infos">
                                                                                    <ul>
                                                                                        <li><i class="far fa-thumbs-up"></i> 98%</li>
                                                                                        <li><i class="far fa-comment"></i> 17 Feedback</li>
                                                                                       
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="clinic-booking">
                                                                                    <Link class="apt-btn" to={'/teacher-profile-'+item.teacher}>View Details</Link>
                                                                                    <Link class="apt-btn" onClick={e =>checkIsSelected(e,item.id) }  to1={'/book-class-'+item.id}>Book Class</Link>
                                                                                   
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                })}           
                                                                   
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
                       
                        
                               
                         </div>  
                          
                    </div>
                </div>

                
				<Footer/>
		</>
	);
	
}
export default FindClasses;