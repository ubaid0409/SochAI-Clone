// 'use client'
// import { useState } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faComment } from "@fortawesome/free-regular-svg-icons"
// import { faThumbsUp as faThumbsUpRegular } from "@fortawesome/free-regular-svg-icons"
// import { faThumbsUp as faThumbsUpSolid } from "@fortawesome/free-solid-svg-icons"

// export default function PostCard({ post }) {
//   const [liked, setLiked] = useState(false)
//   const [likes, setLikes] = useState(post.likes)

//   const toggleLike = () => {
//     if (liked) {
//       setLikes(likes - 1)
//     } else {
//       setLikes(likes + 1)
//     }
//     setLiked(!liked)
//   }

//   return (
//     <div className="  flex-1 items-center justify-center bg-gray-900 text-white p-4 rounded-lg shadow">
//       {/* Header: Profile + Author */}
//       <div className="flex items-center gap-3 mb-2">
//         <img
//           src={post.image}
//           alt="Profile"
//           className="w-10 h-10 rounded-full object-cover border border-gray-700"
//         />
//         <span className="text-sm text-white/80">{post.author}</span>
//       </div>

//       {/* Content */}
//       <div className="text-lg mb-2">{post.content}</div>

//       {/* Footer: Likes + Comments */}
//       <div className="flex gap-4 text-sm text-white/50">
//         <button 
//           className="flex items-center gap-1"
//           onClick={toggleLike}
//         >
//           <FontAwesomeIcon icon={liked ? faThumbsUpSolid : faThumbsUpRegular} /> {likes}
//         </button>

//         <div className="flex items-center gap-1">
//           <FontAwesomeIcon icon={faComment} /> {post.comments}
//         </div>
//       </div>
//     </div>
//   )
// }
