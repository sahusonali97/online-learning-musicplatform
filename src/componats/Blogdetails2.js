import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Helper from '../auth/Helper';
import Api from '../Api';


const Blogdetails2 =(props)=>{

  const [blogsData, setBlogsData] = useState([]);   
    
  const { bid } = props; 
  useEffect(async()=>{
   /* await Helper.getAtuhData().then((result)=>{
      let userId  =1;//= result.id;


       

    });*/

    Api.getBlogsData().then(
        (response)=>{
          setBlogsData(response.data.data);
           
        }
    )
   
    
}, [setBlogsData]);



	return (
			<>
				<Header  />
				
        <div class="take_section take_blog_wrapper ">
            <div class="container">
           
                <div  class="row">
                <div class="col-lg-12">
                        <div class="take_heading_wrapper">
                            <h1>Why choose guitar</h1>
                        </div>

                        <div class="take_blog_tag">
                            <span class="take_withbg">music</span>
                            <span>6 min read</span>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="take_blog_img">
                                    <img src="assets/images/blog-single.jpg" class="img-fluid" alt=""/>

                                    <div class="take_blogmeta">
                                        <span>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.03125 0.125C2.99525 0.125 2.00168 0.53655 1.26911 1.26911C0.53655 2.00168 0.125 2.99525 0.125 4.03125V4.8125H18.875V4.03125C18.875 2.99525 18.4634 2.00168 17.7309 1.26911C16.9983 0.53655 16.0048 0.125 14.9688 0.125H4.03125ZM0.125 14.9688V6.375H18.875V14.9688C18.875 16.0048 18.4634 16.9983 17.7309 17.7309C16.9983 18.4634 16.0048 18.875 14.9688 18.875H4.03125C2.99525 18.875 2.00168 18.4634 1.26911 17.7309C0.53655 16.9983 0.125 16.0048 0.125 14.9688ZM5.20312 11.0625C5.51393 11.0625 5.812 10.939 6.03177 10.7193C6.25153 10.4995 6.375 10.2014 6.375 9.89062C6.375 9.57982 6.25153 9.28175 6.03177 9.06198C5.812 8.84221 5.51393 8.71875 5.20312 8.71875C4.89232 8.71875 4.59425 8.84221 4.37448 9.06198C4.15472 9.28175 4.03125 9.57982 4.03125 9.89062C4.03125 10.2014 4.15472 10.4995 4.37448 10.7193C4.59425 10.939 4.89232 11.0625 5.20312 11.0625ZM6.375 13.7969C6.375 13.4861 6.25153 13.188 6.03177 12.9682C5.812 12.7485 5.51393 12.625 5.20312 12.625C4.89232 12.625 4.59425 12.7485 4.37448 12.9682C4.15472 13.188 4.03125 13.4861 4.03125 13.7969C4.03125 14.1077 4.15472 14.4057 4.37448 14.6255C4.59425 14.8453 4.89232 14.9688 5.20312 14.9688C5.51393 14.9688 5.812 14.8453 6.03177 14.6255C6.25153 14.4057 6.375 14.1077 6.375 13.7969ZM9.5 14.9688C9.8108 14.9688 10.1089 14.8453 10.3286 14.6255C10.5484 14.4057 10.6719 14.1077 10.6719 13.7969C10.6719 13.4861 10.5484 13.188 10.3286 12.9682C10.1089 12.7485 9.8108 12.625 9.5 12.625C9.1892 12.625 8.89113 12.7485 8.67136 12.9682C8.45159 13.188 8.32812 13.4861 8.32812 13.7969C8.32812 14.1077 8.45159 14.4057 8.67136 14.6255C8.89113 14.8453 9.1892 14.9688 9.5 14.9688ZM10.6719 9.89062C10.6719 9.57982 10.5484 9.28175 10.3286 9.06198C10.1089 8.84221 9.8108 8.71875 9.5 8.71875C9.1892 8.71875 8.89113 8.84221 8.67136 9.06198C8.45159 9.28175 8.32812 9.57982 8.32812 9.89062C8.32812 10.2014 8.45159 10.4995 8.67136 10.7193C8.89113 10.939 9.1892 11.0625 9.5 11.0625C9.8108 11.0625 10.1089 10.939 10.3286 10.7193C10.5484 10.4995 10.6719 10.2014 10.6719 9.89062ZM13.7969 11.0625C14.1077 11.0625 14.4057 10.939 14.6255 10.7193C14.8453 10.4995 14.9688 10.2014 14.9688 9.89062C14.9688 9.57982 14.8453 9.28175 14.6255 9.06198C14.4057 8.84221 14.1077 8.71875 13.7969 8.71875C13.4861 8.71875 13.188 8.84221 12.9682 9.06198C12.7485 9.28175 12.625 9.57982 12.625 9.89062C12.625 10.2014 12.7485 10.4995 12.9682 10.7193C13.188 10.939 13.4861 11.0625 13.7969 11.0625Z" fill="#868686"/>
                                                </svg>  
                                                April 07 2022                   
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    <p>Guitar is one of the most iconic instruments among all others present in the world of music. Without it, the sound of music certainly wouldn’t be the same. It is the most versatile instrument as almost any genre can be played on it – acoustic, folk, rock, country, or pop.</p>
                       
                    <p>In the unusual times what Covid had got us today, most of us are looking for ways to spend our leisure time in being productive and have fun at the same time. Listening or playing music is one such activity that satisfies just this need.</p>

                       <h4>Why choose guitar? –</h4>
                       <ol>
                           <li>
                             <h6>Exercise from within </h6>
                             <p>Without any hesitation, learning any instrument is quite a difficult task. The initial learning curve is definitely going to be little slow. </p>
                            <p>So, for guitar, it certainly requires extreme amount of brain exercise and concentration to memorize all the notes and chords. </p>
                            <p>It also helps in developing fine motor skills. As a guitarist, you need to use both your hands simultaneously – one on the strings, and the other for pressing down different notes, whilst maintaining the highs and lows to get the expected result. </p>
                           <p>Which is why playing guitar helps you improve concentration, memory, and perfection in any work that you do. </p>
                           </li>

                           <li>
                             <h6>Start with something simple</h6>
                             <p>You are not expected to be a pro right from day one, in any instrument that you pick. Begin with something simple and basic. When an instrument gives you utmost joy and a satisfying feeling, that’s the cue in choosing the right one for you.</p>
                           </li>


                           <li>
                             <h6>Emotional release</h6>
                             <p>Whenever we feel gloomy, the one thing we want to do is - listen to our favorite music. It is a proven fact that listening to and/or playing music reduces stress, lowers anxiety and depression as well. </p>
                            <p>The main reason for such amazing benefits is that playing music puts you in a state of mind which is similar to what is achieved in meditation. </p>
                            <p>Afterall, mental peace is all we want at the end of the day, isn’t it?</p>
                            </li>


                           <li>
                             <h6>Easy, affordable, and versatile</h6>
                             <p>Guitars are something which is very simple to understand and use. With just six strings and a peck in your hands you could play almost any kind of music – all with just one instrument.</p>
                              <p>At least one out of ten people you know own/play a guitar. It’s that easily accessible and affordable!</p>  
                            <p>Also, we often see few people posing with a guitar and posting it on social media. But how cool would it be if you could post a video of yourself playing it, right? #Guitarist</p>
                           
                           </li>


                       </ol>

                       <h4>Basic Requirements to start with online guitar classes</h4>
                       <p>Although you have the interest and dedication to learn, you might still need to understand few must-haves beforehand. </p>

                       <ol>
                           <li>
                             <h6>Psychologically strong </h6>
                             <p>Never have self-doubts. Never start something new with least confidence in yourself. Remove all questions which a beginner might generally have, like “Can I do this?”, “I’m too old for this” or “I can’t be as good as others”. </p>
                             <p>There are no barriers in learning to play guitar. If anyone can do it, you can too. </p>   
                           </li>
                           <li>
                             <h6>Guitar type </h6>
                             <p>As a trainee, it is always advised to choose nylon string acoustic guitars as they are beginner friendly. Electric guitars sure sounds fun and exciting, but it requires much more practice and a lot of additional equipment. Always start simple.  </p>
                            </li>

                            <li>
                             <h6>Own a guitar </h6>
                             <p>To get going with the practice, first you need to own a guitar. Few things to keep in mind are that the cost must cover necessary accessories like a tuner, string cleaner and a guitar cover. That’s all! Go to a local music store and get one now. </p>
                            </li>

                        </ol>   
                        <h4>Who can learn guitar?</h4>
                        <p>Guitar is for anyone who has the passion to learn. There isn’t a best age for anyone to begin with guitar lessons. It is both fun and interesting; for it includes learning about various strings and notes that one can play on the guitar.</p>

                        <h4>The only three prerequisites are –</h4>
                        <ol>
                            <li>Set goals – short and long term</li>
                            <li>Stay motivated – to reach your goals</li>
                            <li>Follow a study plan – stick to it</li>
                        </ol>
                        <p>The one decision for you is to pick a proper place to start with. But hey! Sit back and relax. If you choose us, we’ll ensure you stay focused and achieve your objectives without any hurdles. </p>


                        <div class="take_related_tags">
                            <h2>Related Tags :</h2>
                            <a href="javascript:;">FRIENDS</a>
                            <a href="javascript:;">PHYSCOLOGY</a>
                            <a href="javascript:;">COMPATIBILITY</a>
                            <a href="javascript:;">PUZZLE</a>
                            <a href="javascript:;">FUN</a>
                            <a href="javascript:;">PLATFORM</a>
                        </div>

                        <div class="take_updated_wrapper">
                            <div class="take_left">
                                <h2>Stay Updated !</h2>
                                <p>Can’t wait to see you all and begin an extraordinary journey together, virtually!</p>

                                <div class="take_newsletter">
                                    <input type="text" name="" placeholder="Enter your Email I’d" class="form-control" id=""/>

                                    <span>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0927 8.83157L1.29393 8.68496" stroke="white" stroke-width="2.11386" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1543 1.771L18.0927 8.83157L11.0321 15.77" stroke="white" stroke-width="2.11386" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </span>
                                </div>
                            </div>
                            <div class="take_right">
                                <img src="assets/images/newsletter.png" class="img-fluid" alt=""/>
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
export default Blogdetails2;