"use client"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { clearDeepChat } from "../redux/slices/deepJugarSlice"

export default function DeepJugarSidebar() {
    const user = useSelector((s) => s.auth.user)
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false)

  const handleNewChat = () => {
    dispatch(clearDeepChat()) // ✅ clears Deep Jugar chat
  }

  return (
    <aside
      className={`${collapsed ? "w-16" : "w-64"} 
        min-h-screen sticky top-0 bg-neutral-800 text-white 
        flex flex-col transition-all  rounded-md  ml-1`}
    >
      {/* 🔹 Top Bar: Title or collapsed toggle */}
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

      {!collapsed && (
        <div className="p-4">
          {/* New Chat button */}
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

      {/* 🔹 Bottom Section */}
      <div className="p-4 mt-auto">
        <Link
          className="flex justify-center items-center px-3 py-2 border rounded-md text-sm hover:bg-white/10 transition"
          href="/chat"
        >
          {collapsed ? "↩" : "Go Back"}
        </Link>
      </div>
    </aside>
  )

  // return (
  //     <div
        
  //     >
  //       {/* 🔹 Top Bar: User name on left, toggle on right */}
        
  
  //       {/* 🔹 Top Section */}
  //       {!collapsed && (
  //         <div className="p-4">
  //           {/* New Chat button */}
  //           <button
  //             onClick={handleNewChat}
  //             className="block mb-4 text-white rounded-lg "
  //           >
  //             New Chat
  //           </button>
  
  //           <input
  //             type="text"
  //             placeholder="Search..."
  //             className="w-full px-3 py-1 rounded-lg bg-white/10 outline-none text-sm"
  //           />
  //         </div>
  //       )}
  
  //       {/* 🔹 Bottom categories */}
  //       <div className="mt-auto p-4">
  //         <ul className="flex flex-col items-center gap-2">
  //           {bottomCategories.map((cat, idx) => (
  //             <li key={idx}>
  //               <Link
  //                 href={cat.path}
  //                 className="flex px-3 py-1 border rounded-xl transform transition-transform duration-200 hover:scale-105"
  //               >
  //                 {collapsed ? cat.name[0] : cat.name}
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   )
}


