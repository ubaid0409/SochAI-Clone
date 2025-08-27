'use client'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/slices/chatSlice'
import { useGemini } from '../hooks/useGemini' // Add this import

export default function ChatBox() {
  const dispatch = useDispatch()
  const messages = useSelector(s => s.chat.messages)
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  const { sendToGemini } = useGemini() // Add this hook

  // Auto scroll to latest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => { // Make async
    if (!input.trim()) return
    dispatch(addMessage({ from: 'me', text: input }))
    
    // Replace socket with Gemini
    await sendToGemini(input, addMessage)
    
    setInput('')
  }

  // 🔹 Check if user has typed a message yet
  const hasUserMessage = messages.some(m => m.from === 'me')

  
  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {/* 🔹 Show heading only if user hasn't sent any message */}
        {!hasUserMessage && (
          <div className="text-center font-bold text-lg text-white/90 my-4">
            What can I help with?
          </div>
        )}

        {messages.map((m, idx) => (
          // Skip system message after heading logic handled
          m.from !== 'system' && (
            <div
              key={idx}
              className={`max-w-[75%] rounded-xl p-3 ${
                m.from === 'me'
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

      {/* Input Box */}
      <div className="border-t border-white/10 p-4 flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded-xl bg-white/10 outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? send() : null)}
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
