'use client'

import { toast } from 'sonner'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Product } from '@prisma/client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

axios.defaults.baseURL = 'http://localhost:3000'
const PurchaseSuccessPage = ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { payment_intent: string }
}) => {
  const { products }: { products: Product[] } = useSelector(
    (state: any) => state.product
  )

  if (!searchParams.payment_intent) {
    return 'Wrong intent'
  }

  const handleAfterPurchase = async () => {
    try {
      const productWithId = products.find((product) => {
        return product.id === params.id
      })
      if (!productWithId?.id) {
        return toast.error('We need to load the product first please try again')
      }

      const { data }: { data: { message?: string } } = await axios.post(
        '/api/handle-purchase',
        {
          id: productWithId.id,
        }
      )
      if (data.message) {
        return toast.error(data.message)
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      return
    }

    handleAfterPurchase()
  }, [products])

  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div className='bg-green-500 px-7 py-8 rounded-lg flex flex-col items-center justify-center gap-5'>
        <h2 className='text-white font-medium'>გადახდა წარმატებით დასრულდა</h2>
        <Link
          href='/'
          className='bg-white text-green-500 rounded-xl px-5 py-2 hover:opacity-90 transition-all'
        >
          მთავარ გვერძე დაბრუნება
        </Link>
      </div>
    </main>
  )
}

export default PurchaseSuccessPage
