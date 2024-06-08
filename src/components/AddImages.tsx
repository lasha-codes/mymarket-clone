'use client'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addImage } from '@/lib/slice/productSlice'
import { removeImage } from '@/lib/slice/productSlice'
import { BsYoutube } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import Image from 'next/image'

const AddImages = () => {
  const dispatch = useDispatch()
  const { productImages } = useSelector((state: any) => state.product)
  const [imageURL, setImageURL] = useState<string>('')

  console.log(productImages)

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
      {productImages.length === 0 ? (
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
        <div className='flex items-center w-full flex-wrap gap-5'>
          <label
            htmlFor='image'
            className='w-[155px] h-[155px] border-dashed border-[3px] border-mainYellow flex items-center justify-center rounded-3xl cursor-pointer'
          >
            <Image
              src='https://www.mymarket.ge/react/build/static/media/add-more-img.4d4479c2983387a44de2.svg'
              width={40}
              height={40}
              alt='camera image'
            />
          </label>
          {productImages.map((URL: string, idx: number) => {
            return (
              <div key={idx} className='relative group'>
                <img
                  src={URL}
                  className='object-cover rounded-3xl w-[155px] h-[155px]'
                  alt='product-image'
                />
                <div className='absolute left-0 top-0 rounded-3xl flex flex-col items-center justify-center w-full h-full bg-gray-500/70 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 ease-linear'>
                  <div
                    onClick={() => dispatch(removeImage({ imageIndex: idx }))}
                    className='rounded-xl p-3 cursor-pointer bg-zinc-transparent hover:bg-zinc-300/60 transition-all duration-200 ease-linear'
                  >
                    <FaRegTrashAlt className='text-[27px] text-white' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
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
            onClick={() => dispatch(addImage({ imageURL }), setImageURL(''))}
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
