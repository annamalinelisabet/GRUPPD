import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductView.css'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/actions/productListActions'

const ProductView = () => {
  
  const dispatch = useDispatch()

  const products = useSelector(state => state.productList.data)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  return (
    <>
      <div className='product-view'>
        
        <div className='product-view-container'>
          <h1 className='product-view-header'>LAMPOR</h1>
          <p className='product-view-text'>Vi hjälper dig att hitta den lampa som är unik för just ditt hem</p>
          <div className='product-view-grid'>
            { products.map(product => (
              <ProductCard key={product._id} product={product} />

            ))}
                                   
          </div>
        </div>
        <div className='product-view-footer' >
          <Footer />
        </div>
      </div>
    </>  
    
  )
}

export default ProductView