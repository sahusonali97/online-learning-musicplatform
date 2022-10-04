import React, { useEffect, useState, useContext } from 'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Api from '../Api';


export default function AvailabeInstrumentSlider(props) {
	const [instrumentData,setInstrumentData] = useState([])
    var settings = {
      dots: false,
      infinite: true,
      centerMode:false,
      speed: 500,
      slidesToShow:1 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      variableWidth:true,
      arrows:true
      //responsive:[{breakpoint:992,settings:{slidesToShow:1}}]}
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
      <Slider {...settings}>
          	{ instrumentData.map((iitem,key)=>{
	         return  <div class="feature-item text-center">
                <img src={iitem.img} class="img-fluid" alt="Feature"/>
                <p>{iitem.iname}</p>
            </div>
              })}
            
                       
      </Slider>
    );
  }