import React, { useState, useContext, useEffect } from 'react';
import DatePicker from "react-datepicker";
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, getMonth, getYear } from 'date-fns';
import { authContext } from '../auth/AuthContext';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import Helper from '../auth/Helper';
import { useAlert } from 'react-alert';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function RegisterPopup() {

    // ---------------------browsebutton regi--------------------
    const { auth } = useContext(authContext);
    const {setAuthData} = useContext(authContext);
    const userdata = auth.data;
    
    const [isLoading, setLaoding] = useState(false);
    const [startDate, setStartDate] = useState(new Date("02-01-2022"));
    const alert = useAlert()
    const [userId, setUserId] = useState(0);
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

   


    useEffect(async () => {
        await Helper.getAtuhData().then((result) => {
            let user_id = result.id;
            localStorage.setItem('user_id', user_id);
            setUserId(user_id);
            setStartDate(new Date(result.dob));

        }, [setUserId,setStartDate]);
    }, []);

    const onSubmit = (data) => {
        data['dob'] = startDate;
        data['id'] = userId;
        Api.UpdateProfile(JSON.stringify(data)).then(
            (response)=>{
                        if(response.data.success){
                          setAuthData(response.data.data);
                           alert.show(response.data.message, {
                               timeout: 2000, // custom timeout just for this one alert
                               type: 'success',
                               onClose: () => {
                                setLaoding(false);
                                window.location.reload();
                               } 
                           });
           
                        }else{
                         setLaoding(false);
                           alert.show(response.data.message, {
                               timeout: 3000, // custom timeout just for this one alert
                               type: 'error'
                            });
           
                        }
                   }
        )
    }




    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last name is required'),
        mobile: Yup.string()
            .required('Mobile number is required'),
       
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
            gender: Yup.string()
            .required('gender is required'),
   
            



    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

   

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(userdata);
    }, []);

    


 
    
    return (
        <>
            <div
                className="modal fade vaildateId--modal"
                id="vaildateId"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="container">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-6'>
                                        <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                    </div>
                                    <div className='col-6'>
                                        <button
                                            id='vaildateIdentityModel'
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                    <div className="form-group col-6">
                                            <label>Email</label>
                                            <input name="email" type="text" defaultValue={userdata.email} {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} readOnly />
                                            <div className="invalid-feedback">{errors.email?.message}</div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Mobile Number</label>
                                            <input name="mobile" type="number" defaultValue={userdata.mobile} {...register('mobile')} className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} readOnly />
                                            <div className="invalid-feedback">{errors.mobile?.message}</div>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>First Name</label>
                                            <input name="firstName" defaultValue={userdata.name} type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Last Name</label>
                                            <input name="lastName" type="text" defaultValue={userdata.last_name} {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label>Date of Birth  </label>
                                                <div class="input-group"  >

                                                    <DatePicker


                                                        renderCustomHeader={({
                                                            date,
                                                            changeYear,
                                                            changeMonth,
                                                            decreaseMonth,
                                                            increaseMonth,
                                                            prevMonthButtonDisabled,
                                                            nextMonthButtonDisabled,
                                                        }) => (
                                                            <div
                                                                style={{
                                                                    margin: 10,
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                }}
                                                            >
                                                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                                    {"<"}
                                                                </button>
                                                                <select
                                                                    value={getYear(date)}
                                                                    onChange={({ target: { value } }) => changeYear(value)}
                                                                >
                                                                    {years.map((option) => (
                                                                        <option key={option} defaultValue={option}>
                                                                            {option}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                                <select
                                                                    value={months[getMonth(date)]}
                                                                    onChange={({ target: { value } }) =>
                                                                        changeMonth(months.indexOf(value))
                                                                    }
                                                                >
                                                                    {months.map((option) => (
                                                                        <option key={option} defaultValue={option}>
                                                                            {option}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                                    {">"}
                                                                </button>
                                                            </div>
                                                        )}
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        maxDate={addDays(new Date(), 0)}
                                                        className="form-control"
                                                        placeholderText="DD/MM/YYYY"
                                                        
                                                        dateFormat="dd/MM/yyyy"
                                                        

                                                    />





                                                </div>
                                            </div>
                                        </div>
                                         
                                        
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label>Gender</label>
                                                <div class="input-group">
                                                    <label class="take_genderbtn">
                                                        <input type="radio" {...register('gender')} name="gender" id="male" value="1" class="d-none"
                                                         defaultChecked={(userdata.gender==1) && true} />
                                                       
                                                        <span class="form-control">Male</span>
                                                    </label>
                                                    <label class="take_genderbtn">
                                                        <input type="radio" {...register('gender')}  name="gender" value="2" id="female" class="d-none"
                                                          defaultChecked={(userdata.gender==2) && true} />
                                                        <span class="form-control">Female</span>
                                                    </label>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        

                                        {/* <div className="form-group col-12">
                                            <label>Address</label>
                                            <input name="address" type="text" className='form-control' />

                                        </div> */}
                                        <div className="form-group col-12">
                                            <a href="/change-password">Change password</a>
                                            
                                        </div>
                                    </div>
                                        <button type="submit" className="take_btn take_btn_1">Save Changes </button>
                                </form>



                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export { RegisterPopup };


