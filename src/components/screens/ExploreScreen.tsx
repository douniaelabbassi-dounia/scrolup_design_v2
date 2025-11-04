import React, { useState } from 'react';
import { Search, Coins, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useTheme } from '../../contexts/ThemeContext';

export function ExploreScreen() {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tendances');

  const filters = ['Tendances', 'Mode', 'Tech', 'Beauté', 'Auto', 'Food', 'Immobilier', 'Voyage'];
  
  const ads = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", brand: "Luxe", coins: 0.8 },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", brand: "Audio", coins: 0.5 },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", brand: "Sunglasses", coins: 0.3 },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", brand: "Camera", coins: 1.2 },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1560343090-f0409e92791a", brand: "Parfum", coins: 0.6 },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad", brand: "Makeup", coins: 0.4 },
    { id: 7, imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd", brand: "Sneakers", coins: 0.7 },
    { id: 8, imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12", brand: "Watch", coins: 1.5 },
    { id: 9, imageUrl: "https://images.unsplash.com/photo-1525904097878-94fb15835963", brand: "Laptop", coins: 1.0 },
    { id: 10, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", brand: "Nike", coins: 0.9 },
    { id: 11, imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89", brand: "Tesla", coins: 1.3 },
    { id: 12, imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5", brand: "Adidas", coins: 0.6 },
  ];

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-[#F5F5F7]'} overflow-y-auto scrollbar-hide pb-20`}>
      <div className={`sticky top-0 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} z-10 px-4 pt-12 pb-4 ${isDarkMode ? 'shadow-[0_4px_20px_rgba(255,106,0,0.1)]' : 'shadow-sm'}`}>
        {/* Search bar */}
        <div className="relative mb-4">
          <Search size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Rechercher une pub, une marque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 ${isDarkMode ? 'bg-[#0D0D0D] text-white placeholder-[#666666]' : 'bg-[#F5F5F7] text-gray-900'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6A00]`}
            style={{ fontFamily: 'Inter' }}
          />
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white'
                  : isDarkMode 
                    ? 'bg-[#1E1E1E] text-[#B3B3B3] border border-[#2A2A2A]'
                    : 'bg-white text-gray-700 border border-gray-200'
              }`}
              style={{ fontFamily: 'Poppins' }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Trending section */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={20} className="text-[#FF6A00]" />
          <h2 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Pubs qui rapportent le plus
          </h2>
        </div>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          Gagnez jusqu'à +1.5 SC par interaction
        </p>
      </div>

      {/* Grid of ads */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {ads.map((ad) => (
          <div key={ad.id} className="aspect-square bg-white overflow-hidden relative group">
            <ImageWithFallback
              src={ad.imageUrl}
              alt={ad.brand}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Coins overlay */}
            <div className="absolute top-2 right-2 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] px-2 py-1 rounded-full flex items-center gap-1">
              <Coins size={12} className="text-white" />
              <span className="text-white text-xs" style={{ fontFamily: 'Inter' }}>
                +{ad.coins}
              </span>
            </div>
            {/* Brand label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <p className="text-white text-xs" style={{ fontFamily: 'Inter' }}>
                {ad.brand}
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
