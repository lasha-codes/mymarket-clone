import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
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
}

const initialState: initialStateType = {
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
}

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
    },
    removeSelectedLocation: (state) => {
      state.sellerLocation = null
    },
    changeSearchVal: (state, { payload }) => {
      const { value } = payload
      state.locationSearch = value
    },
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
} = productSlice.actions
