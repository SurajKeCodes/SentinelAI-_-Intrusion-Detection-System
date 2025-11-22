import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO } from "../constants";

const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key missing. Using fallback response.");
    // Fallback response for localhost/demo without API key
    return "I am currently operating in offline demo mode (API Key missing). I can confirm Suraj is a Final-year B.Tech (IT) candidate with expertise in AI/ML, Python, and Cybersecurity. For specific inquiries, please check the 'Contact' section!";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are an advanced AI assistant for Suraj Borkute's personal portfolio website.
      Your goal is to answer questions about Suraj's professional background, skills, and projects based STRICTLY on the context provided below.
      
      Tone: Professional, enthusiastic, slightly technical (cybersecurity/AI flavor), and helpful.
      
      Context about Suraj:
      ${PERSONAL_INFO.resumeContext}
      
      If a user asks something outside this context, politely steer them back to Suraj's professional life or suggest contacting him directly.
      Keep answers concise (under 3 sentences) unless asked for detail.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 200,
        temperature: 0.7
      }
    });

    return response.text || "I processed that, but couldn't generate a verbal response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System malfunction. I cannot process your request right now. Please try again later.";
  }
};