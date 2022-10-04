import React, { useContext, useEffect,useState } from 'react';
import {Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { useAlert } from 'react-alert';
import Helper from '../auth/Helper';

const StudentSidebar =(props)=>{
    const alert = useAlert();
    const [UsersData,setUsersData] = useState([]); 
function logout(){
    localStorage.removeItem("authData");
    alert.show('Log out Successfully', {
        timeout: 2000, // custom timeout just for this one alert
        type: 'success',
        /*onOpen: () => {
          console.log('hey')
        }, */ // callback that will be executed after this alert open
        onClose: () => {
            
            localStorage.clear();
            window.location.reload(); 
            window.location.href = '/';
            return <Redirect to='/' />
            //console.log('closed');
        } 
    });

}
useEffect(async()=>{
    await Helper.getAtuhData().then((result)=>{
        setUsersData(result);
        

    });
}, [setUsersData]);

console.log(UsersData);


	return (

        <div class="profile-sidebar">
        <div class="widget-profile pro-widget-content">
            <div class="profile-info-widget">
                <a href="#" class="booking-doc-img">
                <img src={UsersData.img} alt="User Image"/>
                </a>
                <div class="profile-det-info">
                    <h3>{UsersData.name}</h3>
                    <div class="patient-details">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard-widget">
            <nav class="dashboard-menu">
                <ul>
                    <li>
                    <Link  to="/student-dashboard"> <i class="fas fa-columns"></i>
                        <span>Dashboard</span> </Link>
                       
                    </li>
                   
                    <li>
                        <Link  to="/student-dashboard"> 
                            <i class="fas fa-hourglass-start"></i>
                                <span>Live Classes</span> 
                        </Link> 
                    </li>

                    <li>
                        <Link  to="/booked-classes"> 
                            <i class="fas fa-calendar-check"></i>
                                <span>Booked Classes</span> 
                        </Link> 
                    </li>
                   
                    <li>

                    <Link  to="/payment-history"> 
                            <i class="fas fa-file-invoice"></i>
                                <span>Payment History</span> 
                        </Link> 

                    </li>
                    
                    <li class="active">
                        <Link  to="/student-profile"> <i class="fas fa-user-cog"></i>
                        <span>Profile Settings</span> </Link>
                    </li>
                  
                    <li>
                        <Link  to="/change-password"> 
                            <i class="fas fa-lock"></i>
                            <span>Change Password</span>
                        </Link>
                    </li>

                   
                    <li>
                        <a href="#" onClick={(e) => { logout() }}>
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
	

	);
}
export default StudentSidebar;