'use client'

import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductSlider from './_components/ProductSlider'
import ProductInfo from './_components/ProductInfo'
import Purchase from './_components/Purchase'
import OfferPrice from './_components/OfferPrice'

const ProductInspectPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)
  const [productById, setProductById] = useState<Product | null>(null)

  useEffect(() => {
    const getProduct =
      products &&
      products.find((product: Product) => {
        return product.id === params.id
      })
    setProductById(getProduct)
  }, [products])

  return (
    <section className='w-full px-8 py-10 flex gap-10 justify-center relative max-[1200px]:flex-col max-[840px]:pb-10'>
      <div className='flex items-start justify-start gap-6 max-[840px]:flex-col'>
        <ProductSlider
          condition={productById?.condition as string}
          images={productById?.images || []}
          youtubeURL={
            productById?.youtubeURL ? (productById.youtubeURL as string) : ''
          }
        />
        <div className='flex items-center gap-5 relative'>
          <ProductInfo
            productDescription={productById?.description as string}
            productTitle={productById?.name as string}
            id={productById?.id as string}
            sellerLocation={productById?.location as string}
            sellerName={productById?.contactName as string}
            sellerPhone={productById?.contactNumber as number}
            views={productById?.views as number}
            updatedAt={productById?.updatedAt as Date}
            productPrice={productById?.price as number}
          />
          <div className='hidden max-[840px]:block max-[785px]:hidden'>
            <Purchase
              product={productById as Product}
              priceOffers={productById?.priceDealType as string[]}
              price={productById?.price as number}
            />
          </div>
        </div>
      </div>
      <div className='max-[840px]:hidden max-[785px]:block'>
        <Purchase
          product={productById as Product}
          priceOffers={productById?.priceDealType as string[]}
          price={productById?.price as number}
        />
      </div>
      <div className='absolute top-1/2 left-1/2 z-[99] -translate-x-1/2 -translate-y-1/3'>
        <OfferPrice
          price={productById?.price as number}
          bill={productById?.bill as string}
        />
      </div>
    </section>
  )
}

export default ProductInspectPage
