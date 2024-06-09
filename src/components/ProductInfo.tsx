'use client'

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { changeInputsVal } from '@/lib/slice/productSlice'

const ProductInfo = () => {
  const dispatch = useDispatch()
  const { productTitle, productDesc } = useSelector(
    (state: any) => state.product
  )
  return (
    <div className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
      <h3 className='text-[16px] font-semibold'>ძირითადი მახასიათებლები</h3>
      <div className='w-full flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#EDF3FC]'>
        <Image
          src='https://www.mymarket.ge/react/build/static/media/add-form-info.dc03cdcc547c6ccd0643.svg'
          width={40}
          height={40}
          alt='hand pointing image'
        />
        <h4 className='text-[14px] opacity-90'>
          დაამატე შესაფერისი სათაური და აღწერა
        </h4>
      </div>
      <div className='flex flex-col items-start w-full gap-6'>
        <div className='flex flex-col items-start gap-1.5 w-full'>
          <label htmlFor='title' className='text-[14px] cursor-pointer'>
            სათაური <span className='text-[13px] text-red-500'>*</span>
          </label>
          <input
            value={productTitle}
            onChange={(e) =>
              dispatch(
                changeInputsVal({
                  targetedValue: 'productTitle',
                  value: e.target.value,
                })
              )
            }
            id='title'
            type='text'
            className='w-full border rounded-xl py-3 outline-none px-5'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5 w-full'>
          <label htmlFor='desc' className='text-[14px] cursor-pointer'>
            აღწერა
          </label>
          <textarea
            value={productDesc}
            onChange={(e) =>
              dispatch(
                changeInputsVal({
                  targetedValue: 'productDesc',
                  value: e.target.value,
                })
              )
            }
            id='desc'
            className='rounded-xl border px-5 w-full h-[100px] py-3 outline-none resize-none'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
