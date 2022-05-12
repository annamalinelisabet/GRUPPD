import './OrderCard.css'
import { useState } from 'react'

const OrderCard = () => {
  // DETTA NÅN ANNANSTANS KANSKE, usestate - admin
  const [admin, setAdmin] = useState(false)
  return (
    <div className='Order d-flex'>
      <div className='d-flex'>
        <input type="checkbox" className={admin ? 'admin-box checkbox' : 'checkbox'} />
        <h5 className='item-text'>2 VAROR</h5>
      </div>
      <div className='date-price'>
        <small className='date'>2022-05-06</small>
        <h5 className='price'>568 kr</h5>
      </div>
    </div>
  )
}

export default OrderCard