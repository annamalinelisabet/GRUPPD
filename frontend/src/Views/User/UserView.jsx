import OrderCard from '../../components/Order/OrderCard'
import './UserView.css'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

const UserView = () => {

  const dispatch = useDispatch()

  return (
    <div className='User'>
        <div className="wrapper">          
            <h2 className='header-text'>MINA SIDOR</h2>
            <Link onClick={() => dispatch(logoutUser())} to="/login"><button className='btn btn-danger'>LOGGA UT</button></Link>
            <div>
              <h4 className='order-text'>PÅGÅENDE ORDRAR</h4>
              <OrderCard />
              <OrderCard />
              <div className='line'></div>
              <h4 className='order-text'>HISTORIK</h4>
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
        </div>
    </div>
  )
}

export default UserView