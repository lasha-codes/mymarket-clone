import { Product as ProductType } from '@prisma/client'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { FaLariSign } from 'react-icons/fa6'
import { FiDollarSign } from 'react-icons/fi'
import Heart from './Heart'

const Product = ({
  product,
  productLiked,
}: {
  product: ProductType
  productLiked: boolean
}) => {
  return (
    <div className='bg-white p-3 rounded-lg flex hover:shadow-none transition-all duration-300 ease-linear flex-col gap-3 w-[320px] drop-shadow-md shadow-md'>
      <Link
        href={`/products/${product?.id}`}
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
        </div>
      </div>
    </div>
  )
}

export default Product
