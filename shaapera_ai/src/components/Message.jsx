import { UserIcon, SparklesIcon } from '@heroicons/react/24/solid';

const Message = ({ message, theme }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start gap-2 max-w-xs md:max-w-md lg:max-w-lg`}>
        {!isUser && (
          <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'}`}>
            <SparklesIcon className="h-5 w-5 text-white" />
          </div>
        )}
        <div
          className={`p-3 rounded-lg ${isUser
            ? (theme === 'dark' ? 'bg-primary-dark text-white' : 'bg-primary-DEFAULT text-white')
            : (theme === 'dark' ? 'bg-dark-100' : 'bg-gray-200')
          }`}
        >
          <p className="whitespace-pre-wrap">{message.text}</p>
          <p className={`text-xs mt-1 ${isUser ? 'text-primary-light' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}`}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </p>
        </div>
        {isUser && (
          <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary-light'}`}>
            <UserIcon className="h-5 w-5 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;