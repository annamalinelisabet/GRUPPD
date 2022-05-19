import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../../components/ShoppingCart/CartProduct'
import '../Cart/CartView.css'
import { Link } from 'react-router-dom'


const CartView = () => {

const { cart, totalAmount } = useSelector(state => state.cartReducer)
const loggedIn = useSelector(state => state.auth.token)
const dispatch = useDispatch()






  return (
    <div className='Cart'>
      <div className="container">
          <h2 className='header'>Kundvagn</h2>
          
          { cart.map(product => (
          <CartProduct key={product._id} product={product} price={product.price} />
        )) }
          { cart.length ? <div className='total-amount'> Total Price:  { totalAmount } :-</div>: <h3 className='tom-cart'> Din kundvagn är tom </h3>}
          <div className='purchase-parent'>
            { loggedIn 
              ? <button className='purchase-button'><h2 className='purchase-header'>Beställ</h2></button>
              : <h2>Du måste <Link to="/login">logga in</Link> för att lägga en beställning</h2>
            }
          </div>
      </div>
    </div>
  )
}

export default CartView