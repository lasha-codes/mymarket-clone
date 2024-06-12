import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
import { Messages } from '@prisma/client'

export const fetchMessages = createAsyncThunk(
  'messages/getByUserId',
  async () => {
    try {
      const response = await axios.get('/api/messages')
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
)

type initialStateType = {
  messages: Messages[]
  messagesLoading: boolean
}

const initialState: initialStateType = {
  messages: [],
  messagesLoading: false,
}

const messages = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.messagesLoading = true
    }),
      builder.addCase(fetchMessages.fulfilled, (state, { payload }) => {
        state.messages = payload
        state.messagesLoading = false
      }),
      builder.addCase(fetchMessages.rejected, (state) => {
        state.messagesLoading = false
      })
  },
})

export default messages.reducer
