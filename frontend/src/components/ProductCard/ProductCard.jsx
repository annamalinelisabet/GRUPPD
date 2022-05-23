import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'
import { Link } from 'react-router-dom'
import './ProductCard.css'
// import image from '../../assets/Image-2.png'

const ProductCard = ({product}) => {
  
  const dispatch = useDispatch()
  const admin = useSelector(state => state.auth.admin)
  
  return (
    <div className='product-card'>
      
      <Link to={`/products/${product._id}`} className="product-card-link">
        <div className="product-card-image-container">
          <img className='product-card-image' src={product.img} alt='lampa' />        
        </div>
      </Link>

      <div className='product-card-title'>
        <h4 className='product-card-name'>{product.name}</h4>
        <p className='product-card-price'>{product.price}:-</p>
      </div>
      <div className="product-card-body">
        <p className='product-card-description'>
          {product.description.slice(0,100)}...          
        </p>
      </div>
      
      <button onClick={() => dispatch(addToCart(product))} className={admin ? 'product-card-btn hidden' : 'product-card-btn'}>Lägg i kundvagn</button>

    </div>
  )
}

export default ProductCard