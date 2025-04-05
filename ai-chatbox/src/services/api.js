import axios from "axios";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Use Vite's environment variable system

export const sendMessageToAPI = async (message, conversationHistory = []) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // or "gpt-4" if available
        messages: [
          {
            role: "system",
            content:
              "You are a helpful AI assistant. Respond in a friendly, conversational manner.",
          },
          ...conversationHistory.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7, // Controls creativity (0-2)
        max_tokens: 250, // Limit response length
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error.response?.data || error.message);
    throw error;
  }
};
