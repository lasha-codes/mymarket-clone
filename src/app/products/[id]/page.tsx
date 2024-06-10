'use client'

import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductSlider from './_components/ProductSlider'
import ProductInfo from './_components/ProductInfo'

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
    <section className='w-full px-8 py-10 flex items-center'>
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
    </section>
  )
}

export default ProductInspectPage
