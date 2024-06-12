import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import productSlice from './slice/productSlice'
import messagesSlice from './slice/messagesSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    messages: messagesSlice,
  },
})

export default store
