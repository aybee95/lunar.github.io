
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  theme: string;
}

const LoadingScreen = ({ theme }: LoadingScreenProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const moonPhases = [
    { phase: 'new' },
    { phase: 'waxing-crescent' },
    { phase: 'first-quarter' },
    { phase: 'waxing-gibbous' },
    { phase: 'full' },
    { phase: 'waning-gibbous' },
    { phase: 'last-quarter' },
    { phase: 'waning-crescent' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % moonPhases.length);
    }, 200); // Smoother animation - faster transitions

    return () => clearInterval(interval);
  }, []);

  const getMoonStyle = (phase: string) => {
    const baseStyle = "w-24 h-24 rounded-full relative overflow-hidden transition-all duration-200 ease-in-out";
    
    switch (phase) {
      case 'new':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      case 'waxing-crescent':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      case 'first-quarter':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      case 'waxing-gibbous':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      case 'full':
        return `${baseStyle} bg-white border-2 border-gray-300 shadow-2xl shadow-white/30`;
      case 'waning-gibbous':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      case 'last-quarter':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      case 'waning-crescent':
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
      default:
        return `${baseStyle} bg-gray-900 border-2 border-gray-700 shadow-lg`;
    }
  };

  const getMoonOverlay = (phase: string) => {
    const overlayStyle = "absolute inset-0 transition-all duration-200 ease-in-out";
    
    switch (phase) {
      case 'new':
        return `${overlayStyle} w-full h-full bg-gray-900`;
      case 'waxing-crescent':
        return `${overlayStyle} w-3/4 h-full bg-white rounded-r-full ml-auto`;
      case 'first-quarter':
        return `${overlayStyle} w-1/2 h-full bg-white ml-auto`;
      case 'waxing-gibbous':
        return `${overlayStyle} w-1/4 h-full bg-white rounded-l-full ml-auto`;
      case 'full':
        return `${overlayStyle} w-full h-full bg-white`;
      case 'waning-gibbous':
        return `${overlayStyle} w-1/4 h-full bg-white rounded-r-full`;
      case 'last-quarter':
        return `${overlayStyle} w-1/2 h-full bg-white`;
      case 'waning-crescent':
        return `${overlayStyle} w-3/4 h-full bg-white rounded-l-full`;
      default:
        return `${overlayStyle} w-full h-full bg-gray-900`;
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
        };
      case 'dark':
        return {
          bg: 'bg-gradient-to-br from-gray-900 to-black',
        };
      case 'light':
        return {
          bg: 'bg-gradient-to-br from-gray-100 to-white',
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
        };
    }
  };

  const classes = getThemeClasses();
  const currentMoonPhase = moonPhases[currentPhase];

  return (
    <div className={`fixed inset-0 z-50 ${classes.bg} flex flex-col items-center justify-center`}>
      <div className="relative">
        <div className={getMoonStyle(currentMoonPhase.phase)}>
          <div className={getMoonOverlay(currentMoonPhase.phase)} />
        </div>
        
        {/* Enhanced glow effect for full moon */}
        {currentMoonPhase.phase === 'full' && (
          <>
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-white opacity-20 animate-pulse scale-110" />
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-white opacity-10 animate-pulse scale-125" />
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
