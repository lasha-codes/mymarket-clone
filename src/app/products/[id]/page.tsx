'use client'

import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductSlider from './_components/ProductSlider'

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
    <section className='w-full px-8 py-10'>
      <ProductSlider
        images={productById?.images || []}
        youtubeURL={
          productById?.youtubeURL ? (productById.youtubeURL as string) : ''
        }
      />
    </section>
  )
}

export default ProductInspectPage
