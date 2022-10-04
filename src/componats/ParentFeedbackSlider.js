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
		<h3>Parents Corner</h3>
      <Slider {...settings}>					 
						 
      <div class="take_testdetail">
                <p>Best music school in Hyderabad. Good team of teachers for every instrument tabla, drums, vocals, Guitar, keyboard. Best part is they offer every day class to students, no other institute offering everyday classes to students.</p>

                    <a href="#"> Beagari Jagan </a>
                </div>
                <div class="take_testdetail">
                    <p>My kids are learning and having a great time @Take5. Good thing is they have different trainers for different instruments. Good Ambience and Service. They understand the child's pace and give them space and time to involve themselves into the practice.</p>

                    <a href="#"> Hema Devi</a>
                </div>
                <div class="take_testdetail">
                    <p>Best Music school in Hyderabad and way of teaching is very good ,awesome teacher. It is the best place for music learn for kids and adults.</p>

                    <a href="#">Prerana Adarsh</a>
                </div>                  
                        
                       
      </Slider>
	  </div>
    );
  }