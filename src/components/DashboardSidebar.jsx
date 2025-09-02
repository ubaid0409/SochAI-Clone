'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logout } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
const items = [
  { href: '/dashboard/explore', label: 'Explore' },
  { href: '/dashboard/search', label: 'Search' },
  { href: '/dashboard/favourites', label: 'Favorites' },
  { href: '/dashboard/edit-profile', label: 'Edit Profile' },
  { href: '/dashboard/change-password', label: 'Change Password' },
  { href: '/dashboard/share-with-friends', label: 'Share With Friends' },
  { href: '/dashboard/feedback', label: 'Give Feedback' },
  { href: '/dashboard/settings', label: 'Settings' },
  { href: '/dashboard/about', label: 'About App' },
]

export default function DashboardSidebar() {
  const dispatch = useDispatch()
  const pathname = usePathname()

  return (
    <div className="w-64 min-h-screen sticky top-0 bg-neutral-800 text-white p-4 flex flex-col justify-between  ml-1">

      {/* 🔹 Top Section */}
      <div>
        <div className="text-xs uppercase text-white/50 mb-4">Dashboard</div>
        <ul className="flex flex-col gap-2">
          {items.map(i => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`block px-4 py-2 rounded-xl transition 
                  ${pathname === i.href ? 'bg-blue-500' : 'bg-white/10 hover:bg-white/20'}`}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Bottom Section: Go Back */}
      <div>
        <button
          onClick={() => dispatch(logout())}
          className="flex items-center justify-center gap-2 px-3 py-2 border rounded-xl hover:scale-105 transform transition-transform duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
