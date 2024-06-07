'use client'

import { toggleSelector } from '@/lib/slice/productSlice'
import { productTypes } from '@/app/sell-item/page'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'

const CategorySelector = () => {
  const dispatch = useDispatch()
  const { selectorOpened }: { selectorOpened: boolean } = useSelector(
    (state: any) => state.product
  )

  return (
    <>
      <div
        onClick={() => dispatch(toggleSelector())}
        className={`w-full py-4 px-4 relative text-[14px] cursor-pointer 
text-gray-400 rounded-xl border transition-all duration-200 ease-linear ${
          selectorOpened && '!border-blue-500'
        } flex items-center justify-between`}
      >
        <input
          type='text'
          className='absolute w-full cursor-pointer z-[1] h-full bg-transparent outline-none'
        />
        <span>აირჩიე/ჩაწერე კატეგორია</span>
        <IoIosArrowDown
          className={`z-[10] ${
            selectorOpened ? 'rotate-180' : 'rotate-0'
          } transition-all duration-300 ease-in-out`}
        />
      </div>
      <div
        className={`absolute flex flex-col w-full h-[300px] overflow-y-scroll 
      top-[100px] border py-4 text-[15.5px] left-1/2 items-start transition-all duration-300 ease-out -translate-x-1/2 bg-white rounded-xl ${
        selectorOpened
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      >
        {productTypes.map((product: string, idx: number) => {
          return (
            <div
              className='w-full py-2 cursor-pointer hover:bg-gray-200 
              hover:text-blue-400 transition-all ease-linear px-5'
              key={idx}
            >
              {product}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CategorySelector
