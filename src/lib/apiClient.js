// src/lib/apiClient.js
import axios from 'axios'
// import { decodeToken, isTokenExpired } from './tokenUtils'

// ✅ CORRECT BASE URL: Without /api prefix
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ,
  timeout: 30000,
})

// Get token from storage
export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('sochai_token');
}

// Store token
export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('sochai_token', token);
    console.log('SochAI token set successfully');
  }
}

// Remove token
export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('sochai_token');
    console.log('Token removed successfully');
  }
}

// // Request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = getToken();
    
//     if (token) {
//       if (isTokenExpired(token)) {
//         removeToken();
//         window.location.href = '/auth/login';
//         return Promise.reject(new Error('Token expired'));
//       }
      
//       config.headers.Authorization = `Bearer ${token}`;
//     }
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// )

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
)

export default apiClient;