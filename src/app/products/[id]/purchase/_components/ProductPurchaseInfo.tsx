import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { LuClock4 } from 'react-icons/lu'
import { format } from 'date-fns'
import { FaUserLarge, FaPhone } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

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

const ProductPurchaseInfo = ({
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
    <div
      className='max-w-fit max-[840px]:max-w-screen max-[840px]:min-w-screen 
flex flex-col gap-5'
    >
      <div className='flex w-full items-center gap-6'>
        <h3 className='font-medium text-[14px]'>ID {id?.slice(0, 15)}...</h3>
        <div className='flex items-center gap-2 text-[14px] font-medium'>
          <MdOutlineRemoveRedEye className='text-gray-400 text-[16px]' />
          <span>{views} ნახვა</span>
        </div>
        <div className='flex items-center gap-2 text-[14px] font-medium'>
          <LuClock4 className='text-gray-400' />
          <span>{updatedAt && format(updatedAt, 'dd/MM/yyyy HH:mm')}</span>
        </div>
      </div>
      <h2 className='text-xl font-semibold border-gray-300 pb-5 border-b'>
        {productTitle && productTitle}
      </h2>
      <div className='w-full flex items-center gap-2 max-[840px]:flex-col max-[780px]:flex-row max-[610px]:flex-col border-b pb-5 max-[840px]:items-start max-[840px]:gap-5'>
        <div className='flex flex-col items-start gap-2'>
          <div className='text-[12px] flex items-end gap-3 bg-gray-100 w-fit px-3 py-1 rounded-full font-medium'>
            <FaUserLarge className='mb-[3px]' />
            <span>ფიზიკური პირი</span>
          </div>
          <div className='flex flex-col gap-0.5'>
            <span className='text-[13px]'>{sellerName && sellerName}</span>
            <span className='text-[13px] text-gray-400'>1 განცხადება</span>
          </div>
          <span className='text-[13.5px] font-medium'>
            {sellerLocation && sellerLocation}
          </span>
        </div>
        <div className='flex items-center gap-1.5'>
          <div className='flex items-center gap-3 border border-blue-500 rounded-[9px] py-3.5 px-4'>
            <FaPhone className='text-[#4CD964] text-[15px]' />
            <span className='font-bold text-[15px]'>
              {sellerPhone && sellerPhone}
            </span>
          </div>
          <div className='border p-[19px] rounded-[8px] cursor-pointer'>
            <MdOutlineMail className='text-sm' />
          </div>
        </div>
      </div>
      <p className='text-black/90 text-[13px] max-w-[550px]'>
        {productDescription && productDescription}
      </p>
    </div>
  )
}

export default ProductPurchaseInfo
