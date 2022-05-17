import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../store/actions/productActions'
import './ProductDetailsView.css'
import { addToCart } from '../../store/actions/cartActions'

const ProductDetailsView = () => {
  
  const dispatch = useDispatch()
  const { id } = useParams()
  // const { product } = useSelector(state => state.productList.data)
  console.log(id)
  
  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])
  
  const product = useSelector(state => state.product.data)
  console.log(product)

  return (
    <div  className='product-details-view'>
      
      <div className="product-details-wrapper ">
        
        <div className='product-details-image '>
          <img src={product.eimg} alt="lampa" />
        </div>
        <div className='product-details-info '>
          <div><h1>{product.name}</h1></div>
          <div><h4>{product.price} :-</h4></div>
          <div><p>{product.description}</p></div>
          <button onClick={() => dispatch(addToCart(product))} className='product-details-btn'>Lägg till i kundvagn</button>
        </div>
        
      </div>    
      
    </div>
  )
}

export default ProductDetailsView