import React, { useEffect } from 'react';
import $ from 'jquery';
//import AppendScript from './AppendScript';
import {
	Link
	
 } from "react-router-dom";
const FooFooter_innerter =(props)=>{
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

    <span></span>

	

	);
}
export default Footer_inner;