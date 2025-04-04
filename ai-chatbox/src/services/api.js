import axios from "axios";

// For development, you can use a mock API or connect to your backend
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL, // Use the API_URL variable here
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendMessageToAPI = async (message) => {
  try {
    // Simulate API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    const responses = [
      "Ic verstehe du fragst über: " + message,
      "That's an interesting question! Here's what I think about " + message,
      "I've processed your request regarding " +
        message +
        ". Heir ist meine Antwort...",
      "Danke für die Nachricten! " +
        message.charAt(0).toUpperCase() +
        message.slice(1) +
        " is something I can help with.",
    ];

    return responses[Math.floor(Math.random() * responses.length)];

    // Actual API call would look like:
    // const response = await axios.post(`${API_URL}/chat`, { message });
    // return response.data.reply;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default api;
