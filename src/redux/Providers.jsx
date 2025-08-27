'use client'

import { ReduxProvider } from './store'

export default function Providers({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>
}
