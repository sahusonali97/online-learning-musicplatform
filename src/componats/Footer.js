import React, { useEffect } from 'react';
import $ from 'jquery';
//import AppendScript from './AppendScript';
import {
	Link
	
 } from "react-router-dom";
const Footer =(props)=>{
 useEffect(()=>{ 
	 
	$(document).on('click','#mobile_btn',function(){
        $('main-wrapper').toggleclassName('slide-nav');
        $('.sidebar-overlay').toggleclassName('opened');
        $('html').addclassName('menu-opened');
        return false;
    });
  
    $(document).on('click','#menu_close',function(){
        $('html').removeclassName('menu-opened');
        $('.sidebar-overlay').removeclassName('opened');
        $('main-wrapper').removeclassName('slide-nav');
    });
        
     



}, []);



	return (

    <div className="take_footer_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="take_footer_detail">
                        <div className="take_logo">
                            <a href="javascript:;"><img src="assets/images/logo_white.png" className="img-fluid" alt=""/></a>
                        </div>
                        <p>Take5 Music is an advanced platform using a unique approach for online music learning.
<br/>Learn at your time. your place. your pace. </p>

                        <ul className="take_social_icon">
                                <li>
                                <a href="https://youtube.com/c/Take5Records" target="_blank">
                                       <img src="assets/images/svg/social1.png" alt=""/>     
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/take5-music-pvt-limited/about/" target="_blank">
                                       <img src="assets/images/svg/social2.svg" alt=""/>     
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Take5musicindia" target="_blank">
                                       <img src="assets/images/svg/social3.svg" alt=""/>     
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/take5music.in" target="_blank">
                                       <img src="assets/images/svg/social4.svg" alt=""/>     
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=918886699622&text=https://www.http://take5music.in" target="_blank">
                                       <img src="assets/images/svg/social5.png" alt=""/>     
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/take5music.in/" target="_blank">
                                       <img src="assets/images/svg/social6.png" alt=""/>  
                                    </a>
                                </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                            <div className="take_footer_widget">
                                <h3>Quick Links</h3>

                                <ul>
                                    <li> <Link to="/pricing"> Pricing</Link> </li>
                                    <li> <Link to="/team"> Team</Link> </li>
                                    <li> <Link to="/instruments"> Instruments</Link> </li>
                                    <li> <Link to="/explore"> Explore</Link> </li>
                                    <li> <Link to="blog">Blog</Link> </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                            <div className="take_footer_widget">
                                <h3>Legal</h3>

                                <ul>
                                    <li> <Link to="terms-condition">Terms of Use</Link> </li>
                                    <li> <Link to="privacy-policy">Privacy Policy</Link> </li>
                                    <li> <Link to="faq">FAQ</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="take_footer_widget">
                                <h3>Contact</h3>

                                <ul>
                                    <li><span><a href="tel:+91-8886699622">+91-8886699622</a></span></li>
                                    <li><a href="mailto:hello@take5music.in">hello@take5music.in</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="take_copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>&copy; Copyright 2021 Take5Music Pvt. Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="whatsapp wp-chat">
	
		  <a href="https://api.whatsapp.com/send?phone=918886699622&text=Hello Take5 Music, I would like to Enroll On....." target="_blank"><img src="https://aureodigital.com/wp-content/plugins/indianwebs-whatsapp-submit/public/images/whatsapp-icon-1.svg" class="img-fluid lazyloaded" alt="whatsapp" data-ll-status="loaded"/><noscript><img src="https://aureodigital.com/wp-content/plugins/indianwebs-whatsapp-submit/public/images/whatsapp-icon-1.svg" class="img-fluid" alt="whatsapp"/></noscript></a>
		</div>



    </div>
	

	);
}
export default Footer;