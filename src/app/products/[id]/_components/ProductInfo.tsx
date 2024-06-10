import { IoEyeOutline } from 'react-icons/io5'

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
      <div className='flex w-full items-center justify-between'>
        <h3 className='font-medium text-[14px]'>ID {id}</h3>
        <div className='flex items-center gap-1 text-[14px]'>
          <IoEyeOutline className='text-gray-400' />
          <span>{views} ნახვა</span>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
