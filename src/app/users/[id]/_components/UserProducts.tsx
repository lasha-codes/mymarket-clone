'use client'
import { useSelector } from 'react-redux'
import { Product as ProductType } from '@prisma/client'
import Product from './Product'

const UserProducts = ({ userId }: { userId: string }) => {
  const { products }: { products: ProductType[] } = useSelector(
    (state: any) => state.product
  )
  const userProducts: any =
    products &&
    products.filter((product) => {
      return product.userId === userId
    })

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h2 className='text-xl font-semibold px-7'>განცხადებები</h2>
      <div className='w-full flex items-center justify-center flex-wrap gap-6'>
        {userProducts &&
          userProducts.map((product: ProductType, idx: number) => {
            return <Product product={product} key={idx} />
          })}
      </div>
    </div>
  )
}

export default UserProducts
