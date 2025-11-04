import React, { useState } from 'react';
import { OnboardingSlide } from '../OnboardingSlide';
import { GradientButton } from '../GradientButton';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const { isDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Découvrez les pubs qui vous inspirent.",
      imageUrl: "https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2MjA0MjAyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Regroupez toutes vos campagnes en un seul endroit.",
      imageUrl: "https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzYyMDExNTE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Scrollez, partagez, et montez en visibilité.",
      imageUrl: "https://images.unsplash.com/photo-1693681866239-694107820b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBzY3JvbGxpbmd8ZW58MXx8fHwxNzYyMDk1NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} flex flex-col`}>
      <div className="flex-1 relative overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <OnboardingSlide {...slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="pb-12 px-8">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-gradient-to-r from-[#FF6A00] to-[#FFC04D]' 
                  : isDarkMode ? 'w-2 bg-[#2A2A2A]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <GradientButton onClick={handleNext} className="w-full">
          {currentSlide === slides.length - 1 ? 'Commencer' : 'Suivant'}
          <ChevronRight size={20} className="inline ml-2" />
        </GradientButton>
      </div>
    </div>
  );
}
