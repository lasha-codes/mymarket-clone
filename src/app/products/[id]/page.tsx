'use client'

import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductSlider from './_components/ProductSlider'
import ProductInfo from './_components/ProductInfo'
import Purchase from './_components/Purchase'
import OfferPrice from './_components/OfferPrice'
import { toggleOfferPriceOpen } from '@/lib/slice/productSlice'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'

const ProductInspectPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { products, offerPriceOpen } = useSelector(
    (state: any) => state.product
  )

  const [productById, setProductById] = useState<Product | null>(null)

  useEffect(() => {
    const getProduct: Product =
      products &&
      products.find((product: Product) => {
        return product.id === params.id
      })
    setProductById(getProduct)

    if (!getProduct?.availableForPurchase) {
      router.replace('/')
    }
  }, [products])

  const productsLength = products.filter((product: Product) => {
    return product.userId === productById?.userId
  })

  return (
    <>
      <Header />
      <section className='w-full px-8 py-10 flex gap-10 justify-center relative max-[1200px]:flex-col max-[840px]:pb-10'>
        <div
          onClick={() => dispatch(toggleOfferPriceOpen({ bool: false }))}
          className={`bg-gray-400 w-screen h-screen left-0 top-0 fixed transition-all duration-200 ease-linear opacity-0 z-[80] pointer-events-none ${
            offerPriceOpen && 'opacity-60 pointer-events-auto'
          }`}
        />
        <div className='flex items-start justify-start gap-6 max-[840px]:flex-col'>
          <ProductSlider
            product={productById as Product}
            condition={productById?.condition as string}
            images={productById?.images || []}
            youtubeURL={
              productById?.youtubeURL ? (productById.youtubeURL as string) : ''
            }
          />
          <div className='flex items-center gap-5 relative'>
            <ProductInfo
              length={productsLength?.length as number}
              userId={productById?.userId as string}
              products={products}
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
        <div
          className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out z-[99] -translate-x-1/2  ${
            offerPriceOpen
              ? 'opacity-100 -translate-y-1/3 pointer-events-auto'
              : 'opacity-0 -translate-y-[25%] pointer-events-none'
          }`}
        >
          <OfferPrice
            price={productById?.price as number}
            bill={productById?.bill as string}
            id={productById?.id as string}
            sellerId={productById?.userId as string}
          />
        </div>
      </section>
    </>
  )
}

export default ProductInspectPage
