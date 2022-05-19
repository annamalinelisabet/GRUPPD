import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import {  addToCart, decrement, removeOne } from '../../store/actions/cartActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)

 
  return (
    <nav className='Navbar'>
      <div className='d-flex'>
        <div className='d-flex nav-links'>
          <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
          <Link to="/products"><h4 className='products-link'>lampor</h4></Link>
        </div>
        <div className='d-flex user-links'>
          <Link to="/login"><button className='nav-btn'>LOGGA IN</button></Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping">
          </i><span className='navbar-cart-notification'><sup>{totalQuantity >= 1 && totalQuantity}</sup></span></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar