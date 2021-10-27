import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
const initialState ={
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action){
      const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${action.payload.name} Cart Quantity`, {
          position: "bottom-left"
        })
      } else{
        const tempProduct = {...action.payload, cartQuantity: 1}
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} Added To Cart`, {
          position: "bottom-left"
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action){
      const newState = state.cartItems.filter((item)=> item.id !== action.payload.id)
       state.cartItems = newState
       localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
       toast.error(`${action.payload.name} Removed From Cart`, {
        position: "bottom-left"
      })
    },
    decreaseCartQuantity(state, action){
      const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
      if(state.cartItems[itemIndex].cartQuantity === 1){
        const newState = state.cartItems.filter((item)=> item.id !== action.payload.id)
        state.cartItems = newState
        toast.error(`${action.payload.name} Removed From Cart`, {
          position: "bottom-left"
        })
       } else if(state.cartItems[itemIndex].cartQuantity > 1){
         state.cartItems[itemIndex].cartQuantity -= 1
         toast.warning(`${action.payload.name} Quantity Reduced`, {
           position: "bottom-left"
          }) 
        }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    clearCart(state, action){
      state.cartItems = []
      toast.error(`Cart Cleared`, {
        position: "bottom-left"
       }) 
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    getTotal(state, action){
      let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const {price, cartQuantity} = cartItem
        const itemTotal = price * cartQuantity
        
        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal
      }, {
        total: 0,
        quantity: 0
      })
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total
    }
  }
})

//the action creators
export const {addToCart, removeFromCart, decreaseCartQuantity, clearCart, getTotal} = cartSlice.actions

export default cartSlice.reducer