import { Product } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

type initialStateType = {
  cartItems: any
  wishlist: Product[]
}

const initialState: initialStateType = {
  cartItems: [],
  wishlist: [],
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
      } else {
        state.cartItems = state.cartItems.filter((item: Product) => {
          return item.id !== productInCart.id
        })
        toast.success(`removed ${product.name} from the cart`)
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
      const inWishList = state.wishlist.find((item) => {
        return item.id === purchaseId
      })
      if (purchasedInCart) {
        state.cartItems = state.cartItems.filter((product: Product) => {
          return product.id !== purchasedInCart.id
        })
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      }
      if (inWishList) {
        state.wishlist = state.wishlist.filter((item) => {
          return item.id !== inWishList.id
        })
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      }
    },
    toggleWishlist: (state, { payload }) => {
      const { product }: { product: Product } = payload
      const alreadyInWishlist = state.wishlist.find((item) => {
        return product.id === item.id
      })
      if (alreadyInWishlist) {
        state.wishlist = state.wishlist.filter((item) => {
          return item.id !== product.id
        })
      } else {
        state.wishlist.push(product)
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
    renderWishlist: (state, { payload }) => {
      const fromStorage = JSON.parse(localStorage.getItem('wishlist')!) || []
      const { products }: { products: Product[] } = payload
      const availableProducts = products.filter((product: Product) => {
        return product.availableForPurchase
      })

      const checkedStorage = [...fromStorage].filter((item: Product) => {
        return item.availableForPurchase
      })

      if (checkedStorage) {
        console.log('checked', checkedStorage)
        state.wishlist = checkedStorage
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
  toggleWishlist,
  renderWishlist,
} = cart.actions
