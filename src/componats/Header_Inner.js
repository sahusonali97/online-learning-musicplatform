import React, { useContext, useEffect,useState } from 'react';
import {
	Link
	
 } from "react-router-dom";

 import { useParams } from 'react-router-dom';
import { authContext } from '../auth/AuthContext'; 
import { useAlert } from 'react-alert';
import $ from 'jquery';


const Header_Inner=(props)=>{
	
	const alert = useAlert();

	const { auth  } = useContext(authContext);
	
	let userId =0;	
	let userImg =0;
	let userName ='';	
	if(auth.data) {
		userId=auth.data.id;
		userImg=auth.data.img;
		userName=auth.data.name;
	}

	const [toggleMenuData,settoggleMenuData] = useState(0); 
	
	



	const logo ={
		width :"155px"
	} 


	function toggleMenu(){
		if(toggleMenuData){
			settoggleMenuData(0);
		}else{
			settoggleMenuData(1);
		}

	}

	useEffect(()=>{ 
	 
		$(document).on('click','.take_header ',function(){
	
			$(this).parent().toggleClass('open');
	
		   /* $('main-wrapper').toggleclassName('slide-nav');
			$('.sidebar-overlay').toggleclassName('opened');
			$('html').addclassName('menu-opened');
			return false;*/
		});
	  
		$(document).on('click','.take_close',function(){
	
			$(this).closest('.take_header').removeClass('open');
			/*$('html').removeclassName('menu-opened');
			$('.sidebar-overlay').removeclassName('opened');
			$('main-wrapper').removeclassName('slide-nav');*/
		});
	
	
		$(document).on('click','.take_topheader_inner .take_toggle',function(){
	
			$(this).closest('.take_admin_main_wrapper').find('.take_sidebar_wrapper').toggleClass('open');
		  
		});
	
	
		$(document).on('click','.take_topheader_inner .take_search_wrapper>span>img',function(){
	
			$(this).closest('.take_topheader_inner').find('.take_search_wrapper').toggleClass('open');
		  
		});
			
		 
	
	
	
	}, []);



	return (

			<div class="take_topheader_inner">
                    <div class="take_logo d-none ">
                        <a href="#">
                            <img src="assets/images/logo.png" alt=""/>
                        </a>
                    </div>
                    <span class="take_toggle d-none "><img src="assets/images/toggle.png" alt=""/></span>
                    
                </div>
	

	);
	
} 
export default Header_Inner;