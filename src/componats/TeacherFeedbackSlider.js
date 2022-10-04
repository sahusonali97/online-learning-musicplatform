import React, { useEffect, useState, useContext } from 'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from '../Api';


export default function SaleSlider(props) {
	const [instrumentData,setInstrumentData] = useState([])


    var settings = {

		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,

    /*  dots: false,
      infinite: true,
      variableWidth:true,
      prevArrow:false,
      nextArrow:false,
      speed: 500,
      slidesToShow:1 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,*/

	  /*responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
	  ]*/

    };


	useEffect(()=>{
        Api.getInstrument().then(
            (response)=>{
              //  console.log(response.data.data);
              setInstrumentData(response.data.data);
               
               
            }
        )
	
	}, [setInstrumentData]);


    return (
		<div class="take_tesimonial_section">
		<h3>Teacher Reviews</h3>
      <Slider {...settings}>					 
						 
                      <div class="take_testdetail">
                                        <p>I have been with Take5 since it’s inception and it has always been a great experience! and ever since they introduced the online platform for teaching, it made things even better, the crisp and clear schedules and dashboards where everything is well integrated, thanks to the team for the lovely ecosystem they’ve created.</p>

                                        <a href="#">Srikanth, Keyboard</a>
                                    </div>
                                    <div class="take_testdetail">
                                        <p>To be honest, I was a little skeptical when the online learning model was introduced, but, Rajeev and team have walked the talk, they made sure there’s no lag in the quality of education through online learning and the best part was that it’s much better, flexible and accessible to every teacher and learner.</p>

                                        <a href="#">Ravi Singh, Keyboard</a>
                                    </div>
                                    <div class="take_testdetail">
                                        <p>I’ve joined Take5 as a Teacher 3 months ago, my experience with the team has been fantastic, the way the team has onboarded and the guidelines they’ve given to ensure quality music education really impressed me. Each teacher comes with a vast experience, and I am thrilled to be amongst the elite team here. I would highly recommend Take5.</p>

                                        <a href="#"> Viswanadh, Violin</a>
                                    </div>                      
                        
                       
      </Slider>
	  </div>
    );
  }