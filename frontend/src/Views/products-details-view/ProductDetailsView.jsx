import React from 'react'
import  "./productDetail.css"
 const ProductDetailsView = () => {
  return (
    <div className ='productDetail'>
         <div className='background_image'>
            <img src={"https://www.lightshop.com/images/list/9117301.jpg"} alt="Sample"  />
         </div> 
        
        <div className='product-content'>
            <h1>Dejsa</h1>
            <p className='pric'>499</p>
            <p className='content'>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Cumque, aliquid?</p>
            <button className='btn btn-add-cart'>Add to Cart</button>
       </div>
    </div>
  )
}

export default ProductDetailsView