'use client'
import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    // keep a system message so the "What can I help with?" UI shows before first user message
    messages: [{ from: 'system', text: 'Welcome! Start chatting...' }],
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload)
    },
    clearMessages(state) {
      state.messages = []
    },
  },
})

export const { addMessage, clearMessages } = chatSlice.actions
export default chatSlice.reducer
