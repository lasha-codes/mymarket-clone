'use client'

import { IoIosArrowDown } from 'react-icons/io'
import LocationSelector from './LocationSelector'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleLocationBox,
  changeSearchVal,
  changeInputsVal,
} from '@/lib/slice/productSlice'
import SelectedLocation from './SelectedLocation'

const ContactInformation = () => {
  const dispatch = useDispatch()
  const {
    locationBoxOpen,
    sellerLocation,
    locationSearch,
    sellerPhone,
    sellerName,
  } = useSelector((state: any) => state.product)

  return (
    <div className='bg-white rounded-tr-2xl rounded-tl-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
      <h3 className='text-[16px] font-semibold'>საკონტაქტო ინფორმაცია</h3>
      <div className='flex flex-col gap-6 w-full'>
        <h4
          onClick={(e) => e.stopPropagation()}
          className='text-[14px] font-medium -mb-[10px]'
        >
          აირჩიე მდებარეობა <span className='text-[13px] text-red-500'>*</span>
        </h4>
        <div
          onClick={() => {
            if (sellerLocation) return
            dispatch(toggleLocationBox())
          }}
          className='flex flex-col gap-2 items-start relative cursor-pointer'
        >
          <div
            className={`flex items-center transition-all duration-300 ease-linear justify-between text-gray-400 w-full border h-[50px] rounded-xl overflow-hidden relative ${
              locationBoxOpen && '!border-blue-400'
            }`}
          >
            <input
              value={locationSearch}
              onChange={(e) => {
                dispatch(changeSearchVal({ value: e.target.value }))
              }}
              className={`w-full h-full flex-grow px-5 outline-none cursor-pointer placeholder:text-[14px] transition-all ease-linear ${
                sellerLocation && 'opacity-0 pointer-events-none'
              }`}
              placeholder='აირჩიე მდებარეობა'
            />
            <IoIosArrowDown
              className={`mr-4 transition-all duration-300 ease-in-out cursor-pointer ${
                locationBoxOpen && 'rotate-180'
              } ${sellerLocation && 'opacity-0 pointer-events-none'}`}
            />
            <SelectedLocation />
          </div>
          <LocationSelector />
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <label
            htmlFor='name'
            className='text-[14px] font-medium cursor-pointer'
          >
            სახელი <span className='text-[13px] text-red-500'>*</span>
          </label>
          <input
            value={sellerName}
            onChange={(e) =>
              dispatch(
                changeInputsVal({
                  targetedValue: 'sellerName',
                  value: e.target.value,
                })
              )
            }
            type='text'
            id='name'
            className='w-full h-[50px] px-5 outline-none placeholder:text-[14px] border rounded-xl'
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label
            htmlFor='phone'
            className='text-[14px] font-medium cursor-pointer'
          >
            მიუთითე ტელეფონი <span className='text-[13px] text-red-500'>*</span>
          </label>
          <input
            value={sellerPhone}
            onChange={(e) =>
              dispatch(
                changeInputsVal({
                  targetedValue: 'sellerPhone',
                  value: e.target.value,
                })
              )
            }
            type='number'
            id='phone'
            className='w-full h-[50px] px-5 outline-none placeholder:text-[14px] border rounded-xl'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
