import OrderCard from '../../components/Order/OrderCard'
import './UserView.css'

const UserView = () => {
  return (
    <div className='User'>
        <div className="wrapper">          
            <h2 className='header-text'>MINA SIDOR</h2>
            <button className='btn btn-danger'>LOGGA UT</button>
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