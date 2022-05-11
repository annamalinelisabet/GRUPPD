import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import ProductView from './Products/ProductView'
import LoginView from './Login/LoginView'
import CartView from './Cart/CartView'
import UserView from './User/UserView'
import AdminView from './Admin/AdminView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> }/>
        <Route path='/products' element={ <ProductView />}/>
        <Route path='/login' element={ <LoginView /> }/>
        <Route path='/cart' element={ <CartView /> }/>
        <Route path='/user' element={ <UserView /> }/>
        <Route path='/admin' element={ <AdminView /> }/>
    </Routes>
  )
}

export default Views