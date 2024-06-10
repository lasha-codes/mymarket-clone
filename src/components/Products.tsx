'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Product } from '@prisma/client'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/slice/productSlice'
import Image from 'next/image'
import { FaDollarSign, FaLariSign } from 'react-icons/fa6'
import Link from 'next/link'

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)

  useEffect(() => {
    dispatch(fetchProducts() as any)
  }, [])

  return (
    <>
      {products.length !== 0
        ? products.map((product: Product) => {
            return (
              <Link href={''} className='flex flex-col items-start'>
                <Carousel
                  key={product.id}
                  className='w-[300px] h-[220px] mt-10 rounded-2xl overflow-hidden relative'
                >
                  <CarouselContent>
                    {product.images.map((URL: string, idx: number) => {
                      return (
                        <CarouselItem
                          key={idx}
                          className='w-full h-[220px] relative'
                        >
                          <Image
                            src={URL}
                            fill
                            className='object-cover'
                            alt='product images'
                          />
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  <CarouselPrevious className='absolute left-3 bg-gray-400/65 border-none text-white h-[40px] w-[40px]' />
                  <CarouselNext className='absolute right-3 bg-gray-400/65 border-none text-white h-[40px] w-[40px]' />
                </Carousel>
                <div className='flex flex-col items-start gap-2'>
                  <h3 className='font-medium max-w-full'>{product.name}</h3>
                  <div className='flex items-center font-semibold'>
                    <span>{product.price.toFixed(2)}</span>
                    {product.bill === 'ლარი' ? (
                      <FaLariSign />
                    ) : (
                      <FaDollarSign />
                    )}
                  </div>
                </div>
              </Link>
            )
          })
        : ''}
    </>
  )
}

export default Products
