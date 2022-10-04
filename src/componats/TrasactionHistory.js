import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';

import './main.css';

import StudentSidebar from './StudentSidebar';
import { authContext } from '../auth/AuthContext'; 
import Helper from '../auth/Helper';



const TrasactionHistory =(props)=>{
    const alert = useAlert();
  
    const [paymentHistoryClassData,setPaymentHistoryClassData] = useState([]); 
    const [userId,setUserId] = useState(0); 
    
    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
          let userId = result.id;
            setUserId(userId);
            
            Api.getPaymentHistory(userId).then(
                (response)=>{
                    setPaymentHistoryClassData(response.data.data);
                }
            );

        });
      
        
    }, [setPaymentHistoryClassData,setUserId]);



    



	
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
                                        <h4 class="mb-4">Payment History</h4>
                                        <div class="appointment-tab">
                                           
                                                <div class="tab-pane show" id="upcoming-appointments">    
                                                    <div class="card card-table mb-0">
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Plan Name</th>
                                                                            <th>Plan Amount</th>
                                                                            <th>Plan Order Id</th>
                                                                            <th>Payment Mode</th>
                                                                            <th>Payment Date </th>
                                                                            <th class="text-center">Status</th>
                                                                          
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                      
                                                                     {   paymentHistoryClassData !==''  ?  
                                                                         paymentHistoryClassData.map((iitem,key)=>{
                                                                        let ctime = iitem.class_time;       
                                                                        const time = new Date(ctime);
                                                                       // time.setSeconds(time.getSeconds() + 600); // 10 minutes timer   

                                                                       return <tr>
                                                                           <td>1</td>
                                                                           <td>{iitem.name}</td>
                                                                            <td>
                                                                                {iitem.name}
                                                                            </td>

                                                                            <td>
                                                                            {iitem.orderId}
                                                                            </td>

                                                                            <td>
                                                                            {iitem.paymentMode}
                                                                            </td>


                                                                            <td>
                                                                            {iitem.txTime}
                                                                            </td>
                                                                            
                                                                          
                                                                            <td class="text-right">
                                                                            {iitem.txStatus}
                                                                                
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
export default TrasactionHistory;