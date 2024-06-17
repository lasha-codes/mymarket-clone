'use client'
import Header from '@/components/Header'
import { useSelector } from 'react-redux'

const UserCartPage = () => {
  const { cartItems } = useSelector((state: any) => state.cart)
  return (
    <>
      <Header />
      <div className='px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px] flex flex-col items-start gap-5 py-5'>
        <h2 className='text-2xl font-semibold'>ჩემი კალათა</h2>
        <div className='flex flex-col items-start w-full gap-3'></div>
      </div>
    </>
  )
}

export default UserCartPage
