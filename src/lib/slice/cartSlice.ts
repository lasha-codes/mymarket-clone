import { Product } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  cartItems: Product[] | any
}

const initialState: initialStateType = {
  cartItems: [],
}

const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { product, productId }: { product: Product; productId: string } =
        payload
      const productInCart = state.cartItems.find((item: Product) => {
        return productId === item.id
      })
      if (productInCart) {
        productInCart.count += 1
      } else {
        state.cartItems.push({ ...product, count: 1 })
      }
      console.log(state.cartItems)
    },
  },
})

export default cart.reducer
export const { addToCart } = cart.actions
