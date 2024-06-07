'use client'
import { productConditions } from '@/app/sell-item/page'
import { selectConditionIndex } from '@/lib/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductCondition = () => {
  const dispatch = useDispatch()
  const { selectedConditionIndex } = useSelector((state: any) => state.product)
  return (
    <div className='flex flex-col items-start w-full gap-3 mt-4'>
      <h4 className='text-[14px] font-medium'>ნივთის მდგომარეობა</h4>
      <div className='flex flex-start gap-2'>
        {productConditions.map((condition: string, idx: number) => {
          return (
            <button
              onClick={() => dispatch(selectConditionIndex({ index: idx }))}
              key={idx}
              className={`rounded-full transition-all duration-200 ease-linear px-4 py-2 ${
                selectedConditionIndex === idx
                  ? 'bg-[#4A6CFA] text-white'
                  : 'bg-gray-100 text-black'
              }`}
            >
              {condition}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCondition
