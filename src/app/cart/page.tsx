'use client'
import Header from '@/components/Header'
import { useSelector } from 'react-redux'
import CartProduct from './_components/Product'
import { Product } from '@prisma/client'

const UserCartPage = () => {
  const { cartItems }: { cartItems: Product[] } = useSelector(
    (state: any) => state.cart
  )
  return (
    <>
      <Header />
      <div className='px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px] flex flex-col items-start gap-5 py-5'>
        <h2 className='text-2xl font-semibold'>ჩემი კალათა</h2>
        <div className='flex flex-col items-start flex-wrap w-full gap-4'>
          {cartItems &&
            cartItems.map((product: any, idx: number) => {
              return (
                <CartProduct
                  key={idx}
                  product={product}
                  count={product.count}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default UserCartPage
