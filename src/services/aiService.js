import { GoogleGenerativeAI } from "@google/generative-ai";

// ⚠️ Gemini API Key configured
const API_KEY = "AIzaSyBZvBqvbE8u7ceYoqHb6P_03t955LaRXEI";

const genAI = new GoogleGenerativeAI(API_KEY);


export const generateBlogSummary = async (content) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Analyze the following blog post content and provide a summary in JSON format.
      The JSON should have these fields:
      - bullets: array of 3 concise bullet points summarizing the key points.
      - keywords: array of 3-4 professional keywords/tags.
      - sentiment: a single word (e.g., Positive, Neutral, Inspiring).
      - difficulty: a single word (Beginner, Intermediate, or Advanced).

      Content:
      \${content}

      Return ONLY the JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up the response to ensure it's valid JSON
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Generation Error:", error);
    return null;
  }
};
