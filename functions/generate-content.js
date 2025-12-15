import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// Read the System Prompt from Netlify's Environment Variables
const GEMINI_SYSTEM_PROMPT = process.env.GEMINI_SYSTEM_PROMPT; 

const ai = new GoogleGenAI({}); 

export default async (request, context) => {
  if (!GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured.' }), { status: 500 });
  }

  try {
    const { prompt } = await request.json();

    // 1. CHANGE: Send the System Instruction via the 'config' object
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: "user", parts: [{ text: prompt }] }], // Only send the user's message here
      config: {
         systemInstruction: GEMINI_SYSTEM_PROMPT, // <-- Passes the persona correctly
      }
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
