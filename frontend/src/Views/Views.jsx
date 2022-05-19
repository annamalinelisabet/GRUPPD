import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import {ProductDetailsView } from '../components/product-details/ProductDetailsView'
import ProductView from './Products/ProductView'
import LoginView from './Login/LoginView'
import CartView from './Cart/CartView'
import RegisterView from './Register/RegisterView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> }/>
        <Route path='/products' element={ <ProductView />}/>
        <Route path='/products/:id' element={ <ProductDetailsView/> }/>
        <Route path='/login' element={ <LoginView /> }/>
        <Route path='/cart' element={ <CartView /> }/>
        <Route path='/RegisterView' element={ <RegisterView /> }/>
        {/* -- Lägg protected route inne i element på orderview -- */}
    </Routes>
  )
}

export default Views