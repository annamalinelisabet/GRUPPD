import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import {ProductDetailsView } from '../components/product-details/ProductDetailsView'
import ProductView from './Products/ProductView'
import LoginView from './Login/LoginView'
import CartView from './Cart/CartView'
import Conformation_view from './Conformation_view/Conformation_view'
import UserView from './User/UserView'
import AdminView from './Admin/AdminView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> }/>
        <Route path='/products' element={ <ProductView />}/>
        <Route path='/products/:id' element={ <ProductDetailsView/> }/>
        <Route path='/login' element={ <LoginView /> }/>
        <Route path='/cart' element={ <CartView /> }/>
        <Route path='/conformation' element={ <Conformation_view /> }/>
        <Route path='/user' element={ <UserView /> }/>
        <Route path='/admin' element={ <AdminView /> }/>
    </Routes>
  )
}

export default Views