const TypingIndicator = ({ theme }) => {
    return (
      <div className="flex justify-start">
        <div className={`flex items-center gap-1 p-3 rounded-lg ${theme === 'dark' ? 'bg-dark-100' : 'bg-gray-200'}`}>
          <div className={`h-2 w-2 rounded-full ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'} animate-bounce`} style={{ animationDelay: '0ms' }}></div>
          <div className={`h-2 w-2 rounded-full ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'} animate-bounce`} style={{ animationDelay: '150ms' }}></div>
          <div className={`h-2 w-2 rounded-full ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'} animate-bounce`} style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    );
  };
  
  export default TypingIndicator;