import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Coins, Share2, Eye, TrendingUp, Trophy, Medal, Award, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MonetizationScreenProps {
  onNavigate: (screen: string) => void;
}

export function MonetizationScreen({ onNavigate }: MonetizationScreenProps) {
  const { isDarkMode } = useTheme();

  const campaigns = [
    {
      brand: 'Nike',
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100',
      reward: 5,
      title: 'Nouvelle collection Air Max',
      views: 2500
    },
    {
      brand: 'Apple',
      logo: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=100',
      reward: 8,
      title: 'iPhone 15 Pro Launch',
      views: 5000
    },
    {
      brand: 'Tesla',
      logo: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=100',
      reward: 6,
      title: 'Model 3 Electric Revolution',
      views: 3200
    }
  ];

  const myShares = [
    {
      campaign: 'Nike Air Max',
      views: 145,
      gains: 7.25,
      status: 'active'
    },
    {
      campaign: 'Apple iPhone 15',
      views: 89,
      gains: 4.45,
      status: 'active'
    },
    {
      campaign: 'Tesla Model 3',
      views: 203,
      gains: 10.15,
      status: 'completed'
    }
  ];

  const topUsers = [
    { rank: 1, name: 'Sarah M.', gains: 1245.50, avatar: '🥇' },
    { rank: 2, name: 'Marc D.', gains: 987.30, avatar: '🥈' },
    { rank: 3, name: 'Julie P.', gains: 856.20, avatar: '🥉' },
    { rank: 4, name: 'Thomas L.', gains: 723.40, avatar: '👤' },
    { rank: 5, name: 'Emma B.', gains: 698.10, avatar: '👤' },
    { rank: 6, name: 'Lucas R.', gains: 645.80, avatar: '👤' },
    { rank: 7, name: 'Sophie T.', gains: 589.20, avatar: '👤' },
    { rank: 8, name: 'Alex K.', gains: 542.30, avatar: '👤' },
    { rank: 9, name: 'Léa M.', gains: 498.70, avatar: '👤' },
    { rank: 10, name: 'Hugo S.', gains: 456.90, avatar: '👤' }
  ];

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide`}>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] px-6 pt-12 pb-8">
        <button 
          onClick={() => onNavigate('profile')}
          className="mb-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
        <h1 className="text-white text-3xl mb-2" style={{ fontFamily: 'Poppins' }}>
          Partagez et gagnez
        </h1>
        <p className="text-white/90" style={{ fontFamily: 'Inter' }}>
          Jusqu'à +5 SC par action
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-8">
        {/* Campagnes à partager */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Share2 className={isDarkMode ? 'text-white' : 'text-gray-900'} size={24} />
            <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              Campagnes à partager
            </h2>
          </div>

          <div className="space-y-3">
            {campaigns.map((campaign, index) => (
              <div 
                key={index}
                className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 flex items-center gap-4`}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={campaign.logo}
                    alt={campaign.brand}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                    {campaign.brand}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {campaign.title}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Eye size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">{campaign.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Coins size={14} className="text-[#FF6A00]" />
                      <span className="text-xs text-[#FF6A00]">+{campaign.reward} SC</span>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white px-6 py-2 rounded-full text-sm">
                  Partager
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mes partages */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className={isDarkMode ? 'text-white' : 'text-gray-900'} size={24} />
            <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              Mes partages
            </h2>
          </div>

          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 overflow-x-auto`}>
            <table className="w-full">
              <thead>
                <tr className={`text-left text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <th className="pb-3">Campagne</th>
                  <th className="pb-3">Vues</th>
                  <th className="pb-3">Gains</th>
                  <th className="pb-3">Statut</th>
                </tr>
              </thead>
              <tbody>
                {myShares.map((share, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className={`py-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {share.campaign}
                    </td>
                    <td className={`py-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {share.views}
                    </td>
                    <td className="py-3">
                      <span className="text-[#FF6A00]">+{share.gains} SC</span>
                    </td>
                    <td className="py-3">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        share.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {share.status === 'active' ? 'Actif' : 'Terminé'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Classement hebdo */}
        <section className="pb-24">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className={isDarkMode ? 'text-white' : 'text-gray-900'} size={24} />
            <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              Classement hebdo
            </h2>
          </div>

          <div className="space-y-2">
            {topUsers.map((user, index) => (
              <div 
                key={index}
                className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-xl p-4 flex items-center gap-4 ${
                  index < 3 ? 'border-2 border-[#FF6A00]' : ''
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">{user.avatar}</span>
                  <div>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">#{user.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#FF6A00]" style={{ fontFamily: 'Poppins' }}>
                    {user.gains.toFixed(2)} SC
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
