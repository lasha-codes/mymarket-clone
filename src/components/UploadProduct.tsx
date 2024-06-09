'use client'

import { useSelector, useDispatch } from 'react-redux'
import { productConditions, productTypes } from '@/app/sell-item/page'

const UploadProduct = () => {
  const dispatch = useDispatch()
  const {
    productTitle,
    productDesc,
    productPrice,
    productImages,
    sellerLocation,
    sellerName,
    sellerPhone,
    youtubeURL,
    selectedCategory,
    selectedPriceOffers,
    selectedBill,
    selectedConditionIndex,
  } = useSelector((state: any) => state.product)

  console.log(
    productTitle,
    productDesc,
    productPrice,
    productImages,
    sellerLocation,
    sellerName,
    sellerPhone,
    youtubeURL,
    selectedCategory,
    productConditions[selectedConditionIndex],
    selectedPriceOffers,
    selectedBill
  )

  return (
    <div className='bg-white rounded-br-2xl rounded-bl-2xl gap-5 flex items-center justify-between py-7 px-8 w-full'>
      <button
        onClick={() => {
          setTimeout(() => {
            window.location.reload()
            window.location.href = '/'
          }, 100)
        }}
        className='font-semibold text-slate-400 hover:underline text-[16px]'
      >
        გაუქმება
      </button>
      <button className='px-6 py-3 rounded-xl text-[15px] bg-mainYellow text-white font-semibold hover:opacity-80 transition-all ease-linear'>
        გამოქვეყნება
      </button>
    </div>
  )
}

export default UploadProduct
