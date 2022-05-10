import React from 'react'
import './HomeView.css'
import hero from '../../assets/lampa.png'

const HomeView = () => {
  return (
      <div className='Home'>
        <div className='img-container'>
          <img src={hero} className="hero-img" alt='' />
        </div>
      </div>
  )
}

export default HomeView