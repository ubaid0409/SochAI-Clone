'use client'
import DashboardSidebar from '../../components/DashboardSidebar'
import { useRequireAuth } from '../../hooks/useAuth'
import DashboardTopbar from '../../components/DashboardTopbar'

export default function DashboardLayout({ children }) {
  useRequireAuth()
  
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* 🔹 Topbar always on top */}
      <DashboardTopbar />

      <div className="flex">
        {/* 🔹 Sidebar (fixed left) */}
        <DashboardSidebar />

        {/* 🔹 Main content with proper spacing */}
        <main className="flex-1 pt-14 min-h-screen">
          {/* ✅ Scrollable content area */}
          <div className="h-[calc(100vh-56px)] overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}