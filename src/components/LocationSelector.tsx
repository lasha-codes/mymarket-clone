import { popularCities } from '@/app/sell-item/page'

const LocationSelector = () => {
  return (
    <div
      className={`absolute z-[100] flex flex-col w-full top-[90px] h-[300px] overflow-y-scroll border py-4 text-[15.5px] left-1/2 items-start transition-all duration-300 
    ease-out -translate-x-1/2 bg-white rounded-xl`}
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
