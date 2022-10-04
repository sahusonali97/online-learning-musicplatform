import React, { useEffect, useState, useContext } from 'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from '../Api';


export default function TeacherSlider(props) {
	const [teachertData,setTeacherData] = useState([]);
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:3 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
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
	  ]
    };


	useEffect(()=>{
        Api.getTeacherList().then(
            (response)=>{
              //  console.log(response.data.data);
                 setTeacherData(response.data.data);
              
               
            }
        )

      

	
	}, [setTeacherData]);


    return (
      <Slider {...settings}>
		  	    { teachertData.map((item,key)=>{
   						 return	<div class="profile-widget">
								<div class="doc-img">
									<a href="doctor-profile.html">
									<img class="img-fluid heightcls"  alt="User Image" src={item.image} />
									</a>
									<a href="javascript:void(0)" class="fav-btn">
									<i class="far fa-bookmark"></i>
									</a>
								</div>
								<div class="pro-content">
									<h3 class="title">
										<a href="doctor-profile.html">{item.name}</a>
										<i class="fas fa-check-circle verified"></i>
									</h3>
									<p class="speciality">{item.about.substring(0, 60)}</p>
									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<span class="d-inline-block average-rating">(17)</span>
									</div>
									
									<div class="row row-sm">
										<div class="col-6">
											<Link class="btn book-btn" to={'/teacher-profile-'+item.id}>View Details</Link>
										</div>
										<div class="col-6">
											<Link class="btn book-btn" to={'/find-classes'}>Book Now</Link>
											
										</div>
									</div>
								</div>
							</div>

								})}


                        
                        
                       
      </Slider>
    );
  }