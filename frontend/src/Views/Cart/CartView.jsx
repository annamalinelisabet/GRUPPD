import { useSelector, useDispatch } from 'react-redux'
import CartProduct from '../../components/ShoppingCart/CartProduct'
import '../Cart/CartView.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { clearCart } from '../../store/actions/cartActions'


const CartView = () => {

const { cart, totalAmount } = useSelector(state => state.cartReducer)
const loggedIn = useSelector(state => state.auth.token)
const admin = useSelector(state => state.auth.admin)
const navigate = useNavigate()
const dispatch = useDispatch()

const handleOrder = async () => {

  const token = localStorage.getItem('token')
  const res = await axios.post('http://localhost:5050/api/orders', {
      cart,
      totalAmount
  }, {
      headers: {
          'Authorization': 'Bearer ' + token
      }
  })
  if(res.status === 201) {
    navigate('/confirmation')
    dispatch(clearCart())
  }
}

  return (
    <div className='Cart'>
      <div className="container">
          <h2 className='header'>Kundvagn</h2>
          
          { cart.map(product => (
          <CartProduct key={product._id} product={product} price={product.price} />
        )) }
          { cart.length ? <div className='total-amount'> Total Price:  { totalAmount } :-</div>: <h3 className='tom-cart'>{ admin ? 'Du kan inte lägga en beställning inloggad som admin' : 'Din kundvagn är tom' }</h3>}
          <div className='purchase-parent'>
            { loggedIn 
              ? <button className={admin || !cart.length ? 'purchase-button hidden' : 'purchase-button'}><h2 className='purchase-header' onClick={handleOrder}>BESTÄLL</h2></button>
              : <h2 className='link-title'>Du måste <Link to="/login" className='link'>logga in</Link> för att lägga en beställning</h2>
            }
          </div>
      </div>
    </div>
  )
}

export default CartView