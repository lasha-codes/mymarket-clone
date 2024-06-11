import { Stripe } from 'stripe'
import CheckoutForm from './_components/CheckoutForm'
import { getProductByIdPurchase } from '@/app/(auth)/utils/product'
import { Product } from '@prisma/client'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const StripePurchasePage = async ({ params }: { params: { id: string } }) => {
  const productId = params.id
  const purchaseProduct: { product: Product } = await getProductByIdPurchase(
    productId
  )
  const paymentIntent = await stripe.paymentIntents.create({
    amount: purchaseProduct.product.price,
    currency: purchaseProduct.product.bill === 'ლარი' ? 'gel' : 'usd',
    description: purchaseProduct.product.description,
    metadata: {
      product_image: purchaseProduct.product.images[0],
      product_title: purchaseProduct.product.name,
      product_price: purchaseProduct.product.price,
    },
  })

  return (
    <CheckoutForm
      client_secret={paymentIntent.client_secret as string}
      purchaseProduct={purchaseProduct.product}
    />
  )
}

export default StripePurchasePage
