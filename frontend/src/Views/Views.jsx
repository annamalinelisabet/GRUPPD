import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import {ProductDetailsView } from '../components/product-details/ProductDetailsView'
import ProductView from './Products/ProductView'
import LoginView from './Login/LoginView'
import CartView from './Cart/CartView'
import ConformationView from './Conformation_view/Conformation_view'
import RegisterView from './Register/RegisterView'
import UserView from './User/UserView'
import AdminView from './Admin/AdminView'
import { ProtectedRoute } from '../routes/ProtectedRoute'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> }/>
        <Route path='/products' element={ <ProductView />}/>
        <Route path='/products/:id' element={ <ProductDetailsView/> }/>
        <Route path='/login' element={ <LoginView /> }/>
        <Route path='/cart' element={ <CartView /> }/>
        <Route path='/confirmation' element={ <ProtectedRoute> <ConformationView /> </ProtectedRoute> }/>
        <Route path='/register' element={ <RegisterView /> }/>
        <Route path='/user/:userId' element={ <ProtectedRoute> <UserView /> </ProtectedRoute> }/>
        <Route path='/admin' element={ <ProtectedRoute> <AdminView /> </ProtectedRoute>  }/>
    </Routes>
  )
}

export default Views