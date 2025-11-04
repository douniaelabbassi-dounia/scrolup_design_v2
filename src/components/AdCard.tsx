import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Coins } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';

interface AdCardProps {
  brandName: string;
  description: string;
  imageUrl: string;
  likes: number;
  comments: number;
  shares: number;
  scrolCoins?: number;
  onNavigate?: (screen: string) => void;
}

export function AdCard({ brandName, description, imageUrl, likes, comments, shares, scrolCoins = 0, onNavigate }: AdCardProps) {
  const { isDarkMode } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div 
      className={`relative w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-black'} cursor-pointer`}
      onClick={() => onNavigate && onNavigate('adDetail')}
    >
      <ImageWithFallback
        src={imageUrl}
        alt={brandName}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* ScrolCoins badge */}
      {scrolCoins > 0 && (
        <div className="absolute top-20 left-4 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <Coins size={18} className="text-white" />
          <span className="text-white" style={{ fontFamily: 'Inter' }}>
            +{scrolCoins} SC
          </span>
        </div>
      )}
      
      {/* Content */}
      <div className="absolute bottom-20 left-0 right-0 px-4 text-white">
        <p className="mb-2" style={{ fontFamily: 'Poppins' }}>{brandName}</p>
        <p className="text-sm opacity-90">{description}</p>
      </div>
      
      {/* Action buttons */}
      <div className="absolute bottom-32 right-4 flex flex-col gap-6">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <Heart 
            size={32} 
            className={isLiked ? 'fill-[#FF6A00] text-[#FF6A00]' : 'text-white'}
          />
          <span className="text-white text-xs">{isLiked ? likes + 1 : likes}</span>
        </button>
        
        <button 
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <MessageCircle size={32} className="text-white" />
          <span className="text-white text-xs">{comments}</span>
        </button>
        
        <button 
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <Share2 size={32} className="text-white" />
          <span className="text-white text-xs">{shares}</span>
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <Bookmark 
            size={32} 
            className={isSaved ? 'fill-[#FF6A00] text-[#FF6A00]' : 'text-white'}
          />
        </button>
      </div>
    </div>
  );
}
