'use client'

import { useSelector, useDispatch } from 'react-redux'
import { productConditions, statementTypes } from '@/app/sell-item/page'
import { uploadProduct } from '@/app/(auth)/utils/product'
import { toast } from 'sonner'

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
    selectedTypeIndex,
  } = useSelector((state: any) => state.product)

  const productCondition = productConditions[selectedConditionIndex]
  const selectedType = statementTypes[selectedTypeIndex]

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
      <button
        onClick={async () => {
          if (!selectedCategory) {
            return toast.error('გთხოვთ აირჩიეთ კატეგორია')
          }
          if (productImages.length === 0) {
            return toast.error('მინიმუმ სავალდებულოა 1 ფოტო')
          }
          if (!productTitle) {
            return toast.error('სათაური სავალდებულოა')
          }
          if (!productDesc) {
            return toast.error('აღწერა სავალდებულოა')
          }
          if (
            selectedPriceOffers.includes('ფასი შეთავაზებით') &&
            !productPrice
          ) {
            return toast.error('ფასის მითითება სავალდებულოა')
          }
          if (!sellerLocation) {
            return toast.error('გთხოვთ მიუთითეთ ადგილმდებარეობა')
          }
          if (!sellerPhone) {
            return toast.error('გთხოვთ მიუთითეთ საკონტაქტო ტელეფონი')
          }
          if (!sellerName) {
            return toast.error('აუცილებელია მიუთითოთ თქვენი სახელი')
          }
          return console.log('testing')
          await uploadProduct(
            productTitle,
            productDesc,
            productPrice,
            productImages,
            sellerLocation,
            sellerName,
            sellerPhone,
            youtubeURL,
            selectedCategory,
            productCondition,
            selectedPriceOffers,
            selectedBill,
            selectedType
          )
        }}
        className='px-6 py-3 rounded-xl text-[15px] bg-mainYellow text-white font-semibold hover:opacity-80 transition-all ease-linear'
      >
        გამოქვეყნება
      </button>
    </div>
  )
}

export default UploadProduct
