import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';

const Contact =(props)=>{


    const alert = useAlert();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

      const onSubmit = (data,e) => {

       // alert(JSON.stringify(data));
       Api.contactus(JSON.stringify(data)).then(
        (response)=>{
            // console.log(response.data.data);
             if(response.data.success){
            
                e.target.reset(); // reset after form submit   
               
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success',
                    onOpen: () => {
                       
                     // console.log('hey')
                    },  // callback that will be executed after this alert open
                    onClose: () => {
                        //return <Redirect to='/' />
                       // window.location.href = '/';
                     // console.log('closed')
                    } 
                    
                });

             }else{

               // console.log(response.data.message);
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'error'
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    onClose: () => {
                      console.log('closed')
                    } */
                });

             }
        }
        ) 


      }


	return (
			<>
				<Header  />
				
               

                
                <div class="take_section take_contact_wrapper ">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="take_heading_wrapper text-left">
                                    <h2 className="h2">Contact Us</h2>
                                    <p>Take5Music strives to address all your concerns related to our courses, faculty and other items. Have a Question? Fill out the form to have a representative contact you.</p>
                                </div>

                                <div class="take_address_section">
                                    <ul>
                                        <li>
                                            <span class="take_title">ADDRESS</span>
                                            <p>T-Hub Foundation,
                                            IIIT-H Campus, Gachibowli,<br/> Hyderabad, Telangana 500032</p>
                                        </li>
                                        <li>
                                            <span class="take_title">PHONE</span>
                                            <p><a href="tel:+91-8886699622">+91-8886699622</a></p>
                                        </li>
                                        <li>
                                            <span class="take_title">EMAIL</span>
                                            <p> <a href="mailto:hello@take5music.in">hello@take5music.in</a></p>
                                        </li>
                                    </ul>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-group">
                                                <input type="text" {...register('name', { required: true })} name="name" class="form-control" placeholder="Full Name" id="name"/>
                                                {errors.name && <p class="error"> Full Name is required.</p>}
                                            </div>
                                            <div class="form-group">
                                                <input type="text" {...register('email', { required: true })} name="email" class="form-control" placeholder="Email Address" id="email"/>
                                                {errors.email && <p class="error"> Email is required.</p>}
                                            </div>
                                           
                                            <div class="form-group">
                                                <input type="text" {...register('mobile', { required: true })} name="mobile" class="form-control" placeholder="Phone Number" id="mobile"/>
                                                {errors.mobile && <p class="error"> Phone Number is required.</p>}
                                            </div>
                                            <div class="form-group">
                                                <input type="text" {...register('reason', { required: true })} name="reason" class="form-control" placeholder="Reason to contact" id=""/>
                                                {errors.reason && <p class="error"> Reason to Contact is required.</p>}
                                            </div>
                                            <button class="take_btn"> Send </button>
                                           
                                        </form>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="take_map">

                                       <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=1-2-412/16,Floor%202,%20Street%20Number%203,%20Gagan%20Mahal,%20Domalguda,%20Himayatnagar,%20Hyderabad,%20Telangana%20500029&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                       
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
export default Contact;