import React, { useState } from 'react';
import { GradientButton } from '../GradientButton';
import { InputField } from '../InputField';
import { Mail, Lock } from 'lucide-react';
import logo from 'figma:asset/d64722bfb83b68cdbb5533ba3090807de3f427fb.png';
import { useTheme } from '../../contexts/ThemeContext';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const { isDarkMode } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#0D0D0D]' : 'bg-white'} overflow-y-auto scrollbar-hide`}>
      <div className="min-h-full flex flex-col px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className={`${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'} rounded-2xl p-4 shadow-lg`}>
            <img src={logo} alt="ScrolUp" className="w-24 h-24 object-contain" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 pb-3 transition-colors ${
              isLogin 
                ? 'border-b-2 border-[#FF6A00] text-[#FF6A00]' 
                : `border-b-2 border-transparent ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`
            }`}
            style={{ fontFamily: 'Poppins' }}
          >
            Connexion
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 pb-3 transition-colors ${
              !isLogin 
                ? 'border-b-2 border-[#FF6A00] text-[#FF6A00]' 
                : `border-b-2 border-transparent ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`
            }`}
            style={{ fontFamily: 'Poppins' }}
          >
            Inscription
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <InputField
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail size={20} />}
          />
          <InputField
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20} />}
          />
          
          {!isLogin && (
            <InputField
              type="password"
              placeholder="Confirmer le mot de passe"
              icon={<Lock size={20} />}
            />
          )}
        </div>

        {isLogin && (
          <button className="text-sm text-[#FF6A00] mb-6 text-right">
            Mot de passe oublié ?
          </button>
        )}

        <GradientButton onClick={onLogin} className="w-full mb-6">
          {isLogin ? 'Se connecter' : 'Créer un compte'}
        </GradientButton>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex-1 h-px ${isDarkMode ? 'bg-[#2A2A2A]' : 'bg-gray-200'}`} />
          <span className={`text-sm ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`}>ou</span>
          <div className={`flex-1 h-px ${isDarkMode ? 'bg-[#2A2A2A]' : 'bg-gray-200'}`} />
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <button className={`w-full px-6 py-3 border-2 ${isDarkMode ? 'border-[#2A2A2A] hover:border-[#666666]' : 'border-gray-200 hover:border-gray-300'} rounded-2xl flex items-center justify-center gap-3 transition-colors ${isDarkMode ? 'text-white' : ''}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ fontFamily: 'Poppins' }}>Continuer avec Google</span>
          </button>
          
          <button className={`w-full px-6 py-3 border-2 ${isDarkMode ? 'border-[#2A2A2A] hover:border-[#666666]' : 'border-gray-200 hover:border-gray-300'} rounded-2xl flex items-center justify-center gap-3 transition-colors ${isDarkMode ? 'text-white' : ''}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span style={{ fontFamily: 'Poppins' }}>Continuer avec Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
