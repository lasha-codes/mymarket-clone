import Header from '@/components/Header'
import UserProfile from './_components/User'
import UserProducts from './_components/UserProducts'

const UserProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Header />
      <main className='py-5 px-5'>
        <div className='flex flex-col items-start w-full gap-10 relative'>
          <UserProfile userId={params.id} />
          <div className='w-screen absolute left-[-20px] h-[1px] bg-gray-300 top-[68px]' />
          <UserProducts userId={params.id} />
        </div>
      </main>
    </>
  )
}

export default UserProfilePage
