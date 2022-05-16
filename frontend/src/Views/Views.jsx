import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import ProductView from './Products/ProductView'
import LoginView from './Login/LoginView'
import CartView from './Cart/CartView'
import ProductDetailsView  from './products-details-view/ProductDetailsView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> }/>
        <Route path='/products' element={ <ProductView />}/>
        <Route path='/productdetail' element={ <ProductDetailsView />}/>

        <Route path='/login' element={ <LoginView /> }/>
        <Route path='/cart' element={ <CartView /> }/>
    </Routes>
  )
}

export default Views