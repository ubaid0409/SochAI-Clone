"use client"
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { clearMessages } from "../redux/slices/chatSlice"

export default function Sidebar() {
  const user = useSelector((s) => s.auth.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const bottomCategories = [
    { name: "Health & Fitness", path: "/chat/health-fitness", color: "text-blue-900 bg-blue-300" },
    { name: "Nutrition & Diet", path: "/chat/nutrition-diet", color: "text-orange-900 bg-orange-300" },
    { name: "Education", path: "/chat/education", color: "text-cyan-900 bg-cyan-300" },
  ]

  const handleNewChat = () => {
    dispatch(clearMessages())          
    if (pathname !== "/chat") router.push("/chat") 
  }

  return (
    <div
      className={`${collapsed ? "w-16" : "w-64"} 
      min-h-screen sticky top-0 bg-neutral-800 text-white 
      flex flex-col transition-all rounded-md  ml-1 `}
    >
      {/* 🔹 Top Bar */}
      <div className="flex items-center justify-between p-4 ">
        {!collapsed && (
          <span className="font-bold text-lg">
            {user?.name || "Guest"}
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:text-gray-400"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Top Section */}
      {!collapsed && (
        <div className="p-4">
          <button
            onClick={handleNewChat}
            className="block mb-4 text-white rounded-lg "
          >
            New Chat
          </button>

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 rounded-lg bg-white/10 outline-none text-sm"
          />
        </div>
      )}

      {/* 🔹 Bottom categories */}
      <div className="mt-auto p-4">
        <ul className="flex flex-col items-center gap-2">
          {bottomCategories.map((cat, idx) => (
            <li key={idx}>
              <Link
                href=""
                className={`flex px-3 py-1 rounded-full transform transition-transform duration-200 hover:scale-105 ${cat.color}`}
              >
                {collapsed ? cat.name[0] : cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
