'use client'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'
import { fetchMessages, fetchUsers } from '@/lib/slice/messagesSlice'
import { renderCart, renderWishlist } from '@/lib/slice/cartSlice'
import { fetchUser } from '@/lib/slice/userSlice'

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(renderCart())
    dispatch(renderWishlist())
    dispatch(fetchProducts() as any)
    dispatch(fetchMessages() as any)
    dispatch(fetchUsers() as any)
    dispatch(fetchUser() as any)
  }, [])
  return <>{children}</>
}

export default ProductsProvider
