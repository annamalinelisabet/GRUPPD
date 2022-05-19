import { useDispatch } from 'react-redux'
import {  addToCart, decrement, removeOne } from '../../store/actions/cartActions'


const CartProduct = ({ product }) => {

const dispatch = useDispatch()



  return (
    <div className='cart-view'>
    <div className="cart-item">
        <div className="text-group">
          <img className='img-1' alt='img-1' src={product.img} />
            <div className='head-quant'>
              <div className='header-p'>
                <h1>{product.name}</h1>
              </div>
                <div className="quantity">
                  <button className="minus-btn" type="button" name="button" onClick={() => dispatch(decrement(product._id))} > <small className='minus-icon'>-</small> </button>
                    <input type="text" name="name" readOnly value={product.quantity} ></input>
                  <button className="plus-btn" type="button" name="button" onClick={() => dispatch(addToCart(product))}> <small className='plus-icon'>+</small> </button>
                </div>
            </div>
        </div>

          <div className='info-group'>
            <button className='remove-icon' type='button' onClick={() => dispatch(removeOne(product._id))}>X</button>
            <div className="item-price"> {product.price} kr/st </div>
          </div>
      </div>
  </div>
  )
}

export default CartProduct