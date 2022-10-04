import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import {
	Link
	
 } from "react-router-dom";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { useAlert } from 'react-alert';
import { CartContext } from '../auth/CartContext';





const ClassessList =(props)=>{
    const { cat_id,subcategoryId } = useParams();
  	const [productData,setProductData] = useState([]);
    const [productDBData,setProductDBData] = useState([]);
    const [subCategoryData,setSubCategoryData] = useState([]);
    const [categoryData,setCategoryData] = useState([]);
    const [toglleData,setToglleData] = useState(0);
    const { setCardData} = useContext(CartContext);
    
    const alert = useAlert()
    let currency = '€';

    useEffect(()=>{
        Api.getProductByCategortyId(cat_id).then(
            (response)=>{
              //  console.log(response.data.data);
                setProductData(response.data.data);
                setProductDBData(response.data.data);
                setSubCategoryData(response.data.subcatData);
                setCategoryData(response.data.catData);
               
            }
        )
	
	}, [setProductData]);

    function clickOnSubCategory(subcatid){
        let productDBDataArr = []; 
        productDBData.map(
            (item,key)=>{
               if(subcatid ==0){
                 return productDBDataArr.push(item);
               }else{ 
                    if(item.sub_category_id===subcatid){
                        return productDBDataArr.push(item);
                    }
              }

            }
        )
        setProductData(productDBDataArr);
    }

   
    function clickOnToggle(e,type){
        setToglleData(type);
    }

    function sortBy(type){
       
        if(type==2){
            productDBData.sort((a, b) => (a.price > b.price) ? 1 : -1); 
        }

        if(type==3){
            productDBData.sort((a, b) => (a.price < b.price) ? 1 : -1); 
         }

        setProductData(productDBData);
    }

    function quickView (){
       
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                    <div className="row">
                        asdasfasafaaga
                    </div>
              );
            }
          });

    };

    function addToCart(item){
        setCardData(item,1);
    }

    console.log(productData);

	return (
			<>
				<Header  />
				
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Classes</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">2245 matches found for You</h2>
                            </div>
                            <div class="col-md-4 col-12 d-md-block d-none">
                                <div class="sort-by">
                                    <span class="sort-title">Sort by</span>
                                    <span class="sortby-fliter">
                                        <select class="select">
                                            <option>Select</option>
                                            <option class="sorting">Rating</option>
                                            <option class="sorting">Popular</option>
                                            <option class="sorting">Latest</option>
                                            <option class="sorting">Free</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                                <div class="card search-filter">
                                    <div class="card-header">
                                        <h4 class="card-title mb-0">Search Filter</h4>
                                    </div>
                                    <div class="card-body">
                                       
                                        <div class="filter-widget">
                                            <h4>Select instrument</h4>
                                            <div>
                                                <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" checked/>
                                                <span class="checkmark"></span> Urology
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                <input type="checkbox" name="select_specialist" checked/>
                                                <span class="checkmark"></span> Neurology
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                <input type="checkbox" name="select_specialist"/>
                                                <span class="checkmark"></span> Dentist
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                <input type="checkbox" name="select_specialist"/>
                                                <span class="checkmark"></span> Orthopedic
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                <input type="checkbox" name="select_specialist"/>
                                                <span class="checkmark"></span> Cardiologist
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                <input type="checkbox" name="select_specialist"/>
                                                <span class="checkmark"></span> Cardiologist
                                                </label>
                                            </div>
                                        </div>
                                        <div class="btn-search">
                                            <button type="button" class="btn btn-block">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-8 col-xl-9">
                                
                            <div class="col-lg-12 col-md-12">
                                    <div class="row blog-grid-row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-01.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-01.jpg" alt="Post Author"/> <span>Dr. Ruby Perrin</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 4 Dec 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Doccure – Making your clinic painless visit?</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>

                                                <div class="row pt-3">
                                                    <div class="col"> <div class="clinic-booking">
                                                            <Link class="view-pro-btn"  to="/class-details">View Profile</Link>
                                                        </div>
                                                        </div>
                                                     <div class="col text-right"> <div class="clinic-booking">
                                                            <a class="apt-btn" href="booking.html">Book Class</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                       
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-02.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author"/> <span>Dr. Darren Elder</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 3 Dec 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">What are the benefits of Online Doctor Booking?</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                                <div class="row pt-3">
                                                    <div class="col"> <div class="clinic-booking">
                                                            <Link class="view-pro-btn"  to="/class-details">View Profile</Link>
                                                        </div>
                                                        </div>
                                                    <div class="col text-right"> <div class="clinic-booking">
                                                            <a class="apt-btn" href="booking.html">Book Class</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-03.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-03.jpg" alt="Post Author"/> <span>Dr. Deborah Angel</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 3 Dec 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Benefits of consulting with an Online Doctor</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                                <div class="row pt-3">
                                                    <div class="col"> <div class="clinic-booking">
                                                             <Link class="view-pro-btn"  to="/class-details">View Profile</Link>
                                                        </div>
                                                        </div>
                                                    <div class="col text-right"> <div class="clinic-booking">
                                                            <a class="apt-btn" href="booking.html">Book Class</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-04.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-04.jpg" alt="Post Author"/> <span>Dr. Sofia Brient</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 2 Dec 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">5 Great reasons to use an Online Doctor</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                                <div class="row pt-3">
                                                    <div class="col"> <div class="clinic-booking">
                                                         <Link class="view-pro-btn"  to="/class-details">View Profile</Link>
                                                        </div>
                                                        </div>
                                                    <div class="col text-right"> <div class="clinic-booking">
                                                            <a class="apt-btn" href="booking.html">Book Class</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-05.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-05.jpg" alt="Post Author"/> <span>Dr. Marvin Campbell</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 1 Dec 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Online Doctor Appointment Scheduling</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-06.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-06.jpg" alt="Post Author"/> <span>Dr. Katharine Berthold</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 30 Nov 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Simple steps to make your doctor visits exceptional!</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-07.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-07.jpg" alt="Post Author"/> <span>Dr. Linda Tobin</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 28 Nov 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Choose your own Online Doctor Appointment</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-08.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-08.jpg" alt="Post Author"/> <span>Dr. Paul Richard </span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 25 Nov 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Simple steps to visit your doctor today</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-09.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-09.jpg" alt="Post Author"/> <span>Dr. John Gibbs</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 24 Nov 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">5 Great reasons to use an Online Doctor</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="blog grid-blog">
                                                <div class="blog-image">
                                                    <a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog-10.jpg" alt="Post Image"/></a>
                                                </div>
                                                <div class="blog-content">
                                                    <ul class="entry-meta meta-item">
                                                        <li>
                                                            <div class="post-author">
                                                                <a href="doctor-profile.html"><img src="assets/img/doctors/doctor-thumb-10.jpg" alt="Post Author"/> <span>Dr. Olga Barlow</span></a>
                                                            </div>
                                                        </li>
                                                        <li><i class="far fa-clock"></i> 23 Nov 2019</li>
                                                    </ul>
                                                    <h3 class="blog-title"><a href="blog-details.html">Online Doctoral Programs</a></h3>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="blog-pagination">
                                                <nav>
                                                    <ul class="pagination justify-content-center">
                                                        <li class="page-item disabled">
                                                            <a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-double-left"></i></a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">1</a>
                                                        </li>
                                                        <li class="page-item active">
                                                            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">3</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a class="page-link" href="#"><i class="fas fa-angle-double-right"></i></a>
                                                        </li>
                                                    </ul>
                                                </nav>
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
export default ClassessList;