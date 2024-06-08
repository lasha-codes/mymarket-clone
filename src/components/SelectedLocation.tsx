'use client'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'
import { removeSelectedLocation } from '@/lib/slice/productSlice'

const SelectedLocation = () => {
  const dispatch = useDispatch()
  const { sellerLocation } = useSelector((state: any) => state.product)
  return (
    <div
      className={`absolute left-5 z-[25] opacity-0 transition-all duration-200 ease-in pointer-events-none ${
        sellerLocation && 'opacity-100 pointer-events-auto'
      }`}
    >
      <div className='flex items-center gap-2 text-black text-[15px]'>
        <span className='text-gray-400'>არჩეულია: </span>
        <div className='flex items-center gap-3.5'>
          <h4>{sellerLocation}</h4>
          <FaRegTrashAlt
            onClick={() => dispatch(removeSelectedLocation())}
            className='text-red-500 hover:opacity-80 transition-all ease-linear text-[18px]'
          />
        </div>
      </div>
    </div>
  )
}

export default SelectedLocation
