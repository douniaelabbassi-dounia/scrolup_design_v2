import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Plus, Upload, Eye, Share2, ShoppingCart, DollarSign, TrendingUp, Users, BarChart3, ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface BrandDashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export function BrandDashboardScreen({ onNavigate }: BrandDashboardScreenProps) {
  const { isDarkMode } = useTheme();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const campaignStats = [
    { name: 'Lun', views: 4000, shares: 240, conversions: 45 },
    { name: 'Mar', views: 3000, shares: 198, conversions: 38 },
    { name: 'Mer', views: 5000, shares: 280, conversions: 62 },
    { name: 'Jeu', views: 4500, shares: 260, conversions: 54 },
    { name: 'Ven', views: 6000, shares: 320, conversions: 78 },
    { name: 'Sam', views: 7500, shares: 410, conversions: 95 },
    { name: 'Dim', views: 6500, shares: 380, conversions: 82 }
  ];

  const budgetData = [
    { name: 'Vues', value: 35, color: '#FF6A00' },
    { name: 'Partages', value: 40, color: '#FFC04D' },
    { name: 'Conversions', value: 25, color: '#FFE5B4' }
  ];

  const myCampaigns = [
    {
      title: 'Nike Air Max Promo',
      status: 'active',
      views: 12543,
      shares: 456,
      conversions: 89,
      budget: 500,
      spent: 347.50
    },
    {
      title: 'Soldes d\'été 2025',
      status: 'active',
      views: 8932,
      shares: 234,
      conversions: 56,
      budget: 300,
      spent: 198.20
    },
    {
      title: 'Nouvelle collection',
      status: 'paused',
      views: 5421,
      shares: 123,
      conversions: 34,
      budget: 200,
      spent: 145.80
    }
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
          Dashboard Marque
        </h1>
        <p className="text-white/90" style={{ fontFamily: 'Inter' }}>
          Gérez vos campagnes publicitaires
        </p>

        {/* Create campaign button */}
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="w-full mt-6 bg-white text-[#FF6A00] py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
        >
          <Plus size={20} />
          <span style={{ fontFamily: 'Poppins' }}>Créer une campagne</span>
        </button>
      </div>

      {/* Create campaign form */}
      {showCreateForm && (
        <div className={`mx-6 mt-6 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-6`}>
          <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Nouvelle campagne
          </h2>

          <div className="space-y-4">
            {/* Upload media */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Image / Vidéo
              </label>
              <div className={`border-2 border-dashed ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl p-8 text-center cursor-pointer hover:border-[#FF6A00] transition-colors`}>
                <Upload size={40} className={`mx-auto mb-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Cliquez pour uploader votre média
                </p>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Titre de la campagne
              </label>
              <input
                type="text"
                placeholder="Ex: Promo été 2025"
                className={`w-full ${isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl px-4 py-3 outline-none focus:border-[#FF6A00]`}
              />
            </div>

            {/* Description */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Description
              </label>
              <textarea
                placeholder="Décrivez votre produit ou service..."
                rows={3}
                className={`w-full ${isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl px-4 py-3 outline-none focus:border-[#FF6A00]`}
              />
            </div>

            {/* Rewards */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className={`block text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Par vue
                </label>
                <input
                  type="number"
                  placeholder="0.03"
                  step="0.01"
                  className={`w-full ${isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl px-3 py-2 text-sm outline-none focus:border-[#FF6A00]`}
                />
              </div>
              <div>
                <label className={`block text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Par partage
                </label>
                <input
                  type="number"
                  placeholder="5.0"
                  step="0.1"
                  className={`w-full ${isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl px-3 py-2 text-sm outline-none focus:border-[#FF6A00]`}
                />
              </div>
              <div>
                <label className={`block text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Par vente
                </label>
                <input
                  type="number"
                  placeholder="15.0"
                  step="0.1"
                  className={`w-full ${isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl px-3 py-2 text-sm outline-none focus:border-[#FF6A00]`}
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Budget total (€)
              </label>
              <input
                type="number"
                placeholder="500"
                className={`w-full ${isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-xl px-4 py-3 outline-none focus:border-[#FF6A00]`}
              />
            </div>

            {/* Submit */}
            <button className="w-full bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white py-3 rounded-xl">
              Lancer la campagne
            </button>
          </div>
        </div>
      )}

      {/* Analytics */}
      <div className="px-6 py-6 space-y-6">
        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4`}>
            <div className="flex items-center gap-2 mb-2">
              <Eye size={20} className="text-[#FF6A00]" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vues totales</span>
            </div>
            <p className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              26.9K
            </p>
          </div>

          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4`}>
            <div className="flex items-center gap-2 mb-2">
              <Share2 size={20} className="text-[#FF6A00]" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Partages</span>
            </div>
            <p className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              813
            </p>
          </div>

          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4`}>
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart size={20} className="text-[#FF6A00]" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Conversions</span>
            </div>
            <p className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              179
            </p>
          </div>

          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4`}>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="text-[#FF6A00]" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dépensé</span>
            </div>
            <p className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              691.5€
            </p>
          </div>
        </div>

        {/* Performance chart */}
        <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4`}>
          <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Performance hebdomadaire
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignStats}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#2A2A2A' : '#E5E5E5'} />
                <XAxis dataKey="name" stroke={isDarkMode ? '#B3B3B3' : '#666'} />
                <YAxis stroke={isDarkMode ? '#B3B3B3' : '#666'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1E1E1E' : '#FFF',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="views" fill="#FF6A00" radius={[8, 8, 0, 0]} />
                <Bar dataKey="shares" fill="#FFC04D" radius={[8, 8, 0, 0]} />
                <Bar dataKey="conversions" fill="#FFE5B4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* My campaigns */}
        <div className="pb-24">
          <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Mes campagnes
          </h3>

          <div className="space-y-3">
            {myCampaigns.map((campaign, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                    {campaign.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    campaign.status === 'active'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {campaign.status === 'active' ? 'Actif' : 'En pause'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Vues</p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{campaign.views}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Partages</p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{campaign.shares}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Ventes</p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{campaign.conversions}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Budget: {campaign.budget}€</p>
                    <p className="text-xs text-[#FF6A00]">Dépensé: {campaign.spent}€</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} rounded-full px-3 py-1`}>
                    <p className="text-xs text-gray-500">
                      {Math.round((campaign.spent / campaign.budget) * 100)}% utilisé
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
