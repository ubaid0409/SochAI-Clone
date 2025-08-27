"use client"
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

export default function Sidebar() {
  const user = useSelector((s) => s.auth.user)
  const dispatch = useDispatch()

  const bottomCategories = [
    { name: "Health & Fitness", path: "/chat/health-fitness" },
    { name: "Nutrition & Diet", path: "/chat/nutrition-diet" },
    { name: "Education", path: "/chat/education" },
  ]

  return (
    <div className="w-64 min-h-screen sticky top-0 bg-gray-900 text-white p-4 flex flex-col justify-between">
      {/* 🔹 Top Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          {user ? (
            <span className="text-sm text-white/70">Hello, {user.name}</span>
          ) : null}
          <button
            onClick={() => dispatch(logout())}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            Logout
          </button>
        </div>
        <Link className="btn" href="/chat">New Chat</Link>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1 rounded-lg bg-white/10 outline-none text-sm mt-5"
        />
      </div>

      {/* 🔹 Bottom Section */}
      <ul className="flex flex-col items-center gap-2 ">
        {bottomCategories.map((cat, idx) => (
          <li key={idx} className="">
            <Link href={cat.path} className="flex space-y-1  px-3 border rounded-xl transform transition-transform duration-200 hover:scale-105">
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
