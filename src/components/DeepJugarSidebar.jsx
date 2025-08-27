'use client'
import Link from 'next/link'

export default function DeepJugarSidebar() {
  return (
    <aside className="w-64 shrink-0 h-[calc(100vh-56px)] sticky top-14 border-r border-white/10 bg-neutral-950/50 flex flex-col justify-between">
      
      {/* 🔹 Top Section */}
      <div className="p-4 space-y-2">
        <div className="text-xs uppercase text-white/50 mb-2">Deep Jugar Tools</div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1 rounded-lg bg-white/10 outline-none text-sm"
        />
      </div>

      {/* 🔹 Bottom Section */}
      <div >
        <Link  className="flex flex-col items-center gap-2 mb-5 space-y-1  px-3 border rounded-md " href="/chat">Go Back</Link>
      </div>
    </aside>
  )
}
