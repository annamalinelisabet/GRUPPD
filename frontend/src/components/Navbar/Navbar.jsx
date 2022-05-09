import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className='d-flex'>
        <div className='d-flex nav-links'>
          <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
          <Link to="/products"><h4 className='products-link'>lampor</h4></Link>
        </div>
        <div className='d-flex user-links'>
          <Link to="/login"><button className='nav-btn'>LOGGA IN</button></Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar