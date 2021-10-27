import {render} from 'react-dom';
import { configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {App} from './components/App/App.jsx'
import ProductReducer, { ProductFetch } from './features/ProductSlice.js';
import cartReducer, { getTotal } from './features/cartSlice'
import './index.scss'
import { ProductApi } from './features/productApi.js';

const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: cartReducer,
    [ProductApi.reducerPath]: ProductApi.reducer

  },
  middleware: (getDefaultMiddleware) =>{
   return getDefaultMiddleware().concat(ProductApi.middleware)
  }
})

store.dispatch(ProductFetch())
store.dispatch(getTotal())

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))