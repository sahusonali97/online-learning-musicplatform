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
const ChangePassword =(props)=>{


    const [userId,setUserId] = useState(0); 
    
    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
          let userId = result.id;
            setUserId(userId);

        });
   
        
    }, [setUserId]);  


    const alert = useAlert()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

     

      const onSubmit = (data,e) => {
         //console.log(data);   
       // alert(JSON.stringify(data));
       
       Api.StudentChangePassword(JSON.stringify(data),userId).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
                e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success',
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    */
                    onClose: () => {
                        //return <Redirect to='/LoginWithEmail' />
                      //  window.location.href = '/LoginWithEmail';
                      //console.log('closed')
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

                <h2 class="take_title h2">Change Password</h2>
            </div>
            <div class="take_body take_changepass_wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                    <input {...register('old_password', { required: true })} type="password" placeholder="Old Password"  class="form-control"/>
                         {errors.old_password && <p class="error">Old Password is required.</p>}
                    </div>
                    <div class="form-group">
                        <input {...register('new_password', { required: true })} type="password" placeholder="New Password" class="form-control"/>
                        {errors.new_password && <p class="error">New Password is required.</p>}
                    </div>
                    <div class="form-group">
                        <input {...register('confirm_password', { required: true })} type="password" placeholder="Confirm Password" class="form-control"/>
                         {errors.confirm_password && <p class="error">Confirm Password is required.</p>}
                    </div>
                    <button class="take_btn">Save</button>
                </form>
            </div>

               

                </div>
               
        </>
    );
	
}
export default ChangePassword;