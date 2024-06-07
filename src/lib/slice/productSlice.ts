import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectorOpened: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleSelector: (state) => {
      state.selectorOpened = !state.selectorOpened
    },
  },
})

export default productSlice.reducer

export const { toggleSelector } = productSlice.actions
