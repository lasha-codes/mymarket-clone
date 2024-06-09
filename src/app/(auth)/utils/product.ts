import prisma from '@/db/db'
import axios from 'axios'

export const uploadProduct = async (
  productTitle: string,
  productDesc: string,
  productPrice: number,
  productImages: string[],
  sellerLocation: string,
  sellerName: string,
  sellerPhone: number,
  youtubeURL: string,
  selectedCategory: string,
  productCondition: string,
  selectedPriceOffers: string[] | [],
  selectedBill: number
) => {
  'use client'
  try {
    const { data } = await axios.post('/products', {
      productTitle,
      productDesc,
      productPrice,
      productImages,
      sellerLocation,
      sellerName,
      sellerPhone,
      youtubeURL,
      selectedCategory,
      productCondition,
      selectedPriceOffers,
      selectedBill,
    })
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
