import React from 'react';
import Header from './Header';
import Footer from './Footer';






const NotFound =(props)=>{
    
  


	return (
			<>
				<Header  />
				
                <div class="take_error_wrapper notfound">
                    <img src="assets/images/error.png" alt="" class="img-fluid"/>
                    <h1><span class="take_orange">Page</span> not found</h1>
                    <p>Guess you you tumbled into a a wrong page</p>
                    <a href="/" class="take_btn">Go to Homepage</a>
                </div>
                
				<Footer/>
		</>
	);
	
}
export default NotFound;