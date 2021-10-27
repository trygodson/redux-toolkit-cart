import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ProductApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  endpoints: (builder)=>{
   return{ getAllProduct: builder.query({
      query: () => 'product' 
    })
  }
  }
})

export const {useGetAllProductQuery} = ProductApi