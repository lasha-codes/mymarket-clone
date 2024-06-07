import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  selectorOpened: boolean
  selectedTypeIndex: number
}

const initialState: initialStateType = {
  selectorOpened: false,
  selectedTypeIndex: 0,
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
  },
})

export default productSlice.reducer

export const { toggleSelector, selectTypeIndex } = productSlice.actions
