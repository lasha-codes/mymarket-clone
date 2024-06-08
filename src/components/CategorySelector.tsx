'use client'

import { toggleSelector } from '@/lib/slice/productSlice'
import { productTypes } from '@/app/sell-item/page'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
import { selectCategory } from '@/lib/slice/productSlice'
import { FaRegTrashAlt } from 'react-icons/fa'
import { deleteSelectedCategory } from '@/lib/slice/productSlice'

const CategorySelector = () => {
  const dispatch = useDispatch()
  const {
    selectorOpened,
    selectedCategory,
  }: { selectorOpened: boolean; selectedCategory: string } = useSelector(
    (state: any) => state.product
  )

  return (
    <>
      <div
        onClick={() => {
          if (selectedCategory) return
          dispatch(toggleSelector())
        }}
        className={`w-full py-4 px-4 relative text-[14px] cursor-pointer 
text-gray-400 rounded-xl border transition-all duration-200 ease-linear ${
          selectorOpened && '!border-blue-500'
        } flex items-center justify-between ${
          selectedCategory && '!justify-start'
        }`}
      >
        <input
          type='text'
          placeholder='აირჩიე/ჩაწერე კატეგორია'
          className={`absolute w-full cursor-pointer z-[1] h-full bg-transparent transition-all ease-linear outline-none ${
            selectedCategory && 'opacity-0 invisible pointer-events-none'
          }`}
        />
        <span
          className={`${
            selectedCategory && 'opacity-0 invisible  pointer-events-none'
          } transition-all ease-linear`}
        ></span>
        <IoIosArrowDown
          className={`transition-all duration-300 z-[15] ease-in-out ${
            selectorOpened ? 'rotate-180' : 'rotate-0'
          }  opacity-100 ${
            selectedCategory && '!opacity-0 pointer-events-none'
          }`}
        />
        <div
          className={`opacity-0 hidden invisible transition-all z-[10] ease-linear ${
            selectedCategory &&
            '!opacity-100 !flex items-center gap-2 absolute left-5 text-black !visible !pointer-events-auto'
          }`}
        >
          <span className='text-gray-400'>არჩეულია: </span>
          <span>{selectedCategory}</span>
          <FaRegTrashAlt
            onClick={() => dispatch(deleteSelectedCategory())}
            className='text-lg ml-2 text-red-600 cursor-pointer hover:opacity-80 transition-all ease-in-out'
          />
        </div>
      </div>
      <div
        className={`absolute z-[100] flex flex-col w-full h-[300px] overflow-y-scroll 
      top-[100px] border py-4 text-[15.5px] left-1/2 items-start transition-all duration-300 ease-out -translate-x-1/2 bg-white rounded-xl ${
        selectorOpened
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      >
        {productTypes.map((product: string, idx: number) => {
          return (
            <div
              onClick={() => dispatch(selectCategory({ selected: product }))}
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
