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





const ProductListByCategory =(props)=>{
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
				
                <div className="breadcrumb-area mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-home"></i> Home</a></li>
                                        <li className="active">Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-page-container mb-50">
                    <div className="container">
                        <div className="row">
                           
                            <div className="col-lg-12 order-1 order-lg-2 mb-sm-35 mb-xs-35">
                              
                                <div className="shop-page-banner mb-35">
                                    <a href="shop-left-sidebar.html">
                                    <img src="assets/images/banners/shop-banner.jpg" className="img-fluid" alt=""/>
                                    </a>
                                </div>
                               

                                <div class="shop-header mb-35">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-2 col-sm-12 d-flex align-items-center">
                                            <div className="view-mode-icons mb-xs-10">
                                                <a className={ toglleData===0?'active':'' }    onClick={(e) => { 
                                                    clickOnToggle(e, 0);
                                                 }}  data-target="grid"><i className="fa fa-th"></i></a>
                                                <a  className={ toglleData===1?'active':'' }  data-target="list" onClick={(e) => { 
                                                    clickOnToggle(e,1);
                                                 }}><i className="fa fa-list"></i></a>
                                            </div>
                                        </div>


                                        <div class="col-lg-3 col-md-3 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center">
                                          

                                          <div className="sort-by-dropdown d-flex align-items-center mb-xs-10">
                                          
                                                    <select onChange={e => clickOnSubCategory(e.target.value)} name="sort-by" id="sort-by" className="nice-select" >
                                                        <option value="0">All</option>
                                                        { subCategoryData.map((item,key)=>{
                                                            return  <option key={key} value={item.id}>{item.name}</option>
                                                        }) }   
                                                    </select>
                                                 
                                              </div>
  
                                             
                                          </div>           

                                        <div class="col-lg-4 col-md-4 col-sm-12">

                                            <div className="header-advance-search">
                                                <form action="#">
                                                    <input type="text" placeholder="Search your product"/>
                                                    <button>
                                                        <span className="icon_search">
                                                        </span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>


                                                  

                                        <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div className="sort-by-dropdown d-flex flex-row-reverse mb-xs-10">
                                               
                                                <select onChange={e => sortBy(e.target.value)} name="sort-by" id="sort-by" className="nice-select" >
                                                    <option value="1">Sort By Newness</option>
                                                    <option value="2">Sort By Price: Low to High</option>
                                                    <option value="3">Sort By Price: High to Low</option>
                                                </select>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="slider tab-slider mb-35">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tab-slider-wrapper">
                                                    <nav>
                                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                                                            <a className="nav-item nav-link active" id="all-product-tab" data-toggle="tab" href="#allproduct" role="tab"
                                                                aria-selected="true">All Product</a>

                                                            <a className="nav-item nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
                                                                aria-selected="true">Featured</a>
                                                            <a className="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
                                                                aria-selected="false">New Arrival</a>
                                                            <a className="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
                                                                aria-selected="false">On Sale</a>
                                                        </div>
                                                    </nav>
                                                    <div className="tab-content" id="nav-tabContent">

                                                    <div className="tab-pane fade show active" id="allproduct" role="tabpanel" aria-labelledby="all-product-tab">
                                                            

                                                            <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                                { productData.map((item,key)=>{
                                                                    let price = parseInt(item.price)+5;

                                                                    let product_type = '';
                                                                    if(item.is_feature ==1){
                                                                        product_type ='Feature!';
                                                                    }else if(item.is_new_arrival ==1){
                                                                        product_type ='New Arrival!';
                                                                    }
                                                                    
                                                                    else if(item.sell !=0){
                                                                        product_type ='Sell!';
                                                                    }


                                                                    return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                    
                                                                        <div className="gf-product shop-grid-view-product">
                                                                            <div className="image">
                                                                                <Link to={'/single-product-'+item.id}>                                               
                                                                                <span className="onsale">{product_type}</span>
                                                                                <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                                </Link>
                                                                                <div className="product-hover-icons">
                                                                                    <a  data-tooltip="Add to cart" onClick={e => addToCart(item)} > <span className="icon_cart_alt"></span></a>
                                                                                    <a  data-tooltip="Quick view" onClick={e => quickView(item.price)}  >
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a >{categoryData.name}</a>,
                                                                                    <a >{item.sub_cat_name}</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                                <div className="price-box">
                                                                                    <span className="main-price">{currency}{ price}</span>
                                                                                    <span className="discounted-price">{currency}{item.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        <div className="gf-product shop-list-view-product">
                                                                            <div className="image">
                                                                                <a href="single-product.html">
                                                                                <span className="onsale">Sale!</span>
                                                                                <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                                </a>
                                                                                <div className="product-hover-icons">
                                                                                    <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                                <div className="price-box mb-20">
                                                                                    <span className="main-price">$89.00</span>
                                                                                    <span className="discounted-price">$80.00</span>
                                                                                </div>
                                                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                    tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                    consectetur adipisicing elit. Ullam, magni.
                                                                                </p>
                                                                                <div className="list-product-icons">
                                                                                    <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    }) }        

                                                                </div>   
                                                            
                                                        </div>    


                                                        <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                                            

                                                            <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                                { productData.map((item,key)=>{
                                                                      if(item.is_feature ==1){
                                                                    let price = parseInt(item.price)+5;

                                                                    return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                    
                                                                        <div className="gf-product shop-grid-view-product">
                                                                            <div className="image">
                                                                                <Link to={'/single-product-'+item.id}>                                               
                                                                                <span className="onsale">feature!</span>
                                                                                <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                                </Link>
                                                                                <div className="product-hover-icons">
                                                                                    <a  data-tooltip="Add to cart" onClick={e => addToCart(item)} > <span className="icon_cart_alt"></span></a>
                                                                                    <a  data-tooltip="Quick view" onClick={e => quickView(item.price)}  >
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a >{categoryData.name}</a>,
                                                                                    <a >{item.sub_cat_name}</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                                <div className="price-box">
                                                                                    <span className="main-price">${ price}</span>
                                                                                    <span className="discounted-price">${item.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        <div className="gf-product shop-list-view-product">
                                                                            <div className="image">
                                                                                <a href="single-product.html">
                                                                                <span className="onsale">Sale!</span>
                                                                                <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                                </a>
                                                                                <div className="product-hover-icons">
                                                                                    <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                                <div className="price-box mb-20">
                                                                                    <span className="main-price">$89.00</span>
                                                                                    <span className="discounted-price">$80.00</span>
                                                                                </div>
                                                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                    tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                    consectetur adipisicing elit. Ullam, magni.
                                                                                </p>
                                                                                <div className="list-product-icons">
                                                                                    <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    }
                                                                    }) }        

                                                                </div>   
                                                            
                                                        </div>


                                                        <div className="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">
                                                            
                                                        <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                                { productData.map((item,key)=>{
                                                                    if(item.is_new_arrival ==1){
                                                                    let price = parseInt(item.price)+5;

                                                                    return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                    
                                                                        <div className="gf-product shop-grid-view-product">
                                                                            <div className="image">
                                                                                <Link to={'/single-product-'+item.id}>                                               
                                                                                <span className="onsale">New Arrival!</span>
                                                                                <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                                </Link>
                                                                                <div className="product-hover-icons">
                                                                                    <a  data-tooltip="Add to cart" onClick={e => addToCart(item)} > <span className="icon_cart_alt"></span></a>
                                                                                    <a  data-tooltip="Quick view" onClick={e => quickView(item.price)}  >
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                                <div className="price-box">
                                                                                    <span className="main-price">${ price}</span>
                                                                                    <span className="discounted-price">${item.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        <div className="gf-product shop-list-view-product">
                                                                            <div className="image">
                                                                                <a href="single-product.html">
                                                                                <span className="onsale">Sale!</span>
                                                                                <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                                </a>
                                                                                <div className="product-hover-icons">
                                                                                    <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                                <div className="price-box mb-20">
                                                                                    <span className="main-price">$89.00</span>
                                                                                    <span className="discounted-price">$80.00</span>
                                                                                </div>
                                                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                    tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                    consectetur adipisicing elit. Ullam, magni.
                                                                                </p>
                                                                                <div className="list-product-icons">
                                                                                    <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    }
                                                                    }) }        

                                                                </div>       
                                                       

                                                        
                                                        </div>
                                                        <div className="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                                                        <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                            { productData.map((item,key)=>{
                                                                if(item.sale !=0){
                                                                let discount = (parseFloat(item.price * parseInt(item.sale))/100);
                                                                let price =  Math.round(parseFloat(item.price) - discount);       
                                                                return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                
                                                                    <div className="gf-product shop-grid-view-product">
                                                                        <div className="image">
                                                                            <Link to={'/single-product-'+item.id}>                                               
                                                                            <span className="onsale">Sale!</span>
                                                                            <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                            </Link>
                                                                            <div className="product-hover-icons">
                                                                                <a  data-tooltip="Add to cart" onClick={e => addToCart(item)} > <span className="icon_cart_alt"></span></a>
                                                                                <a  data-tooltip="Quick view" onClick={e => quickView(item.price)}  >
                                                                                <span className="icon_search"></span> </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-content">
                                                                            <div className="product-categories">
                                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                                            </div>
                                                                            <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                            <div className="price-box">
                                                                                <span className="main-price">${ item.price}</span>
                                                                                <span className="discounted-price">${price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                
                                                                    <div className="gf-product shop-list-view-product">
                                                                        <div className="image">
                                                                            <a href="single-product.html">
                                                                            <span className="onsale">Sale!</span>
                                                                            <img src="assets/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                                            </a>
                                                                            <div className="product-hover-icons">
                                                                                <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                <span className="icon_search"></span> </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-content">
                                                                            <div className="product-categories">
                                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                                            </div>
                                                                            <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                            <div className="price-box mb-20">
                                                                                <span className="main-price">$89.00</span>
                                                                                <span className="discounted-price">$80.00</span>
                                                                            </div>
                                                                            <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                consectetur adipisicing elit. Ullam, magni.
                                                                            </p>
                                                                            <div className="list-product-icons">
                                                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                } }) }        

                                                            </div>
                                                               
                                                        
                                                        </div>
                                                    </div>
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
export default ProductListByCategory;