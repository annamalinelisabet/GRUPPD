import React from 'react'
import '../Cart/CartView.css'

const CartView = () => {
  return (
    <div className='Cart'>
      <div className="container">
          <h2 className='header'>Kundvagn</h2>
            <div className='form-cart'>
              <div className="cart-item">
                <img className='img-1' src='https://www.ikea.com/se/sv/images/products/taernaby-bordslampa-beige__1016210_pe830263_s5.jpg?f=l' />

                    <div className="text-group">
                      <h1>Växjö</h1>
                      <small>299 :-</small>
                    </div>

                    <div className='button-group'>
                      <button>-</button>
                      <button>+</button>
                    </div>
              </div>
              <div className="cart-item">
                <img className='img-1' src='https://www.ikea.com/se/sv/images/products/taernaby-bordslampa-beige__1016210_pe830263_s5.jpg?f=l' />

                    <div className="text-group">
                      <h1>Växjö</h1>
                      <small>299 :-</small>
                    </div>

                    <div className='button-group'>
                      <button>-</button>
                      <button>+</button>
                    </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default CartView