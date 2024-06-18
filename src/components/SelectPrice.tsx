'use client'

import { IoIosArrowDown } from 'react-icons/io'
import { billOptions, priceOptions } from '@/app/sell-item/page'
import { useSelector, useDispatch } from 'react-redux'
import { selectPriceOffer } from '@/lib/slice/productSlice'
import { toggleBillBox } from '@/lib/slice/productSlice'
import { selectBillType } from '@/lib/slice/productSlice'
import { changeInputsVal } from '@/lib/slice/productSlice'

const SelectPrice = () => {
  const dispatch = useDispatch()
  const {
    selectedPriceOffers,
    billBoxOpen,
    selectedBill,
    productPrice,
    inStock,
  } = useSelector((state: any) => state.product)
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
            value={productPrice}
            onChange={(e) =>
              dispatch(
                changeInputsVal({
                  targetedValue: 'productPrice',
                  value: e.target.value,
                })
              )
            }
            disabled={selectedPriceOffers.includes('ფასი შეთავაზებით')}
            type='number'
            className={`border h-[55px] px-5 rounded-bl-xl w-full rounded-tl-xl outline-none placeholder:text-black/50 text-black/60 ${
              selectedPriceOffers.includes('ფასი შეთავაზებით') &&
              'cursor-not-allowed'
            }`}
            placeholder='0'
          />
          <div
            onClick={() => dispatch(toggleBillBox())}
            className={`border relative border-l-0 text-gray-500 cursor-pointer text-[14px] h-[55px] flex min-w-[155px] max-w-[200px] px-5 justify-between items-center rounded-tr-xl rounded-br-xl`}
          >
            <span>{selectedBill}</span>
            <IoIosArrowDown
              className={`transition-all duration-300 ease-in-out ${
                billBoxOpen && 'rotate-180'
              }`}
            />
            <div
              className={`absolute w-full transition-all duration-300 ease-out left-0 top-[60px] z-[20] bg-white rounded-xl border shadow-sm flex flex-col py-3 ${
                billBoxOpen
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              {billOptions.map((bill: string, idx: number) => {
                return (
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(selectBillType({ selectedBill: bill }))
                    }}
                    key={idx}
                    className={`py-1.5 px-4 hover:bg-gray-200 hover:text-blue-400 transition-all duration-300 ${
                      selectedBill === bill && 'text-blue-400'
                    }`}
                  >
                    {bill}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          <h4 className='text-[14px] font-medium'>
            მიუთითე მარაგი <span className='text-[13px] text-red-500'>*</span>
          </h4>
          <div className='w-[65%] flex items-center'>
            <input
              value={inStock}
              onChange={(e) =>
                dispatch(
                  changeInputsVal({
                    value: parseInt(e.target.value),
                    targetedValue: 'stock',
                  })
                )
              }
              type='number'
              className='h-[53px] rounded-xl border py-2 px-4 w-full outline-none placeholder:text-black/60'
              placeholder='1'
            />
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
