'use client'

import { Product } from '@prisma/client'
import Image from 'next/image'
import { FiDollarSign } from 'react-icons/fi'
import { FaLariSign } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import WishHeart from '@/app/wishlist/_components/WishHeart'
import Link from 'next/link'
import { IoCloseOutline } from 'react-icons/io5'
import { removeFromCart } from '@/lib/slice/cartSlice'

const CartProduct = ({
  product,
  count,
  cartType,
  remove,
}: {
  product: Product
  count?: number
  cartType: boolean
  remove?: boolean
}) => {
  const { name, price, images, bill } = product
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-5 items-start relative'>
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

      <div className='flex flex-col items-start gap-5 max-w-[85%]'>
        <div className='flex items-center gap-1 font-medium'>
          {bill === 'ლარი' ? <FaLariSign /> : <FiDollarSign />}
          <span>{price}</span>
        </div>
      </div>
      {cartType ? (
        <Link
          href={`/products/${product.id}/purchase`}
          className='w-1/2 text-center py-2 rounded-xl bg-mainYellow text-white hover:bg-[#ffbb00] transition-all duration-200 ease-linear'
        >
          ყიდვა
        </Link>
      ) : (
        <Link
          href={`/products/${product.id}`}
          className='w-1/2 text-center py-2 rounded-xl bg-[#8ea0f1] text-white hover:bg-[#5778c0] transition-all duration-200 ease-linear'
        >
          ნახვა
        </Link>
      )}
      {!cartType && <WishHeart product={product} />}
      {remove && (
        <IoCloseOutline
          onClick={() => dispatch(removeFromCart({ removeId: product.id }))}
          className='absolute top-5 right-5 text-[20px] active:scale-90 text-mainYellow cursor-pointer'
        />
      )}
    </div>
  )
}

export default CartProduct
