import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Brain, Sparkles, ShoppingBag, Car, Home, Utensils, Smartphone, Zap, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AIVisualizationScreenProps {
  onNavigate: (screen: string) => void;
}

export function AIVisualizationScreen({ onNavigate }: AIVisualizationScreenProps) {
  const { isDarkMode } = useTheme();

  const categories = [
    { name: 'Mode', icon: ShoppingBag, color: '#FF6A00', sources: 3245 },
    { name: 'Automobile', icon: Car, color: '#FFC04D', sources: 1876 },
    { name: 'Immobilier', icon: Home, color: '#FF8C00', sources: 1432 },
    { name: 'Restauration', icon: Utensils, color: '#FFB347', sources: 2198 },
    { name: 'Technologie', icon: Smartphone, color: '#FFA500', sources: 4521 }
  ];

  const platforms = [
    { name: 'Instagram', ads: '2.4M', color: '#E1306C' },
    { name: 'TikTok', ads: '3.8M', color: '#000000' },
    { name: 'YouTube', ads: '1.9M', color: '#FF0000' },
    { name: 'Facebook', ads: '2.1M', color: '#1877F2' },
    { name: 'TV', ads: '856K', color: '#6C63FF' },
    { name: 'LinkedIn', ads: '645K', color: '#0A66C2' }
  ];

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide`}>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] px-6 pt-12 pb-8">
        <button 
          onClick={() => onNavigate('explore')}
          className="mb-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <Brain size={32} className="text-white" />
          <h1 className="text-white text-3xl" style={{ fontFamily: 'Poppins' }}>
            IA ScrolUp
          </h1>
        </div>
        <p className="text-white/90" style={{ fontFamily: 'Inter' }}>
          L'intelligence qui centralise toutes les publicités du monde
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-8">
        {/* Globe visualization */}
        <section>
          <div className="relative w-full h-80 rounded-3xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1583054346111-3ceb09bbf9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iZSUyMG5ldHdvcmslMjBjb25uZWN0aW9uc3xlbnwxfHx8fDE3NjIyNjk5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Network"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Floating icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    left: `${20 + (i * 12)}%`,
                    top: `${30 + Math.sin(i) * 20}%`
                  }}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2 + (i * 0.3),
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Sparkles size={20} className="text-white" />
                </motion.div>
              ))}
            </div>

            {/* Center brain */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Brain size={40} className="text-[#FF6A00]" />
            </motion.div>

            {/* Stats overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4">
                <p className="text-white text-2xl mb-1" style={{ fontFamily: 'Poppins' }}>
                  11.8M+
                </p>
                <p className="text-white/80 text-sm">
                  Publicités collectées et analysées en temps réel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section>
          <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Comment ça marche ?
          </h2>

          <div className="space-y-4">
            <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 flex gap-4`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                  Collecte automatique
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Notre IA scanne en continu Instagram, TikTok, YouTube, Facebook et TV pour récupérer toutes les publicités.
                </p>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 flex gap-4`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain size={24} className="text-white" />
              </div>
              <div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                  Classification intelligente
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Chaque pub est automatiquement catégorisée par thème, marque, produit et audience cible.
                </p>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 flex gap-4`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                  Recommandation personnalisée
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  L'algorithme apprend de vos interactions pour vous proposer les pubs les plus pertinentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Catégories analysées
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                    {category.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {category.sources.toLocaleString()} sources
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Platforms */}
        <section className="pb-24">
          <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
            Plateformes connectées
          </h2>

          <div className="space-y-3">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-xl p-4 flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: platform.color }}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                    {platform.name}
                  </p>
                </div>
                <p className="text-[#FF6A00]" style={{ fontFamily: 'Poppins' }}>
                  {platform.ads} ads
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
