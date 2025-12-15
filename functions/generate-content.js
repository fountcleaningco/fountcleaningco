import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// 1. ADD: Read the System Prompt from Netlify's Environment Variables
const GEMINI_SYSTEM_PROMPT = process.env.GEMINI_SYSTEM_PROMPT; 

const ai = new GoogleGenAI({}); 

export default async (request, context) => {
  if (!GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured.' }), { status: 500 });
  }

  try {
    const { prompt } = await request.json();

    // 2. CHANGE: Structure the contents to include both the system and user roles
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: "system", 
          parts: [{ text: GEMINI_SYSTEM_PROMPT }] // <-- Sends the AI's persona
        },
        {
          role: "user",
          parts: [{ text: prompt }] // <-- Sends the user's message
        }
      ]
    });

    return new Response(JSON.stringify({
      text: response.text
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process content request.' }), { status: 500 });
  }
};
