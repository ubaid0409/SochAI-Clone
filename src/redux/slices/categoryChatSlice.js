'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  "health-fitness": [
    { from: "system", text: "Welcome to Health & Fitness chat!" }
  ],
  "nutrition-diet": [
    { from: "system", text: "Welcome to Nutrition & Diet chat!" }
  ],
  education: [
    { from: "system", text: "Welcome to Education chat!" }
  ],
}

const categoryChatSlice = createSlice({
  name: 'categoryChat',
  initialState,
  reducers: {
    addCategoryMessage(state, action) {
      const { category, message } = action.payload
      if (state[category]) {
        state[category].push(message)
      } else {
        // agar nayi category aa jaye to uske liye array create kar do
        state[category] = [message]
      }
    },
    clearCategoryChat(state, action) {
      const category = action.payload
      if (state[category]) {
        state[category] = []
      }
    },
  },
})

export const { addCategoryMessage, clearCategoryChat } = categoryChatSlice.actions
export default categoryChatSlice.reducer
