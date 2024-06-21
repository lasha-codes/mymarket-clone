import Header from '@/components/Header'
import UserProfile from './_components/User'
import UserProducts from './_components/UserProducts'

const UserProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Header />
      <main className='py-5 px-5'>
        <UserProfile />
        <UserProducts userId={params.id} />
      </main>
    </>
  )
}

export default UserProfilePage
