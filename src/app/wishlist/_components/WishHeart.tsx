'use client'

import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { toggleWishlist } from '@/lib/slice/cartSlice'
import { Product } from '@prisma/client'

const WishHeart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()
  const { wishlist } = useSelector((state: any) => state.cart)
  const alreadyLiked = wishlist.find((item: Product) => {
    return item.id === product?.id
  })
  return (
    <div
      onClick={() => dispatch(toggleWishlist({ product }))}
      className={`p-1 rounded-full ${
        alreadyLiked ? 'bg-mainYellow' : 'bg-gray-200'
      } transition-all duration-300 ease-linear absolute right-10 top-1 z-[10]`}
    >
      <IoHeartOutline
        className={`text-gray-400 text-[20px] cursor-pointer transition-all duration-200 ease-linear ${
          alreadyLiked && '!text-white'
        }`}
      />
    </div>
  )
}

export default WishHeart
