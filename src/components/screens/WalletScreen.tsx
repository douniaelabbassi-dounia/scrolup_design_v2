import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Coins, TrendingUp, ArrowUpRight, ArrowDownLeft, DollarSign, Gift, CreditCard, ArrowLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WalletScreenProps {
  onNavigate: (screen: string) => void;
}

export function WalletScreen({ onNavigate }: WalletScreenProps) {
  const { isDarkMode } = useTheme();
  const [selectedTab, setSelectedTab] = useState<'week' | 'month'>('week');

  const weekData = [
    { day: 'Lun', gains: 12.5 },
    { day: 'Mar', gains: 18.3 },
    { day: 'Mer', gains: 15.7 },
    { day: 'Jeu', gains: 22.1 },
    { day: 'Ven', gains: 19.4 },
    { day: 'Sam', gains: 28.6 },
    { day: 'Dim', gains: 25.3 }
  ];

  const transactions = [
    {
      type: 'gain',
      title: 'Partage Nike Air Max',
      amount: 5.0,
      date: '4 Nov, 14:30',
      icon: ArrowUpRight
    },
    {
      type: 'gain',
      title: 'Vue Apple iPhone 15',
      amount: 0.5,
      date: '4 Nov, 12:15',
      icon: ArrowUpRight
    },
    {
      type: 'spending',
      title: 'Bon d\'achat Amazon',
      amount: -50.0,
      date: '3 Nov, 18:45',
      icon: ArrowDownLeft
    },
    {
      type: 'gain',
      title: 'Partage Tesla Model 3',
      amount: 6.0,
      date: '3 Nov, 16:20',
      icon: ArrowUpRight
    },
    {
      type: 'gain',
      title: 'Like sur pub Adidas',
      amount: 0.3,
      date: '3 Nov, 10:05',
      icon: ArrowUpRight
    },
    {
      type: 'spending',
      title: 'Conversion en euros',
      amount: -100.0,
      date: '2 Nov, 15:30',
      icon: ArrowDownLeft
    }
  ];

  const totalBalance = 1245.80;
  const weeklyGains = 141.9;

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide`}>
      {/* Header with balance */}
      <div className="bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] px-6 pt-12 pb-8">
        <button 
          onClick={() => onNavigate('profile')}
          className="mb-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
        <div className="flex items-center gap-2 mb-2">
          <Coins size={28} className="text-white" />
          <h1 className="text-white text-3xl" style={{ fontFamily: 'Poppins' }}>
            Mes ScrolCoins
          </h1>
        </div>
        
        <div className="mt-6">
          <p className="text-white/80 text-sm mb-2" style={{ fontFamily: 'Inter' }}>
            Solde total
          </p>
          <p className="text-white text-5xl" style={{ fontFamily: 'Poppins' }}>
            {totalBalance.toFixed(2)} SC
          </p>
          
          <div className="flex items-center gap-2 mt-3">
            <TrendingUp size={16} className="text-green-300" />
            <span className="text-green-300 text-sm">
              +{weeklyGains} SC cette semaine
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-white text-[#FF6A00] py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg">
            <DollarSign size={20} />
            <span style={{ fontFamily: 'Poppins' }}>Convertir</span>
          </button>
          <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl flex items-center justify-center gap-2">
            <Gift size={20} />
            <span style={{ fontFamily: 'Poppins' }}>Utiliser</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Graph section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              Évolution des gains
            </h2>
            
            <div className={`flex gap-2 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-100'} rounded-lg p-1`}>
              <button
                onClick={() => setSelectedTab('week')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedTab === 'week'
                    ? 'bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white'
                    : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Semaine
              </button>
              <button
                onClick={() => setSelectedTab('month')}
                className={`px-3 py-1 rounded-md text-sm ${
                  selectedTab === 'month'
                    ? 'bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white'
                    : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Mois
              </button>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 h-64`}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#2A2A2A' : '#E5E5E5'} />
                <XAxis 
                  dataKey="day" 
                  stroke={isDarkMode ? '#B3B3B3' : '#666'}
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke={isDarkMode ? '#B3B3B3' : '#666'}
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1E1E1E' : '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    color: isDarkMode ? '#FFF' : '#000'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="gains" 
                  stroke="#FF6A00" 
                  strokeWidth={3}
                  dot={{ fill: '#FF6A00', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Transaction history */}
        <section className="pb-24">
          <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Historique
          </h2>

          <div className="space-y-3">
            {transactions.map((transaction, index) => {
              const Icon = transaction.icon;
              return (
                <div 
                  key={index}
                  className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-xl p-4 flex items-center gap-4`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    transaction.type === 'gain' 
                      ? 'bg-green-500/20' 
                      : 'bg-red-500/20'
                  }`}>
                    <Icon 
                      size={20} 
                      className={transaction.type === 'gain' ? 'text-green-400' : 'text-red-400'} 
                    />
                  </div>

                  <div className="flex-1">
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                      {transaction.title}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>

                  <p className={`${
                    transaction.type === 'gain' ? 'text-green-400' : 'text-red-400'
                  }`} style={{ fontFamily: 'Poppins' }}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)} SC
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
