import React, {  useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import './main.css';
import StudentSidebar from './StudentSidebar';
import Helper from '../auth/Helper';



const BookedClasses =(props)=>{

  
    const [bookedClassData,setBookedClassData] = useState([]); 
    const [userId,setUserId] = useState(0); 
    
    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
          let userId = result.id;
            setUserId(userId);
            
            Api.getBookedClassData(userId).then(
                (response)=>{
                    setBookedClassData(response.data.data);
                }
            );

        });
      
        
    }, [setBookedClassData,setUserId]);



    



	
		return (
            <>
                <Header />

                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="content" >
                    <div class="container-fluid">
                        <div class="row" >
                            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <div class="theiaStickySidebar">
                                     <StudentSidebar/>
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-8 col-xl-9">
                                
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4 class="mb-4">Booked  Class List</h4>
                                        <div class="appointment-tab">
                                           
                                                <div class="tab-pane show" id="upcoming-appointments">    
                                                    <div class="card card-table mb-0">
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Class Name</th>
                                                                            <th>Start Date</th>
                                                                            <th>End Date</th>
                                                                            <th>Class Time</th>
                                                                            <th>Class Days</th>
                                                                            <th>Instrument</th>
                                                                            <th>Teacher</th>
                                                                          
                                                                          
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                      
                                                                     {  
                                                                       bookedClassData !==''  ?  
                                                                         bookedClassData.map((iitem,key)=>{
                                                                        let classdays = iitem.class_days; 
                                                                           let days = '';  
                                                                        if(classdays=='1,3,5'){
                                                                           days = 'Mon,Wed,Fri';
                                                                        }

                                                                        if(classdays=='2,4,6'){
                                                                            days = 'Tue,thu,Sat';     
                                                                        }
                                                                        

                                                                       return <tr>
                                                                           <td>1</td>
                                                                           <td>{iitem.classtitle}</td>
                                                                            <td>
                                                                                {iitem.start_date}
                                                                            </td>

                                                                            <td>
                                                                            {iitem.end_date}
                                                                            </td>

                                                                            <td>
                                                                            {iitem.class_time}
                                                                            </td>


                                                                            <td>
                                                                            {days}
                                                                            </td>

                                                                           

                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <a href="patient-profile.html">{iitem.instruments_name} </a>
                                                                                </h2>
                                                                            </td>

                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    
                                                                                    <a href="patient-profile.html">{iitem.teachers_name} </a>
                                                                                </h2>
                                                                            </td>
                                                
                                                                            
                                                                           
                                                                        </tr>
                                                                        }) :null }
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                               
                                                                            



                                                                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer/>
        </>
    );
	
}
export default BookedClasses;