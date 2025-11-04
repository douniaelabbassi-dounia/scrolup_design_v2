import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
}

export function InputField({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  icon 
}: InputFieldProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="relative w-full">
      {icon && (
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-[#666666]' : 'text-gray-400'}`}>
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 ${icon ? 'pl-12' : ''} border-2 ${isDarkMode ? 'border-[#2A2A2A] bg-[#1E1E1E] text-white placeholder-[#666666]' : 'border-gray-200 bg-white text-gray-900'} rounded-2xl focus:outline-none focus:border-[#FF6A00] transition-colors ${className}`}
        style={{ fontFamily: 'Inter' }}
      />
    </div>
  );
}
