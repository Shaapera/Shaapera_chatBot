import { useState, useEffect } from "react";
import { sendMessageToAPI } from "../services/api";

const useChat = () => {
  // 1. Define state variables
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("light");

  // 2. Initialize with welcome message
  useEffect(() => {
    const welcomeMessage = {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // 3. Correct sendMessage function
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    try {
      // Add user message
      const userMessage = {
        text,
        sender: "user",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      // Get AI response
      const aiResponse = await sendMessageToAPI(text, messages);

      // Add AI message
      const aiMessage = {
        text: aiResponse,
        sender: "ai",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API Error:", error);

      let errorMessage = "Sorry, I'm having trouble connecting.";
      if (error.response?.status === 429) {
        errorMessage = "Too many requests. Please try again later.";
      }

      setMessages((prev) => [
        ...prev,
        {
          text: errorMessage,
          sender: "ai",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return {
    messages,
    sendMessage,
    isTyping,
    theme,
    setTheme,
  };
};

export default useChat;
