'use client'
import Topbar from '../../components/Topbar'
import DeepJugarSidebar from '../../components/DeepJugarSidebar'
import { useRequireAuth } from '../../hooks/useAuth'
import DeepTopbar from '../../components/DeepTopbar'

export default function DeepJugarLayout({ children }) {
  useRequireAuth()
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* 🔹 Topbar always on top */}
      <DeepTopbar />

      <div className="flex">
        {/* 🔹 Sidebar (sticky left) */}
        <DeepJugarSidebar />

        {/* 🔹 Main content with gap from Topbar */}
        <main className="flex-1 pt-14 px-6">
          {children}
        </main>
      </div>
    </div>
  )
}
