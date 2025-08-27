'use client'
import { createSlice } from '@reduxjs/toolkit'

const deepJugarSlice = createSlice({
  name: 'deepJugar',
  initialState: {
    
    messages: [{ from: 'system', text: 'Welcome to Deep Jugar Chat!' }],
  },
  reducers: {
    addDeepMessage(state, action) {
      state.messages.push(action.payload)
    },
    clearDeepChat(state) {
      state.messages = []
    },
  },
})

export const { addDeepMessage, clearDeepChat } = deepJugarSlice.actions
export default deepJugarSlice.reducer   // ✅ ye hona hi chahiye
