'use client'

import { FiShoppingCart, FiPlusCircle, FiUser } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import Link from 'next/link'
import icon from '../assets/logo.png'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { IoIosSearch } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import { FaCirclePlus } from 'react-icons/fa6'
import { useState, useEffect } from 'react'

const links = [
  { icon: MdOutlineMailOutline, href: '/inbox' },
  { icon: FaRegHeart, href: '/wishlist' },
  { icon: FiShoppingCart, href: '/cart' },
]

const Header = () => {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className='flex flex-col items-start gap-9 px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px]'>
      <div className='w-full flex items-center justify-between relative'>
        <div className='absolute w-screen h-[1px] bg-gray-200 bottom-1.5 left-1/2 translate-x-[-50%]' />
        <Link href='/' className='relative w-[200px] -ml-[25px] h-[100px]'>
          <Image
            src={icon}
            alt='store-icon-image'
            className='object-contain'
            fill
          />
        </Link>
        <div className='flex items-center gap-8'>
          <Link
            href='/sell-item'
            className='bg-[#FFF4CC] flex hover:bg-[#FFEFB2] cursor-pointer transition-all ease-linear items-center h-[42px] w-[130px] justify-center rounded-xl gap-2'
          >
            {pathname === '/' ? (
              <FiPlusCircle className='text-mainYellow text-[20px]' />
            ) : (
              <FaCirclePlus className='text-mainYellow text-[20px]' />
            )}
            <span className='text-sm'>დამატება</span>
          </Link>
          <div className='flex items-center gap-3'>
            {links.map((link, idx) => {
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className='p-2.5 hover:bg-[#F6F6F6] rounded-full transition-all ease-linear'
                >
                  <link.icon
                    className={`${
                      link.href === '/inbox' ? 'text-[25px]' : 'text-[22.5px]'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {isClient && (
            <SignedOut>
              <Link
                href='/login'
                className='flex items-center cursor-pointer gap-2 hover:bg-[#F6F6F6] transition-all ease-linear w-[120px] h-[42px] justify-center border rounded-xl'
              >
                <FiUser className='text-xl' />
                <span>შესვლა</span>
              </Link>
            </SignedOut>
          )}

          {isClient && (
            <SignedIn>
              <UserButton />
            </SignedIn>
          )}
        </div>
      </div>
      {pathname === '/' && (
        <div className='flex flex-col items-start gap-6 w-full'>
          <h2 className='text-[27px] font-medium'>ყველაფერი, რასაც ეძებ</h2>
          <div className='flex items-center gap-4 w-full'>
            <input
              className='border-[3px] flex-grow px-5 py-5 placeholder:text-lg outline-none border-mainYellow rounded-xl'
              placeholder='მაგ: Iphone 14'
            />
            <button className='flex items-center bg-[#FEC900] hover:bg-[#ffde68] cursor-pointer transition-all ease-linear py-5 rounded-xl px-12 gap-2 text-[18px]'>
              <IoIosSearch />
              <span>ძებნა</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
