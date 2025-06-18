
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  theme: string;
}

const LoadingScreen = ({ theme }: LoadingScreenProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const moonPhases = [
    { name: 'New Moon', phase: 'new' },
    { name: 'Waxing Crescent', phase: 'waxing-crescent' },
    { name: 'First Quarter', phase: 'first-quarter' },
    { name: 'Waxing Gibbous', phase: 'waxing-gibbous' },
    { name: 'Full Moon', phase: 'full' },
    { name: 'Waning Gibbous', phase: 'waning-gibbous' },
    { name: 'Last Quarter', phase: 'last-quarter' },
    { name: 'Waning Crescent', phase: 'waning-crescent' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % moonPhases.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const getMoonStyle = (phase: string) => {
    const baseStyle = "w-20 h-20 rounded-full relative overflow-hidden";
    
    switch (phase) {
      case 'new':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      case 'waxing-crescent':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      case 'first-quarter':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      case 'waxing-gibbous':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      case 'full':
        return `${baseStyle} bg-gray-100 border-2 border-gray-300 shadow-lg shadow-gray-300/50`;
      case 'waning-gibbous':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      case 'last-quarter':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      case 'waning-crescent':
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
      default:
        return `${baseStyle} bg-gray-800 border-2 border-gray-600`;
    }
  };

  const getMoonOverlay = (phase: string) => {
    switch (phase) {
      case 'new':
        return 'w-full h-full bg-gray-800';
      case 'waxing-crescent':
        return 'w-3/4 h-full bg-gray-100 rounded-r-full ml-auto';
      case 'first-quarter':
        return 'w-1/2 h-full bg-gray-100 ml-auto';
      case 'waxing-gibbous':
        return 'w-1/4 h-full bg-gray-100 rounded-l-full ml-auto';
      case 'full':
        return 'w-full h-full bg-gray-100';
      case 'waning-gibbous':
        return 'w-1/4 h-full bg-gray-100 rounded-r-full';
      case 'last-quarter':
        return 'w-1/2 h-full bg-gray-100';
      case 'waning-crescent':
        return 'w-3/4 h-full bg-gray-100 rounded-l-full';
      default:
        return 'w-full h-full bg-gray-800';
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
          text: 'text-blue-100',
          accent: 'text-blue-300'
        };
      case 'dark':
        return {
          bg: 'bg-gradient-to-br from-gray-900 to-black',
          text: 'text-gray-100',
          accent: 'text-gray-300'
        };
      case 'light':
        return {
          bg: 'bg-gradient-to-br from-gray-100 to-white',
          text: 'text-gray-800',
          accent: 'text-gray-600'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
          text: 'text-blue-100',
          accent: 'text-blue-300'
        };
    }
  };

  const classes = getThemeClasses();
  const currentMoonPhase = moonPhases[currentPhase];

  return (
    <div className={`fixed inset-0 z-50 ${classes.bg} flex flex-col items-center justify-center`}>
      <div className="mb-8 relative">
        <div className={getMoonStyle(currentMoonPhase.phase)}>
          <div className={`absolute inset-0 ${getMoonOverlay(currentMoonPhase.phase)}`} />
        </div>
        
        {/* Glow effect for full moon */}
        {currentMoonPhase.phase === 'full' && (
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-gray-100 opacity-30 animate-pulse scale-125" />
        )}
      </div>
      
      <h2 className={`text-2xl font-bold ${classes.text} mb-2`}>
        {currentMoonPhase.name}
      </h2>
      
      <p className={`${classes.accent} text-lg mb-8`}>
        Loading your cosmic experience...
      </p>
      
      {/* Phase indicators */}
      <div className="flex space-x-2">
        {moonPhases.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentPhase
                ? `${theme === 'light' ? 'bg-gray-600' : 'bg-gray-300'} scale-125`
                : `${theme === 'light' ? 'bg-gray-400' : 'bg-gray-600'} opacity-50`
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
