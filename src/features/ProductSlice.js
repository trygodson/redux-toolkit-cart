import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  items: [],
  status: null
}
//this productFetch is also an action creator
export const ProductFetch = createAsyncThunk( "product/productFetch", async()=>{
  const response = await axios.get('http://localhost:5000/product')
  return response?.data
})
const ProductSlice = createSlice({
  name: 'Product',
  initialState: initialState,
  reducers: {},
  extraReducers:{
    [ProductFetch.pending]: (state, action)=>{
      state.status = 'pending'
    },
    [ProductFetch.fulfilled]: (state, action)=>{
      state.status = 'success'
      state.items = action.payload
    },
    [ProductFetch.rejected]: (state, action)=>{
      state.status = 'rejected'
    },
  }

})

export default ProductSlice.reducer