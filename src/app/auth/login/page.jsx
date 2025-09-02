'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../redux/slices/authSlice'
import { setToken } from '../../../lib/apiClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const LOGIN_TOKEN = process.env.NEXT_PUBLIC_SOCHAI_LOGIN_TOKEN

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      setToken(LOGIN_TOKEN)
      dispatch(loginSuccess({
        token: LOGIN_TOKEN,
        user: {
          id: "9d3f7f2e-5cde-49e6-a7db-ee619dec9688",
          username: formData.name,
          email: formData.email,
          name: formData.name
        }
      }))
      router.push('/chat')
    } catch (error) {
      console.error('Login failed:', error)
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Sign in to SochAI
        </h2>
        
        {error && (
          <div className="bg-red-900/50 text-red-200 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4 p-3 bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-300 text-center">
            Using demo authentication mode
          </p>
        </div>
      </div>
    </div>
  )
}
