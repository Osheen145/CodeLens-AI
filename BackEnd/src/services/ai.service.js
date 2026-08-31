const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const apiKey = process.env.GOOGLE_GEMINI_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.warn("WARNING: GOOGLE_GEMINI_KEY is missing in environment variables.");
}

// Initialize Google AI
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const modelName = process.env.GEMINI_MODEL || "gemini-1.5-flash";

const model = genAI ? genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: `
        You are a Senior Code Reviewer (7+ years experience).
        Your job is to analyze, review, and improve code.
        - Ensure best practices, performance, security, and scalability.
        - Highlight issues and suggest improvements with examples.
        - Be direct, precise, and use simple explanations.
    `
}) : null;

// Function to generate content
async function generateContent(prompt) {
    if (!model) {
        if (!process.env.GOOGLE_GEMINI_KEY && !process.env.GEMINI_API_KEY) {
            throw new Error("GOOGLE_GEMINI_KEY environment variable is not configured.");
        }
        const dynamicGenAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY || process.env.GEMINI_API_KEY);
        const dynamicModel = dynamicGenAI.getGenerativeModel({
            model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
            systemInstruction: `
                You are a Senior Code Reviewer (7+ years experience).
                Your job is to analyze, review, and improve code.
                - Ensure best practices, performance, security, and scalability.
                - Highlight issues and suggest improvements with examples.
                - Be direct, precise, and use simple explanations.
            `
        });
        const result = await dynamicModel.generateContent(prompt);
        const response = await result.response;
        return response.text();
    }

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("AI Service Error:", error.message);
        throw error;
    }
}

module.exports = generateContent;
