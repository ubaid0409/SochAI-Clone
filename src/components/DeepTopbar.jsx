'use client'
import Link from 'next/link'

export default function DeepTopbar() {
  return (
    <div className="fixed top-0 left-64 right-0 z-30 bg-neutral-800 backdrop-blur  rounded-md  h-16 ml-3 mr-3">
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
