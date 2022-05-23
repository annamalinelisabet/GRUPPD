import '../User/UserView.css'
import AdminCard from '../../components/Order/AdminCard'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getOrdersAdmin } from '../../store/actions/orderActions'

const AdminView = () => {

  // ! GÖR LOADING OCH ERROR SNYGGARE 

  const dispatch = useDispatch()
  const { data, error, loading} = useSelector(state => state.order)
  const completed = data.filter(order => order.completed)
  const notCompleted = data.filter(order => !order.completed)

  useEffect(() => {
    dispatch(getOrdersAdmin())
  }, [dispatch])


  return (
    <div className='User'>
      <div className="wrapper">          
          <h2 className='header-text'>ADMIN</h2>
          <Link onClick={() => dispatch(logoutUser())} to="/login"><button className='btn btn-danger'>LOGGA UT</button></Link>
          <div>
            <h4 className='order-text'>AKTUELLA ORDRAR</h4>
            { loading && <p>Laddar...</p> }
            { error && <p>Ajdå, något gick fel</p> }
            { notCompleted.length ? notCompleted.map(order => <AdminCard key={order._id} order={order} />)
                          : <p className='nothing-to-show'>Det finns inga pågående ordrar</p>
            }
            <div className='line'></div>
            <h4 className='order-text'>HISTORIK</h4>
            { completed.length ? completed.map(order => <AdminCard key={order._id} order={order} />)
                            : <p className='nothing-to-show'>Det finns inga avslutade ordrar</p>
            }
          </div>
      </div>
    </div>
  )
}

export default AdminView