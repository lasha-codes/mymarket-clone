import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  selectorOpened: boolean
  selectedTypeIndex: number
  selectedCategory: string | null
  selectedConditionIndex: number
  selectedPriceOffers: string[] | []
  billBoxOpen: boolean
}

const initialState: initialStateType = {
  selectorOpened: false,
  selectedTypeIndex: 0,
  selectedCategory: null,
  selectedConditionIndex: 0,
  selectedPriceOffers: ['ფასის შეთავაზება'],
  billBoxOpen: false,
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
} = productSlice.actions
