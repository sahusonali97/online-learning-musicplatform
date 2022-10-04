import React, { useContext, useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const AlertMessage=(props)=>{
    
    const { messageTypes } = props;

    

	return (
        <>
        {messageTypes == 1 &&
        <div class="success_message alert alert-success alert-dismissible fade show" role="alert">
            Thank you for your payment. Please check your <a className="pad-inner" href="/course-schedule"> COURSE SCHEDULE </a> for your booked classes.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        }  
        </>
	);
	
} 
export default AlertMessage;