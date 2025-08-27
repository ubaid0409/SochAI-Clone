'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserFromCookie } from '../redux/slices/authSlice'
import { useRouter } from 'next/navigation'

export function useAuthGuard(redirectIfAuthedTo='/chat') {
  const dispatch = useDispatch()
  const router = useRouter()
  const isAuth = useSelector((s) => s.auth.isAuthenticated)

  useEffect(() => {
    dispatch(setUserFromCookie())
  }, [dispatch])

  useEffect(() => {
    if (isAuth) router.push(redirectIfAuthedTo)
  }, [isAuth, redirectIfAuthedTo, router])
}

export function useRequireAuth() {
  const dispatch = useDispatch()
  const router = useRouter()
  const isAuth = useSelector((s) => s.auth.isAuthenticated)

  useEffect(() => {
    dispatch(setUserFromCookie())
  }, [dispatch])

  useEffect(() => {
    if (!isAuth) router.replace('/auth/login')
  }, [isAuth, router])
}
