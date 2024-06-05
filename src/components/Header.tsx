import { FiShoppingCart, FiPlusCircle, FiUser } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import Link from 'next/link'
import icon from '../assets/logo.png'
import Image from 'next/image'

const links = [
  { icon: MdOutlineMailOutline, href: '/inbox' },
  { icon: FaRegHeart, href: '/watchlist' },
  { icon: FiShoppingCart, href: '/cart' },
]

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between'>
      <Link href='/' className='relative w-[200px] -ml-[25px] h-[100px]'>
        <Image
          src={icon}
          alt='store-icon-image'
          className='object-contain'
          fill
        />
      </Link>
      <nav className='flex items-center gap-8'>
        <div className='bg-[#FFF4CC] flex hover:bg-[#FFEFB2] cursor-pointer transition-all ease-linear items-center h-[42px] w-[130px] justify-center rounded-xl gap-2'>
          <FiPlusCircle className='text-mainYellow text-[20px]' />
          <span className='text-sm'>დამატება</span>
        </div>
        <div className='flex items-center gap-3'>
          {links.map((link, idx) => {
            return (
              <Link
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
        <Link
          href='/login'
          className='flex items-center cursor-pointer gap-2 hover:bg-[#F6F6F6] transition-all ease-linear w-[120px] h-[42px] justify-center border rounded-xl'
        >
          <FiUser className='text-xl' />
          <span>შესვლა</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
