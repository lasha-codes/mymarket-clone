import { Stripe } from 'stripe'
import CheckoutForm from './_components/CheckoutForm'
import { getProductByIdPurchase } from '@/app/(auth)/utils/product'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const StripePurchasePage = async ({ params }: { params: { id: string } }) => {
  const productId = params.id
  console.log(productId)
  console.log(productId)
  const purchaseProduct = await getProductByIdPurchase(productId)
  console.log(purchaseProduct)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    description: 'good product',
    metadata: {
      title: 'Product',
    },
  })

  return <CheckoutForm client_secret={paymentIntent.client_secret as string} />
}

export default StripePurchasePage
