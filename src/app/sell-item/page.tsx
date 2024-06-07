import CategorySelector from '@/components/CategorySelector'
import StatementTypes from '@/components/statementTypes'

export const productTypes = [
  'სახლი და ბაღი',
  'საოჯახო ტექნიკა',
  'ტექნიკა',
  'ნადირობა და თევზაობა',
  'მუსიკა',
  'საბავშვო',
  'სილამაზე და მოდა',
  'მშენებლობა და რემონტი',
  'სოფლის მეურნეობა',
  'ცხოველები',
  'სპორტი და დასვენება',
  'ბიზნესი და დანადგარები',
  'წიგნები და კანცელარია',
  'ხელოვნება და საკოლექციო',
]

export const statementTypes = ['გაყიდვა', 'შეძენა', 'გაქირავება', 'მომსახურება']
const SellItemPage = () => {
  return (
    <>
      <main className='w-screen flex  justify-center bg-gray-100 py-10'>
        <div className='w-[700px] flex items-start flex-col gap-7'>
          <h2 className='text-[27px] font-semibold'>განცხადების დამატება</h2>
          <div className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
            <h4 className='font-semibold text-[17px]'>განცხადების დეტალები</h4>
            <div className='flex flex-col items-start gap-3.5'>
              <span className='text-[14px] font-medium'>განცხადების ტიპი</span>
              <StatementTypes />
            </div>
            <div className='flex flex-col items-start gap-3 w-full relative'>
              <h4 className='text-[14px] font-medium'>
                აირჩიე/ჩაწერე კატეგორია{' '}
                <span className='text-sm text-red-500'>*</span>
              </h4>

              <CategorySelector />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SellItemPage
