import React from 'react';
import { useState, useEffect } from 'react';

export const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`hidden md:flex items-center gap-2 cursor-pointer ${isAnimating ? 'animate-[icon-wiggle_1s_ease-in-out]' : ''}`}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setTimeout(() => setIsAnimating(false), 1000)}
    >
      <img 
        src="/img/logo/logo.png" 
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" 
        alt="Tabir Logo" 
      />
      <span className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">TABI</span>
    </div>
  );
};

export const AnimatedLogoHome = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`flex items-center gap-2 cursor-pointer ${isAnimating ? 'animate-[icon-wiggle_1s_ease-in-out]' : ''}`}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setTimeout(() => setIsAnimating(false), 1000)}
    >
      <img 
        src="/img/logo/logo.png" 
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" 
        alt="Tabir Logo" 
      />
      <span className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">TABI</span>
    </div>
  );
};