import { IoIosArrowDown } from 'react-icons/io'

const ContactInformation = () => {
  return (
    <div className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
      <h3 className='text-[16px] font-semibold'>საკონტაქტო ინფორმაცია</h3>
      <div className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col gap-2 items-start'>
          <h4 className='text-[14px] font-medium'>
            აირჩიე მდებარეობა{' '}
            <span className='text-[13px] text-red-500'>*</span>
          </h4>
          <div className='flex items-center justify-between text-gray-400 w-full border h-[50px] rounded-xl overflow-hidden'>
            <input
              className='w-full h-full flex-grow px-5 outline-none placeholder:text-[14px]'
              placeholder='აირჩიე მდებარეობა'
            />
            <IoIosArrowDown className='mr-4 cursor-pointer' />
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <label
            htmlFor='name'
            className='text-[14px] font-medium cursor-pointer'
          >
            სახელი <span className='text-[13px] text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='name'
            className='w-full h-[50px] px-5 outline-none placeholder:text-[14px] border rounded-xl'
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label
            htmlFor='phone'
            className='text-[14px] font-medium cursor-pointer'
          >
            მიუთითე ტელეფონი <span className='text-[13px] text-red-500'>*</span>
          </label>
          <input
            type='number'
            id='phone'
            className='w-full h-[50px] px-5 outline-none placeholder:text-[14px] border rounded-xl'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
