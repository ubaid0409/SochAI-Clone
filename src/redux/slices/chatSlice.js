'use client'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'chat',
  initialState: {
    messages: [{ from: 'system', text: 'Welcome! Start chatting...' }],
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload)
    },
    clearChat(state) {
      state.messages = []
    },
  },
})

export const { addMessage, clearChat } = slice.actions
export default slice.reducer
