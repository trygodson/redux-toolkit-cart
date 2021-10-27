import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './nav.scss';
const Navbar = () => {
  const cart = useSelector(state => state.cart)
  return ( 
    <nav>
      <Link to="/" className="nav-home">
      <h2>Online Shop</h2>
      </Link>
      <Link to="/cart" className="nav-cart-link">
      <div className="">Cart <span className="cart-number">{cart.cartTotalQuantity}</span></div>
      </Link>
    </nav>
   );
}
 
export default Navbar;