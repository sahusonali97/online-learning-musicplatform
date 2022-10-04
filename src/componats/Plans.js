import React, {  useEffect,useState } from 'react';
import Header from './Header';
import './main.css';
import Footer from './Footer';
import Api from '../Api';
import Helper from '../auth/Helper';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Plans =(props)=>{
    let current ='₹';
    const [countryCode, setCountryCode] = useState('');
  


	const getData = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		//console.log(res.data.country_code);
      	setCountryCode(res.data.country_code)
	  }
    
    //console.log(countryCode);

    const { class_id } = useParams();
    const alert = useAlert()
	const [planData,setPlanData] = useState([]);
    const [loginUserId,setLoginUserId] = useState(0);

    
    useEffect(async()=>{
        getData();
        await Helper.getAtuhData().then((result)=>{
            if(result){
                setLoginUserId(result.id);
            }
           
        });     

        Api.getPlanList().then(
            (response)=>{
              //  console.log(response.data.data);
              setPlanData(response.data.data);
                
               
            }
        )

	
	}, [setPlanData,setLoginUserId]);

    localStorage.setItem('plan_class_id', class_id);


    function withoutLogin(e) {
        e.preventDefault()
      
        alert.show('Please login to taking Plan', {
			timeout: 2000, // custom timeout just for this one alert
			type: 'error',
			/*onOpen: () => {
			  console.log('hey')
			}, */ // callback that will be executed after this alert open
			onClose: () => {
			
                window.location.href = '/LoginWithEmail';
				
				
				
			} 
		});

    }
    


return (
            <>
	<Header/>
   <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Plans</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Plans</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plans "> 
                    <div className="container">
                        <div className="row">

                        
                        { planData.map((iitem,key)=>{
                           return <div key={key} className="col-xl-4 col-lg-4 col-md-6 col-12">
                                <div className="plan-box">
                                <div className="upperbox">
                                <h3>{iitem.name}</h3>
                                
                                {(countryCode == 'IN' ) ? (
                                    <span className="plan-price">{current} {iitem.amount}</span>

                                ) : null}   

                                {(countryCode !== 'IN' ) ? (
                                    <span className="plan-price">${iitem.amount_doller}</span>

                                ) : null}   
                                

                                <p>Valid for  {iitem.duration} month</p>
                                {(loginUserId != 0 ) ? (
                                     <a className="plan-btn"  href={encodeURI(`https://take5music.in/take5app1/studentApi/index.php/payment/`+loginUserId+'/'+class_id+'/'+iitem.id+'/'+localStorage.getItem("startDatePicker")+'/'+localStorage.getItem("startTime")) }>Subscribe</a>   
                                     
                                ) : null}

                                {(loginUserId == 0 ) ? (
                                    <button  onClick={e =>withoutLogin(e) }  className="plan-btn">Login</button>
                                ) : null}


                                <p className="para"></p>
                                <p className="para"></p>
                                <p className="para"></p>
                                </div>
                                <hr/>
                                <div className="lowerbox">
                                <h4>{iitem.name}<span className="add"></span></h4>
                               
                                </div>
                                </div>
                            </div>
                             })}
                        
                           
                        </div>
                    </div>    
                </div>





                <Footer/>
      </>
        );    
	
}
export default Plans;