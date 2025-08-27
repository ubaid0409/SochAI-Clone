'use client'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {
    setPosts(state, action) {
      state.list = action.payload
    },
  },
})

export const { setPosts } = slice.actions
export default slice.reducer
