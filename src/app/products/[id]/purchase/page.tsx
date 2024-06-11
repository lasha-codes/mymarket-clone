import { Stripe } from 'stripe'
import CheckoutForm from './_components/CheckoutForm'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const StripePurchasePage = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    description: 'good product',
  })

  return <CheckoutForm client_secret={paymentIntent.client_secret as string} />
}

export default StripePurchasePage
