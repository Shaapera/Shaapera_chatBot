import { useState, useEffect } from 'react';
import { sendMessageToAPI } from '../services/api';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState('light');

  // Initialize with a welcome message
  useEffect(() => {
    const welcomeMessage = {
      text: "Hallo! Ich bin Shaapera_ai assistence. Wie kann ich heute Ihnen helfen?",
      sender: 'ai',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'hell' ? 'dunkel' : 'hell');
  };

  const sendMessage = async (text) => {
    const userMessage = {
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      const aiResponse = await sendMessageToAPI(text);
      
      const aiMessage = {
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Tut mir leid, es gibt problem mit die Verbindung. Versuchen Sie nächstemal.",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, sendMessage, isTyping, theme, toggleTheme };
};

export default useChat;