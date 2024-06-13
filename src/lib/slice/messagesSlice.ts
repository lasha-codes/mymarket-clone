import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
import { Messages, User } from '@prisma/client'

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

export const fetchUsers = createAsyncThunk('users/get-all', async () => {
  try {
    const response = await axios.get('/api/messages/get-users')
    return response.data
  } catch (err) {
    console.log(err)
  }
})

type initialStateType = {
  messages: Messages[]
  messagesLoading: boolean
  users: User[]
  usersLoading: boolean
}

const initialState: initialStateType = {
  messages: [],
  messagesLoading: false,
  users: [],
  usersLoading: false,
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
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersLoading = true
    }),
      builder.addCase(fetchUsers.rejected, (state) => {
        state.usersLoading = false
      }),
      builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload
        state.usersLoading = false
      })
  },
})

export default messages.reducer
