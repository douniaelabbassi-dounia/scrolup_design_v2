import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import logoScrolup from 'figma:asset/7cca6d0d1733ea47913d3776b1e79465ca8f12c8.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="w-full h-full bg-[#FFA500] flex flex-col items-center justify-between px-8 py-16 relative overflow-hidden">
      {/* Logo section */}
      <motion.div
        className="flex-shrink-0 pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: 'backOut' }}
      >
        <div className="relative">
          {/* ScrolUp Logo */}
          <img 
            src={logoScrolup} 
            alt="ScrolUp Logo" 
            className="w-[200px] h-auto drop-shadow-2xl"
          />
          
          {/* Shadow/glow effect */}
          <div className="absolute inset-0 bg-black/10 rounded-[3rem] blur-xl -z-10 translate-y-2" />
        </div>
      </motion.div>

      {/* Main text content */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center space-y-6 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Minimized title */}
        <h1 
          className="text-3xl text-white leading-tight"
          style={{ fontFamily: 'Poppins' }}
        >
          Publie. Partage. Gagne.
        </h1>

        {/* Description */}
        <div className="space-y-3">
          <p 
            className="text-white text-xl leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            La première app où ton attention<br />
            te rapporte des gains.
          </p>
          <p 
            className="text-white text-lg leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Découvre, partage et sois récompensé.
          </p>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="flex-shrink-0 w-full max-w-md pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          onClick={onComplete}
          className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FF6A00] text-white py-5 rounded-full shadow-2xl flex items-center justify-center gap-2 hover:shadow-3xl transition-all duration-300 active:scale-95"
          style={{ fontFamily: 'Poppins' }}
        >
          <span className="text-xl">Commencer et gagner</span>
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
        
        {/* Button shadow */}
        <div className="h-2 bg-gradient-to-r from-[#FF8C00]/30 to-[#FF6A00]/30 blur-xl rounded-full -mt-3 mx-8" />
      </motion.div>
    </div>
  );
}
