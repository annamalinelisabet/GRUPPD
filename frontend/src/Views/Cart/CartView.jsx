import React from 'react'
import '../Cart/CartView.css'


const CartView = () => {
  return (
    <div className='Cart'>
      <div className="container">
          <h2 className='header'>Kundvagn</h2>
            <div className='form-cart'>
            <div className="cart-item">
                <div className="text-group">
                  <img className='img-1' alt='img-1' src='https://www.ikea.com/se/sv/images/products/taernaby-bordslampa-beige__1016210_pe830263_s5.jpg?f=l' />
                    <div className='head-quant'>
                      <div className='header-p'>
                        <h1>Tärnaby</h1>
                        <p>299 :-</p>
                      </div>
                        <div className="quantity">
                          <button className="minus-btn" type="button" name="button"> <small className='minus-icon'>-</small> </button>
                            <input type="text" name="name" value="1"></input>
                          <button className="plus-btn" type="button" name="button"> <small className='plus-icon'>+</small> </button>
                        </div>
                    </div>
                </div>

                  <div className='info-group'>
                    <button className='remove-icon'>X</button>
                    <div className="item-price">349 :-</div>
                  </div>
              </div>







{/*               <div className="cart-item">
                <img className='img-1' src='https://www.ikea.com/se/sv/images/products/taernaby-bordslampa-beige__1016210_pe830263_s5.jpg?f=l' />
                  <div className="text-group">
                    <h1>Tärnaby</h1>
                    <p>299 :-</p>
                  </div>

                  <div class="quantity">
                    <button className="minus-btn" type="button" name="button"> <small className='minus-icon'>-</small> </button>
                      <input type="text" name="name" value="1"></input>
                    <button className="plus-btn" type="button" name="button"> <small className='plus-icon'>+</small> </button>
                  </div>
              </div>

                <div>
                  <button className='remove-icon'>X</button>
                  <div class="item-price">349 :-</div>
                </div> */}



          </div>
      </div>
    </div>
  )
}

export default CartView