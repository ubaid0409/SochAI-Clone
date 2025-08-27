'use client'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { usePathname } from 'next/navigation'

// Map paths to display names
const getPageTitle = (pathname) => {
  const titleMap = {
    '/dashboard/explore': 'Explore',
    '/dashboard/search': 'Search',
    '/dashboard/favourites': 'Favorites',
    '/dashboard/edit-profile': 'Edit Profile',
    '/dashboard/change-password': 'Change Password',
    '/dashboard/share-with-friends': 'Share With Friends',
    '/dashboard/feedback': 'Feedback',
    '/dashboard/settings': 'Settings',
    '/dashboard/about': 'About',
    '/chat': 'Chat',
    '/deep-jugar': 'Deep Jugar',
    // Add more routes as needed
  };

  // Find matching route
  for (const [path, title] of Object.entries(titleMap)) {
    if (pathname.startsWith(path)) {
      return title;
    }
  }

  // Default to SochAI if no match found
  return 'SochAI';
}

export default function DashboardTopbar() {
  const user = useSelector((s) => s.auth.user)
  const dispatch = useDispatch()
  const pathname = usePathname()

  // Get current page title
  const currentTitle = getPageTitle(pathname)

  return (
    <div className="fixed top-0 left-64 right-0 z-30 bg-neutral-950/80 backdrop-blur border-b border-white/10 h-14">
      <div className="flex items-center justify-between h-full px-6">

        {/* Left section - Dynamic Title */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold cursor-default">
            {currentTitle}
          </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
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
      </div>
    </div>
  )
}