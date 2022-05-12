import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../../components/ShoppingCart/CartProduct'
import '../Cart/CartView.css'


const CartView = () => {

  const { cart, totalAmount } = useSelector(state => state.cartReducer)
const dispatch = useDispatch()





  return (
    <div className='Cart'>
      <div className="container">
          <h2 className='header'>Kundvagn</h2>
          { cart.map(product => (
          <CartProduct key={product._id} product={product} price={product.price} />
        )) }
          <div className='total-amount'> Total Price:  { totalAmount } :-</div>
          <small className=''>inkl. vat</small>
          <div className='purchase-parent'>
            <button className='purchase-button'>
              <h2 className='purchase-header'>Beställ</h2>
            </button>
          </div>
      </div>
    </div>
  )
}

export default CartView