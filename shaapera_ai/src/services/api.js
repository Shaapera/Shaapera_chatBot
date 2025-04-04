import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const sendMessageToAPI = async (message) => {
  try {
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Simple response logic - replace with actual API call
    const responses = [
      "I understand you're asking about: " + message,
      "That's an interesting question! Here's what I think about " + message,
      "I've processed your request regarding " + message + ". Here's my response...",
      "Thanks for your message! " + message.charAt(0).toUpperCase() + message.slice(1) + " is something I can help with.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
    
    
    // const response = await axios.post(`${API_URL}/chat`, { message });
    // return response.data.reply;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};