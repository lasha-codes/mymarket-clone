import { Product as ProductType } from '@prisma/client'
import Image from 'next/image'
import { FaMinus, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { FaLariSign } from 'react-icons/fa6'
import { FiDollarSign, FiMinus } from 'react-icons/fi'
import Heart from './Heart'
import { VscSparkleFilled } from 'react-icons/vsc'
import { BiSolidLike } from 'react-icons/bi'
import { TbReload } from 'react-icons/tb'

const Product = ({
  product,
  productLiked,
}: {
  product: ProductType
  productLiked: boolean
}) => {
  const ReturnConditionComponent = () => {
    if (product?.condition === 'მეორადი') {
      return (
        <div className='absolute z-[99] px-2 top-5 bg-[#4A6CFA] text-white rounded-[8px]  font-semibold text-[12px] left-6 flex items-center gap-2 py-1'>
          <TbReload className='text-[14px]' />
          <span>{product?.condition}</span>
        </div>
      )
    } else if (product?.condition === 'ახალი') {
      return (
        <div className='absolute top-5 z-[99] bg-[#0EC604] px-2 text-white rounded-[8px] font-semibold text-[12px] left-6 flex items-center gap-2 py-1'>
          <VscSparkleFilled className='text-[14px]' />
          <span>{product?.condition}</span>
        </div>
      )
    } else if (product?.condition === 'ახალივით') {
      return (
        <div className='absolute top-5 z-[99] px-2 bg-[#4A6CFA] text-white rounded-[8px] font-semibold text-[12px] left-6 flex items-center gap-2 py-1'>
          <BiSolidLike className='text-[14px]' />
          <span>{product?.condition}</span>
        </div>
      )
    } else {
      return (
        <div className='absolute top-5 z-[99] bg-[#4A6CFA] text-white rounded-[8px] font-semibold text-[12px] left-6 flex px-2 items-center gap-2 py-1'>
          <span>{product?.condition}</span>
        </div>
      )
    }
  }
  return (
    <div className='bg-white p-3 rounded-lg relative flex hover:shadow-none transition-all duration-300 ease-linear flex-col gap-3 w-[320px] drop-shadow-md shadow-md'>
      <ReturnConditionComponent />
      <Link
        href={product.availableForPurchase ? `/products/${product?.id}` : ''}
        className='relative w-full h-[200px] rounded-lg overflow-hidden'
      >
        <Image src={product?.images[0]} alt='' fill className='object-cover' />
      </Link>
      <div className='flex flex-col items-start gap-4'>
        <div className='flex flex-col w-full items-start'>
          <div className='flex items-center gap-2 text-[12px]'>
            <div className='p-1 bg-gray-200 rounded-full'>
              <FaUser className='' />
            </div>
            <span className='text-gray-500'>ფიზიკური პირი</span>
          </div>
        </div>
        <div className='flex flex-col items-start gap-2.5 w-full'>
          <p className='text-sm'>{product?.name}</p>
          <div className='w-full h-[2px] bg-gray-300/80' />
          <div className='w-full flex items-center justify-between pb-2'>
            <div className='flex items-center gap-1 font-semibold'>
              {!product.priceDealType.includes('ფასი შეთავაზებით')
                ? product?.price
                : 'ფასი შეთავაზებით'}
              {product.bill === 'ლარი' ? <FaLariSign /> : <FiDollarSign />}
            </div>
            <Heart isLiked={productLiked} product={product} />
          </div>
          {!product?.availableForPurchase ? (
            <div className='w-full flex justify-between items-center h-[10px] text-red-600'>
              <FaMinus className='text-sm' />
              <span className='text-[13px]'>ეს პროდუქტი არ არის მარაგში</span>
            </div>
          ) : (
            <div className='h-[10px]'></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
