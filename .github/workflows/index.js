import { GoogleGenerativeAI } from "@google/generative-ai";

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY missing");
  }

  console.log("KEY EXISTS:", true);

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent("Say hello in one short line");
  console.log(result.response.text());
}

main().catch(err => {
  console.error("ERROR:", err.message);
  process.exit(1);
});
