'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../../redux/slices/postSlice'
import { postApi } from '../../../lib/postApi'
import PostCard from '../../../components/PostCard'

export default function ExplorePage() {
  const dispatch = useDispatch()
  const posts = useSelector(s => s.posts.list)

  useEffect(() => {
    async function load() {
      const data = await postApi.list()
      dispatch(setPosts(data))
    }
    load()
  }, [dispatch])

  return (
    <div className="min-h-screen">
      {/* ✅ Fixed Header (agar chahiye toh) */}
      {/* <div className="sticky top-14 z-20 bg-neutral-950 p-4 border-b border-white/10">
        <h1 className="text-2xl font-semibold">Explore</h1>
      </div> */}
      
      {/* ✅ Scrollable Content Area */}
      <div className="p-6">
        <div className="grid gap-5">
          {posts.map(p => <PostCard key={p.id} post={p} />)}
        </div>
      </div>
    </div>
  )
}