import './OrderCard.css'
import { useSelector } from 'react-redux'

const OrderCard = ( {order} ) => {
  
  const admin = useSelector(state => state.auth.admin)  
  // console.log(order.products.name)
  // ! HUR KOMMER JAG ÅT VARORNA??

  return (
    <div className='Order d-flex'>
      <div className='d-flex'>
        <input type="checkbox" className={admin ? 'admin-box checkbox' : 'checkbox'} />
        {/* <h5 className='item-text'>{order.products.length} VAROR</h5> */}
      </div>
      <div className='date-price'>
        <small className='date'>{order.createdAt.slice(0, 10)}</small>
        <h5 className='price'>{ order.totalPrice } kr</h5>
      </div>
    </div>
  )
}

export default OrderCard