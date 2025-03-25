import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);

const AiModel = genAi.getGenerativeModel({ model: "gemini-2.0-flash" });

export default AiModel;