'use client'

import { IoCloseOutline } from 'react-icons/io5'
import { FiDollarSign } from 'react-icons/fi'
import { FaLariSign } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { toggleOfferPriceOpen } from '@/lib/slice/productSlice'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
axios.defaults.baseURL = 'http://localhost:3000'

const OfferPrice = ({
  bill,
  price,
  id,
  sellerId,
}: {
  bill: string
  price: number
  id: string
  sellerId: string
}) => {
  const dispatch = useDispatch()
  const [offeredPrice, setOfferedPrice] = useState<number>()
  const [optionalMessage, setOptionalMessage] = useState('')

  const sendOfferedPrice = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!offeredPrice) {
        return toast.error('აუცილებელია მიუთითოთ ფასი.')
      }
      const response = await axios.post('/api/messages', {
        type: 'Offer',
        offeredPrice,
        sellerId,
        optionalMessage,
        productId: id,
      })
      dispatch(toggleOfferPriceOpen({ bool: false }))
      setOfferedPrice(0)
      setOptionalMessage('')

      console.log(response.data)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className='py-10 shadow-xl px-5 bg-white relative rounded-2xl flex flex-col items-center w-[450px] gap-4'>
      <button
        onClick={() => dispatch(toggleOfferPriceOpen({ bool: false }))}
        className='absolute right-6 top-7 p-2 bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-full'
      >
        <IoCloseOutline />
      </button>
      <div className='flex flex-col items-center gap-1 w-full'>
        <h2 className='text-2xl font-semibold'>შეთავაზე ფასი</h2>
        <div className='font-semibold flex items-center gap-1.5'>
          არსებული ფასი:{' '}
          <div className='flex items-center gap-0.5 text-black/70'>
            <span>{price}</span>
            {bill === 'ლარი' ? <FaLariSign /> : <FiDollarSign />}
          </div>
        </div>
      </div>
      <form
        onSubmit={sendOfferedPrice}
        className='flex flex-col w-full items-center gap-4'
      >
        <div className='h-[40px] rounded-lg overflow-hidden w-full border'>
          <input
            type='number'
            value={offeredPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOfferedPrice(parseInt(e.target.value))
            }
            placeholder={`მაგ: ${price - 1}`}
            className='w-full h-full outline-none px-3'
          />
        </div>
        <textarea
          value={optionalMessage}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setOptionalMessage(e.target.value)
          }
          className='py-5 px-3 rounded-lg w-full outline-none resize-none border'
          placeholder='სურვილისამებრ, ტექსტი გამყიდველისთვის'
        />
        <button className='w-full py-3 rounded-lg flex justify-center items-center text-white transition-all duration-200 ease-linear font-medium bg-[#2d55f5] hover:bg-[#1844F9]'>
          გაგზანვა
        </button>
      </form>
    </div>
  )
}

export default OfferPrice
