// src/lib/geminiApi.js
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export class GeminiApi {
  static async sendMessage(message, category = null) {
    try {
      // Current working endpoint (as of November 2024)
      const endpoint = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';
      
      const prompt = category 
        ? `As a ${category} expert, provide helpful information: ${message}`
        : message;

      const response = await fetch(`${endpoint}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HTTP ${response.status}: ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else if (data.promptFeedback?.blockReason) {
        return "Sorry, your message was blocked by safety filters.";
      } else {
        console.warn('Unexpected response format:', data);
        return "Sorry, I received an unexpected response from the AI service.";
      }

    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getUserFriendlyError(error);
    }
  }

  static getUserFriendlyError(error) {
    const errorMsg = error.message || '';
    
    if (errorMsg.includes('API_KEY') || errorMsg.includes('key')) {
      return "API key error. Please check your API key configuration.";
    } else if (errorMsg.includes('quota') || errorMsg.includes('rate')) {
      return "API quota exceeded. Please try again later.";
    } else if (errorMsg.includes('permission') || errorMsg.includes('403')) {
      return "Permission denied. Please check API permissions in Google Cloud.";
    } else if (errorMsg.includes('404') || errorMsg.includes('not found')) {
      return "AI service is currently unavailable. Please try again later.";
    } else if (errorMsg.includes('block') || errorMsg.includes('safety')) {
      return "Your message was blocked by safety filters. Please try a different question.";
    } else {
      return "Sorry, I'm having trouble connecting to the AI service. Please try again.";
    }
  }
}