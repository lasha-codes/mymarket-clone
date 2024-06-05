import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
})

export default cart.reducer
