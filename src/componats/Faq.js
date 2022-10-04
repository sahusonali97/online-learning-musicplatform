import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Faq =(props)=>{

	return (
			<>
				<Header  />
				
                <div class="take_section take_faq_wrapper ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="take_heading_wrapper text-left">
                            
                            <h2 className="h2">Frequent Asked Questions</h2>
                            <p>Login to your account</p>
                        </div>


                        <div class="take_accordian">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                  <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       1.	How a student/learner can cancel the registered class?
                                      </button>
                                    </h2>
                                  </div>
                              
                                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                    Currently, there is no option for Students to cancel the class. Also, the class will be rescheduled when the respective teacher cancels it.
                                    </div>
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      2.	How to change the timing of the classes?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                    The classes will be scheduled at a specific timing. For the moment, there is no option of rescheduling.
                                    </div>
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      3.	Does Take5Music offer offline classes as well?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        No. All our classes are conducted only online on the Take5Music website.
                                    </div>
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-header" id="heading4">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                      4.	Which courses are offered by Take5Music?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
                                    <div class="card-body">
                                    Currently, Take5Music offers:
                                      •	Guitar classes 
                                      •	Vocals - Western, Carnatic & Hindustani
                                      •	Keyboard & Piano classes
                                      •	Flute classes
                                      •	Violin classes
                                      •	Tabla classes
                                      •	Drums classes

                                    </div>
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-header" id="heading5">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                      5.	What happens if a student misses a class?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                                    <div class="card-body">
                                    We suggest to attend all the classes because there are no backup classes for the lecture missed by student. 
                                    </div>
                                  </div>
                                </div>

                                <div class="card">
                                  <div class="card-header" id="heading6">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                      6.	Are there any pre-recorded classes?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                                    <div class="card-body">
                                    Currently there are only live classes available.
                                    </div>
                                  </div>
                                </div>



                                <div class="card">
                                  <div class="card-header" id="heading7">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                      7.	How many students are included in one batch?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
                                    <div class="card-body">
                                    There will be at most five students in any music class at Take5Music.
                                    </div>
                                  </div>
                                </div>


                                <div class="card">
                                  <div class="card-header" id="heading8">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                      8.	Do the learner need to download skype or zoom for the online class?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
                                    <div class="card-body">
                                    There’s no requirement of any other application. Our website's got everything. The learner can attend the class on the website.
                                    </div>
                                  </div>
                                </div>


                                <div class="card">
                                  <div class="card-header" id="heading9">
                                    <h2 class="mb-0">
                                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                      9. Can an absolute beginner join at Take5?
                                      </button>
                                    </h2>
                                  </div>
                                  <div id="collapse9" class="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
                                    <div class="card-body">
                                    Absolutely, we will start your musical journey right from the basics.
                                    </div>
                                  </div>
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
export default Faq;