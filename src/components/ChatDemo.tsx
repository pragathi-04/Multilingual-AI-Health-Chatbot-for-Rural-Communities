import React, { useState } from 'react';
import { SendIcon, MicIcon, ImageIcon, MessageSquareTextIcon } from 'lucide-react';
export function ChatDemo() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'bot',
    text: "Hello! I'm HealthChat AI. How can I help you today? You can ask about vaccines, disease symptoms, or find nearby clinics. time, '10:02 AM"
  }]);
  const [inputText, setInputText] = useState('');
  const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Kannada'];
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setMessages([...messages, userMessage]);
    setInputText('');
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse = '';
      if (inputText.toLowerCase().includes('vaccine') || inputText.toLowerCase().includes('vaccination')) {
        botResponse = 'For vaccination information, I need to know the age of the person. Can you please tell me their age?';
      } else if (inputText.toLowerCase().includes('fever') || inputText.toLowerCase().includes('cough')) {
        botResponse = 'It sounds like you may have symptoms of a common illness. Fever and cough can be symptoms of various conditions, including flu, COVID-19, or a common cold. Would you like information on how to manage these symptoms or when to see a doctor?';
      } else if (inputText.toLowerCase().includes('clinic') || inputText.toLowerCase().includes('hospital')) {
        botResponse = 'To help you find the nearest healthcare facility, I need to know your location. Could you share your district or nearest town?';
      } else {
        botResponse = 'Thank you for your message. I can provide information about vaccinations, disease symptoms, and healthcare facilities. How can I assist you with these topics?';
      }
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };
  return <section id="demo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Interactive Chatbot Demo
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience how our multilingual chatbot helps users access
            healthcare information
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            {/* Chat header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageSquareTextIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">HealthChat AI</p>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <div>
                <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} className="bg-blue-700 text-white text-sm rounded-md border border-blue-500 px-2 py-1 focus:outline-none">
                  {languages.map(lang => <option key={lang} value={lang}>
                      {lang}
                    </option>)}
                </select>
              </div>
            </div>
            {/* Chat messages */}
            <div className="h-96 p-4 overflow-y-auto bg-gray-50">
              {messages.map(message => <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>)}
            </div>
            {/* Chat input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center">
                <button className="text-gray-400 hover:text-gray-600 mr-2">
                  <MicIcon className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 mr-2">
                  <ImageIcon className="h-5 w-5" />
                </button>
                <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type your health question..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus-outline-none focus-ring-2 focus-ring-blue-500" />
                <button onClick={handleSendMessage} className="ml-2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
                  <SendIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 text-center">
                Type a question about vaccines, symptoms, or healthcare
                facilities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}