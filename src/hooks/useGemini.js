// src/hooks/useGemini.js
'use client'
import { useDispatch } from 'react-redux'
import { GeminiApi } from '../lib/geminiApi'

export function useGemini(category = null) {
  const dispatch = useDispatch()

  const sendToGemini = async (message, addMessageAction) => {
    // Store the typing indicator message reference
    const typingMessage = { from: 'system', text: 'AI is thinking...' };
    
    try {
      // Show typing indicator
      dispatch(addMessageAction(typingMessage))
      
      // Get response from Gemini
      const response = await GeminiApi.sendMessage(message, category)
      
      // The typing indicator will be automatically replaced because
      // we're adding a new message to the array
      dispatch(addMessageAction({ from: 'server', text: response }))
      
    } catch (error) {
      console.error('AI service error:', error);
      
      // Remove typing indicator by filtering it out or show error
      dispatch(addMessageAction({ 
        from: 'system', 
        text: 'Error connecting to AI service. Please try again.' 
      }))
    }
  }

  return { sendToGemini }
}