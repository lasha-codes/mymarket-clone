import { Product } from '@prisma/client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

type initialStateType = {
  products: Product[]
  productsLoading: boolean
  selectorOpened: boolean
  selectedTypeIndex: number
  selectedCategory: string | null
  selectedConditionIndex: number
  selectedPriceOffers: string[] | []
  billBoxOpen: boolean
  selectedBill: string
  productImages: string[]
  sellerLocation: string | null
  locationBoxOpen: boolean
  locationSearch: string
  categorySearch: string
  productTitle: string
  productDesc: string
  youtubeURL: string
  productPrice: number | string
  sellerName: string
  sellerPhone: number | string
  offerPriceOpen: boolean
}

const initialState: initialStateType = {
  products: [],
  productsLoading: false,
  selectorOpened: false,
  selectedTypeIndex: 0,
  selectedCategory: null,
  selectedConditionIndex: 0,
  selectedPriceOffers: ['ფასის შეთავაზება'],
  billBoxOpen: false,
  selectedBill: 'ლარი',
  productImages: [],
  sellerLocation: null,
  locationBoxOpen: false,
  locationSearch: '',
  categorySearch: '',
  productTitle: '',
  productDesc: '',
  youtubeURL: '',
  productPrice: '',
  sellerName: '',
  sellerPhone: '',
  offerPriceOpen: false,
}

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  try {
    const { data } = await axios.get('/api/products')
    return data.products
  } catch (err) {
    console.log(err)
  }
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleSelector: (state) => {
      state.selectorOpened = !state.selectorOpened
    },
    selectTypeIndex: (state, { payload }) => {
      const { index } = payload
      state.selectedTypeIndex = index
    },
    selectCategory: (state, { payload }) => {
      const { selected } = payload
      state.selectedCategory = selected
      state.selectorOpened = false
      state.categorySearch = ''
    },
    deleteSelectedCategory: (state) => {
      state.selectedCategory = null
      state.selectedConditionIndex = 0
    },
    selectConditionIndex: (state, { payload }) => {
      const { index } = payload
      state.selectedConditionIndex = index
    },
    selectPriceOffer: (state: any, { payload }) => {
      const { priceOffer } = payload
      if (state.selectedPriceOffers.includes(priceOffer)) {
        state.selectedPriceOffers = state.selectedPriceOffers.filter(
          (offer: string) => {
            return offer !== priceOffer
          }
        )
      } else {
        state.selectedPriceOffers.push(priceOffer)
      }
    },
    toggleBillBox: (state) => {
      state.billBoxOpen = !state.billBoxOpen
    },
    selectBillType: (state, { payload }) => {
      const { selectedBill } = payload
      state.selectedBill = selectedBill
      state.billBoxOpen = false
    },
    addImage: (state, { payload }) => {
      const { imageURL } = payload
      state.productImages.push(imageURL)
    },
    removeImage: (state, { payload }) => {
      const { imageIndex } = payload
      state.productImages = state.productImages.filter((_, idx: number) => {
        return imageIndex !== idx
      })
    },
    toggleLocationBox: (state) => {
      state.locationBoxOpen = !state.locationBoxOpen
    },
    selectSellerLocation: (state, { payload }) => {
      const { selectedLocation }: { selectedLocation: string } = payload
      state.sellerLocation = selectedLocation
      state.locationSearch = ''
    },
    removeSelectedLocation: (state) => {
      state.sellerLocation = null
    },
    changeSearchVal: (state, { payload }) => {
      const { value } = payload
      state.locationSearch = value
    },
    changeCategoryVal: (state, { payload }) => {
      const { value } = payload
      state.categorySearch = value
    },
    changeInputsVal: (
      state,
      {
        payload,
      }: { payload: { targetedValue: string; value: string | number } }
    ) => {
      const { targetedValue, value } = payload
      if (targetedValue === 'youtubeURL') {
        state.youtubeURL = value as string
      } else if (targetedValue === 'productTitle') {
        state.productTitle = value as string
      } else if (targetedValue === 'productDesc') {
        state.productDesc = value as string
      } else if (targetedValue === 'productPrice') {
        state.productPrice = value as number
      } else if (targetedValue === 'sellerName') {
        state.sellerName = value as string
      } else if (targetedValue === 'sellerPhone') {
        state.sellerPhone = value as number
      }
    },
    toggleOfferPriceOpen: (state, { payload }) => {
      const { bool }: { bool: boolean } = payload
      state.offerPriceOpen = bool
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.productsLoading = true
    }),
      builder.addCase(fetchProducts.rejected, (state) => {
        state.productsLoading = false
      }),
      builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.productsLoading = false
        state.products = payload
      })
  },
})

export default productSlice.reducer

export const {
  toggleSelector,
  selectTypeIndex,
  selectCategory,
  deleteSelectedCategory,
  selectConditionIndex,
  selectPriceOffer,
  toggleBillBox,
  selectBillType,
  addImage,
  removeImage,
  toggleLocationBox,
  selectSellerLocation,
  removeSelectedLocation,
  changeSearchVal,
  changeCategoryVal,
  changeInputsVal,
  toggleOfferPriceOpen,
} = productSlice.actions
