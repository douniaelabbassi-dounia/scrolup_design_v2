import React from 'react';
import { User, Globe, Shield, HelpCircle, LogOut, ChevronRight, ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const settingsItems = [
    {
      id: 'account',
      icon: User,
      label: 'Compte',
      description: 'Gérer vos informations personnelles'
    },
    {
      id: 'language',
      icon: Globe,
      label: 'Langue',
      description: 'Français'
    },
    {
      id: 'security',
      icon: Shield,
      label: 'Sécurité',
      description: 'Mot de passe et authentification'
    },
    {
      id: 'help',
      icon: HelpCircle,
      label: 'Centre d\'aide',
      description: 'FAQ et support'
    }
  ];

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide pb-20`}>
      {/* Header */}
      <div className={`sticky top-0 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} z-10 px-4 py-4 border-b ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'} flex items-center justify-between`}>
        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} className={isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'} />
        </button>
        <h1 className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>Paramètres</h1>
        <div className="w-10" />
      </div>

      <div className="px-4 py-6">
        {/* Dark Mode Toggle - NOUVEAU */}
        <div className="mb-8">
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl ${isDarkMode ? 'bg-[#1E1E1E] hover:bg-[#2A2A2A]' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] flex items-center justify-center flex-shrink-0">
              {isDarkMode ? (
                <Moon size={20} className="text-white" />
              ) : (
                <Sun size={20} className="text-white" />
              )}
            </div>
            <div className="flex-1 text-left">
              <div className={`mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                {isDarkMode ? 'Mode sombre' : 'Mode clair'}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}`}>
                {isDarkMode ? 'Activé' : 'Désactivé'}
              </div>
            </div>
            <div className={`relative w-12 h-7 rounded-full transition-colors ${isDarkMode ? 'bg-gradient-to-r from-[#FF6A00] to-[#FFC04D]' : 'bg-gray-300'}`}>
              <div className={`absolute top-1 ${isDarkMode ? 'right-1' : 'left-1'} w-5 h-5 bg-white rounded-full transition-all duration-300 shadow-md`} />
            </div>
          </button>
        </div>

        {/* Settings list */}
        <div className="space-y-2 mb-8">
          {settingsItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl ${isDarkMode ? 'hover:bg-[#1E1E1E]' : 'hover:bg-gray-50'} transition-colors`}
              >
                <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-[#FF6A00]/10' : 'bg-orange-50'} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className="text-[#FF6A00]" />
                </div>
                <div className="flex-1 text-left">
                  <div className={`mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>{item.label}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}`}>{item.description}</div>
                </div>
                <ChevronRight size={20} className={isDarkMode ? 'text-[#666666]' : 'text-gray-400'} />
              </button>
            );
          })}
        </div>

        {/* Logout button */}
        <button className={`w-full flex items-center gap-4 p-4 rounded-2xl ${isDarkMode ? 'hover:bg-red-500/10' : 'hover:bg-red-50'} transition-colors text-red-500`}>
          <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-red-500/10' : 'bg-red-50'} flex items-center justify-center flex-shrink-0`}>
            <LogOut size={20} className="text-red-500" />
          </div>
          <div className="flex-1 text-left" style={{ fontFamily: 'Poppins' }}>
            Déconnexion
          </div>
        </button>

        {/* Version info */}
        <div className={`mt-12 text-center text-sm ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`}>
          Version 1.0.0
        </div>
      </div>
    </div>
  );
}
