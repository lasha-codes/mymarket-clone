'use client'
import Header from '@/components/Header'
import { useSelector } from 'react-redux'
import CartProduct from '../cart/_components/Product'
import { Product } from '@prisma/client'

const UserCartPage = () => {
  const { wishlist }: { wishlist: Product[] } = useSelector(
    (state: any) => state.cart
  )
  return (
    <>
      <Header />
      <div className='px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px] flex items-start gap-6 py-5 flex-wrap'>
        <h2 className='text-2xl font-semibold'>ჩემი Wishlist</h2>
        <div className='flex items-end justify-center flex-wrap w-full gap-8'>
          {wishlist.length > 0 &&
            wishlist.map((product: any, idx: number) => {
              return (
                <CartProduct cartType={false} key={idx} product={product} />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default UserCartPage
