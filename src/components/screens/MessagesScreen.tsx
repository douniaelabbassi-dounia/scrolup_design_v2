import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Plus, Search } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { ChatScreen } from './ChatScreen';
import { CreateStoryScreen } from './CreateStoryScreen';

interface Story {
  id: string;
  name: string;
  image: string;
  isYourStory?: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

const stories: Story[] = [
  { id: '0', name: 'Your Story', image: '', isYourStory: true },
  { id: '1', name: 'Nike', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2V8ZW58MXx8fHwxNzYyMDMwODgwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '2', name: 'Adidas', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIwNjkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '3', name: 'Apple', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2ZpbGV8ZW58MXx8fHwxNzYyMDk4OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '4', name: 'Samsung', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwMzA4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '5', name: 'Coca-Cola', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjIwOTYyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Nike Official',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2V8ZW58MXx8fHwxNzYyMDMwODgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Découvrez notre nouvelle collection printemps 2025 ! 🔥',
    timestamp: '2m',
    unread: true,
  },
  {
    id: '2',
    name: 'Adidas',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIwNjkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Profitez de -30% sur toute la collection',
    timestamp: '15m',
    unread: true,
  },
  {
    id: '3',
    name: 'Apple',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2ZpbGV8ZW58MXx8fHwxNzYyMDk4OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Le nouvel iPhone est disponible maintenant',
    timestamp: '1h',
  },
  {
    id: '4',
    name: 'Samsung',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwMzA4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Galaxy Z Fold - Innovation sans limites',
    timestamp: '3h',
  },
  {
    id: '5',
    name: 'Coca-Cola',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjIwOTYyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Partagez un Coca avec vos amis !',
    timestamp: '5h',
  },
  {
    id: '6',
    name: 'McDonald\'s',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2V8ZW58MXx8fHwxNzYyMDMwODgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Menu Best Of à petit prix 🍔',
    timestamp: '1j',
  },
];

export function MessagesScreen() {
  const { isDarkMode } = useTheme();
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);
  const [showCreateStory, setShowCreateStory] = useState(false);

  // If chat is open, show chat screen
  if (selectedChat) {
    return (
      <ChatScreen
        contact={{ name: selectedChat.name, avatar: selectedChat.avatar }}
        onBack={() => setSelectedChat(null)}
      />
    );
  }

  // If create story is open, show create story screen
  if (showCreateStory) {
    return <CreateStoryScreen onBack={() => setShowCreateStory(false)} />;
  }
  
  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} flex flex-col`}>
      {/* Header */}
      <div className="px-4 pt-12 pb-4">
        <h1 className={`text-3xl ${isDarkMode ? 'text-white' : 'text-[#1C1F33]'} mb-4`} style={{ fontFamily: 'Poppins' }}>
          Messages
        </h1>
        
        {/* Search bar */}
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`} size={20} />
          <input
            type="text"
            placeholder="Rechercher une conversation..."
            className={`w-full pl-12 pr-4 py-3 ${isDarkMode ? 'bg-[#1E1E1E] text-white placeholder-[#666666]' : 'bg-gray-100 text-gray-700 placeholder-gray-400'} rounded-2xl`}
            style={{ fontFamily: 'Inter' }}
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="px-4 mb-4">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0">
              {story.isYourStory ? (
                <button 
                  onClick={() => setShowCreateStory(true)}
                  className="relative"
                >
                  <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E]' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center`}>
                    <div className={`w-14 h-14 rounded-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} flex items-center justify-center`}>
                      <Plus size={24} className="text-[#FF6A00]" />
                    </div>
                  </div>
                  {/* Small + button overlay */}
                  <div className={`absolute bottom-0 right-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] flex items-center justify-center ${isDarkMode ? 'border-2 border-[#0D0D0D]' : 'border-2 border-white'} shadow-lg`}>
                    <Plus size={12} className="text-white" />
                  </div>
                </button>
              ) : (
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] p-0.5">
                    <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} p-0.5`}>
                      <ImageWithFallback
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
              <span 
                className={`text-xs ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-600'} max-w-[64px] truncate`}
                style={{ fontFamily: 'Inter', fontSize: '12px' }}
              >
                {story.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => setSelectedChat(conversation)}
            className={`px-4 py-3 flex items-center gap-3 ${isDarkMode ? 'hover:bg-[#1E1E1E] active:bg-[#2A2A2A]' : 'hover:bg-gray-50 active:bg-gray-100'} transition-colors cursor-pointer`}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <ImageWithFallback
                src={conversation.avatar}
                alt={conversation.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              {conversation.unread && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs" style={{ fontFamily: 'Poppins' }}>2</span>
                </div>
              )}
            </div>

            {/* Conversation info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 
                  className={`${isDarkMode ? 'text-white' : 'text-[#1C1F33]'} truncate ${conversation.unread ? 'font-semibold' : ''}`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  {conversation.name}
                </h3>
                <span 
                  className={`text-xs flex-shrink-0 ml-2 ${conversation.unread ? 'text-[#FF6A00]' : isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`}
                  style={{ fontFamily: 'Inter' }}
                >
                  {conversation.timestamp}
                </span>
              </div>
              <p 
                className={`text-sm truncate ${conversation.unread ? (isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700') : (isDarkMode ? 'text-[#666666]' : 'text-gray-500')}`}
                style={{ fontFamily: 'Inter' }}
              >
                {conversation.lastMessage}
              </p>
            </div>
          </div>
        ))}
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
