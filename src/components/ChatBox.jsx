'use client'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/slices/chatSlice'
import { useGemini } from '../hooks/useGemini'
import Link from 'next/link'

export default function ChatBox() {
  const dispatch = useDispatch()
  const messages = useSelector(s => s.chat.messages)
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  const { sendToGemini } = useGemini()

  // Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim()) return

    dispatch(addMessage({ from: 'me', text: input }))
    dispatch(addMessage({ from: 'system', text: 'AI is thinking...' }))

    try {
      const reply = await sendToGemini(input)
      dispatch(addMessage({ from: 'gemini', text: String(reply) }))
    } catch (err) {
      dispatch(addMessage({ from: 'system', text: '⚠️ Error getting response from Gemini' }))
    }

    setInput('')
  }

  const hasUserMessage = messages.some(m => m.from === 'me')

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] mt-2">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">

        {!hasUserMessage && (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h2 className="text-center font-bold text-3xl text-white/90">
              What can I help with?
            </h2>

            {/* 🔹 Categories */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/chat/health-fitness" className="px-4 py-2 rounded-full font-bold text-blue-900 bg-blue-300 transform transition-transform duration-200 hover:scale-105">
                Health &amp; Fitness
              </Link>
              <Link href="/chat/nutrition-diet" className="px-4 py-2 rounded-full font-bold text-orange-900 bg-orange-300 transform transition-transform duration-200 hover:scale-105">
                Nutrition &amp; Diet
              </Link>
              <Link href="/chat/education" className="px-4 py-2 rounded-full font-bold text-cyan-900 bg-cyan-300 transform transition-transform duration-200 hover:scale-105">
                Education
              </Link>
            </div>
            {/* 🔹 Deep Jugar (separated below categories) */}
            <div className="flex flex-wrap justify-center">
              <Link href="/deep-jugar" className="px-4 py-2 rounded-full font-bold text-red-900 bg-red-400 transform transition-transform duration-200 hover:scale-105">
                Deep Jugar
              </Link>
            </div>
          </div>
        )}

        {/* Chat messages */}
        {messages.map((m, idx) =>
          m.from !== 'system' && (
            <div
              key={idx}
              className={`max-w-[75%] rounded-xl p-3  ${m.from === 'me'
                ? 'ml-auto mt-1 bg-blue-500/10'
                : 'bg-white/10 mt-1'
                }`}
            >
              <div>{m.text}</div>
            </div>
          )
        )}

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
