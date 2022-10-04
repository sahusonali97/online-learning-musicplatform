import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from  './About';
import Cart from './Cart';
import RegisterWithPin from './RegisterWithPin';
import Register from './Register';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import LoginWithEmail from './LoginWithEmail';

import Teachers from './Teachers';
import ClassessList from './ClassessList';
import TeacherProfile from './TeacherProfile';
import ClassDeatils from './ClassDetails';
import Instruments from './Instruments';
import TodayClasses from './TodayClasses';
import StudentDashboard from './StudentDashboard';
import StudentProfile from './StudentProfile';
import ChangePassword from './ChangePassword';
import FindClasses from './FindClasses';
import plans from './Plans';
import NotFound from './NotFound';
import Term from './Term';
import Privacy from  './Privacy';
import TrasactionHistory from './TrasactionHistory';
import BookedClasses from './BookedClasses';

import ForgotPassword from './ForgotPassword';
import ForgotPasswordMobile from './ForgotPasswordMobile';
import VerifyOTP from './VerifyOTP';
import  Explore from './Explore';
import verifyRegisterOTP from './VerifyOTPForgotPassword';
import VerifyPasswordConfirm from './VerifyPasswordConfirm';
import Team from './Team';
import Faq from './Faq';
import Blogs from './Blogs';
 import RegisterPassword from './RegisterPassword';
 import Profile from './Profile';
import Course_schedule from './Course_schedule';
import Pricing from './Pricing';
import LoginByadmin from './LoginByadmin';
import RegisterTeacher from './RegisterTeacher';
import PaymentStripe from  './PaymentStripe';
import PaymentStripeSuccess from  './PaymentStripeSuccess';
import Message from  './Message';
import News from './News';
import Payments from './Payments';
import Summercamp from './Summercamp';
import Summercamp_Thanks from './Summercamp_Thanks';
import Summercamp_Verify_OTP from './Summercamp_Verify_OTP';
import Blogdetails1 from './Blogdetails1';
import Blogdetails2 from './Blogdetails2';
import Blogdetails3 from './Blogdetails3';








let hashHistory = Router.hashHistory;

const Routes = (props) => (
    <Router {...props} history={hashHistory} >
        <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/contact" component ={Contact} />
            <Route path="/teachers-:instrumentid" component ={Teachers} />
            <Route path="/teacher-profile-:teacherId" component ={TeacherProfile} />
            <Route path="/classess" component ={ClassessList} />
            <Route path="/class-details-:class_id" component ={ClassDeatils} />
            <Route path="/instruments" component ={Instruments} />
            <Route path="/live-classes" component ={TodayClasses} />
            <Route path="/cart" component ={Cart} />
            <Route path="/register" component ={Register} />
            <Route path="/registerwithpin" component ={RegisterWithPin} />
            <Route path="/login" component ={Login} />
            <Route path="/about" component ={About} />
            <Route path="/LoginWithEmail" component ={LoginWithEmail} />

            <Route path="/student-dashboard-:types" component ={StudentDashboard} />
            <Route path="/student-dashboard" component ={StudentDashboard} />
            <Route path="/student-profile" component ={StudentProfile} />
            <Route path="/change-password" component ={ChangePassword} />
            <Route path="/find-classes-:teacherid" component ={FindClasses} />
            <Route path="/plans-:class_id" component ={plans} />

            <Route path="/book-class-:class_id" component ={plans} />

            <Route path="/terms-condition" component ={Term} />
            <Route path="/privacy-policy" component ={Privacy} />

            <Route path="/payment-history" component ={TrasactionHistory} />

            <Route path="/booked-classes" component ={BookedClasses} />

            <Route path="/forgot_password" component ={ForgotPassword} />
            <Route path="/forgot_password_mobile" component ={ForgotPasswordMobile} />
            <Route path="/verify-OTP" component ={VerifyOTP} />
            <Route path="/explore" component ={Explore} />

            <Route path="/verify-OTP-forgot" component ={verifyRegisterOTP} />
            <Route path="/verify-password-confirm" component ={VerifyPasswordConfirm} />
            <Route path="/team" component ={Team} />
            <Route path="/faq" component ={Faq} />
            <Route path="/blog" component ={Blogs} />
            <Route path="/register-password" component ={RegisterPassword} />
            <Route path="/profile" component ={Profile} />    
            <Route path="/course-schedule" component ={Course_schedule} />   
            <Route path="/pricing" component ={Pricing} />  
            <Route path="/loginByadmin-:stid" component ={LoginByadmin} />    
            <Route path="/registerTeacher" component ={RegisterTeacher} />  
            <Route path="/PaymentStripe" component ={PaymentStripe} />  
            <Route path="/paymentSuccess" component ={PaymentStripeSuccess} /> 
            <Route path="/message" component ={Message} />  
            <Route path="/News" component={News} />
            <Route path="/payments-history" component ={Payments} />
            <Route path="/summercamp2022" component ={Summercamp} />
            <Route path="/summercamp2022_thanks" component ={Summercamp_Thanks} />
            <Route path="/summercamp_verify_OTP" component ={Summercamp_Verify_OTP} />
            <Route path="/blog001" component ={Blogdetails1} />   
            <Route path="/blog002" component ={Blogdetails2} />   
            <Route path="/blog003" component ={Blogdetails3} />    
            

            
                       
           

            <Route path="*" component ={NotFound} />

            

            
            
        </Switch>
    </Router>
);
export default Routes;
