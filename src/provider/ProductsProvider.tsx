'use client'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'
import { fetchMessages } from '@/lib/slice/messagesSlice'

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts() as any)
    dispatch(fetchMessages() as any)
  }, [])
  return <>{children}</>
}

export default ProductsProvider
