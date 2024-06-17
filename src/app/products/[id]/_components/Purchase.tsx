'use client'

import { Product } from '@prisma/client'
import { FiDollarSign } from 'react-icons/fi'
import { FaLariSign, FaStripe } from 'react-icons/fa6'
import Link from 'next/link'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { toggleOfferPriceOpen } from '@/lib/slice/productSlice'
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart } from '@/lib/slice/cartSlice'

type PurchaseProps = {
  priceOffers: string[]
  price: number
  product: Product
}

const Purchase = ({ priceOffers, price, product }: PurchaseProps) => {
  const dispatch = useDispatch()

  const AddToCartComponent = () => {
    return (
      <button
        onClick={() =>
          dispatch(addToCart({ product: product, productId: product.id }))
        }
        className='w-full flex items-center justify-center gap-3 py-2.5 rounded-xl bg-mainYellow px-5 text-white hover:bg-[#ebc418] transition-all duration-300 ease-linear'
      >
        <FaShoppingCart className='text-lg' />
        <div className='h-[15px] w-[1px] bg-white' />
        <span>დამატება</span>
      </button>
    )
  }

  const ReturnPriceOffer = () => {
    if (priceOffers?.includes('ფასი შეთავაზებით')) {
      return (
        <div className='flex flex-col gap-3 w-full'>
          <span className='flex items-center gap-1 text-xl font-semibold'>
            ფასი შეთანხმებით
          </span>
          <div
            onClick={() => toast.error('გთხოვთ ჯერ შეთანხმდით ფასზე')}
            className='py-1 relative rounded-[10px] overflow-hidden group w-full flex items-center justify-center bg-white shadow-lg active:shadow-none transition-all hover:shadow-xl duration-200 ease-linear gap-2'
          >
            <FaStripe className='text-4xl text-[#635BFF] group-hover:text-white z-[10] transition-all duration-200 ease-linear' />
            <div className='h-[16px] w-[1px] bg-[#635BFF] group-hover:bg-white transition-all ease-linear z-[10]' />
            <span className='font-medium z-[10] transition-all ease-linear group-hover:text-white'>
              გადახდა
            </span>
            <div className='absolute w-0 h-full opacity-0 bg-[#635BFF] group-hover:w-full transition-all duration-500 ease-out rounded-[10px] group-hover:opacity-100' />
          </div>
          <button
            onClick={() => dispatch(toggleOfferPriceOpen({ bool: true }))}
            className='bg-[#EDF0FE] text-[#4A6CFA] font-semibold py-3 rounded-[10px] hover:bg-[#dae1ff] transition-all duration-200 ease-linear'
          >
            შეთავაზე ფასი
          </button>
          <AddToCartComponent />
        </div>
      )
    } else if (
      priceOffers?.includes('ფასის შეთავაზება') &&
      !priceOffers?.includes('ფასი შეთავაზებით')
    ) {
      return (
        <div className='flex flex-col gap-3'>
          <span className='flex items-center gap-1 text-xl font-semibold'>
            {product?.bill && product.bill === 'ლარი' ? (
              <FaLariSign />
            ) : (
              <FiDollarSign />
            )}
            {price}
          </span>
          <Link
            href={`/products/${product?.id}/purchase`}
            className='py-1 relative rounded-[10px] overflow-hidden group w-full flex items-center justify-center bg-white shadow-lg active:shadow-none transition-all hover:shadow-xl duration-200 ease-linear gap-2'
          >
            <FaStripe className='text-4xl text-[#635BFF] group-hover:text-white z-[10] transition-all duration-200 ease-linear' />
            <div className='h-[16px] w-[1px] bg-[#635BFF] group-hover:bg-white transition-all ease-linear z-[10]' />
            <span className='font-medium z-[10] transition-all ease-linear group-hover:text-white'>
              გადახდა
            </span>
            <div className='absolute w-0 h-full opacity-0 bg-[#635BFF] group-hover:w-full transition-all duration-500 ease-out rounded-[10px] group-hover:opacity-100' />
          </Link>
          <button
            onClick={() => dispatch(toggleOfferPriceOpen({ bool: true }))}
            className='bg-[#EDF0FE] text-[#4A6CFA] font-semibold py-3 rounded-[10px] hover:bg-[#dae1ff] transition-all duration-200 ease-linear'
          >
            შეთავაზე ფასი
          </button>
          <AddToCartComponent />
        </div>
      )
    } else {
      return (
        <div className='flex flex-col gap-3'>
          <span className='flex items-center gap-1 text-xl font-semibold'>
            {product?.bill && product.bill === 'ლარი' ? (
              <FaLariSign />
            ) : (
              <FiDollarSign />
            )}
            {price}
          </span>
          <Link
            href={`/products/${product?.id}/purchase`}
            className='py-1 relative rounded-[10px] overflow-hidden group w-full flex items-center justify-center bg-white shadow-lg active:shadow-none transition-all hover:shadow-xl duration-200 ease-linear gap-2'
          >
            <FaStripe className='text-4xl text-[#635BFF] group-hover:text-white z-[10] transition-all duration-200 ease-linear' />
            <div className='h-[16px] w-[1px] bg-[#635BFF] group-hover:bg-white transition-all ease-linear z-[10]' />
            <span className='font-medium z-[10] transition-all ease-linear group-hover:text-white'>
              გადახდა
            </span>
            <div className='absolute w-0 h-full opacity-0 bg-[#635BFF] group-hover:w-full transition-all duration-500 ease-out rounded-[10px] group-hover:opacity-100' />
          </Link>
          <button
            onClick={() => dispatch(toggleOfferPriceOpen({ bool: true }))}
            className='bg-[#EDF0FE] text-[#4A6CFA] font-semibold py-3 rounded-[10px] hover:bg-[#dae1ff] transition-all duration-200 ease-linear'
          >
            შეთავაზე ფასი
          </button>
          <AddToCartComponent />
        </div>
      )
    }
  }
  return (
    <div className='bg-white rounded-xl p-5 max-[840px]:block max-[785px]:relative max-[785px]:bottom-[0px] max-[785px]:min-w-full max-[785px]:max-w-full max-[840px]:right-[20px] max-[785px]:right-0 max-[840px]:bottom-[76.5px] flex flex-col gap-3 border min-w-[300px] max-w-[350px] max-md:max-w-[320px] max-h-[250px]'>
      <ReturnPriceOffer />
    </div>
  )
}

export default Purchase
