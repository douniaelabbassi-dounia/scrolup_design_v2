import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { X, Heart, MessageCircle, Share2, Bookmark, Coins, ShoppingCart, Award, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AdDetailScreenProps {
  onNavigate: (screen: string) => void;
}

export function AdDetailScreen({ onNavigate }: AdDetailScreenProps) {
  const { isDarkMode } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const ad = {
    brandName: "Nike",
    description: "Just Do It - Nouvelle collection printemps 2025. Découvrez les dernières innovations en matière de performance et de style.",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    likes: 12543,
    comments: 234,
    shares: 89,
    scrolCoins: 0.5,
    purchaseReward: 15,
    category: "Mode & Lifestyle",
    price: "129.99€"
  };

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-black'} relative`}>
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        className="absolute top-4 left-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
      >
        <ArrowLeft size={24} className="text-white" />
      </button>

      {/* User rank badge */}
      <div className="absolute top-4 right-4 z-50 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] px-4 py-2 rounded-full flex items-center gap-2">
        <Award size={16} className="text-white" />
        <span className="text-white text-xs" style={{ fontFamily: 'Inter' }}>
          Niveau 2 • Bronze
        </span>
      </div>

      {/* Ad image */}
      <div className="w-full h-2/3">
        <ImageWithFallback
          src={ad.imageUrl}
          alt={ad.brandName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content section */}
      <div className={`absolute bottom-0 left-0 right-0 ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-black'} rounded-t-3xl p-6 max-h-[45%] overflow-y-auto scrollbar-hide`}>
        {/* Brand and category */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-2xl mb-1" style={{ fontFamily: 'Poppins' }}>
              {ad.brandName}
            </h1>
            <p className="text-gray-400 text-sm">{ad.category}</p>
          </div>

          {/* ScrolCoins earned badge */}
          <div className="bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] px-4 py-2 rounded-full flex items-center gap-2">
            <Coins size={18} className="text-white" />
            <span className="text-white" style={{ fontFamily: 'Inter' }}>
              +{ad.scrolCoins} SC
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {ad.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Heart 
              size={20} 
              className={isLiked ? 'fill-[#FF6A00] text-[#FF6A00]' : 'text-gray-400'}
            />
            <span className="text-gray-400 text-sm">{isLiked ? ad.likes + 1 : ad.likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={20} className="text-gray-400" />
            <span className="text-gray-400 text-sm">{ad.comments}</span>
          </div>
          <div className="flex items-center gap-2">
            <Share2 size={20} className="text-gray-400" />
            <span className="text-gray-400 text-sm">{ad.shares}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex-1 ${
              isLiked 
                ? 'bg-[#FF6A00]/20 border-2 border-[#FF6A00]' 
                : 'bg-white/10 border-2 border-transparent'
            } py-3 rounded-xl flex items-center justify-center gap-2`}
          >
            <Heart 
              size={20} 
              className={isLiked ? 'fill-[#FF6A00] text-[#FF6A00]' : 'text-white'}
            />
            <span className="text-white">J'aime</span>
          </button>

          <button className="flex-1 bg-white/10 py-3 rounded-xl flex items-center justify-center gap-2">
            <Share2 size={20} className="text-white" />
            <span className="text-white">Partager</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`px-4 ${
              isSaved 
                ? 'bg-[#FF6A00]/20 border-2 border-[#FF6A00]' 
                : 'bg-white/10 border-2 border-transparent'
            } py-3 rounded-xl flex items-center justify-center`}
          >
            <Bookmark 
              size={20} 
              className={isSaved ? 'fill-[#FF6A00] text-[#FF6A00]' : 'text-white'}
            />
          </button>
        </div>

        {/* Purchase CTA */}
        <button className="w-full bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg">
          <ShoppingCart size={24} className="text-white" />
          <div className="text-left">
            <p className="text-white" style={{ fontFamily: 'Poppins' }}>
              Acheter maintenant {ad.price}
            </p>
            <p className="text-white/90 text-xs">
              Et gagnez +{ad.purchaseReward} SC supplémentaires
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
