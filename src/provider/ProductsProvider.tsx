'use client'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'
import { fetchMessages, fetchUsers } from '@/lib/slice/messagesSlice'
import { renderCart, renderWishlist } from '@/lib/slice/cartSlice'
import { fetchOffers } from '@/lib/slice/offerSlice'
import { useSelector } from 'react-redux'
import {
  fetchUser,
  fetchUserProducts,
  fetchUsersFromDB,
} from '@/lib/slice/userSlice'

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const { products } = useSelector((state: any) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(renderCart())
    dispatch(renderWishlist({ products }))
    dispatch(fetchProducts() as any)
    dispatch(fetchMessages() as any)
    dispatch(fetchUsers() as any)
    dispatch(fetchUser() as any)
    dispatch(fetchUserProducts() as any)
    dispatch(fetchUsersFromDB() as any)
    dispatch(fetchOffers() as any)
  }, [])
  return <>{children}</>
}

export default ProductsProvider
