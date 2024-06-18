import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

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
  selectedBill: number,
  selectedType: string,
  inStock: number
) => {
  'use client'
  try {
    const { data } = await axios.post('/api/products', {
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
      selectedType,
      inStock,
    })

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export const getProductByIdPurchase = async (productId: string) => {
  try {
    const response = await axios.post(`/api/productById`, { productId })
    return response.data
  } catch (err) {
    console.log(err)
  }
}
