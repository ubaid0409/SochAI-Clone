"use client"
import { useDispatch, useSelector } from "react-redux"
import { addCategoryMessage } from "../redux/slices/categoryChatSlice"
import { useState, useRef, useEffect } from "react"
import { useCategoryGemini } from "../hooks/useCategoryGemini" // Add this import

export default function CategoryChatBox({ category }) {
  const dispatch = useDispatch()
  const messages = useSelector((s) => s.categoryChat[category] || [])
  const [input, setInput] = useState("")
  const endRef = useRef(null)
  const { sendToGemini } = useCategoryGemini(category) // Add this hook

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = async () => { // Make async
    if (!input.trim()) return
    dispatch(addCategoryMessage({ category, message: { from: "me", text: input } }))

    // Replace with Gemini
    await sendToGemini(input)

    setInput("")
  }

  // 🔹 readable title
  const title = decodeURIComponent(category)
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())

  // 🔹 Check if user has sent any message
  const hasUserSentMessage = messages.some(m => m.from === "me")

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">

      {/* 🔹 Messages list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {/* Heading only if user hasn't sent any message */}
        {!hasUserSentMessage && (
          <div className="text-center font-bold text-lg text-white/90 my-4">
            Let's help with {title}
          </div>
        )}

        {messages.map((m, idx) => (
          m.from !== 'system' && (
            <div
              key={idx}
              className={`max-w-[75%] rounded-xl p-3 ${m.from === 'me'
                  ? 'ml-auto bg-blue-500/10'
                  : 'bg-white/10'
                }`}
            >
              <div>{m.text}</div>
            </div>
          )
        ))}

        <div ref={endRef} />
      </div>

      {/* 🔹 Input box */}
      <div className="border-t border-white/10 p-3 flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded-xl bg-white/10 outline-none"
          placeholder={`Type message in ${title}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          onClick={send}
        >
          Send
        </button>
      </div>
    </div>
  )
}
