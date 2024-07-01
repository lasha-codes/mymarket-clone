'use client'
import { Offers, Product } from '@prisma/client'
import { useSelector } from 'react-redux'
import ProductSlider from '../../[id]/_components/ProductSlider'
import ProductInfo from '../../[id]/_components/ProductInfo'
import Purchase from '../../[id]/_components/Purchase'
import Header from '@/components/Header'

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

  const userProducts = products.filter((product: Product) => {
    return product.userId === offerProduct?.userId
  })

  return (
    <>
      <Header />
      <section className='w-full px-8 py-10 flex gap-10 justify-center relative max-[1200px]:flex-col max-[840px]:pb-10'>
        <div className='flex items-start justify-start gap-6 max-[840px]:flex-col'>
          <ProductSlider
            product={offerProduct as Product}
            youtubeURL={offerProduct?.youtubeURL as string}
            condition={offerProduct?.condition as string}
            images={offerProduct?.images as string[]}
          />
          <ProductInfo
            productPrice={currOffer?.price as number}
            productDescription={offerProduct?.description as string}
            productTitle={offerProduct?.name as string}
            sellerLocation={offerProduct?.location as string}
            sellerName={offerProduct?.contactName as string}
            sellerPhone={offerProduct?.contactNumber as number}
            id={offerProduct?.id as string}
            userId={offerProduct?.userId as string}
            updatedAt={offerProduct?.updatedAt as Date}
            views={offerProduct?.views as number}
            length={userProducts?.length as number}
          />
          <div className='hidden max-[840px]:block max-[785px]:hidden'>
            <Purchase
              product={offerProduct as Product}
              priceOffers={offerProduct?.priceDealType as string[]}
              price={offerProduct?.price as number}
            />
          </div>
        </div>
        <div className='max-[840px]:hidden max-[785px]:block'>
          <Purchase
            offerId={offerProduct?.id as string}
            disableOffer={true}
            product={offerProduct as Product}
            priceOffers={offerProduct?.priceDealType as string[]}
            price={currOffer?.price as number}
          />
        </div>
      </section>
    </>
  )
}

export default OffersPage
