import { Product } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import prisma from '@/db/db'

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
      if (!productInCart) {
        state.cartItems.push({ ...product })
        toast.success(`${product.name} added to the cart`)
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    incrementProduct: (state, { payload }) => {
      const { productId }: { productId: string } = payload
      const targetProduct: any = state.cartItems.find((product: Product) => {
        return productId === product.id
      })
      if (targetProduct && targetProduct.inStock - targetProduct.count > 0) {
        targetProduct.count++
        toast.success(`${targetProduct.name} QTY incremented`)
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      } else {
        toast.error('მაქსიმუმი მარაგი უკვე დამატებულია')
      }
    },
    decrementProduct: (state, { payload }) => {
      const { productId }: { productId: string } = payload
      const targetProduct: any = state.cartItems.find((product: Product) => {
        return productId === product.id
      })
      if (targetProduct) {
        if (targetProduct.count === 1) {
          state.cartItems = state.cartItems.filter((product: Product) => {
            return product.id !== targetProduct.id
          })
        } else {
          targetProduct.count -= 1
          toast.success(`${targetProduct.name} QTY decreased`)
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      }
    },
    handlePurchase: (state, { payload }) => {
      const { purchaseId }: { purchaseId: string } = payload
      const purchasedInCart: Product | null = state.cartItems.find(
        (product: Product) => {
          return product.id === purchaseId
        }
      )
      if (purchasedInCart) {
        state.cartItems = state.cartItems.filter((product: Product) => {
          return product.id !== purchasedInCart.id
        })
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      }
    },
  },
})

export default cart.reducer
export const {
  addToCart,
  renderCart,
  incrementProduct,
  handlePurchase,
  decrementProduct,
} = cart.actions
