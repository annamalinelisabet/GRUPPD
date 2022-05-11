import React from 'react'
import image from '../../assets/Image-2.png'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className="product-card-image-container">
        <img className='product-card-image' src={image} alt='lampa' />        
      </div>
      <div className='product-card-title'>
        <h4 className='product-card-name'>Växjö</h4>
        <p className='product-card-price'>299:-</p>
      </div>
      <div className="product-card-body">
        <p className='product-card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sapiente quas ab maiores eos iusto eaque natus eum magnam perspiciatis rem ratione, deleniti a provident consequuntur est eligendi ducimus ut. </p>
      </div>
      <button className='product-card-btn'>Lägg i kundvagn</button>

    </div>
  )
}

export default ProductCard