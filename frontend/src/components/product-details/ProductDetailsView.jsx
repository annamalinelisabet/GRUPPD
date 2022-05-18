import React , {useEffect} from 'react'
import axios from 'axios'
import './ProductDetailsView.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  addToCart, decrement, removeOne } from '../../store/actions/cartActions'
import { selectedProduct, removeSelectedProduct } from "../../store/actions/productActions";
import {Link } from 'react-router-dom'


export const ProductDetailsView = () => {
 
   const product_id =  useParams();
   let product = useSelector((state) => state.product);
   console.log(product)
   const {  name, price, description , eimg} = product;  
  const dispatch = useDispatch();
  
  const fetchProductDetail = async ({id}) => {
    
    console.log(`http://localhost:5050/api/products/${id}`)
    const response = await axios.get(`http://localhost:5050/api/products/${id}`)
               
    console.log(response.data)
    dispatch(selectedProduct(response.data));
  }
  
  
    useEffect(() => {
      if (product_id && product_id !== "") 
      fetchProductDetail(product_id);
      return () => {
        dispatch(removeSelectedProduct());
      };
    }, [product_id]);
    
  
  return (
    
    <div className ='productDetail-container'>
      
      
     
      <div className ='productDetail'>
        <div className='productDetail-background_image'>
            <Link to='/products' className='Back-Product-card'>
               <i className="fa-solid fa-arrow-left-long fa-2x"></i>
            </Link >
            <img className='image-detail'src={eimg} alt="Sample"  />
         </div> 
        
        <div className='product-detail-content'>
         <h1>{name}</h1>
         <p className='pric'>{price}kr /st</p>
         <p className='content'>{description}</p>
        
        <button className="product-card-btn" type="button" name="button" onClick={() => dispatch(addToCart(product))}> <small className='plus-icon'>Add to cart</small> </button>
       </div>
      </div>       
    </div>
  )
}

