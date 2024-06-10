import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

type ProductSliderProps = {
  images: string[]
  youtubeURL?: string
}

const ProductSlider = ({ images, youtubeURL }: ProductSliderProps) => {
  console.log(images)
  return (
    <Carousel className='w-[500px] h-[350px] rounded-2xl overflow-hidden border'>
      <CarouselContent>
        {images &&
          images.map((URL, idx: number) => {
            return (
              <CarouselItem key={idx} className='w-full h-[350px] relative'>
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
