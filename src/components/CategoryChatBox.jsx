"use client"
import { useDispatch, useSelector } from "react-redux"
import { addCategoryMessage } from "../redux/slices/categoryChatSlice"
import { useState, useRef, useEffect } from "react"
import { useCategoryGemini } from "../hooks/useCategoryGemini" // Add this import
import { logout } from '../redux/slices/authSlice'

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
    <div className="flex flex-col h-[calc(100vh-56px)] mt-2">

      {/* 🔹 Messages list */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">

        {/* Heading only if user hasn't sent any message */}
        {!hasUserSentMessage && (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="text-center font-bold text-3xl text-white/90">
              Let's help with {title}
            </div>
          </div>
          )}

            {messages.map((m, idx) => (
              m.from !== 'system' && (
                <div
                  key={idx}
                  className={`max-w-[75%] rounded-xl p-3 ${m.from === 'me'
                    ? 'ml-auto mt-1 bg-blue-500/10'
                    : 'bg-white/10 mt-1'
                    }`}
                >
                  <div>{m.text}</div>
                </div>
              )
            ))}

            <div ref={endRef} />
      </div>

      {/* Input Box */}
      <div className="w-full flex justify-center mb-16">
        <div className="flex w-full max-w-2xl border rounded-xl">
          <input
            className="flex-1 px-4 py-2 bg-transparent text-white"
            placeholder="Let's Chat"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? send() : null)}
          />
          <button
            className="px-4 py-2 bg-transparent"
            onClick={send}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
