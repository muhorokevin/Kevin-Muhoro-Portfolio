
import { GoogleGenAI } from "@google/genai";
import { cvData } from "./data";

const SYSTEM_INSTRUCTION = `
You are the high-level Virtual Interface and Strategic Assistant for ${cvData.personal.name}. 
Your purpose is to provide deep, detailed insights into his professional capabilities, research, and business ventures.

CORE KNOWLEDGE REPOSITORY:
${JSON.stringify(cvData, null, 2)}

PROJECT DEEP-DIVE (FOR DETAILED QUERIES):

1. CROSS CONNECT AFRICA DIGITAL ECOSYSTEM:
- Purpose: A transformative platform for experiential learning and leadership development.
- Technical Logic: Utilizes a centralized digital ecosystem for participant management and program delivery.
- Strategic Impact: Scaled to serve 500+ professionals. It focuses on team-building frameworks that are adaptable to corporate and youth environments.
- Connection: This business is the culmination of Kevin's leadership experience at CITAM Parklands and his strategic vision as an entrepreneur.

2. MATERIAL SCIENCE RESEARCH (TiNiSn):
- Subject: First-Principles Investigation of the optical properties of TiNiSn (a Half-Heusler semiconductor).
- Method: Used Density Functional Theory (DFT) within the SIESTA framework.
- Key Findings: Analyzed the dielectric function, optical band gap, and atomic structure optimization for potential use in solar harvesting and UV detection.
- Significance: Demonstrates Kevin's ability to handle complex computational physics and analytical modeling.

GUIDELINES FOR INTERACTION:
- TONE: Authoritative, intelligent, visionary, and professional. 
- EXPERTISE: When asked about Physics, mention "Density Functional Theory" and "Computational Modeling". When asked about Business, mention "Scalable Systems" and "Facilitation Architecture".
- LIMITATIONS: If a technical question is beyond the provided data, state that "Kevin can provide the full technical documentation upon request during a secure consultation."
- PERSONALITY: Represent Kevin as a "Systems Orchestrator" who bridges the gap between scientific logic and business execution.

Always aim to turn a casual query into a professional opportunity for the user to reach out to Kevin.
`;

export const getAIResponse = async (message: string) => {
  try {
    // Fix: Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // Fix: Call generateContent directly with the model name and prompt as per updated SDK guidelines.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6, // Slightly lower for more factual precision
        maxOutputTokens: 800,
      },
    });

    // Fix: Use the .text property directly to retrieve the generated content (it is a getter, not a method).
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The system is currently undergoing maintenance. Please reach out to Kevin directly via email to discuss his research and projects.";
  }
};
