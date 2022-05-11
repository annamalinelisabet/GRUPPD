import React from 'react'
import './HomeView.css'
import { Link } from 'react-router-dom'
import Lamp from '../../assets/lamp2.jpg'
import Footer from '../../components/Footer/Footer'

const HomeView = () => {
  return (
      <div className='Home'>
        <div className='img-background'>
          <div className='hero-card'>
            <h1>DEJSA</h1>
            <p>Vårt nya tillskott Dejsa ger dig mjukt, dämpat ljus som skapar en mysig atmosfär i rummet. </p>
            <Link to="/" className='btn btn-hero'>Ta en titt</Link>
          </div>
        </div>
        <div className='link-container'>
          <Link to="/" className='title'>Registera dig som ny kund idag</Link>
          <p>För att få personliga erbjudanden och rabatter</p>
        </div>
        <div className='product-information'>
          <div className='img-container'>
            <img src={Lamp} alt="lamp"/>
          </div>
          <div className='text-information'>
            <div className='text-control container'>
              <h1>Förgyll ditt hem med nytt ljus</h1>
              <Link to="/Products" className='btn btn-info'>Våra lampor</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default HomeView