import React, { useEffect, useState, useContext } from 'react';
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
import { CartContext } from '../auth/CartContext';
import YouTube from 'react-youtube';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//import 'react-accessible-accordion/dist/fancy-example.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';



const Teachers =(props)=>{
    const {instrumentid } = useParams();
  	const [teachertData,setTeacherData] = useState([]);
    const [teacherDBData,setTeacherDBData] = useState([]);
    const [instrumentData,setInstrumentData] = useState([]);


    const [findClassesData,setFindClassesData] = useState([]);
    const [classesDBData,setClassesDBData] = useState([]);
    const [classDuration,setClassDuration] = useState(1);
    const [classDurationEndDate,setClassDurationEndDate] = useState(new Date());
    const [classStartTime,setclassStartTime] = useState(0);
    

    const [startDatePicker, setStartDatePicker] = useState(new Date());
  
    const alert = useAlert()
  
    useEffect(()=>{
        Api.getTeacherList().then(
            (response)=>{
              //  console.log(response.data.data);
                 setTeacherData(response.data.data);
                 setTeacherDBData(response.data.data);
                 seacrchByInstrument(response.data.data,instrumentid);
            }
        )

        Api.getInstrument().then(
            (response)=>{
                setInstrumentData(response.data.data);
            }
        )     

       
	}, [setTeacherData,setInstrumentData]);
   

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
   


    function seacrchByInstrument(teacherDBData,subcatid){
        console.log(subcatid);
        let productDBDataArr = []; 
        teacherDBData.map(
            (item,key)=>{
               if(subcatid ==0){
                 return productDBDataArr.push(item);
               }else{ 
               // console.log(subcatid);
                   // console.log(item.intrument[0].instrument+'  '+subcatid);
                    if(item.intrument[0].instrument==subcatid){
                       
                        return productDBDataArr.push(item);
                    }
              }

            }
        )
        setTeacherData(productDBDataArr);
    }


    function checkIsSelected(e,class_id){
   
        localStorage.setItem("startDatePicker", 0); 
    
        e.preventDefault();
        let isRedirect = true;
        
        if(startDatePicker==0){
            isRedirect = false;
            alert.show('Please Select Time Slot', {
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
        var e1 = document.getElementById("timeduration_"+class_id);
        if(e1.value ==0){
            isRedirect = false;
            alert.show('Please Select  Duaration', {
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
            alert.show('Please Select Class Start Date', {
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


    const opts = {
        height: '200',
        width: '340',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

 
    
   
  /*  function clickOnToggle(e,type){
        setToglleData(type);
    }

    function sortBy(type){
       
        if(type==2){
            productDBData.sort((a, b) => (a.price > b.price) ? 1 : -1); 
        }

        if(type==3){
            productDBData.sort((a, b) => (a.price < b.price) ? 1 : -1); 
         }

        setProductData(productDBData);
    }

    function quickView (){
       
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                    <div className="row">
                        asdasfasafaaga
                    </div>
              );
            }
          });

    };

    function addToCart(item){
        setCardData(item,1);
    }

    console.log(productData);*/

   
    function Popup (){
        confirmAlert({ 
            customUI: ({ onClose }) => {
             
              return (
               <div className="row">
                   <div   >
                       <div className="" role="document">
                           <div className="modal-content">
                               <div className="modal-header">
                                   Take5 Music 
                                   <button type="button" onClick={onClose}  className="close" aria-label="Close">
                                       <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                                   </button>
                                  
                               </div>
                               <iframe className="video-pop" src="https://www.youtube.com/embed/6kc97rN4Af0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       
                       </div>
                   </div>
               </div>
           </div>
              );
            }
          });
      
    };





    function chooseTime(e,timeid,id){
        let timeId = 'time_'+timeid+'_'+id;
        //console.log(timeId);
        let element = document.getElementById(timeId); 
        element.classList.remove("btn-outline-info");
        element.classList.add("btn-info");
        setclassStartTime(1);
       // $(e.addClass("dsdsdsdsdsdsdsdsdsdsds");
      //  console.log(e);


    }


	return (
			<>
				<Header  />
				
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Teacher</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">All Matches Teacher</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                                <div className="card search-filter">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Search Filter</h4>
                                    </div>
                                    <div className="card-body">
                                   



                                        <div className="filter-widget">
                                            <h4>Select Instrument</h4>

                                            <div>
                                                <label className="custom_check" onClick={e => seacrchByInstrument(teacherDBData,0)} >
                                                <input  type="radio" name="select_specialist"/>
                                                <span className="checkmark"></span>All
                                                </label>
                                            </div>
                                            
                                            { instrumentData.map((iitem,key)=>{
                                                
                                               // let chck = (iitem.id=parseInt(instrumentid))?true:false;


                                           return <div key={key}>
                                                <label className="custom_check" onClick={e => seacrchByInstrument(teacherDBData,iitem.id)} >
                                                <input type="radio" name="select_specialist"   />
                                                <span className="checkmark"></span> {iitem.iname}
                                                </label>
                                            </div>
                                            })}
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-9">
                            <Accordion allowZeroExpanded>
                            { teachertData.map((item,key)=>{
                               
                               return <div  key={key} className="card mb-0">
                                         <AccordionItem key={key}>
                                    <div className="card-body">

                                        <div className="doctor-widget">
                                            <div className="doc-info-left">
                                          
                                                <div className="doctor-img">

                                                <Link   to={'/teacher-profile-'+item.id}><img src={item.image} className="img-fluid" alt="User Image"/></Link>

                                                   
                                                   
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name">  <Link  to={'/teacher-profile-'+item.id}>{item.name}</Link> </h4>
                                                    <p className="doc-speciality"><Link  to={'/teacher-profile-'+item.id}>{item.about}</Link></p>
                                                   
                                                    <div className="rating">
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span className="d-inline-block average-rating">(17)</span>
                                                    </div>
                                                    <div className="clinic-details">
                                                        <ul className="clinic-gallery">
                                                        { item.intrument.map((iitem,key)=>{
                                                            return <li key={key}>
                                                                <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                                <img src={iitem.img} alt="Feature"/>
                                                                </a>
                                                            </li>
                                                        })}
                                                            
                                                        </ul>

                                                    </div>
                                                    <div className="clinic-services">
                                                     { item.intrument.map((iitem,key)=>{
                                                         return <span key={key}>{iitem.iname}</span>
                                                     })}
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            <div className="doc-info-right">
                                      
                                                <div className="clini-infos">
                                                    <ul>
                                                        <li><i className="far fa-thumbs-up"></i> 98%</li>
                                                        <li><i className="far fa-comment"></i> 17 Feedback</li>
                                                       
                                                    </ul>
                                                </div>
                                                <div class="clinic-booking">
                                                   
                                                    <Link className="view-pro-btn mb-2"  to="#"  onClick={e => Popup()}>Video</Link>
                                                   
                                                        <AccordionItemButton>
                                                        <Link className="apt-btn" >Availability</Link>
                                                        </AccordionItemButton>
                              
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <AccordionItemPanel>
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-body">
                                               
                                                <div class="profile-box">
                                                    
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                        <h4 class="card-title">Class Days</h4>
                                                            <div class="card schedule-widget mb-0">

                                                            
                                                            <Tabs >
                                                                <TabList>
                                                                <Tab>MON WED FRI</Tab>
                                                                <Tab>TUE THU SAT</Tab>
                                                              
                                                                </TabList>

                                                                <TabPanel>

                                                                   <div class="tab-content schedule-cont">
                                                                    <div id="slot_sunday" class="tab-pane fade">
                                                                        <h4 class="card-title d-flex justify-content-between">
                                                                            <span>Time Slots</span>
                                                                        </h4>
                                                                      
                                                                    </div>
                                                                    <div id="slot_monday" class="tab-pane fade show active">
                                                                        <h4 class="card-title d-flex justify-content-between">
                                                                            <span>Time Slots</span>
                                                                           
                                                                        </h4>
                                                                        <div class="doc-times">
                                                                            <div class="row row-sm align-items-center">
                                                                                
                                                                                { item.teacherClass.classDaysmon.map((tis,key)=>{
                                                                                 return <div class="col-sm-12 col-md-3 mb-2">
                                                                                     <button  id={'time_3_'+item.id} onClick={e => chooseTime(e,3,item.id)} type="button" class="btn btn-block btn-outline-info"> { tis.classtimeStart} - { tis.classtimeend}  Vacent : { tis.vacent}</button>
                                                                                  </div>
                                                                                })}
                                                                            </div>    
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <div class="form-group">
                                                                                <label>Duration</label>
                                                                                <select id={'timeduration_'+item.id} name="timeduration" class="form-control"   >
                                                                                <option value="0"> Select Month </option>     
                                                                                <option value="1"> 1 Month </option>     
                                                                                <option value="3"> 3 Months </option>     
                                                                                <option value="6"> 6 Months </option>     
                                                                                </select>   
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-lg-4">
                                                                        <div class="form-group" >
                                                                                <label> Class Start Date</label>
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
                                                                            dateFormat="MMMM d, yyyy"
                                                                            minDate={Moment().toDate()}
                                                                            monthsShown={classDuration}        

                                                                             />    
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-lg-4">
                                                                      
                                                                        <button type="button" onClick={e =>checkIsSelected(e,item.id) }  class="btn btn-block btn-success mt-4">Book Now </button>
                                                                            
                                                                        </div>

                                                                    </div>
                                                                    </div>
                                                                </TabPanel>
                                                                <TabPanel>

                                                                       
                                                                   <div class="tab-content schedule-cont">
                                                                    <div id="slot_sunday" class="tab-pane fade">
                                                                        <h4 class="card-title d-flex justify-content-between">
                                                                            <span>Time Slots</span>
                                                                        </h4>
                                                                      
                                                                    </div>
                                                                    <div id="slot_monday" class="tab-pane fade show active">
                                                                        <h4 class="card-title d-flex justify-content-between">
                                                                            <span>Time Slots</span>
                                                                           
                                                                        </h4>
                                                                        <div class="doc-times">
                                                                            <div class="row row-sm align-items-center">
                                                                                
                                                                                { item.teacherClass.classDaysTue.map((tis,key)=>{
                                                                                 return <div class="col-sm-12 col-md-3 mb-2">
                                                                                     <button  id={'time_3_'+item.id} onClick={e => chooseTime(e,3,item.id)} type="button" class="btn btn-block btn-outline-info"> { tis.classtimeStart} - { tis.classtimeend}  Vacent : { tis.vacent}</button>
                                                                                  </div>
                                                                                })}
                                                                            </div>    
                                                                        </div>
                                                                    </div>

                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <div class="form-group">
                                                                                <label>Duration</label>
                                                                                <select id={'timeduration_'+item.id} name="timeduration" class="form-control"   >
                                                                                <option value="0"> Select Month </option>     
                                                                                <option value="1"> 1 Month </option>     
                                                                                <option value="3"> 3 Months </option>     
                                                                                <option value="6"> 6 Months </option>     
                                                                                </select>   
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-lg-4">
                                                                        <div class="form-group" >
                                                                                <label> Class Start Date</label>
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
                                                                            dateFormat="MMMM d, yyyy"
                                                                            minDate={Moment().toDate()}
                                                                            monthsShown={classDuration}        

                                                                             />    
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-lg-4">
                                                                      
                                                                        <button type="button" onClick={e =>checkIsSelected(e,item.id) }  class="btn btn-block btn-success mt-4">Book Now </button>
                                                                            
                                                                        </div>

                                                                    </div>
                                                                    </div>         
                                                                   
                                                                </TabPanel>
                                                            </Tabs>    


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </AccordionItemPanel>
                                    </AccordionItem>
                                </div>
                                   }) }      
                                
                                </Accordion>
                            </div>
                            
                        </div>
                    </div>
                </div>



				<Footer/>
		</>
	);
	
}
export default Teachers;