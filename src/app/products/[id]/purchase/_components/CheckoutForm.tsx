'use client'
import {
  ExpressCheckoutElement,
  PaymentElement,
  Elements,
} from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Product } from '@prisma/client'
import Image from 'next/image'
import { FaLariSign } from 'react-icons/fa6'
import { LuDollarSign } from 'react-icons/lu'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProductPurchaseInfo from './ProductPurchaseInfo'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

const CheckoutForm = ({
  client_secret,
  purchaseProduct,
  offer,
}: {
  client_secret: string
  purchaseProduct: Product
  offer?: string
}) => {
  const router = useRouter()
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
    if (!purchaseProduct?.availableForPurchase) {
      router.replace('/')
    }
  }, [])

  return (
    <div className='w-full flex items-start justify-around py-10 px-20 max-xl:px-16 max-lg:px-14 max-md:px-10 gap-20'>
      {isClient && (
        <div className='w-full flex items-start gap-10 max-xl:flex-col'>
          <ProductToPurchase purchaseProduct={purchaseProduct} />
          <ProductPurchaseInfo
            productTitle={purchaseProduct?.name && purchaseProduct.name}
            sellerPhone={
              purchaseProduct?.contactNumber &&
              (purchaseProduct?.contactNumber as number)
            }
            sellerName={
              purchaseProduct?.contactName && purchaseProduct.contactName
            }
            sellerLocation={
              purchaseProduct?.location && purchaseProduct.location
            }
            productDescription={
              purchaseProduct?.description && purchaseProduct.description
            }
            productPrice={purchaseProduct?.price && purchaseProduct.price}
            {...purchaseProduct}
          />
        </div>
      )}
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: client_secret,
        }}
      >
        <Form
          purchaseProduct={purchaseProduct}
          purchasePrice={purchaseProduct.price}
          bill={purchaseProduct.bill as string}
        />
      </Elements>
    </div>
  )
}

export default CheckoutForm

function Form({
  purchasePrice,
  bill,
  purchaseProduct,
}: {
  purchasePrice: number
  bill: string
  purchaseProduct: Product
}) {
  const [paymentPending, setPaymentPending] = useState<boolean>(false)
  const elements = useElements()
  const stripe = useStripe()

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setPaymentPending(true)
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `http://localhost:3000/success/${purchaseProduct.id}`,
        },
      })

      if (error) {
        setPaymentPending(false)
        return toast.error(error.message)
      }

      setPaymentPending(false)
    } catch (err) {
      console.log(err)
      setPaymentPending(false)
    }
  }

  return (
    <form
      onSubmit={handlePurchase}
      className='w-full flex flex-col justify-center gap-5'
    >
      <h3 className='flex items-center gap-1 text-xl font-semibold'>
        {bill === 'ლარი' ? <FaLariSign /> : <LuDollarSign />}{' '}
        <span>{purchasePrice}</span>
      </h3>
      <ExpressCheckoutElement
        onConfirm={() => {
          console.log('')
        }}
      />
      <PaymentElement />
      <button className='rounded-lg px-20 py-3 bg-[#9966FF] hover:bg-[#8146f7] transition-all duration-300 ease-linear text-white font-medium'>
        {paymentPending ? (
          <div className='flex items-center justify-center gap-2'>
            მუშავდება <div className='loader' />{' '}
          </div>
        ) : (
          'გადახდა'
        )}
      </button>
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

console.log('i created my cv today')
