'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)

  useEffect(() => {
    dispatch(fetchProducts() as any)
  }, [])

  return (
    <Carousel className='w-full max-w-xs mt-10'>
      <CarouselContent className=''></CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Products
