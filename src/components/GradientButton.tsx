import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  type?: 'button' | 'submit';
}

export function GradientButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button'
}: GradientButtonProps) {
  const baseStyles = "px-6 py-3 rounded-2xl transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-[#FF6A00] to-[#FFC04D] text-white shadow-lg hover:shadow-xl active:scale-95",
    outline: "border-2 border-[#FF6A00] text-[#FF6A00] hover:bg-gradient-to-r hover:from-[#FF6A00] hover:to-[#FFC04D] hover:text-white hover:border-transparent"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ fontFamily: 'Poppins' }}
    >
      {children}
    </button>
  );
}
