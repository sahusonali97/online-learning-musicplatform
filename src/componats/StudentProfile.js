import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentSidebar from './StudentSidebar';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import './main.css';
import Helper from '../auth/Helper';



const StudentProfile =(props)=>{


    const [UserData,setUserData] = useState([]); 
    useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
            let userId = result.id;

            Api.getStudentProfile(userId).then(
                (response)=>{
                   //  console.log(response.data.data);
                     if(response.data.success){
                        setUserData(response.data.data);
        
                     }
                    }
                ) 
            

        });
      /*  console.log(uid);
        let userData = await JSON.parse(window.localStorage.getItem('authData'));
        let userId = userData.id;*/
        
    }, [setUserData]); 
     
    console.log(UserData.name);


    const alert = useAlert()
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onClick", // "onChange /onBlur"

       /* defaultValues: {
            firstname:UserData.name,
            lastname:  UserData.last_name,
            phone:  UserData.mobile,
            email:  UserData.email,
            gender:  UserData.gender,
            dob:  UserData.dob,
            address_line_1:  UserData.address_line_1,
            address_line_2:  UserData.address_line_2,
            city:  UserData.city,
            state:  UserData.state,
            country:  UserData.country,
            postalCode: UserData.postal_code,
            education: UserData.degree,
            college: UserData.college,



            
          }*/


      });
     
       

   

      const onSubmit = async(data,e) => {
   

         //console.log(data);   
       // alert(JSON.stringify(data));

       await Helper.getAtuhData().then((result)=>{
        let userId = result.id;

       data['user_id'] =  userId;
       Api.UpdateProfile(JSON.stringify(data)).then(
        (response)=>{
           //  console.log(response.data.data);
             if(response.data.success){
               // e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success',
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    */
                    onClose: () => {
                        //return <Redirect to='/LoginWithEmail' />
                        //window.location.href = '/LoginWithEmail';
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
        });

      }
	
		return (
            <>
                <Header />

                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Profile Settings</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="content" >
                    <div className="container-fluid" >
                        <div className="row" >
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar" >
                                <div className="theiaStickySidebar" >
                                    <StudentSidebar/>
                                    
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Basic Information</h4>
                                            <div class="row form-row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="change-avatar">
                                                            <div class="profile-img">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sithara_at_Bahrain_Keraleeya_Samajam_Program.jpg/1200px-Sithara_at_Bahrain_Keraleeya_Samajam_Program.jpg" alt="User Image"/>
                                                            </div>
                                                            <div class="upload-img">
                                                                <div class="change-photo-btn">
                                                                    <span><i class="fa fa-upload"></i> Upload Photo</span>
                                                                    <input type="file" class="upload"/>
                                                                </div>
                                                                <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                              
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>First Name <span class="text-danger">*</span></label>
                                                        <input {...register('firstname', { required: true })} defaultValue={UserData.name}  value={UserData.name} type="text"   placeholder="First name" class="form-control" />
                                                        {errors.firstname && 
                                                        <p className="error"> *First Name is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Last Name <span class="text-danger">*</span></label>
                                                        <input {...register('last_name', { required: true })} type="text" value={UserData.last_name} placeholder="Last name" class="form-control" />
                                                        {errors.last_name && 
                                                        <p className="error"> *Last Name is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Email <span class="text-danger">*</span></label>
                                                        <input {...register('email', {  required: "*Email is required",
                                                        pattern: {
                                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                        message: "*Invalid email address"
                                                        } })} type="email" placeholder="Email" value={UserData.email}  class="form-control" />
                                                        {errors.email && 
                                                        <p className="error">{errors.email.message}</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Phone Number</label>
                                                        <input {...register('phone', { required: true })} type="text" placeholder="Phone Number" class="form-control" value={UserData.mobile}  />
                                                        {errors.phone && 
                                                        <p className="error"> *Phone Number is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Gender</label>
                                                        <select class="form-control select" {...register('gender', { required: true })}>
                                                        <option>Select</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Male">Female</option>
                                                        </select>
                                                        {errors.gender && 
                                                        <p className="error"> *Gender is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group mb-0">
                                                        <label>Date of Birth</label>
                                                        <input {...register('dob', { required: false })} value={UserData.dob} type="date" placeholder="28-02-2001" class="form-control"  />
                                                        {errors.dob && 
                                                        <p className="error"> *Date of Birth is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="card contact-card">
                                        <div class="card-body">
                                            <h4 class="card-title">Contact Details</h4>
                                            <div class="row form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Address Line 1</label>
                                                        <input {...register('address_line_1', { required: true })} value={UserData.address_line_1}  type="text" placeholder="Address" class="form-control" />
                                                        {errors.address_line_1 && 
                                                        <p className="error"> *Address line 1 is required.</p>
                                                        }
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Address Line 2</label>
                                                        <input {...register('address_line_2', { required: true })} value={UserData.address_line_2} type="text" placeholder="Address" class="form-control" />
                                                        {errors.address_line_2 && 
                                                        <p className="error"> *Address line 2 is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                               



                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label">City</label>
                                                        <input {...register('city', { required: true })} value={UserData.city} type="text" placeholder="Address"  class="form-control" readonly/>
                                                        {errors.city && 
                                                        <p className="error"> *City is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label">State / Province</label>
                                                        <input {...register('state', { required: true })}  value={UserData.state} type="text" placeholder="State" class="form-control" readonly/>
                                                        {errors.state && 
                                                        <p className="error"> *State / Province is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label">Country</label>
                                                        <input {...register('country', { required: true })} value={UserData.country}  type="text" placeholder="Country" class="form-control" readonly/>
                                                        {errors.country && 
                                                        <p className="error"> *Country is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label">Postal Code</label>
                                                        <input {...register('postalCode', { required: true })} value={UserData.postal_code}  type="text" placeholder="Postal Code" class="form-control" readonly/>
                                                        {errors.postalCode && 
                                                        <p className="error"> *Postal Code is required.</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Education</h4>
                                            <div class="education-info">
                                                <div class="row form-row education-cont">
                                                    <div class="col-12 col-md-10 col-lg-11">
                                                        <div class="row form-row">
                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <div class="form-group">
                                                                    <label>Degree</label>
                                                                    <input {...register('education', { required: true })} value={UserData.degree} type="text" placeholder="Degree" class="form-control" readonly/>
                                                                    {errors.education && 
                                                                    <p className="error"> *Education is required.</p>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <div class="form-group">
                                                                    <label>College/Institute</label>
                                                                    <input {...register('college', { required: true })} type="text" value={UserData.college} placeholder="College/Institute" class="form-control" readonly/>
                                                                    {errors.college && 
                                                                    <p className="error"> *College/Institute is required.</p>
                                                                    }
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    
                                    <div class="submit-section submit-btn-bottom">
                                        <button type="submit" 
         class="btn btn-primary submit-btn">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
        </>
    );
	
}
export default StudentProfile;