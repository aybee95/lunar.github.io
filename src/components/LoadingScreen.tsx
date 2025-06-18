
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  theme: string;
}

const LoadingScreen = ({ theme }: LoadingScreenProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const moonPhases = [
    { phase: 'new', illumination: 0 },
    { phase: 'waxing-crescent', illumination: 12.5 },
    { phase: 'first-quarter', illumination: 25 },
    { phase: 'waxing-gibbous', illumination: 37.5 },
    { phase: 'full', illumination: 50 },
    { phase: 'waning-gibbous', illumination: 62.5 },
    { phase: 'last-quarter', illumination: 75 },
    { phase: 'waning-crescent', illumination: 87.5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % moonPhases.length);
    }, 800); // Slower, more contemplative timing

    return () => clearInterval(interval);
  }, []);

  const getMoonStyle = (illumination: number) => {
    const baseStyle = "w-32 h-32 rounded-full relative overflow-hidden transition-all duration-700 ease-in-out";
    return `${baseStyle} bg-gray-800 border border-gray-600 shadow-2xl`;
  };

  const getMoonOverlay = (illumination: number) => {
    const overlayStyle = "absolute inset-0 transition-all duration-700 ease-in-out";
    
    if (illumination === 0) {
      // New moon - completely dark
      return `${overlayStyle} w-full h-full bg-gray-800`;
    } else if (illumination <= 25) {
      // Waxing crescent to first quarter
      const width = illumination * 4; // 0-100%
      return `${overlayStyle} bg-gradient-to-r from-gray-200 to-white opacity-90`;
    } else if (illumination === 25) {
      // First quarter - exactly half lit
      return `${overlayStyle} w-1/2 h-full bg-gradient-to-r from-gray-200 to-white ml-auto opacity-90`;
    } else if (illumination < 50) {
      // Waxing gibbous
      const clipPath = `polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, ${100 - (illumination - 25) * 2}% 50%)`;
      return `${overlayStyle} w-full h-full bg-gradient-to-r from-gray-200 to-white opacity-90`;
    } else if (illumination === 50) {
      // Full moon - completely lit
      return `${overlayStyle} w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-95`;
    } else if (illumination < 75) {
      // Waning gibbous
      const width = 100 - ((illumination - 50) * 4);
      return `${overlayStyle} bg-gradient-to-l from-gray-200 to-white opacity-90`;
    } else if (illumination === 75) {
      // Last quarter - exactly half lit (left side)
      return `${overlayStyle} w-1/2 h-full bg-gradient-to-l from-gray-200 to-white opacity-90`;
    } else {
      // Waning crescent
      const width = 100 - ((illumination - 75) * 8);
      return `${overlayStyle} bg-gradient-to-l from-gray-200 to-white opacity-90`;
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
        {/* Moon base */}
        <div className={getMoonStyle(currentMoonPhase.illumination)}>
          {/* Shadow/illumination overlay */}
          <div 
            className="absolute inset-0 rounded-full transition-all duration-700 ease-in-out"
            style={{
              background: currentMoonPhase.illumination === 0 
                ? '#374151' 
                : currentMoonPhase.illumination === 50
                ? 'radial-gradient(circle at 30% 30%, #ffffff, #f3f4f6, #d1d5db)'
                : currentMoonPhase.illumination < 50
                ? `linear-gradient(${90 + (currentMoonPhase.illumination * 3.6)}deg, #374151 50%, #f3f4f6 50%)`
                : `linear-gradient(${90 + (currentMoonPhase.illumination * 3.6)}deg, #f3f4f6 50%, #374151 50%)`
            }}
          />
          
          {/* Glow effect for full moon */}
          {currentMoonPhase.illumination === 50 && (
            <>
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-white opacity-10 animate-pulse scale-110" />
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-white opacity-5 animate-pulse scale-125" />
            </>
          )}
        </div>
        
        {/* Subtle crater details */}
        <div className="absolute inset-0 w-32 h-32 rounded-full">
          <div className="absolute top-8 left-10 w-2 h-2 rounded-full bg-gray-600 opacity-30" />
          <div className="absolute top-12 right-8 w-1 h-1 rounded-full bg-gray-600 opacity-20" />
          <div className="absolute bottom-10 left-12 w-1.5 h-1.5 rounded-full bg-gray-600 opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
