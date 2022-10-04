import React, { useContext, useEffect,useState } from 'react';
import {
	Link
	
 } from "react-router-dom";

 import { useParams } from 'react-router-dom';
import { authContext } from '../auth/AuthContext'; 
import { useAlert } from 'react-alert';
import { Redirect } from 'react-router';
import {CartContext} from '../auth/CartContext'; 

const Header=(props)=>{
	
	const alert = useAlert();

	const { auth  } = useContext(authContext);
	
	let userId =0;	
	let userImg ='assets/images/logo_icon.png';
	let userName ='';	
	if(auth.data) {
		userId=auth.data.id;
		userImg=auth.data.img;
		userName=auth.data.name;
	}

	const [toggleMenuData,settoggleMenuData] = useState(0); 
	const activeMenuData = window.location.pathname; 
	
	


	function logout(){
		
		localStorage.removeItem('plan_className_id');
		alert.show('Log out Successfully', {
			timeout: 2000, // custom timeout just for this one alert
			type: 'success',
			/*onOpen: () => {
			  console.log('hey')
			}, */ // callback that will be executed after this alert open
			onClose: () => {
				localStorage.clear();
				window.location.href = '/';
				//console.log('closed');
			} 
		});

	}

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



	return (




		<div className="take_header">
            <span className="take_toggle"></span>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <div className="take_logo">
                            <a href="/"><img src="assets/images/logonew.png" class="img-fluid" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-9">
                        <div className="take_menu_wrapper">

                            <ul className="take_menu">
                                <span className="take_close d-none"><img src="assets/images/close.png" alt=""/></span>
                                <li ><a href="/" className={(activeMenuData == "/")&&"active"}>Home</a></li>
                                <li><Link className={(activeMenuData == "/instruments")&&"active"} to="instruments">Instruments</Link></li>
								<li><Link  className={(activeMenuData == "/expore")&&"active"}  to="/">Explore</Link></li>
								<li><Link className={(activeMenuData == "/blog")&&"active"} to="blog">Blog</Link></li>
								<li><Link className={(activeMenuData == "/News")&&"active"} to="/News">News</Link></li>
								<li><Link className={(activeMenuData == "/contact")&&"active"} to="contact">Contact</Link></li>

                             
                            </ul>
                            <div className="take_search_wrapper d-none">
                                <input type="text" name="" id="" className="form-control" placeholder="Search instruments, teachers"/>
                                <span><img src="assets/images/svg/search.svg" alt=""/></span>
                            </div>

                     		{(userId == 0 ) ? (<div className="take_headerbtn_wrapper">
                                <a href="login.html" className="take_btn d-none">
                                    login
                                </a>
								<span class="take_btn">
								<Link className=" signup_btn" to={'/login'}>Login</Link> / <Link className="signup_btn" to={'/register'}>Sign Up</Link>
								</span>	
                              
                            </div>) : null}
                            
							{(userId > 0 ) ? ( <div className="take_user_wrapper">
                                <span><img src={userImg} className="img-fluid" alt="" /></span>
                                <div className="take_user_drop">
                                    <ul>
                                        <li><a href="/student-dashboard-0">Dashboard</a></li>
                                        <li><a onClick={(e) => { logout() }} href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </div>) : null}

                        </div>

                    </div>
                </div>
            </div>
        </div>


		

	);
	
} 
export default Header;