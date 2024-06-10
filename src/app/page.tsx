import Header from '@/components/Header'
import Products from '@/components/Products'

const Home = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full flex justify-center'>
        <Products />
      </div>
    </div>
  )
}

export default Home
