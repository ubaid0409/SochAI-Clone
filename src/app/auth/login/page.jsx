'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../redux/slices/authSlice'
import { authApi } from '../../../lib/authApi'
import { useRouter } from 'next/navigation'
import { useAuthGuard } from '../../../hooks/useAuth'

export default function LoginPage() {
  useAuthGuard('/chat')
  const dispatch = useDispatch()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await authApi.login({ username, password })
      // set cookie for middleware
      document.cookie = `token=${res.token}; path=/; max-age=${60 * 60 * 24 * 7}`
      dispatch(loginSuccess(res))
      router.push('/chat')
    } catch (err) {
      setError('Login failed')
    } finally {
      setLoading(false)
    }
  }

  const isDisabled = loading || !username.trim() || !password.trim()

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-2xl font-semibold text-center">Sign in</div>
      {error ? <div className="text-red-400 text-sm">{error}</div> : null}
      <input
        className="w-full px-4 py-3 rounded-xl bg-white/10 outline-none"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-4 py-3 rounded-xl bg-white/10 outline-none"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full btn ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? 'Signing in...' : 'Login'}
      </button>
    </form>
  )
}
