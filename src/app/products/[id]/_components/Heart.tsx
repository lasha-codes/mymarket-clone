'use client'

import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { toggleWishlist } from '@/lib/slice/cartSlice'
import { Product } from '@prisma/client'

const Heart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch(toggleWishlist({ product }))}
      className='p-1.5 rounded-full bg-gray-200 absolute right-6 top-5 z-[10]'
    >
      <IoHeartOutline className='text-gray-400 text-[22px] cursor-pointer' />
    </div>
  )
}

export default Heart
