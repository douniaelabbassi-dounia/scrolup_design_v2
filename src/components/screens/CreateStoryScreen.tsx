import React, { useState } from 'react';
import { ArrowLeft, Upload, Type, Sticker, Image as ImageIcon } from 'lucide-react';
import { GradientButton } from '../GradientButton';
import { useTheme } from '../../contexts/ThemeContext';

interface CreateStoryScreenProps {
  onBack: () => void;
}

export function CreateStoryScreen({ onBack }: CreateStoryScreenProps) {
  const { isDarkMode } = useTheme();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const handleSelectMedia = () => {
    // Simulate media selection
    setSelectedMedia('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800');
  };

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} flex flex-col`}>
      {/* Header */}
      <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} px-4 py-4 border-b ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'} flex items-center justify-between`}>
        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} className={isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'} />
        </button>
        <h1 className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
          Créer une story
        </h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 flex flex-col px-4 py-6">
        {/* Preview Area */}
        {selectedMedia ? (
          <div className="flex-1 relative rounded-3xl overflow-hidden mb-6">
            <img 
              src={selectedMedia} 
              alt="Story preview" 
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center"
            >
              <X size={20} className="text-white" />
            </button>
            
            {/* Tools overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Type size={20} className="text-gray-900" />
              </button>
              <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Sticker size={20} className="text-gray-900" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center mb-6">
            <button
              onClick={handleSelectMedia}
              className={`w-full max-w-sm aspect-[9/16] border-2 border-dashed ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-300'} rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-[#FF6A00] transition-colors`}
            >
              <Upload size={48} className={isDarkMode ? 'text-[#666666]' : 'text-gray-400'} />
              <div className="text-center">
                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`} style={{ fontFamily: 'Poppins' }}>
                  Ajouter une photo ou vidéo
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}`} style={{ fontFamily: 'Inter' }}>
                  Appuyez pour sélectionner
                </p>
              </div>
            </button>
          </div>
        )}

        {/* Action buttons */}
        {selectedMedia && (
          <div className="space-y-3">
            <GradientButton onClick={() => {}} className="w-full">
              Publier la story
            </GradientButton>
            <button
              onClick={() => setSelectedMedia(null)}
              className={`w-full py-3 rounded-full ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-600'}`}
              style={{ fontFamily: 'Poppins' }}
            >
              Annuler
            </button>
          </div>
        )}

        {!selectedMedia && (
          <div className="flex gap-3">
            <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-[#FFC04D]/10 border border-[#FF6A00]/20">
              <ImageIcon size={32} className="text-[#FF6A00]" />
              <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                Galerie
              </span>
            </button>
            <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 to-[#FFC04D]/10 border border-[#FF6A00]/20">
              <Upload size={32} className="text-[#FF6A00]" />
              <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                Caméra
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
