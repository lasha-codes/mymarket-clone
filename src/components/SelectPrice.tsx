'use client'

import { IoIosArrowDown } from 'react-icons/io'
import { priceOptions } from '@/app/sell-item/page'
import { useSelector, useDispatch } from 'react-redux'
import { selectPriceOffer } from '@/lib/slice/productSlice'

const SelectPrice = () => {
  const dispatch = useDispatch()
  const { selectedPriceOffers } = useSelector((state: any) => state.product)
  return (
    <div className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
      <h3 className='text-[16px] font-semibold'>ფასი</h3>
      <div className='flex flex-col gap-2 w-full'>
        <h4 className='text-[14px] font-medium'>
          მიუთითე ნივთის ფასი{' '}
          <span className='text-[13px] text-red-500'>*</span>
        </h4>
        <div className='w-[65%] flex items-center'>
          <input
            type='number'
            className='border h-[55px] px-5 rounded-bl-xl w-full rounded-tl-xl outline-none placeholder:text-black/85'
            placeholder='0'
          />
          <div className='border border-l-0 text-gray-500 cursor-pointer text-[14px] h-[55px] flex px-5 gap-10 items-center rounded-tr-xl rounded-br-xl '>
            <span>ლარი</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className='flex items-center justify-start gap-3 mt-3'>
          {priceOptions.map((option: string, idx: number) => {
            return (
              <button
                onClick={() =>
                  dispatch(selectPriceOffer({ priceOffer: option }))
                }
                key={idx}
                className={`rounded-full px-5 transition-all duration-200 ease-in-out py-2 ${
                  selectedPriceOffers.includes(option)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectPrice
