import { IoIosArrowDown } from 'react-icons/io'

const SellItemPage = () => {
  const statementTypes = ['გაყიდვა', 'შეძენა', 'გაქირავება', 'მომსახურება']

  return (
    <>
      <main className='w-screen flex  justify-center bg-gray-100 py-10'>
        <div className='w-[700px] flex items-start flex-col gap-7'>
          <h2 className='text-[27px] font-semibold'>განცხადების დამატება</h2>
          <div className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
            <h4 className='font-semibold text-[17px]'>განცხადების დეტალები</h4>
            <div className='flex flex-col items-start gap-3.5'>
              <span className='text-[14px] font-medium'>განცხადების ტიპი</span>
              <div className='flex items-start gap-2'>
                {statementTypes.map((type: string, idx: number) => {
                  return (
                    <button
                      key={idx}
                      className='bg-gray-100 rounded-full px-4 py-2'
                    >
                      {' '}
                      {type}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className='flex flex-col items-start gap-3 w-full cursor-pointer'>
              <h4 className='text-[14px] font-medium'>
                აირჩიე/ჩაწერე კატეგორია{' '}
                <span className='text-sm text-red-500'>*</span>
              </h4>
              <div className='w-full py-4 px-4 text-[14px] text-gray-400 rounded-xl border flex items-center justify-between'>
                <span>აირჩიე/ჩაწერე კატეგორია</span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SellItemPage
