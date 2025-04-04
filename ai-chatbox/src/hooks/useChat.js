import { useState, useEffect } from "react";
import { sendMessageToAPI } from "../services/api";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("light");

  // welcome message
  useEffect(() => {
    const welcomeMessage = {
      text: "Hallo! Ich bin dein Shaaperaai assistent. Wie kann ich dir helfen?",
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const sendMessage = async (text) => {
    const userMessage = {
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const aiResponse = await sendMessageToAPI(text);

      const aiMessage = {
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Tut mir leid, es gibt problrm mit die verbundung. versuchen Sie nächstemal.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, sendMessage, isTyping, theme, toggleTheme };
};

export default useChat;
