import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductView.css'

const ProductView = () => {
  return (
    <div className='product-view-container'>
      <h1 className='product-view-header'>LAMPOR</h1>
      <p className='product-view-text'>Vi hjälper dig att hitta den lampa som är unik för just ditt hem</p>
      <div className='product-view-cards'>
        <ProductCard />
        
      </div>
    </div>
  )
}

export default ProductView