import { productTypes } from '@/app/sell-item/page'

const CategorySelector = () => {
  return (
    <div
      className='absolute flex flex-col w-full h-[300px] overflow-y-scroll 
    top-[100px] border py-4 text-[15.5px] left-1/2 items-start -translate-x-1/2 bg-white rounded-xl'
    >
      {productTypes.map((product: string, idx: number) => {
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

export default CategorySelector
