'use client'
import { useDispatch } from 'react-redux'
import { GeminiApi } from '../lib/geminiApi'
import { addCategoryMessage } from '../redux/slices/categoryChatSlice'

export function useCategoryGemini(category) {
  const dispatch = useDispatch()

  const sendToGemini = async (message) => {
    try {
      // Show typing indicator
      dispatch(addCategoryMessage({ 
        category, 
        message: { from: 'system', text: 'AI is thinking...' } 
      }))
      
      // Get response from Gemini
      const response = await GeminiApi.sendMessage(message, category)
      
      // Add the actual response (typing message will be replaced)
      dispatch(addCategoryMessage({ 
        category, 
        message: { from: 'server', text: response } 
      }))
      
    } catch (error) {
      console.error('Category Gemini error:', error);
      dispatch(addCategoryMessage({ 
        category, 
        message: { from: 'system', text: 'Error processing your message. Please try again.' } 
      }))
    }
  }

  return { sendToGemini }
}