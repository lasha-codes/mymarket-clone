import { popularCities } from '@/app/sell-item/page'
import { useSelector } from 'react-redux'

const LocationSelector = () => {
  const { locationBoxOpen } = useSelector((state: any) => state.product)
  return (
    <div
      className={`absolute z-[100] flex flex-col w-full top-[90px] h-[300px] overflow-y-scroll border py-4 text-[15.5px] left-1/2 items-start transition-all duration-300 
    ease-out -translate-x-1/2 bg-white opacity-0 pointer-events rounded-xl ${
      locationBoxOpen && 'opacity-100 pointer-events-auto'
    }`}
    >
      {popularCities.map((product: string, idx: number) => {
        return (
          <div
            className='w-full py-2 cursor-pointer hover:bg-gray-200 
        hover:text-blue-400 transition-all ease-linear px-5'
            key={idx}
          >
            {product}
          </div>
        )
      })}
    </div>
  )
}

export default LocationSelector
