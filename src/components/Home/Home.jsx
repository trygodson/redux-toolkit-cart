import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { addToCart } from '../../features/cartSlice';
import { useGetAllProductQuery } from '../../features/productApi';
import './home.scss'
export const Home = () => {
  const {data, error, isLoading}  = useGetAllProductQuery()
  const dispatch  = useDispatch()
  const history = useHistory()
  const handleAddToCart = (product)=>{
   dispatch(addToCart(product))
   history.push('/cart')
  }
  return (
   <div className="home-container">
     { isLoading ? <p>Loading..</p> : error ? <p>An Error Occured</p> : 
     <>
     <h2>New Arrivals</h2>
     <div className="products">
      {data.map((item)=>(
        <div className="product" key={item.id}>
          <h3>{item.name}</h3>
            <div className="inner-details">
              <span className="product-description">{item.desc}</span>
              <span className="product-price">${item.price}</span>
              <button onClick={()=> handleAddToCart(item)} >Add To Cart</button>
            </div>
        </div>
      ))}
     </div>
     </>
     }
   </div>
    );
}
 
