import apiClient from './apiClient'

export const authApi = {
  async login({ username, password }) {
    // dummy API; real world would call server
    return new Promise((resolve) => {
      setTimeout(() => resolve({ token: 'demo-token', user: { id: 1, name: username } }), 300)
    })
  },
  async register(payload) {
    return apiClient.post('/auth/register', payload)
  },
}
