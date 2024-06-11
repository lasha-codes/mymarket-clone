'use client'
import { PaymentElement, Elements, CardElement } from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Product } from '@prisma/client'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

const CheckoutForm = ({ client_secret }: { client_secret: string }) => {
  return (
    <div className='w-full h-screen'>
      <h1>Payment Page</h1>
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
    <form>
      <CardElement />
      <PaymentElement />
    </form>
  )
}
