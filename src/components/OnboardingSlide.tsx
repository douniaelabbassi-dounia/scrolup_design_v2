import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';

interface OnboardingSlideProps {
  title: string;
  imageUrl: string;
}

export function OnboardingSlide({ title, imageUrl }: OnboardingSlideProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] opacity-20 blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFC04D] to-[#FF6A00] opacity-15 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-4 border-[#FF6A00]/20 rounded-2xl rotate-12 animate-spin-slow" />
      <div className="absolute bottom-1/3 right-12 w-8 h-8 bg-[#FFC04D]/30 rounded-full animate-bounce-slow" />
      
      {/* Main image card */}
      <div className="relative mb-8 modern-card">
        {/* Glass card effect */}
        <div className="w-80 h-[420px] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
          {/* Image */}
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Decorative border glow */}
          <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/20" />
        </div>
        
        {/* Floating badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] rounded-full shadow-xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <span className="text-white text-sm" style={{ fontFamily: 'Poppins' }}>Tendance</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="mt-8 text-center animate-fade-up">
        <h2 className={`text-3xl ${isDarkMode ? 'text-white' : 'text-[#1C1F33]'} px-4`} style={{ fontFamily: 'Poppins' }}>
          {title}
        </h2>
      </div>
      
      <style>{`
        .modern-card {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out 0.3s both;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          0% {
            transform: rotate(12deg);
          }
          100% {
            transform: rotate(372deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
