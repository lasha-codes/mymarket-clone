import Header from '@/components/Header'
import UserProfile from './_components/User'

const UserProfilePage = () => {
  return (
    <>
      <Header />
      <main className='py-5 px-5'>
        <UserProfile />
      </main>
    </>
  )
}

export default UserProfilePage
