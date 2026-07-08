const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const getEscapeCoachAdvice = async (history, newQuestion) => {
  try {
    // Construct prompt from history if needed
    let prompt = "You are Angel AI's Escape Coach, an expert in women's safety. Provide short, calm, and actionable advice to help someone in potential danger. Keep responses under 3 sentences if possible.\n\n";
    
    if (history && history.length > 0) {
      prompt += "Context of previous messages:\n";
      history.forEach(h => {
        prompt += `User: ${h.question}\nCoach: ${h.answer}\n`;
      });
    }

    prompt += `\nUser: ${newQuestion}\nCoach:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to get advice from Escape Coach');
  }
};

module.exports = {
  getEscapeCoachAdvice,
};
