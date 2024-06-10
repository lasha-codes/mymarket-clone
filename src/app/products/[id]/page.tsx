'use client'

import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
    console.log(getProduct)
  }, [products])

  return <div>ProductInspectPage</div>
}

export default ProductInspectPage
