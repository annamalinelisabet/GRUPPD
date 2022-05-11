import './OrderCard.css'

const OrderCard = () => {
  return (
    <div className='Order d-flex'>
      <div className='d-flex'>
        {/* turnery operator -  om admin är inloggad då ska checkboxen ha admin-box-klassen */}
        <input type="checkbox" className='checkbox'/>
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