import { Offers } from '@prisma/client'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const fetchOffers = createAsyncThunk('offers/fetch', async () => {
  try {
    const response = await axios.get('/api/offers')
    return response.data.offers
  } catch (err) {
    console.log(err)
  }
})

type initialType = {
  offers: Offers[]
  loading: boolean
}

const initialState: initialType = { offers: [], loading: false }

const offer = createSlice({
  name: 'offer',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state: any) => {
      state.loading = true
    }),
      builder.addCase(fetchOffers.fulfilled, (state: any, { payload }) => {
        state.offers = payload
      }),
      builder.addCase(fetchOffers.rejected, (state: any) => {
        state.loading = false
      })
  },
})

export default offer.reducer
