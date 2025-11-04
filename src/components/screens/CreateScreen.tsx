import React, { useState } from 'react';
import { GradientButton } from '../GradientButton';
import { InputField } from '../InputField';
import { Upload, X, Link as LinkIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface CreateScreenProps {
  onBack: () => void;
}

export function CreateScreen({ onBack }: CreateScreenProps) {
  const { isDarkMode } = useTheme();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');

  const handleFileSelect = () => {
    // Simulate file selection
    setSelectedFile('https://images.unsplash.com/photo-1611162617474-5b21e879e113');
  };

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide pb-20`}>
      {/* Header */}
      <div className={`sticky top-0 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} z-10 px-4 py-4 border-b ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-200'} flex items-center justify-between`}>
        <button onClick={onBack} className="p-2">
          <X size={24} className={isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'} />
        </button>
        <h1 className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>Créer une publicité</h1>
        <div className="w-10" />
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Upload area */}
        <div className="space-y-2">
          <label className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'}`} style={{ fontFamily: 'Poppins' }}>
            Média
          </label>
          {selectedFile ? (
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
              <img src={selectedFile} alt="Preview" className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedFile(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
              >
                <X size={16} className="text-white" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleFileSelect}
              className={`w-full aspect-video border-2 border-dashed ${isDarkMode ? 'border-[#2A2A2A]' : 'border-gray-300'} rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-[#FF6A00] transition-colors`}
            >
              <Upload size={32} className={isDarkMode ? 'text-[#666666]' : 'text-gray-400'} />
              <span className={isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-500'}>Télécharger une vidéo ou image</span>
            </button>
          )}
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'}`} style={{ fontFamily: 'Poppins' }}>
              Titre
            </label>
            <InputField
              placeholder="Titre de votre publicité"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'}`} style={{ fontFamily: 'Poppins' }}>
              Description
            </label>
            <textarea
              placeholder="Décrivez votre publicité..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={`w-full px-4 py-3 border-2 ${isDarkMode ? 'border-[#2A2A2A] bg-[#1E1E1E] text-white placeholder-[#666666]' : 'border-gray-200 bg-white text-gray-900'} rounded-2xl focus:outline-none focus:border-[#FF6A00] transition-colors resize-none`}
              style={{ fontFamily: 'Inter' }}
            />
          </div>

          <div className="space-y-2">
            <label className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'}`} style={{ fontFamily: 'Poppins' }}>
              Hashtags
            </label>
            <InputField
              placeholder="#mode #tech #lifestyle"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'}`} style={{ fontFamily: 'Poppins' }}>
              Catégorie
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full px-4 py-3 border-2 ${isDarkMode ? 'border-[#2A2A2A] bg-[#1E1E1E] text-white' : 'border-gray-200 bg-white text-gray-900'} rounded-2xl focus:outline-none focus:border-[#FF6A00] transition-colors`}
              style={{ fontFamily: 'Inter' }}
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="mode">Mode</option>
              <option value="tech">Tech</option>
              <option value="beaute">Beauté</option>
              <option value="auto">Auto</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className={`text-sm ${isDarkMode ? 'text-[#B3B3B3]' : 'text-gray-700'}`} style={{ fontFamily: 'Poppins' }}>
              Lien externe (optionnel)
            </label>
            <InputField
              placeholder="https://www.example.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              icon={<LinkIcon size={20} />}
            />
          </div>
        </div>

        {/* Publish button */}
        <GradientButton className="w-full mt-8">
          Publier la publicité
        </GradientButton>
      </div>
    </div>
  );
}
