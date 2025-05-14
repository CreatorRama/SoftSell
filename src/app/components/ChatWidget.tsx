'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const exampleQuestions = [
    "How do I sell my license?",
    "What software licenses do you accept?",
    "How long does the process take?",
    "What payment methods do you offer?"
  ];

  const botResponses: Record<string, string> = {
    "how do i sell my license": "The process is simple! Just fill out our contact form with your license details, and we'll provide you with a valuation. Once you accept our offer, we'll handle the transfer and you'll receive payment within 48 hours.",
    "what software licenses do you accept": "We accept most major software licenses including Adobe, Microsoft, Autodesk, VMware, and many others. If you're unsure about a specific license, feel free to ask!",
    "how long does the process take": "From initial contact to payment, the entire process typically takes 3-5 business days. The valuation is usually provided within 24 hours of submitting your license details.",
    "what payment methods do you offer": "We offer several payment methods including bank transfer, PayPal, and wire transfer. All payments are secure and processed quickly once the license transfer is complete."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse = "I'm sorry, I didn't understand that. Could you rephrase your question or choose from our common questions?";

      for (const key in botResponses) {
        if (lowerInput.includes(key)) {
          botResponse = botResponses[key];
          break;
        }
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleExampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">SoftSell Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <FiX size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto max-h-96">
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Hello! How can I help you today?
            </div>
            
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block px-4 py-2 rounded-lg ${message.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex mb-4">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="mb-3">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Quick questions:</div>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleQuestion(question)}
                    className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 disabled:opacity-50"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <FiMessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;