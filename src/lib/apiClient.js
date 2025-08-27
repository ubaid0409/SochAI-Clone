import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api',
  withCredentials: false,
})

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = (document.cookie.match(/(?:^| )token=([^;]+)/) || [])[1]
    if (token) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiClient;
