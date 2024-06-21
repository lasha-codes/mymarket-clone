'use client'
import { User } from '@prisma/client'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const UserProfile = ({ userId }: { userId: string }) => {
  const { dbUsers }: { dbUsers: User[] | null; user: User | null } =
    useSelector((state: any) => state.user)

  const userInfo: any =
    dbUsers &&
    dbUsers.find((account: User) => {
      return account.id === userId
    })
  if (!userId) {
    return (
      <div className=''>
        <h3>No account found</h3>
      </div>
    )
  }
  return (
    <div className='w-full flex items-center justify-between px-6'>
      <div className='flex items-center gap-8'>
        <div className='rounded-full h-[50px] w-[50px] relative overflow-hidden'>
          <Image
            fill
            src={
              'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yaFNsSkE2WktEVVVMOEpHUHBHUHo4UWlnT0oiLCJyaWQiOiJ1c2VyXzJoVzFDeXZhaWZ2ZmIwMUhmUU9Ud0dkWFdXNiJ9'
            }
            alt=''
            className='object-cover'
          />
        </div>
        <h3 className='text-lg font-medium'>{userInfo?.username}</h3>
      </div>
    </div>
  )
}

export default UserProfile
