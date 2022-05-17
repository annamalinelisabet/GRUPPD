import React from 'react'
import './RegisterView.css'
import { Link } from 'react-router-dom'
import FormInput from '../../components/FormInput/FormInput'

const RegisterView = () => {
  return (
    <div className='Register'>      
    <div className='register-container'>
      <div className='form-control'>
        <Link to="/Login"><i className="fa-solid fa-arrow-left"></i></Link>
        <h1>Registrera</h1>
        <p>Fyll i informationen nedan för att registrera ett konto</p>
        <div className='input-group'>
          <FormInput placeholder="Förnamn" type="text"/>
          <FormInput placeholder="Efternamn" type="text"/>
          <FormInput placeholder="E-post" type="email"/>
          <FormInput placeholder="Lösenord" type="password"/>
        </div>
        <Link to="/RegisterView"><button className='btn btn-dark'>Registrera</button></Link>
      </div>
    </div>
  </div>
  )
}

export default RegisterView