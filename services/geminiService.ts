// services/geminiService.ts

/**
 * This function now calls our secure Netlify Function endpoint 
 * instead of calling the Google API directly.
 * The Netlify Function (generate-content.js) securely handles the API key.
 */
export async function sendMessageToGemini(prompt: string): Promise<string> {
  try {
    // 1. Send the user's question to the secure Netlify Function address
    const response = await fetch('/.netlify/functions/generate-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 2. The Netlify Function will read this 'prompt' securely
      body: JSON.stringify({ prompt: prompt }),
    });

    if (!response.ok) {
      // Handles errors if the secure function or the API fails
      const errorData = await response.json();
      console.error('Secure Function Error:', errorData.error);
      return 'Sorry, I ran into an error getting a secure response.';
    }

    // 3. Get the final, secure answer from the Netlify Function
    const data = await response.json();
    return data.text;

  } catch (error) {
    console.error('Network or Function Invocation Error:', error);
    return 'I am having trouble connecting to my assistant right now.';
  }
}