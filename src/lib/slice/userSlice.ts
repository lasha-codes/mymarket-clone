import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product, User } from '@prisma/client'
import axios from 'axios'
import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

type initialType = {
  user: User | null
  user_products: Product[]
  userLoading: boolean
  productsLoading: boolean
  dbUsers: User[]
}

export const fetchUser = createAsyncThunk('user/fetch', async () => {
  try {
    const { data } = await axios.get('/api/user')
    return data.user
  } catch (err) {
    return console.log(err)
  }
})

export const fetchUserProducts = createAsyncThunk(
  'user_products/fetch',
  async () => {
    try {
      const { data } = await axios.get('/api/my-products')
      return data.userProducts
    } catch (err) {
      console.log(err)
    }
  }
)

export const fetchUsersFromDB = createAsyncThunk('users/fetch', async () => {
  try {
    const response = await axios.get('/api/users')
    return response.data.users
  } catch (err) {
    console.log(err)
  }
})

const initialState: initialType = {
  user: null,
  user_products: [],
  userLoading: false,
  productsLoading: false,
  dbUsers: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.userLoading = true
    })
    builder.addCase(fetchUser.rejected, (state) => {
      state.userLoading = false
      state.user = null
    })
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload
      state.userLoading = false
      console.log(state.user)
    })
    builder.addCase(fetchUserProducts.pending, (state) => {
      state.productsLoading = true
    })
    builder.addCase(fetchUserProducts.rejected, (state) => {
      state.productsLoading = false
    })
    builder.addCase(fetchUserProducts.fulfilled, (state, { payload }) => {
      state.user_products = payload
      state.productsLoading = false
      console.log(state.user_products)
    })
    builder.addCase(fetchUsersFromDB.fulfilled, (state, { payload }) => {
      state.dbUsers = payload
    })
  },
})

export default userSlice.reducer
