'use client'

import { IoHeartOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { toggleWishlist } from '@/lib/slice/cartSlice'
import { Product } from '@prisma/client'

const Heart = ({
  isLiked,
  product,
}: {
  isLiked: boolean
  product: Product
}) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch(toggleWishlist({ product }))}
      className={`p-2 rounded-xl bg-gray-200 cursor-pointer transition-all duration-200 ease-linear ${
        isLiked && '!bg-mainYellow text-white'
      }`}
    >
      <IoHeartOutline />
    </div>
  )
}

export default Heart
