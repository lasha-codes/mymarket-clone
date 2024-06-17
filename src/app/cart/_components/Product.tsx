'use client'

import { Product } from '@prisma/client'
import Image from 'next/image'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { FiMinus, FiDollarSign } from 'react-icons/fi'
import { FaLariSign } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { incrementProduct, decrementProduct } from '@/lib/slice/cartSlice'

const CartProduct = ({
  product,
  count,
}: {
  product: Product
  count: number
}) => {
  const { name, price, images, bill } = product
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-5 items-start'>
      <div className='flex flex-col items-start gap-2 w-[300px]'>
        <Image
          src={images[0]}
          alt='product image'
          className='object-cover rounded-lg'
          width={150}
          height={120}
        />
        <h3 className='text-[17px] font-medium'>{name}</h3>
      </div>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => dispatch(incrementProduct({ productId: product.id }))}
          className='p-0.5 rounded bg-mainYellow text-white group'
        >
          <HiOutlinePlusSm className='group-active:scale-90' />
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrementProduct({ productId: product.id }))}
          className='p-0.5 rounded bg-mainYellow text-white group'
        >
          <FiMinus className='group-active:scale-[85%]' />
        </button>
      </div>
      <div className='flex flex-col items-start gap-5 max-w-[85%]'>
        <div className='flex items-center gap-1 font-medium'>
          {bill === 'ლარი' ? <FaLariSign /> : <FiDollarSign />}
          <span>{price * count}</span>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
