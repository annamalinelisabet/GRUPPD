import './OrderCard.css'
import OrderCardItem from './OrderCardItem'

const OrderCard = ( {order} ) => {
  
  return (
    <div className='Order d-flex'>
      <div className='d-flex'>
        <button className='btn-done'><i className="fa-solid fa-check"></i></button>
        <div className='order-item-list'>
          { order.products.map(item => <OrderCardItem key={item._id} item={item} />)}
        </div>
      </div>
      <div className='date-price'>
        <small className='date'>{order.createdAt.slice(0, 10)}</small>
        <h5 className='price'>{ order.totalPrice } kr</h5>
      </div>
    </div>
  )
}

export default OrderCard