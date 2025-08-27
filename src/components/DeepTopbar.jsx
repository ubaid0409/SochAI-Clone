'use client'
import Link from 'next/link'

export default function DeepTopbar() {
  return (
    <div className="fixed top-0 left-64 right-0 z-30 bg-neutral-950/80 backdrop-blur border-b border-white/10 h-14">
      <div className="flex items-center justify-between h-full px-6">
        
        {/* Left section */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold cursor-default">
            SochAI
          </h1>
        </div>
    
        {/* Right section */}
        <div className="flex items-center gap-3">
          <Link className="btn" href="/dashboard/explore">Explore In Community</Link>
        </div>

      </div>
    </div>
  )
}
