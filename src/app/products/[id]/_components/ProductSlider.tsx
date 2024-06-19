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
import ReactPlayer from 'react-player'
import Heart from './Heart'
import { Product } from '@prisma/client'

type ProductSliderProps = {
  images: string[]
  youtubeURL?: string
  condition: string
  product: Product
}

const ProductSlider = ({
  images,
  youtubeURL,
  condition,
  product,
}: ProductSliderProps) => {
  const ReturnConditionComponent = () => {
    if (condition === 'მეორადი') {
      return (
        <div className='absolute top-5 bg-[#4A6CFA] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-6 flex items-center gap-2 py-1 px-2.5'>
          <TbReload className='text-[14px]' />
          <span>{condition}</span>
        </div>
      )
    } else if (condition === 'ახალი') {
      return (
        <div className='absolute top-5 bg-[#0EC604] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-6 flex items-center gap-2 py-1 px-2.5'>
          <VscSparkleFilled className='text-[14px]' />
          <span>{condition}</span>
        </div>
      )
    } else if (condition === 'ახალივით') {
      return (
        <div className='absolute top-5 bg-[#4A6CFA] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-6 flex items-center gap-2 py-1 px-2.5'>
          <BiSolidLike className='text-[14px]' />
          <span>{condition}</span>
        </div>
      )
    } else {
      return (
        <div className='absolute top-5 bg-[#4A6CFA] text-white rounded-[8px] z-[10] font-semibold text-[12px] left-6 flex items-center gap-2 py-1 px-2.5'>
          <span>{condition}</span>
        </div>
      )
    }
  }

  return (
    <div className='relative w-fit'>
      <ReturnConditionComponent />
      <Heart product={product} />
      <Carousel className='w-[370px] h-[410px] max-xl:w-[320px] max-xl:h-[370px] max-[840px]:min-w-[90vw] max-[840px]:mx-auto rounded-2xl overflow-hidden border max-lg:w-[300px] max-lg:h-[355px] max-md:w-[270px] max-md:h-[330px]'>
        <CarouselContent>
          {images &&
            images.map((URL, idx: number) => {
              return (
                <CarouselItem
                  key={idx}
                  className='w-full h-[420px] max-xl:h-[370px] relative'
                >
                  <Image
                    src={URL}
                    key={idx}
                    fill
                    className='object-cover max-[840px]:object-contain'
                    alt={'product image' + '' + { idx }}
                  />
                </CarouselItem>
              )
            })}
          {youtubeURL && (
            <CarouselItem className='w-full h-[420px] max-xl:h-[370px] flex justify-center'>
              <ReactPlayer url={youtubeURL} height={420} />
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselNext className='absolute right-3 h-[45px] w-[45px] bg-gray-200 hover:bg-gray-300 transition-all' />
        <CarouselPrevious className='absolute left-3 w-[45px] h-[45px] bg-gray-200 hover:bg-gray-200 transition-all' />
      </Carousel>
    </div>
  )
}

export default ProductSlider
