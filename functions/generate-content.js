import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({}); 

export default async (request, context) => {
  if (!GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured.' }), { status: 500 });
  }
  
  try {
    const { prompt } = await request.json(); 
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', 
      contents: prompt
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