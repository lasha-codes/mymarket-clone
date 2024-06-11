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
import Image from 'next/image'
import { FaDollarSign, FaLariSign } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'

const Products = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { products } = useSelector((state: any) => state.product)

  return (
    <div className='flex items-start flex-wrap gap-6 pb-5'>
      {products?.length !== 0 && Array.isArray(products)
        ? products.map((product: Product) => {
            return (
              <div className='flex flex-col w-fit gap-3 items-start relative group'>
                <div
                  onClick={() => router.push(`/products/${product.id}`)}
                  className='absolute cursor-pointer w-full h-full z-[10]'
                />
                <Carousel
                  key={product.id}
                  className='w-[300px] h-[220px] z-[30] mt-10 rounded-2xl cursor-pointer overflow-hidden relative'
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
                  <CarouselPrevious className='absolute !opacity-0 group-hover:!opacity-100 duration-300 ease-linear transition-all left-3 bg-gray-400/65 z-[20] border-none text-white h-[40px] w-[40px]' />
                  <CarouselNext className='absolute duration-300 ease-linear !opacity-0 group-hover:!opacity-100 transition-all right-3 bg-gray-400/65 z-[20] border-none text-white h-[40px] w-[40px]' />
                </Carousel>
                <div className='flex flex-col items-start gap-2'>
                  <h3 className='font-medium max-w-[300px] text-[15px]'>
                    {product.name}
                  </h3>
                  <div className='flex items-center font-bold gap-0.5'>
                    <span>
                      {product.priceDealType.includes('ფასი შეთავაზებით')
                        ? 'ფასი შეთავაზებით'
                        : product.price.toFixed(2)}
                    </span>
                    {product.bill === 'ლარი' ? (
                      <FaLariSign />
                    ) : (
                      <FaDollarSign />
                    )}
                  </div>
                </div>
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default Products
