'use client'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'
import { fetchMessages, fetchUsers } from '@/lib/slice/messagesSlice'
import { renderCart, renderWishlist } from '@/lib/slice/cartSlice'

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts() as any)
    dispatch(fetchMessages() as any)
    dispatch(fetchUsers() as any)
    dispatch(renderCart())
    dispatch(renderWishlist())
  }, [])
  return <>{children}</>
}

export default ProductsProvider
