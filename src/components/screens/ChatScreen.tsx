import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Plus, Send, MoreVertical } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ChatScreenProps {
  contact: {
    name: string;
    avatar: string;
  };
  onBack: () => void;
}

interface Message {
  id: string;
  text: string;
  sent: boolean;
  timestamp: string;
}

export function ChatScreen({ contact, onBack }: ChatScreenProps) {
  const { isDarkMode } = useTheme();
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Découvrez notre nouvelle collection printemps 2025 ! 🔥',
      sent: false,
      timestamp: '14:32'
    },
    {
      id: '2',
      text: 'Super ! J\'aimerais en savoir plus',
      sent: true,
      timestamp: '14:35'
    },
    {
      id: '3',
      text: 'Bien sûr ! Nous avons des promotions exclusives pour vous',
      sent: false,
      timestamp: '14:36'
    },
    {
      id: '4',
      text: 'Parfait, merci pour l\'info !',
      sent: true,
      timestamp: '14:37'
    }
  ]);

  const handleSend = () => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: messageText,
        sent: true,
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#121212]' : 'bg-white'} flex flex-col overflow-hidden`} style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} px-4 py-4 border-b ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'} flex items-center gap-3 flex-shrink-0`}>
        <button onClick={onBack} className="p-1 -ml-1">
          <ArrowLeft size={24} className={isDarkMode ? 'text-white' : 'text-gray-900'} />
        </button>
        <ImageWithFallback
          src={contact.avatar}
          alt={contact.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className={`flex-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
          {contact.name}
        </h1>
        <button className="p-1">
          <MoreVertical size={24} className={isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-600'} />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            style={{ marginTop: index > 0 ? '8px' : '0' }}
          >
            <div className="max-w-[75%]">
              <div
                className={`px-4 py-3 ${
                  message.sent
                    ? 'bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white rounded-2xl rounded-br-md'
                    : isDarkMode
                    ? 'bg-[#2A2A2A] text-white rounded-2xl rounded-bl-md'
                    : 'bg-[#F0F0F0] text-gray-900 rounded-2xl rounded-bl-md'
                }`}
                style={{ fontFamily: 'Inter' }}
              >
                {message.text}
              </div>
              <div
                className={`text-xs mt-1 px-1 ${
                  isDarkMode ? 'text-[#666666]' : 'text-gray-400'
                } ${message.sent ? 'text-right' : 'text-left'}`}
                style={{ fontFamily: 'Inter' }}
              >
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input bar - AU-DESSUS DE LA NAVIGATION */}
      <div 
        className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} border-t ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'}`} 
        style={{ 
          paddingLeft: '12px', 
          paddingRight: '12px', 
          paddingTop: '12px', 
          paddingBottom: '12px',
          flexShrink: 0
        }}
      >
        <div 
          className={`flex items-center gap-3 ${isDarkMode ? 'bg-[#2A2A2A]' : 'bg-[#F5F5F5]'}`}
          style={{ 
            borderRadius: '50px', 
            paddingLeft: '16px', 
            paddingRight: '16px', 
            height: '48px'
          }}
        >
          <button 
            className="flex-shrink-0 hover:opacity-70 transition-opacity active:scale-95"
            type="button"
          >
            <Plus size={20} className={isDarkMode ? 'text-[#888888]' : 'text-gray-500'} />
          </button>
          <input
            type="text"
            placeholder="Écrire un message…"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className={`flex-1 bg-transparent ${isDarkMode ? 'text-white placeholder-[#666666]' : 'text-gray-900 placeholder-gray-400'} focus:outline-none`}
            style={{ fontFamily: 'Inter', fontSize: '15px' }}
          />
          <button
            onClick={handleSend}
            type="button"
            className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] flex items-center justify-center shadow-md hover:shadow-lg active:scale-90 transition-all"
          >
            <Send size={16} className="text-white" style={{ marginLeft: '2px' }} />
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
