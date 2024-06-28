'use client'
import { Offers, Product } from '@prisma/client'
import { useSelector } from 'react-redux'
import ProductSlider from '../../[id]/_components/ProductSlider'

const OffersPage = ({ params }: { params: { id: string } }) => {
  const { offers }: { offers: Offers[] } = useSelector(
    (state: any) => state.offer
  )
  const { products }: { products: Product[] } = useSelector(
    (state: any) => state.product
  )
  const currOffer =
    offers &&
    offers.find((offer) => {
      return offer.productId === params.id
    })

  const offerProduct =
    products &&
    currOffer &&
    products.find((product) => {
      return product.id === currOffer.productId
    })

  console.log('product', offerProduct)

  return <div className=''></div>
}

export default OffersPage
