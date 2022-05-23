import './OrderCard.css'

const OrderCardItem = ({item}) => {
  return (
    <div>
      <p className='order-product-text'>{item.quantity} x {item.name}</p>
    </div>
  )
}

export default OrderCardItem