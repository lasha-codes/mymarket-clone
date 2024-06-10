'use client'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts() as any)
  }, [])
  return <>{children}</>
}

export default ProductsProvider
