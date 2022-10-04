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

const PaymentStripeSuccess =(props)=>{
    

	
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

                <h2 class="take_title h2">Payment Stripe success </h2>
            </div>
            <div class="take_body take_changepass_wrapper">
                  

                

            </div>

               

                </div>
               
        </>
    );
	
}
export default PaymentStripeSuccess;











