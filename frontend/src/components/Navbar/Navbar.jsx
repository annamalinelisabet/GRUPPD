import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import {  addToCart, decrement, removeOne } from '../../store/actions/cartActions'

const Navbar = () => {

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)
  const isAuth = useSelector(state => state.auth.token)
  const isAuthAdmin = useSelector(state => state.auth.admin)
 
  return (
    <nav className='Navbar'>
      <div className='d-flex'>
        <div className='d-flex nav-links'>
          <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
          <Link to="/products"><h4 className='products-link'>lampor</h4></Link>
        </div>
        <div className='d-flex user-links'>
          { isAuth
          ? <Link to={isAuthAdmin ? '/admin' : '/user'}><button className='nav-btn'>{isAuthAdmin ? 'ADMIN' : 'MINA'} SIDOR</button></Link>
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