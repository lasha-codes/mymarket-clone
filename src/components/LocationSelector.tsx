'use client'

import { popularCities } from '@/app/sell-item/page'
import { useSelector, useDispatch } from 'react-redux'
import { selectSellerLocation } from '@/lib/slice/productSlice'
import { useEffect, useState } from 'react'

const LocationSelector = () => {
  const dispatch = useDispatch()
  const { locationBoxOpen, locationSearch } = useSelector(
    (state: any) => state.product
  )
  const [citiesCopy, setCitiesCopy] = useState<string[]>(popularCities)

  useEffect(() => {
    if (locationSearch.length === 0) {
      return setCitiesCopy(popularCities)
    }
    const citySearchResults = [...popularCities].filter((city: string) => {
      return city.toLowerCase().includes(locationSearch.toLowerCase())
    })
    setCitiesCopy(citySearchResults)
  }, [locationSearch])

  return (
    <div
      className={`absolute z-[100] flex flex-col w-full top-[60px] max-h-[300px] ${
        citiesCopy.length >= 6 && 'overflow-y-scroll'
      } border py-4 text-[15.5px] left-1/2 items-start transition-all duration-300 
    ease-out -translate-x-1/2 bg-white opacity-0 pointer-events-none rounded-xl ${
      locationBoxOpen && 'opacity-100 pointer-events-auto'
    }`}
    >
      {citiesCopy.length !== 0 ? (
        citiesCopy.map((city: string, idx: number) => {
          return (
            <div
              onClick={() =>
                dispatch(selectSellerLocation({ selectedLocation: city }))
              }
              className='w-full py-2 cursor-pointer hover:bg-gray-200 
        hover:text-blue-400 transition-all ease-linear px-5'
              key={idx}
            >
              {city}
            </div>
          )
        })
      ) : (
        <h4 className='mx-auto font-medium text-gray-400'>არ მოიძებნა</h4>
      )}
    </div>
  )
}

export default LocationSelector
