'use client'

import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductSlider from './_components/ProductSlider'
import ProductInfo from './_components/ProductInfo'
import Purchase from './_components/Purchase'

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
    <section className='w-full px-8 py-10 flex gap-10 justify-center max-[1200px]:flex-col'>
      <div className='flex items-start justify-start gap-6 w-wit'>
        <ProductSlider
          condition={productById?.condition as string}
          images={productById?.images || []}
          youtubeURL={
            productById?.youtubeURL ? (productById.youtubeURL as string) : ''
          }
        />
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
      </div>
      <Purchase
        product={productById as Product}
        priceOffers={productById?.priceDealType as string[]}
        price={productById?.price as number}
      />
    </section>
  )
}

export default ProductInspectPage
