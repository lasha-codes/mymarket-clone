import { Product } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

type initialStateType = {
  cartItems: any
}

const initialState: initialStateType = {
  cartItems: [],
}

const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    renderCart: (state) => {
      const localCart = JSON.parse(localStorage.getItem('cart')!)
      if (!localCart) {
        state.cartItems = []
      } else {
        state.cartItems = localCart
      }
      console.log(state.cartItems)
    },
    addToCart: (state, { payload }) => {
      const { product, productId }: { product: Product; productId: string } =
        payload
      const productInCart = state.cartItems.find((item: Product) => {
        return productId === item.id
      })
      if (productInCart) {
        productInCart.count++
        toast.success(`${product.name} QTY incremented`)
      } else {
        state.cartItems.push({ ...product, count: 1 })
        toast.success(`${product.name} added to the cart`)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    incrementProduct: (state, { payload }) => {
      const { productId }: { productId: string } = payload
      const targetProduct: any = state.cartItems.find((product: Product) => {
        return productId === product.id
      })
      if (targetProduct) {
        targetProduct.count++
        toast.success(`${targetProduct.name} QTY incremented`)
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      }
    },
  },
})

export default cart.reducer
export const { addToCart, renderCart, incrementProduct } = cart.actions
