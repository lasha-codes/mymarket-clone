import { Product } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  cart: Product[] | any
}

const initialState: initialStateType = {
  cart: [],
}

const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { product }: { product: Product } = payload
      state.cart = [...state.cart, { ...product, count: 0 }]
    },
  },
})

export default cart.reducer
