  'use client'
  import { GeminiApi } from '../lib/geminiApi'

  export function useGemini(category = null) {
    const sendToGemini = async (message) => {
      try {
        const response = await GeminiApi.sendMessage(message, category)

        // Always return a string
        if (typeof response === 'object') {
          return response.text || JSON.stringify(response)
        }
        return response
      } catch (error) {
        console.error('AI service error:', error)
        return '⚠️ Error connecting to AI service. Please try again.'
      }
    }

    return { sendToGemini }
  }
