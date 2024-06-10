import { Product } from '@prisma/client'
import { FiDollarSign } from 'react-icons/fi'
import { FaLariSign, FaStripe } from 'react-icons/fa6'

type PurchaseProps = {
  priceOffers: string[]
  price: number
  product: Product
}

const Purchase = ({ priceOffers, price, product }: PurchaseProps) => {
  const ReturnPriceOffer = () => {
    if (priceOffers?.includes('ფასის შეთავაზებით')) {
      return (
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-xl'>ფასი შეთანხმებით</h3>
          <button className='bg-[#EDF0FE] text-[#4A6CFA]'>შეთავაზე ფასი</button>
        </div>
      )
    } else if (
      priceOffers?.includes('ფასის შეთავაზება') &&
      !priceOffers?.includes('ფასი შეთავაზებით')
    ) {
      return (
        <div className='flex flex-col gap-3'>
          <span className='flex items-center gap-1 text-xl font-semibold'>
            {product.bill === 'ლარი' ? <FaLariSign /> : <FiDollarSign />}
            {price}
          </span>
          <button className='py-1 relative rounded-[10px] overflow-hidden group w-full flex items-center justify-center bg-white shadow-lg active:shadow-none transition-all hover:shadow-xl duration-200 ease-linear gap-2'>
            <FaStripe className='text-4xl text-[#635BFF] group-hover:text-white z-[10] transition-all duration-200 ease-linear' />
            <div className='h-[16px] w-[1px] bg-[#635BFF] group-hover:bg-white transition-all ease-linear z-[10]' />
            <span className='font-medium z-[10] transition-all ease-linear group-hover:text-white'>
              გადახდა
            </span>
            <div className='absolute w-0 h-full opacity-0 bg-[#635BFF] group-hover:w-full transition-all duration-500 ease-out rounded-[10px] group-hover:opacity-100' />
          </button>
          <button className='bg-[#EDF0FE] text-[#4A6CFA] font-semibold py-3 rounded-[10px] hover:bg-[#dae1ff] transition-all duration-200 ease-linear'>
            შეთავაზე ფასი
          </button>
        </div>
      )
    } else {
      return (
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-xl'>ფასი შეთანხმებით</h3>
          <button className='bg-[#EDF0FE] text-[#4A6CFA]'>შეთავაზე ფასი</button>
        </div>
      )
    }
  }
  return (
    <div className='bg-white rounded-xl p-5 flex flex-col gap-3 border min-w-[300px]'>
      <ReturnPriceOffer />
    </div>
  )
}

export default Purchase
