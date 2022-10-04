import React from 'react';
import Header from './Header';
import Footer from './Footer';


const About =(props)=>{

	return (
			<>
				<Header  />
				
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content ">
                    <div className="container ">
                        <div className="row " >

						<div className="col-12">
							<div className="terms-content ">
					
								<div className="terms-text">
							
									<p >Take5 Music is a visionary venture founded by passionate musicians to keep alive this very significant art form and make it available to every seeker on the globe.</p>
                                    <p >Take5 is viewed and encouraged in a holistic sense. 
We aim to bring out the various aspects of it, in a more structured and constructive patterns, to enable students to build a career in music.</p>
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
export default About;