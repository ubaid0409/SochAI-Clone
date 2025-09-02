//  'use client'
// import Link from 'next/link'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../redux/slices/authSlice'
// import { usePathname } from 'next/navigation'

// // Map paths to display names
// const getPageTitle = (pathname) => {
//   const titleMap = {
//     '/dashboard/explore': 'Explore',
//     '/dashboard/search': 'Search',
//     '/dashboard/favourites': 'Favorites',
//     '/dashboard/edit-profile': 'Edit Profile',
//     '/dashboard/change-password': 'Change Password',
//     '/dashboard/share-with-friends': 'Share With Friends',
//     '/dashboard/feedback': 'Feedback',
//     '/dashboard/settings': 'Settings',
//     '/dashboard/about': 'About',
//     '/chat': 'Chat',
//     '/deep-jugar': 'Deep Jugar',
//     // Add more routes as needed
//   };

//   // Find matching route
//   for (const [path, title] of Object.entries(titleMap)) {
//     if (pathname.startsWith(path)) {
//       return title;
//     }
//   }

//   // Default to SochAI if no match found
//   return 'SochAI';
// }

// export default function DashboardTopbar() {
//   const user = useSelector((s) => s.auth.user)
//   const dispatch = useDispatch()
//   const pathname = usePathname()

//   // Get current page title
//   const currentTitle = getPageTitle(pathname)

//   return (
//       <div className="flex items-center justify-between h-full px-6">

//         {/* Left section */}
//         <div className="flex items-center gap-4">
//           <h1 className="text-xl font-semibold cursor-default">
//             SochAI
//           </h1>
//           {/* <nav className="hidden sm:flex gap-3">
//             <Link className="btn" href="/deep-jugar">Deep Jugar</Link>
//           </nav> */}
//         </div>

        

//       </div>
//     </div>
//   )
// }











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
    <div className="fixed top-0 left-64 right-0 z-30 bg-neutral-800 backdrop-blur rounded-md  h-16 ml-3 mr-3 mb-2">
      <div className="flex items-center justify-between h-full px-6">

        {/* Left section - Dynamic Title */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold cursor-default">
            {currentTitle}
          </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">
            {user?.name || "Guest"}
          </span>
        </div>
      </div>
    </div>
  )
}