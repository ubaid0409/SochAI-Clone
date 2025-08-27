"use client"
import { useParams } from "next/navigation"
import CategoryChatBox from "../../../components/CategoryChatBox"

export default function CategoryChatPage() {
  const params = useParams()
  const category = params.category

  // category string → "health-fitness" → "Health & Fitness"
  const title = decodeURIComponent(category)
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="flex">
      <div className="flex-1 ">
        {/* <h1 className="text-2xl font-bold">{title} Chat</h1> */}
        {/* Yahan category pass ho rahi hai */}
        <CategoryChatBox category={category} />
      </div>
    </div>
  )
}
