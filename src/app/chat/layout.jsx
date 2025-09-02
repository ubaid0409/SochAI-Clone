'use client'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { useRequireAuth } from '../../hooks/useAuth'

export default function ChatLayout({ children }) {
  useRequireAuth()

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* 🔹 Topbar always on top */}
      <Topbar />

      <div className="flex">
        {/* 🔹 Sidebar (sticky left) */}
        <Sidebar />

        {/* 🔹 Main content with gap from Topbar */}
        <main className="flex-1 pt-14 ">
          {children}
        </main>
      </div>
    </div>
  )
}
