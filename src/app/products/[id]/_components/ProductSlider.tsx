import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { TbReload } from 'react-icons/tb'
import { VscSparkleFilled } from 'react-icons/vsc'
import { BiSolidLike } from 'react-icons/bi'

type ProductSliderProps = {
  images: string[]
  youtubeURL?: string
  condition: string
}

const ProductSlider = ({
  images,
  youtubeURL,
  condition,
}: ProductSliderProps) => {
  const ReturnConditionComponent = () => {
    if (condition === 'მეორადი') {
      return (
        <div className='absolute top-5 bg-[#4A6CFA] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-10 flex items-center gap-2 py-1 px-2.5'>
          <TbReload className='text-[14px]' />
          <span>{condition}</span>
        </div>
      )
    } else if (condition === 'ახალი') {
      return (
        <div className='absolute top-5 bg-[#0EC604] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-10 flex items-center gap-2 py-1 px-2.5'>
          <VscSparkleFilled className='text-[14px]' />
          <span>{condition}</span>
        </div>
      )
    } else if (condition === 'ახალივით') {
      return (
        <div className='absolute top-5 bg-[#4A6CFA] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-10 flex items-center gap-2 py-1 px-2.5'>
          <BiSolidLike className='text-[14px]' />
          <span>{condition}</span>
        </div>
      )
    } else {
      return (
        <div className='absolute top-5 bg-[#4A6CFA] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-10 flex items-center gap-2 py-1 px-2.5'>
          <span>{condition}</span>
        </div>
      )
    }
  }

  return (
    <Carousel className='w-[400px] h-[400px] rounded-2xl overflow-hidden border relative'>
      <CarouselContent>
        <ReturnConditionComponent />
        {images &&
          images.map((URL, idx: number) => {
            return (
              <CarouselItem key={idx} className='w-full h-[400px] relative'>
                <Image
                  src={URL}
                  key={idx}
                  fill
                  className='object-cover'
                  alt={'product image' + '' + { idx }}
                />
              </CarouselItem>
            )
          })}
      </CarouselContent>
      <CarouselNext className='absolute right-3 h-[45px] w-[45px] bg-gray-200 hover:bg-gray-300 transition-all' />
      <CarouselPrevious className='absolute left-3 w-[45px] h-[45px] bg-gray-200 hover:bg-gray-200 transition-all' />
    </Carousel>
  )
}

export default ProductSlider
