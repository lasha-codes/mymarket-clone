import { IoEyeOutline } from 'react-icons/io5'
import { LuClock4 } from 'react-icons/lu'
import { format } from 'date-fns'

type ProductInfoProps = {
  id: string
  views: number
  updatedAt: Date
  productTitle: string
  sellerPhone: number
  sellerName: string
  sellerLocation: string
  productDescription: string
  productPrice: number
}

const ProductInfo = ({
  id,
  views,
  updatedAt,
  productTitle,
  sellerPhone,
  sellerName,
  sellerLocation,
  productDescription,
  productPrice,
}: ProductInfoProps) => {
  return (
    <div className='w-full flex flex-col gap-5'>
      <div className='flex w-full items-center  gap-6'>
        <h3 className='font-medium text-[14px]'>ID {id}</h3>
        <div className='flex items-center gap-2 text-[14px] font-medium'>
          <IoEyeOutline className='text-gray-400 text-[15px]' />
          <span>{views} ნახვა</span>
        </div>
        <div className='flex items-center gap-2 text-[14px] font-medium'>
          <LuClock4 className='text-gray-400' />
          <span>{updatedAt && format(updatedAt, 'dd/MM/yyyy HH:mm')}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
