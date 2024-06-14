import CategorySelector from '@/components/CategorySelector'
import StatementTypes from '@/components/statementTypes'
import ProductCondition from '@/components/ProductCondition'
import AddImages from '@/components/AddImages'
import ProductInfo from '@/components/ProductInfo'
import SelectPrice from '@/components/SelectPrice'
import ContactInformation from '@/components/ContactInformation'
import UploadProduct from '@/components/UploadProduct'
import Header from '@/components/Header'

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
export const productConditions = ['მეორადი', 'ახალი', 'ახალივით', 'ნაწილებად']
export const priceOptions = ['ფასის შეთავაზება', 'ფასი შეთავაზებით']
export const billOptions = ['ლარი', 'დოლარი']
export const popularCities = [
  'თბილისი',
  'ბათუმი',
  'ქუთაისი',
  'რუსთავი',
  'ზუგდიდი',
  'გორი',
  'სიღნაღი',
  'ბორჯომი',
  'ქახეთი',
  'წალენჯიხა',
  'მცხეთა',
  'წყალტუბო',
  'ახალქალაქი',
  'სამტრედია',
  'თელავი',
  'ზესტაფონი',
  'საგარეჯო',
  'ხაშური',
  'დუშეთი',
  'წალკა',
  'წნორი',
  'თეთრიწყარო',
  'ტყვარჩელი',
  'ახმეტა',
  'მარნეული',
  'საჩხერე',
  'ლანჩხუთი',
  'მარტვილი',
  'ქვემო თაგლია',
]

const SellItemPage = () => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='w-screen flex justify-center py-10 px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px] overflow-y-scroll'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='w-full flex items-start flex-col gap-7'>
            <h2 className='text-[27px] font-semibold'>განცხადების დამატება</h2>
            <div className='bg-white rounded-2xl gap-5 flex flex-col items-start py-12 px-10 w-full'>
              <h4 className='font-semibold text-[17px]'>
                განცხადების დეტალები
              </h4>
              <div className='flex flex-col items-start gap-3.5'>
                <span className='text-[14px] font-medium'>
                  განცხადების ტიპი
                </span>
                <StatementTypes />
              </div>
              <div className='flex flex-col items-start gap-3 w-full relative'>
                <h4 className='text-[14px] font-medium'>
                  აირჩიე/ჩაწერე კატეგორია{' '}
                  <span className='text-sm text-red-500'>*</span>
                </h4>

                <CategorySelector />
                <ProductCondition />
              </div>
            </div>
          </div>
          <AddImages />
          <ProductInfo />
          <SelectPrice />
          <ContactInformation />
          <UploadProduct />
        </div>
      </main>
    </div>
  )
}

export default SellItemPage
