import { Product } from '@prisma/client'

const CartProduct = ({
  product,
  count,
}: {
  product: Product
  count: number
}) => {
  const { name, price, images, youtubeURL, description, bill } = product
  return <div>Product</div>
}

export default CartProduct
