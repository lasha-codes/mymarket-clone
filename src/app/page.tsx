import Header from '@/components/Header'
import Products from '@/components/Products'

const Home = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full flex justify-start flex-wrap px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px]'>
        <Products />
      </div>
    </div>
  )
}

export default Home
