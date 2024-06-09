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
  productCategory: string,
  productType: string,
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
      productCategory,
      productType,
      productCondition,
    })
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
