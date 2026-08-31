const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

function getApiKey() {
    for (const key of Object.keys(process.env)) {
        if (/^(google_?gemini_?key|gemini_?api_?key|google_?api_?key|gemini_?key|api_?key)$/i.test(key)) {
            const val = process.env[key];
            if (val && typeof val === 'string' && val.trim()) {
                return val.trim().replace(/^["']|["']$/g, '');
            }
        }
    }
    return null;
}

// Function to generate content
async function generateContent(prompt) {
    const key = getApiKey();
    if (!key) {
        const setKeys = Object.keys(process.env)
            .filter(k => !k.startsWith('npm_') && !k.startsWith('NODE_') && !k.startsWith('VERCEL_') && !k.startsWith('AWS_'))
            .join(', ');
        throw new Error(`GOOGLE_GEMINI_KEY environment variable is not configured. (Available custom variables: [${setKeys || 'none'}])`);
    }

    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
        systemInstruction: `
            You are a Senior Code Reviewer (7+ years experience).
            Your job is to analyze, review, and improve code.
            - Ensure best practices, performance, security, and scalability.
            - Highlight issues and suggest improvements with examples.
            - Be direct, precise, and use simple explanations.
        `
    });

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
