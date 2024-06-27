import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cartSlice'
import productSlice from './slice/productSlice'
import messagesSlice from './slice/messagesSlice'
import userSlice from './slice/userSlice'
import offerSlice from './slice/offerSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    messages: messagesSlice,
    user: userSlice,
    offer: offerSlice,
  },
})

export default store
