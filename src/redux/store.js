'use client'   // 👈 zaroori hai Next.js client component ke liye

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import auth from './slices/authSlice'
import chat from './slices/chatSlice'
import posts from './slices/postSlice'
import ui from './slices/uiSlice'
import deepJugar from './slices/deepJugarSlice'
import categoryChat from './slices/categoryChatSlice' // 👈 add kiya

const store = configureStore({
  reducer: {
    auth,
    chat,
    posts,
    ui,
    deepJugar,
    categoryChat, // 👈 yahan register kiya
  },
})

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

export default store
