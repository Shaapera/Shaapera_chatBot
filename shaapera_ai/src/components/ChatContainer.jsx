import { useState, useEffect, useRef } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import { PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const ChatContainer = ({ messages, sendMessage, isTyping, theme, toggleTheme }) => {
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;
    
    sendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-dark-200 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Header */}
      <div className={`p-4 border-b ${theme === 'dark' ? 'border-dark-100 bg-dark-300' : 'border-gray-200 bg-white'} flex justify-between items-center`}>
        <h1 className="text-2xl font-bold">AI Chatbot</h1>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-dark-100 text-primary-light' : 'bg-gray-200 text-primary-dark'}`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Message 
            key={index} 
            message={message} 
            theme={theme}
          />
        ))}
        {isTyping && <TypingIndicator theme={theme} />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className={`p-4 border-t ${theme === 'dark' ? 'border-dark-100 bg-dark-300' : 'border-gray-200 bg-white'}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className={`flex-1 p-3 rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-dark-100 focus:ring-primary-light' : 'bg-gray-100 focus:ring-primary-dark'}`}
          />
          <button
            type="submit"
            disabled={inputMessage.trim() === ''}
            className={`p-3 rounded-lg ${inputMessage.trim() === '' 
              ? (theme === 'dark' ? 'bg-dark-100 text-gray-500' : 'bg-gray-200 text-gray-400') 
              : (theme === 'dark' ? 'bg-primary-dark text-white' : 'bg-primary-DEFAULT text-white')} 
              hover:opacity-90 transition-opacity`}
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;