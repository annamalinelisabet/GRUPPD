import '../User/UserView.css'
import OrderCard from '../../components/Order/OrderCard'

const AdminView = () => {
  return (
    <div className='User'>
      <div className="wrapper">          
          <h2 className='header-text'>ADMIN</h2>
          <button className='btn btn-danger'>LOGGA UT</button>
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