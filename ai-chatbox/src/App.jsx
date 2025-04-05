
import useChat from './hooks/useChat';
import ChatContainer from './components/ChatContainer';

function App() {
  const { messages, sendMessage, isTyping, theme, toggleTheme, setTheme } = useChat();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen">
        <ChatContainer 
          messages={messages} 
          sendMessage={sendMessage} 
          isTyping={isTyping}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;