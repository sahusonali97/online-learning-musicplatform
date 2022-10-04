import React from  'react';
import Header from './Header';
import Footer from './Footer';
import NewsSlider  from './NewsSlider';

import axios from 'axios';


//import '../style.css';

import {
	Link
	
 } from "react-router-dom";
import Api from '../Api';



class News extends React.Component{

	constructor(){
		super();
		this.state = {
			categoryData : [],
			cartData : [],
			productData : [],

		};
	}

	componentDidMount(){
		//localStorage.removeItem("cartLocalData");
		/*Api.getCategortyItems().then(
			(response)=>{
				this.setState({categoryData:response.data.data});
			}
		);

		Api.getAllProduct().then(
			(response)=>{
				this.setState({productData:response.data.data});
			}
		);*/


      
        const getData = async () => {
            const res = await axios.get('https://geolocation-db.com/json/')
            console.log('haresh'+res.data.country_code);
            if(res.data.country_code==='IN'){
               // setIsIndia(0);
                localStorage.setItem('isIndia',0);
            }else{
                localStorage.setItem('isIndia',1);
               // setIsIndia(1);
            }
            
              //setCountryCode(res.data.country_code)
          }
    
        getData();
	



		/*let  cartdata =   JSON.parse(localStorage.getItem('cartLocalData'));
		this.setState({	cartData :cartdata });
		cart_data={this.state.cartData}*/
	}	

	render(){
		return (
		<>		

		<div className="take_main_wrapper">
		<Header  />


    
        

        <div class="take_section take_privacy_wrapper take_section_news ">
            <div class="container-fluid container-top">
                <div class="row">
				<div class="col-lg-12 techer_news2">
				<div class="text-center new_container ">
				<p class="news" >News</p>
				</div>
				</div>
		
			
                    <div class="dark">
                    <NewsSlider/>
					   </div>
					   <div class="round_circle1">
					<img src="assets/images/c2.png" class="img-fluid" alt=""/>
					</div>
					   
					   
         </div>
            </div>
        </div>
            
    
        
	  <Footer/>
	  </div>
	  </>
		);
	}
	
}

export default News;