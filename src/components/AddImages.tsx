'use client'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addImage } from '@/lib/slice/productSlice'

import { BsYoutube } from 'react-icons/bs'
import Image from 'next/image'

const AddImages = () => {
  const dispatch = useDispatch()
  const { productImages } = useSelector((state: any) => state.product)
  const [imageURL, setImageURL] = useState<string>('')
  return (
    <div
      className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 
  px-10 w-full'
    >
      <div className='w-full flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#EDF3FC]'>
        <Image
          src='https://www.mymarket.ge/react/build/static/media/add-form-info.dc03cdcc547c6ccd0643.svg'
          width={40}
          height={40}
          alt='hand pointing image'
        />
        <h4 className='text-[14px] opacity-90'>
          სწორად შერჩეული ფოტოებით მეტ ადამიანს დააინტერესებ.
        </h4>
      </div>
      {productImages ? (
        <label
          htmlFor='image'
          className='rounded-3xl border-[3px] cursor-pointer border-dashed border-mainYellow w-full h-[250px] flex flex-col gap-2 justify-center items-center'
        >
          <Image
            width={40}
            height={40}
            src='https://www.mymarket.ge/react/build/static/media/open-shop-logo-icon.3bfff0a1a317d08b2cbe.svg'
            alt='camera-icon'
          />
          <h3 className='text-[17px] font-semibold'>სურათის ატვირთვა</h3>
          <span className='text-gray-400 font-semibold text-[14px]'>
            მაქსიმუმ 12 ფოტო
          </span>
        </label>
      ) : (
        ''
      )}
      <div className='flex flex-col items-start gap-7 mt-8 w-full'>
        <div className='flex flex-col items-start w-full gap-2'>
          <input
            value={imageURL}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImageURL(e.target.value)
            }
            id='image'
            type='text'
            placeholder='ფოტოს URL'
            className='w-full outline-none border transition-all duration-200 ease-linear rounded-xl py-2 px-5 focus:border-[#c5d7f3]'
          />
          <button
            disabled={imageURL.length === 0}
            className='bg-mainYellow rounded-xl px-6 py-2.5 font-medium hover:bg-[#e6bb5f] transition-all duration-200 ease-linear disabled:opacity-60 disabled:cursor-not-allowed'
          >
            ატვირთვა
          </button>
        </div>
        <div className='w-full flex flex-col items-start gap-2.5'>
          <label
            htmlFor='youtube-url'
            className='font-semibold flex items-end gap-2 text-[15px] cursor-pointer'
          >
            <BsYoutube className='text-xl text-red-500' /> Youtube ვიდეო
          </label>
          <input
            id='youtube-url'
            type='text'
            className='w-full outline-none border transition-all duration-200 ease-linear rounded-xl py-2 px-5 focus:border-[#c5d7f3]'
          />
        </div>
      </div>
    </div>
  )
}

export default AddImages
