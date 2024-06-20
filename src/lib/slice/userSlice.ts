import { createSlice } from '@reduxjs/toolkit'
import { Product, User } from '@prisma/client'

type initialType = {
  user: User | null
  user_products: Product[]
}

const initialState: initialType = {
  user: null,
  user_products: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
