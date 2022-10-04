import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Helper from '../auth/Helper';
import Api from '../Api';


const Blogs =(props)=>{

  const [blogsData, setBlogsData] = useState([]);   
    
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
                <div class="row">
                    <div class="col-lg-12">
                        <div class="take_heading_wrapper text-center">
                            
                            <h2 className="h2">Our Blogs</h2>
                            <p>Any person at one point in their life must have wanted to learn guitar either to impress someone, to really learn and enjoy playing it, or just to spend their leisure time an interesting way – as a hobby.</p>
                        </div>
                        <div class="row">
                         { blogsData.map((iitem,key)=>{  
                            return <div  key={key} class="col-lg-4 col-md-6">
                                <div class="take_blog">
                            
                                    <a href={iitem.url}>
                                        <div class="take_blog_img">
                                            <img src={iitem.image}  class="img-fluid" alt=""/>
                                            <span><img src="assets/images/svg/reply.svg" alt=""/></span>
                                        </div>
                                        <p>{iitem.heading}</p>
                                    </a>
                                </div>
                            </div>
                                })}
                            
                           
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </div>

                
				<Footer/>
		</>
	);
	
}
export default Blogs;