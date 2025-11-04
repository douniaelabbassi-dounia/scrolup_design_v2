import React from 'react';
import { Home, Compass, PlusCircle, Bell, User, MessageCircle, Coins } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationBarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function NavigationBar({ activeScreen, onNavigate }: NavigationBarProps) {
  const { isDarkMode } = useTheme();
  const navItems = [
    { id: 'home', icon: Home, label: 'Accueil' },
    { id: 'explore', icon: Compass, label: 'Explorer' },
    { id: 'wallet', icon: Coins, label: 'Wallet' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'profile', icon: User, label: 'Profil' },
  ];

  return (
    <div className={`absolute bottom-0 left-0 right-0 h-20 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} rounded-t-[2rem] ${isDarkMode ? 'shadow-[0_-4px_20px_rgba(255,106,0,0.15)]' : 'shadow-[0_-4px_20px_rgba(0,0,0,0.08)]'} px-6 z-50`}>
      <div className="flex justify-around items-center max-w-md mx-auto h-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 transition-all duration-300 relative"
            >
              {isActive && (
                <div className="absolute -top-1 w-12 h-1 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] rounded-full" />
              )}
              <div className={`p-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-[#FF6A00]/10 to-[#FFC04D]/10' : ''}`}>
                <Icon 
                  size={24} 
                  className={isActive ? 'text-[#FF6A00]' : isDarkMode ? 'text-[#666666]' : 'text-gray-400'}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
