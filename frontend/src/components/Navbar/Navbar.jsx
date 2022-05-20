import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import {  addToCart, decrement, removeOne } from '../../store/actions/cartActions'
import { logoutUser } from '../../store/actions/authActions'

const Navbar = () => {

  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)
  const isAuth = useSelector(state => state.auth.token)

 
  return (
    <nav className='Navbar'>
      <div className='d-flex'>
        <div className='d-flex nav-links'>
          <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
          <Link to="/products"><h4 className='products-link'>lampor</h4></Link>
        </div>
        <div className='d-flex user-links'>
          { isAuth
          // ? <Link to="/UserView"><button className='nav-btn'>MINA SIDOR</button></Link>
          ? <Link onClick={() => dispatch(logoutUser())} to="/login"><button className='nav-btn'>Logga ut</button></Link>
          : <Link to="/login"><button className='nav-btn'>LOGGA IN</button></Link>
          }
          <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>
          { totalQuantity >= 1 && 
          <span className='navbar-cart-notification'><sup>{totalQuantity}</sup></span>
          } 
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar