import OrderCard from '../../components/Order/OrderCard'
import './UserView.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'
import { Link, useParams } from 'react-router-dom'
import { getOrdersFromUser } from '../../store/actions/orderActions'
import { clearCart } from '../../store/actions/cartActions'

const UserView = () => {

  const dispatch = useDispatch()
  const { userId } = useParams()
  const { data } = useSelector(state => state.order)
  const completed = data.filter(order => order.completed)
  const notCompleted = data.filter(order => !order.completed)
  


  useEffect(() => {
    dispatch(getOrdersFromUser(userId))
  }, [dispatch, userId])

  const handleClick = () => {
    dispatch(logoutUser())
    dispatch(clearCart())
  }

  return (
    <div className='User'>
        <div className="wrapper">          
            <h2 className='header-text'>MINA SIDOR</h2>
            <Link onClick={handleClick} to="/login"><button className='btn btn-danger'>LOGGA UT</button></Link>
            <div>
              <h4 className='order-text'>PÅGÅENDE ORDRAR</h4>
              { notCompleted.length ? notCompleted.map(order => <OrderCard key={order._id} order={order} />)
                            : <p className='nothing-to-show'>Du har inga pågående ordrar</p>
              }
              <div className='line'></div>
              <h4 className='order-text'>HISTORIK</h4>
              { completed.length ? completed.map(order => <OrderCard key={order._id} order={order} />)
                            : <p className='nothing-to-show'>Du har inga avslutade ordrar</p>
              }

            </div>
        </div>
    </div>
  )
}

export default UserView