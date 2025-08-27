'use client'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'ui',
  initialState: { theme: 'dark' },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { toggleTheme } = slice.actions
export default slice.reducer
