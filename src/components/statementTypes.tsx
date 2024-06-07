'use client'

import { statementTypes } from '@/app/sell-item/page'
import { useDispatch, useSelector } from 'react-redux'
import { selectTypeIndex } from '@/lib/slice/productSlice'

const StatementTypes = () => {
  const dispatch = useDispatch()
  const { selectedTypeIndex } = useSelector((state: any) => state.product)

  return (
    <div className='flex items-start gap-2'>
      {statementTypes.map((type: string, idx: number) => {
        return (
          <button
            onClick={() => dispatch(selectTypeIndex({ index: idx }))}
            key={idx}
            className={`rounded-full transition-all duration-200 ease-linear px-4 py-2 ${
              selectedTypeIndex === idx
                ? 'bg-[#4A6CFA] text-white'
                : 'bg-gray-100 text-black'
            }`}
          >
            {type}
          </button>
        )
      })}
    </div>
  )
}

export default StatementTypes
