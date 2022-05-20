import '../User/UserView.css'
import OrderCard from '../../components/Order/OrderCard'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

const AdminView = () => {

  const dispatch = useDispatch()


  return (
    <div className='User'>
      <div className="wrapper">          
          <h2 className='header-text'>ADMIN</h2>
          <Link onClick={() => dispatch(logoutUser())} to="/login"><button className='btn btn-danger'>LOGGA UT</button></Link>
          <div>
            <h4 className='order-text'>AKTUELLA ORDRAR</h4>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <div className='line'></div>
            <h4 className='order-text'>HISTORIK</h4>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
      </div>
    </div>
  )
}

export default AdminView