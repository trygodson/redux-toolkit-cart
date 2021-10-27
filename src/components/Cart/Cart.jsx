import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, addToCart, decreaseCartQuantity, clearCart, getTotal } from "../../features/cartSlice";
import './cart.scss'
export const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleRemoveItem = (product)=>{
    dispatch(removeFromCart(product))
  }
  const increaseQuantity = (product)=>{
    dispatch(addToCart(product))
  }
  const decreaseQuantity = (product)=>{
    dispatch(decreaseCartQuantity(product))
  }
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }
  useEffect(() => {
    dispatch(getTotal())
  }, [cart])
  return ( 
   <div className="cart-container">
     <h2>Shopping Cart</h2>
     {cart.cartItems.length === 0 ? (
       <div className="cart-empty">
         <p>Your Cart is Currently Empty</p>
         <div className="start-shopping">
           <Link to="/"><span>Start Shoping</span></Link>
         </div>
       </div>
     ) : (
       <div className="cart-itself">
         <div className="title">
           <h3 className="product-title">Product</h3>
           <h3 className="price">Price</h3>
           <h3 className="quantity">Quantity</h3>
           <h3 className="total">Total</h3>
         </div>
           <div className="cart-items">
             {cart.cartItems?.map(item => (
               <div className="cart-item" key={item.id}>
                 <div className="cart-product">
                   <div className="cart-details">
                     <h3>{item.name}</h3>
                     <p>{item.desc}</p>
                     <button onClick={ () => handleRemoveItem(item)}>Remove</button>
                   </div>
                 </div>
                 <div className="cart-product-price">{item.price}</div>
                 <div className="cart-product-quantity">
                   <button onClick={()=> decreaseQuantity(item)}>-</button>
                   <span className="count">{item.cartQuantity}</span>
                   <button onClick={()=> increaseQuantity(item)}>+</button>
                 </div>
                 <div className="cart-product-total-price">
                   ${item.cartQuantity * item.price}
                 </div>
               </div>
             ))}
           </div>
           <div className="cart-summary">
             <button className="clear-cart" onClick={()=> handleClearCart()}>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="">${cart.cartTotalAmount}</span>
                </div>
                <p>Tax and Shipping Calculated after Checkout</p>
                <button>CheckOut</button>
                <Link to="/"><span>Continue Shoping</span></Link>
              </div>
           </div>
       </div>
     )
     }
   </div>
   );
}
 
