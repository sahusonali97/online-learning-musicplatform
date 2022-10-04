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

import { useForm } from 'react-hook-form';




const Explore =(props)=>{
    const { cat_id,subcategoryId } = useParams();
  	const [instrumentData,setInstrumentData] = useState([]);
    const [step1,setStep1] = useState(1);
    const [step2,setStep2] = useState(0);
    const [step3,setStep3] = useState(0);
    const [step4,setStep4] = useState(0);
    
 
    
    const alert = useAlert()
  

    useEffect(()=>{
        Api.getInstrument().then(
            (response)=>{
              //  console.log(response.data.data);
              setInstrumentData(response.data.data);
               
               
            }
        )
	
	}, [setInstrumentData]);

  


   

       



	return (
			<>
				<Header  />
				
                <div class="take_section take_expore_banner">
                    <span class="take_banner_wave"><img src="assets/images/wave_white.png" alt=""/></span>
                    <span class="take_banner_wave right"><img src="assets/images/wave_white.png" alt=""/></span>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 ">
                                <div class="take_heading_wrapper text-center">
                                    <img src="assets/images/explore.png" alt=""/>
                                    <h2 className="h2">Learn music from legendary Artists!</h2>
                                    <p>At Take5Music, you get an unparalleled opportunity to learn music from the master faculty from the comfort and safety of your homes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="take_section take_teacherofmonth">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="take_heading_wrapper text-center">
                                
                                    <h2 className="h2"> <img src="assets/images/wave.png" alt=""/>  <span class="take_orange">Meet the best-performing </span> faculty of the month!</h2>
                                    <p>We believe teaching is an expert role and here are the top-rated teachers of the month. Their contribution and dedication help us to serve you better!.</p>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher1.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Swapnika</h3>
                                            <p>Vocals</p>
                                            <span class="take_num">1</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher2.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Vikram</h3>
                                            <p>Violin</p>
                                            <span class="take_num">2</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher3.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Deepesh</h3>
                                            <p>tabla</p>
                                            <span class="take_num">3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="take_section take_instrument_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="take_heading_wrapper text-left">
                                
                                    <h2 className="h2"> <img src="assets/images/wave.png" alt=""/>  <span class="take_orange">The right platform </span>to learn beginner level instruments</h2>
                                    <p>Are you a beginner looking to learn your favourite musical instrument? </p>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div class="take_instrument_box text-center">
                                            <span class="take_icon">
                                                <img src="assets/images/c5.png" alt=""/>
                                            </span>
                                            <h2 className="h2">Guitar</h2>
                                            <h5>18 Teachers</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div class="take_instrument_box text-center">
                                            <span class="take_icon">
                                                <img src="assets/images/c5.png" alt=""/>
                                            </span>
                                            <h2 className="h2">Guitar</h2>
                                            <h5>18 Teachers</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div class="take_instrument_box text-center">
                                            <span class="take_icon">
                                                <img src="assets/images/c5.png" alt=""/>
                                            </span>
                                            <h2 className="h2">Guitar</h2>
                                            <h5>18 Teachers</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div class="take_instrument_box text-center">
                                            <span class="take_icon">
                                                <img src="assets/images/c5.png" alt=""/>
                                            </span>
                                            <h2 className="h2">Guitar</h2>
                                            <h5>18 Teachers</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="take_section take_teacher_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="take_heading_wrapper text-left">
                                
                                    <h2 className="h2"> <img src="assets/images/wave.png" alt=""/>  <span class="take_orange">Get in touch </span> with our expert faculty!</h2>
                                    <p>Our highly-skilled and experienced faculty helps you unlock your true potential. We provide you with ample opportunities to gain valuable insights from renowned musicians.</p>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher1.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Swapnika</h3>
                                            <p>Vocals</p>
                                            <a href="javascript:;" class="take_btn">Contact Now</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher2.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Vikram</h3>
                                            <p>Violin</p>
                                            <a href="javascript:;" class="take_btn">Contact Now</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher3.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Deepesh</h3>
                                            <p>tabla</p>
                                            <a href="javascript:;" class="take_btn">Contact Now</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                        <div class="take_teacher_box text-center">
                                            <div class="take_teacherimg">
                                                <img src="assets/images/teacher4.jpg" class="img-fluid" alt=""/>
                                                <span><img src="assets/images/star.png" alt=""/> 4/5</span>
                                            </div>
                                            <h3>Sarah</h3>
                                            <p>Keyboard</p>
                                            <a href="javascript:;" class="take_btn">Contact Now</a>
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
export default Explore;