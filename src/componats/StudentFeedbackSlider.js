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
		<h3>Student Feedback</h3>
      <Slider {...settings}>					 
						 
						  <div class="take_testdetail">
							  <p>It has been a month for me, since I started my learning with TAKE5. I would say this is the best place to learn music and sharpen your passion. Thank you for re-igniting the passion for Carnatic music among today's generation and all your efforts to keep the art alive is much appreciated.</p>

							  <a href="#"> Amit Kumar, Violinist</a>
						  </div>
						  <div class="take_testdetail">
							  <p>I joined TAKE5 for vocals. Their mentoring base is vast with instructors of 15 to 20 years experience in their art form. Their individual attention to every student and reasonable price is quite a plus. No doubts, this is the best choice to kindle my passion for Singing.</p>

							  <a href="#"> Priyanka Nahata, Vocalist</a>
						  </div>
						  <div class="take_testdetail">
							  <p>Great place great folks. Heard about this place from friends. They are committed to their vision and are very genuine with their approach. One of the best schools in Himayathnagar to learn music.</p>

							  <a href="#">Venkat Reddy, Tabla</a>
						  </div>                        
                        
                       
      </Slider>
	  </div>
    );
  }