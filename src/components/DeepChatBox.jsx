'use client'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDeepMessage } from '../redux/slices/deepJugarSlice'
import { useGemini } from '../hooks/useGemini'

export default function DeepChatBox() {
  const dispatch = useDispatch()
  const messages = useSelector((s) => s.deepJugar.messages)
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  const { sendToGemini } = useGemini()

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim()) return

    // 1. Add user message
    dispatch(addDeepMessage({ from: 'me', text: input }))

    // 2. Get Gemini response
    // inside send()
    // inside send()
    try {
      const reply = await sendToGemini(input)
      dispatch(addDeepMessage({ from: 'gemini', text: String(reply) }))
    } catch (err) {
      dispatch(addDeepMessage({ from: 'system', text: '⚠️ Error getting response from Gemini' }))
    }


    // 4. Clear input
    setInput('')
  }

  // 🔹 Check if user has sent a message yet
  const hasUserMessage = messages.some((m) => m.from === 'me')

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] mt-2">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
        {!hasUserMessage && (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h2 className="text-center font-bold text-3xl text-white/90">
              Welcome to Deep Jugar Chat!
            </h2>
          </div>
        )}

        {messages.map((m, idx) =>
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
