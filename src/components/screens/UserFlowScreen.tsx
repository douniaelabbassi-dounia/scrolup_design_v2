import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Store, UserPlus, Package, Camera, CreditCard, Search, Eye, Share2, Coins, ArrowRight, Zap, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface UserFlowScreenProps {
  onNavigate: (screen: string) => void;
}

export function UserFlowScreen({ onNavigate }: UserFlowScreenProps) {
  const { isDarkMode } = useTheme();

  const merchantSteps = [
    { icon: UserPlus, title: 'Inscription', desc: 'Créer un compte commerçant' },
    { icon: Package, title: 'Ajout produit', desc: 'Ajouter vos produits' },
    { icon: Camera, title: 'Création pub', desc: 'Créer votre publicité' },
    { icon: CreditCard, title: 'Paiement', desc: 'Performance uniquement' }
  ];

  const userSteps = [
    { icon: Search, title: 'Recherche', desc: 'Trouver des pubs' },
    { icon: Eye, title: 'Visionnage', desc: 'Regarder le contenu' },
    { icon: Share2, title: 'Partage', desc: 'Partager sur les réseaux' },
    { icon: Coins, title: 'Gains', desc: 'Recevoir des ScrolCoins' }
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
        <h1 className="text-white text-3xl mb-2" style={{ fontFamily: 'Poppins' }}>
          Parcours utilisateur
        </h1>
        <p className="text-white/90" style={{ fontFamily: 'Inter' }}>
          Comment ScrolUp connecte marques et utilisateurs
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-12">
        {/* Merchant flow */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center">
              <Store size={24} className="text-white" />
            </div>
            <div>
              <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                Commerçant
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Publiez et payez à la performance
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {merchantSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={index}>
                  <motion.div
                    className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 flex items-center gap-4`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                        {index + 1}. {step.title}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {index < merchantSteps.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight size={24} className={isDarkMode ? 'text-gray-700' : 'text-gray-300'} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* Center platform */}
        <section>
          <div className="relative">
            <motion.div
              className="bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-3xl p-8 text-center shadow-2xl"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Zap size={48} className="text-white mx-auto mb-4" />
              <h3 className="text-white text-2xl mb-2" style={{ fontFamily: 'Poppins' }}>
                ScrolUp
              </h3>
              <p className="text-white/90 text-sm" style={{ fontFamily: 'Inter' }}>
                Plateforme centrale qui connecte<br />
                les marques et les utilisateurs
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white text-2xl mb-1" style={{ fontFamily: 'Poppins' }}>
                    11.8M
                  </p>
                  <p className="text-white/80 text-xs">Publicités</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white text-2xl mb-1" style={{ fontFamily: 'Poppins' }}>
                    450K
                  </p>
                  <p className="text-white/80 text-xs">Marques</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white text-2xl mb-1" style={{ fontFamily: 'Poppins' }}>
                    2.5M
                  </p>
                  <p className="text-white/80 text-xs">Utilisateurs</p>
                </div>
              </div>
            </motion.div>

            {/* Connecting lines */}
            <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent to-[#FF6A00]" />
            <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-t from-transparent to-[#FF6A00]" />
          </div>
        </section>

        {/* User flow */}
        <section className="pb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center">
              <Coins size={24} className="text-white" />
            </div>
            <div>
              <h2 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
                Utilisateur
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Découvrez, partagez et gagnez
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {userSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={index}>
                  <motion.div
                    className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-2xl p-4 flex items-center gap-4`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FFC04D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`} style={{ fontFamily: 'Poppins' }}>
                        {index + 1}. {step.title}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {index < userSteps.length - 1 && (
                    <div className="flex justify-center">
                      <ArrowRight size={24} className={isDarkMode ? 'text-gray-700' : 'text-gray-300'} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* Value proposition */}
        <section className="pb-24">
          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-50'} rounded-3xl p-6`}>
            <h3 className={`text-xl mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins' }}>
              Pourquoi ScrolUp ?
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-xl">✓</span>
                </div>
                <div>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    Pour les commerçants
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Payez uniquement pour les résultats réels : vues, partages, et ventes
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-xl">✓</span>
                </div>
                <div>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    Pour les utilisateurs
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Transformez votre attention en revenus réels avec ScrolCoins
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-xl">✓</span>
                </div>
                <div>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    Centralisé et intelligent
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Toutes les publicités du monde en un seul endroit, organisées par IA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
