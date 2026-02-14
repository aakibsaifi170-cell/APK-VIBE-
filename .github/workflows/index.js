import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("KEY EXISTS:", !!process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent("Say hello in one line");
console.log(result.response.text());
