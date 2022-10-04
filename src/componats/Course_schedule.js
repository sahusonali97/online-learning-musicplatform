import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentSidebar from './StudentSidebar';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import Helper from '../auth/Helper';
import Header_Inner from './Header_Inner';
import Sidebar_inner from './Sidebar_Inner';
import BigCalendar from 'react-big-calendar';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!




const Course_schedule =(props)=>{


    const [userId,setUserId] = useState(0); 
    const [allClassData,setAllClassData] = useState(null); 

    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
          let userId = result.id;
            setUserId(userId);

            Api.getScheduledClass(userId).then(
              (response)=>{
              
                localStorage.setItem('allClassData', JSON.stringify(response.data.data));
                setAllClassData(JSON.stringify(response.data.data));
              }
          );


        });
   
        
    }, [setUserId,setAllClassData]);  

    let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
    const INITIAL_EVENTS = [
        {
          id: 1,
          title: 'All-day event',
          start: todayStr
        },
        {
          id: 2,
          title: 'Timed event',
          start: todayStr + 'T12:00:00'
        }
      ];

      
    

      console.log(INITIAL_EVENTS);

     ///let  INITIAL_EVENTS = allClassData;

      console.log(allClassData);


    const alert = useAlert()
    
  
	
		return (
            <>
                <div className="take_admin_main_wrapper">
                <Sidebar_inner />


                <div class="take_top_header">
                <div class="take_topheader_inner">
                    <div class="take_logo d-none ">
                        <a href="#">
                            <img src="assets/images/logo.png" alt=""/>
                        </a>
                    </div>
                    <span class="take_toggle d-none "><img src="assets/images/toggle.png" alt=""/></span>
                    <div class="take_search_wrapper d-none">
                        <input type="text" name="" id="" class="form-control" placeholder="Search instruments, teachers"/>
                        <span><img src="assets/images/svg/search.svg" alt=""/></span>
                    </div>
                </div>

                <h2 class="take_title h2">Course Schedule</h2>
            </div>
            <div class="take_body take_schedule_wrapper">
               

          { allClassData && <FullCalendar
       // plugins={[ dayGridPlugin ]}
       plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
        initialEvents={  JSON.parse(allClassData)} // alternatively, use the `events` setting to fetch from a feed
      />}



            </div>

               

                </div>
               
        </>
    );
	
}
export default Course_schedule;