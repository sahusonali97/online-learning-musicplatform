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

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const PaymentStripe =(props)=>{
  //const stripePromise = loadStripe("pk_test_51K2E7sSJzLaMLDrtRvXmDGGr8mrFF5ySU9suGRpXOJP0WjZfhYACcAA2iLKSMxDKfikqC7PdNsMZbkdTcHzRP8rE00FXg67L9P");
  const stripePromise = loadStripe("pk_live_51K2E7sSJzLaMLDrtYPnlDqf2L41gwvz7FH7oMAIDIX8PQFbwrhDFM8XSS33JHxU93NUJWdYFewSi5Oi2NFcqLV1b00AR4FEBwt");


  const [clientSecret, setClientSecret] = useState("");
  const [payAmount, setPayAmount] = useState(0);

  const [userId,setUserId] = useState(0); 
    
  useEffect(async()=>{
      await Helper.getAtuhData().then((result)=>{
        let userId = result.id;
        
          setUserId(userId);

          let durationId = localStorage.getItem('paymentDuration');
          let datasend = {user_id:userId,durationId:durationId};
          Api.stripePayment(datasend)
          .then(
            (response)=>{ 
              console.log(response);    
             // console.log(response.data.data.amount);
              setPayAmount(response.data.amount);
            // setPayAmount(10);
              setClientSecret(response.data.clientSecret)
          })


      });
 
      
  }, [setUserId]);  

    

  console.log(payAmount);


    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };

     

    
	
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

                <h2 class="take_title h2">Payment Stripe</h2>
            </div>
            <div class="take_body take_changepass_wrapper">
                
                  

                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm payAmount={payAmount} />
                    </Elements>
                  )}

            </div>

               

                </div>
               
        </>
    );
	
}
export default PaymentStripe;