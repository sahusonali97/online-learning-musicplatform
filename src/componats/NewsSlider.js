import React, { useEffect, useState, useContext } from 'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from '../Api';


export default function SaleSlider(props) {
	const [newsData,setnewsData] = useState([])


    var settings = {

		dots: false,
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
        Api.getnews().then(
            (response)=>{
              console.log(response.data);
              setnewsData(response.data);
               
               
            }
        )
	
	}, [setnewsData]);


    return (
        
       
      <Slider {...settings}>

        { newsData.map((iitem,key)=>{
             return <div key={key} class="one-time">
                 <div class="w-100">
                   <div class="col-lg-12 techer_news1">
                    	<div class="text-center new_container ">
      
	  
	                          <p class="news_content">{iitem.title}</p>
	                         </div>
	   
                       </div>
                  </div>
                  
                  <div class="dark">
                   
                   <div class="one-time">
                   <span>
                   </span>
                 <div class="dark_inner">
                 <img width="500" src={iitem.img} /> 
                 </div>
                 <div class="slider_text1">
                     <p class="slider_text">TECH NEWS</p>
                   <p class="slider_date"></p>
                   </div>
                   <div class="slider_text2">
                   <p class="footer_text">{iitem.title}</p>
                     <p >{iitem.summary}</p>
                   </div>
                   <div class="footer_icon">
                   <div>
                   <img src="assets/images/Vector (2).png"  class="img-fluid" alt=""/>
                   </div>
                   <div class="heart">
                   <div class="d-flex">
                    <img src="assets/images/Group 2.png" class="img-fluid" alt=""/>
                    <span></span>
                    </div>
                    </div>
                   
                   </div>
                     </div>
                 <div class="round_circle1">
                 <img src="assets/images/Vector (3).png" class="img-fluid" alt=""/>
                 </div>
                         <div class="round_circle">		<img src="assets/images/Vector (4).png" class="img-fluid" alt=""/>
                       </div>
       
                    </div>
              
              

               </div>
             })}
      
        </Slider>
       
    );
  }