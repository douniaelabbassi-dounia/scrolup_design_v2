import React, { useState } from 'react';
import { Settings, Grid, Bookmark, Coins, TrendingUp, Brain, GitBranch, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import logo from 'figma:asset/d64722bfb83b68cdbb5533ba3090807de3f427fb.png';
import { useTheme } from '../../contexts/ThemeContext';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<'pubs' | 'favoris'>('pubs');

  const myAds = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f" },
  ];

  const favorites = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1560343090-f0409e92791a" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad" },
  ];

  const currentAds = activeTab === 'pubs' ? myAds : favorites;

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide pb-20`}>
      {/* Header */}
      <div className={`px-4 pt-12 pb-6 border-b ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1" />
          <h1 className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>Profil</h1>
          <button 
            onClick={() => onNavigate('settings')}
            className="flex-1 flex justify-end"
          >
            <Settings size={24} className={isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'} />
          </button>
        </div>

        {/* Profile info */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] p-1 mb-4">
            <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} flex items-center justify-center overflow-hidden`}>
              <img src={logo} alt="Profile" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <h2 className={`text-xl mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>@ScrolUpUser</h2>
          <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}`}>Créateur de contenu publicitaire</p>

          {/* Stats */}
          <div className="flex gap-8 mb-6">
            <div className="text-center">
              <div className={`text-xl mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>{myAds.length}</div>
              <div className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}`}>Pubs</div>
            </div>
            <div className="text-center">
              <div className="text-xl mb-1" style={{ fontFamily: 'Poppins' }}>12.5K</div>
              <div className="text-sm text-gray-500">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-xl mb-1" style={{ fontFamily: 'Poppins' }}>3.2K</div>
              <div className="text-sm text-gray-500">Partages</div>
            </div>
          </div>

          {/* Quick access buttons */}
          <div className="w-full grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => onNavigate('wallet')}
              className="bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Coins size={20} />
              <span style={{ fontFamily: 'Poppins' }}>Wallet</span>
            </button>
            <button
              onClick={() => onNavigate('monetization')}
              className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-100'} ${isDarkMode ? 'text-white' : 'text-gray-900'} py-3 rounded-xl flex items-center justify-center gap-2`}
            >
              <TrendingUp size={20} />
              <span style={{ fontFamily: 'Poppins' }}>Gains</span>
            </button>
          </div>

          {/* More options */}
          <div className="w-full space-y-2">
            <button
              onClick={() => onNavigate('brandDashboard')}
              className={`w-full ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} py-3 px-4 rounded-xl flex items-center gap-3`}
            >
              <Briefcase size={20} className="text-[#FF6A00]" />
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Inter' }}>
                Espace Marque
              </span>
            </button>
            <button
              onClick={() => onNavigate('aiVisualization')}
              className={`w-full ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} py-3 px-4 rounded-xl flex items-center gap-3`}
            >
              <Brain size={20} className="text-[#FF6A00]" />
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Inter' }}>
                IA ScrolUp
              </span>
            </button>
            <button
              onClick={() => onNavigate('userFlow')}
              className={`w-full ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} py-3 px-4 rounded-xl flex items-center gap-3`}
            >
              <GitBranch size={20} className="text-[#FF6A00]" />
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Inter' }}>
                Parcours utilisateur
              </span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-t border-gray-200 pt-4">
          <button
            onClick={() => setActiveTab('pubs')}
            className={`flex-1 pb-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'pubs'
                ? 'border-b-2 border-[#FF6A00] text-[#FF6A00]'
                : 'border-b-2 border-transparent text-gray-400'
            }`}
          >
            <Grid size={20} />
            <span style={{ fontFamily: 'Poppins' }}>Mes pubs</span>
          </button>
          <button
            onClick={() => setActiveTab('favoris')}
            className={`flex-1 pb-3 flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'favoris'
                ? 'border-b-2 border-[#FF6A00] text-[#FF6A00]'
                : 'border-b-2 border-transparent text-gray-400'
            }`}
          >
            <Bookmark size={20} />
            <span style={{ fontFamily: 'Poppins' }}>Favoris</span>
          </button>
        </div>
      </div>

      {/* Grid of ads */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {currentAds.map((ad) => (
          <div key={ad.id} className="aspect-square bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src={ad.imageUrl}
              alt="Ad"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
