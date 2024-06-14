'use client'

const OfferPrice = ({ price, bill }: { price: number; bill: string }) => {
  return (
    <div className='py-10 shadow-xl px-5 bg-white relative rounded-2xl flex flex-col items-center w-[450px] gap-4'>
      <div className='flex flex-col items-center gap-1 w-full'>
        <h2 className='text-2xl font-semibold'>შეთავაზე ფასი</h2>
        <span className='font-semibold'>არსებული ფასი: {price}</span>
      </div>
      <form className='flex flex-col w-full items-center gap-4'>
        <div className='h-[40px] rounded-lg overflow-hidden w-full border'>
          <input
            placeholder={`მაგ: ${price - 1}`}
            className='w-full h-full outline-none px-3'
          />
        </div>
        <textarea
          className='py-5 px-3 rounded-lg w-full outline-none resize-none border'
          placeholder='სურვილისამებრ, ტექსტი გამყიდველისთვის'
        />
        <button className='w-full py-3 rounded-lg flex justify-center items-center text-white transition-all duration-200 ease-linear font-medium bg-[#2d55f5] hover:bg-[#1844F9]'>
          გაგზანვა
        </button>
      </form>
    </div>
  )
}

export default OfferPrice
