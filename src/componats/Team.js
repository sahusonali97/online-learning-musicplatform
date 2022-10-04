import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';



const Team =(props)=>{

    
 
    
    
 

    


	return (
			<>
				<Header  />
			
                <div class="take_section take_team_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="take_heading_wrapper text-left">
                                    
                                    <h2 className="h2">Meet the elite team of Take5Music </h2>
                                    <p>Take5Music is a premier online platform that empowers students of any age and all levels across India to learn music Anytime, Anywhere! This venture is incomplete without our core team. Let’s meet the members of Take5Music.</p>
                                   
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12">
                                <div class="take_team_box t1 text-center">
                                    <div class="take_team_img">
                                        <img src="assets/images/teams/Rajeev.png" class="img-fluid" alt=""/>
                                    </div>
                                    <h3>Rajeev Raj</h3>
                                    <p>The Affable Founder & Managing Director</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="take_team_box t2 text-center">
                                            <div class="take_team_img">
                                                <img src="assets/images/teams/Abhignan.png" class="img-fluid" alt=""/>
                                            </div>
                                            <h3>Abhignan</h3>
                                            <p>The Brilliant Co-Founder</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="take_team_box t3 text-center">
                                            <div class="take_team_img">
                                                <img src="assets/images/teams/Parthasarathi.png" class="img-fluid" alt=""/>
                                            </div>
                                            <h3>Parthasarathi</h3>
                                            <p>The Noble Chief Advisor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12 d-none">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="take_team_box t4 text-center">
                                            <div class="take_team_img">
                                                <img src="assets/images/t4.png" class="img-fluid" alt=""/>
                                            </div>
                                            <h3>Ashrama</h3>
                                            <p>The Fab Senior Consultant & Product Strategist</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="take_team_box t5 text-center">
                                            <div class="take_team_img">
                                                <img src="assets/images/t5.png" class="img-fluid" alt=""/>
                                            </div>
                                            <h3>Haresh</h3>
                                            <p>The Cool Senior Software Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 d-none">
                                <div class="take_team_box t6 text-center">
                                    <div class="take_team_img">
                                        <img src="assets/images/t6.png" class="img-fluid" alt=""/>
                                    </div>
                                    <h3>Rahul Nehta</h3>
                                    <p>The Expert UI Designer</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="take_section take_info_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="take_heading_wrapper">
                                    <h2 className="h2">OUR MISSION - Connecting you with the best musicians in India! </h2>
                                    <p>Take5Muisc is widely known for its comprehensive range of music classes - Piano classes, Guitar classes, Carnatic Vocal classes, Western Vocal classes and many others. We make learning music convenient, easy and fun. 

At Take5Music, you get an unparalleled opportunity to not only learn from the experts but also discover how to approach music, right from self-study modules to online live classes. We emphasize exploring and composing music where you as a learner gain excellence in skill to practice and teach music.
 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 


                
				<Footer/>
		</>
	);
	
}
export default Team;