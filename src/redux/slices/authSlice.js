'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    logout(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      if (typeof document !== 'undefined') {
        document.cookie = 'token=; Max-Age=0; path=/'
      }
    },
    setUserFromCookie(state) {
      if (typeof document !== 'undefined') {
        const token = (document.cookie.match(/(?:^| )token=([^;]+)/) || [])[1]
        if (token && !state.isAuthenticated) {
          state.user = { id: 1, name: 'Demo User' }
          state.token = token
          state.isAuthenticated = true
        }
      }
    },
  },
})

export const { loginSuccess, logout, setUserFromCookie } = slice.actions
export default slice.reducer
