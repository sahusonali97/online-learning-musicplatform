import React , { useContext } from  'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from '../auth/CartContext';


export default function FeatureSlider(props) {
	const {setCardData} = useContext(CartContext);
	let productData = props.product_data;
	let currency = '€';
    var settings = {
    className: "tab-slider-container",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1

    };

	function addToCard(item,qty){

		setCardData(item,qty);

	}


    return (
      <Slider {...settings}>
         
         
        
		 { productData.map((item,key)=>{	
									
		let discount =  parseInt(item.price)+5;	 

		return	<div key={key} className="gf-product tab-slider-sub-product">
				<div className="image">
					
					<Link to={'/single-product-'+item.pid}>
						<span className="onsale">Sale!</span>
						<img src="assets/images/products/product09.jpg" className="img-fluid" alt=""/>
					</Link>	
					
					<div className="product-hover-icons">
						<a className="active" href="#" onClick={(e) => { addToCard(item,1) }}  data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
						<a data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
						<a href="#" data-tooltip="Quick view" data-toggle="modal"
							data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
					</div>
				</div>
				<div className="product-content">
					<div className="product-categories">
						<Link to={'/product-list-by-category-'+item.category_id+'-0'}> {item.category}</Link>,
						<Link to={'/product-list-by-category-'+item.category_id+'-'+item.sub_category_id}> {item.subcategory}</Link>
						
					</div>
					<h3 className="product-title">
						<Link to={'/single-product-'+item.pid}> {item.product_name}</Link>
						</h3>
					<div className="price-box">
						<span className="main-price">{currency}{discount }</span>
						<span className="discounted-price">{currency}{item.price }</span>
					</div>
				</div>
			</div>

		}) }	
								
        
      </Slider>
    );
  }