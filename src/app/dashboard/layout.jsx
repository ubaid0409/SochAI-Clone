'use client'
import DashboardSidebar from '../../components/DashboardSidebar'
import { useRequireAuth } from '../../hooks/useAuth'
import DashboardTopbar from '../../components/DashboardTopbar'
import Link from 'next/link'

export default function DashboardLayout({ children }) {
  useRequireAuth()

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* 🔹 Topbar always on top */}
      <DashboardTopbar />

      <div className="flex">
        {/* 🔹 Sidebar (fixed left) */}
        <DashboardSidebar />

        {/* 🔹 Main content with proper spacing */}
        <main className="flex-1 pt-14 min-h-screen relative">
          {/* ✅ Scrollable content area */}
          <div className="h-[calc(100vh-56px)] overflow-y-auto pr-16">
            {children}
          </div>

          {/* 🔹 Fixed Go Back button */}
          <Link
            href="/chat"
            className="fixed bottom-5 right-5 flex justify-center items-center px-4 py-2 border rounded-md text-sm bg-neutral-800 hover:bg-white/10 transition"
          >
            Go Back
          </Link>
        </main>
      </div>
    </div>
  )
}
