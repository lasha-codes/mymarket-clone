'use client'
import { PaymentElement, Elements } from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Product } from '@prisma/client'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

const CheckoutForm = ({
  client_secret,
  purchaseProduct,
}: {
  client_secret: string
  purchaseProduct: Product
}) => {
  const [isClient, setIsClient] = useState<boolean>(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='w-full flex items-start justify-around py-10 px-20 max-xl:px-16 max-lg:px-14 max-md:px-10 gap-20'>
      {isClient && (
        <div className='w-full'>
          <ProductToPurchase purchaseProduct={purchaseProduct} />
        </div>
      )}
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: client_secret,
        }}
      >
        <Form />
      </Elements>
    </div>
  )
}

export default CheckoutForm

function Form() {
  const elements = useElements()
  const stripe = useStripe()
  return (
    <form className='w-full'>
      <PaymentElement />
    </form>
  )
}

function ProductToPurchase({ purchaseProduct }: { purchaseProduct: Product }) {
  const { images, youtubeURL } = purchaseProduct
  return (
    <Carousel className='w-[450px] h-[420px] max-lg:h-[380px] max-lg:w-[420px] max-md:w-[380px] max-md:h-[350px] overflow-hidden border rounded-2xl'>
      <CarouselContent>
        {images &&
          images.map((URL, idx: number) => {
            return (
              <CarouselItem
                key={idx}
                className='w-full h-[420px] max-lg:h-[380px] max-md:h-[350px] relative'
              >
                <Image
                  src={URL}
                  key={idx}
                  fill
                  className='object-cover'
                  alt={'product image' + '' + { idx }}
                />
              </CarouselItem>
            )
          })}
        {youtubeURL && (
          <CarouselItem className='w-full h-[420px] max-lg:h-[380px] max-md:h-[350px] flex justify-center'>
            <ReactPlayer url={youtubeURL} height={420} />
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselNext className='absolute right-3 h-[45px] w-[45px] bg-gray-200 hover:bg-gray-300 transition-all' />
      <CarouselPrevious className='absolute left-3 w-[45px] h-[45px] bg-gray-200 hover:bg-gray-200 transition-all' />
    </Carousel>
  )
}
