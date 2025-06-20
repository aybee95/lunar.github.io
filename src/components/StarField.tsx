
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface StarFieldProps {
  theme: string;
}

const StarField = ({ theme }: StarFieldProps) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [time, setTime] = useState(0);

  const getStarColor = () => {
    switch (theme) {
      case 'cosmic':
        return {
          color: 'bg-blue-200',
          shadow: 'rgba(147, 197, 253, 0.8)',
          glow: 'rgba(59, 130, 246, 0.4)'
        };
      case 'dark':
        return {
          color: 'bg-gray-200',
          shadow: 'rgba(229, 231, 235, 0.8)',
          glow: 'rgba(156, 163, 175, 0.4)'
        };
      case 'light':
        return {
          color: 'bg-gray-400',
          shadow: 'rgba(156, 163, 175, 0.8)',
          glow: 'rgba(107, 114, 128, 0.4)'
        };
      default:
        return {
          color: 'bg-blue-200',
          shadow: 'rgba(147, 197, 253, 0.8)',
          glow: 'rgba(59, 130, 246, 0.4)'
        };
    }
  };

  useEffect(() => {
    // Generate initial stars with enhanced properties
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 0.5,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Enhanced animation with twinkling effect
    const animateStars = () => {
      setTime(prev => prev + 0.02);
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          y: star.y + star.speed,
          opacity: 0.2 + 0.6 * (Math.sin(time * star.twinkleSpeed + star.twinklePhase) + 1) / 2,
          ...(star.y > window.innerHeight && {
            y: -10,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, [time]);

  const starColors = getStarColor();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Enhanced background gradient */}
      <div className={`absolute inset-0 ${
        theme === 'cosmic' 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900/90' 
          : theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800/80 to-black/90'
          : 'bg-gradient-to-br from-gray-100 via-blue-50/80 to-white/90'
      }`} />
      
      {/* Nebula-like background effect */}
      <div className={`absolute inset-0 opacity-30 ${
        theme === 'cosmic'
          ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent'
          : theme === 'dark'
          ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-gray-800/10 to-transparent'
          : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-gray-100/10 to-transparent'
      }`} />
      
      {/* Enhanced stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className={`absolute rounded-full ${starColors.color} transition-opacity duration-100`}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `
              0 0 ${star.size * 2}px ${starColors.shadow.replace('0.8', (star.opacity * 0.8).toString())},
              0 0 ${star.size * 4}px ${starColors.glow.replace('0.4', (star.opacity * 0.4).toString())}
            `,
            filter: `blur(${star.size > 2 ? 0.5 : 0}px)`,
          }}
        />
      ))}
      
      {/* Shooting stars effect */}
      <div className={`absolute top-1/4 left-1/4 w-2 h-2 ${starColors.color} rounded-full opacity-70 animate-ping`} 
           style={{ animationDelay: '2s', animationDuration: '3s' }} />
      <div className={`absolute top-3/4 right-1/3 w-1 h-1 ${starColors.color} rounded-full opacity-50 animate-ping`} 
           style={{ animationDelay: '5s', animationDuration: '4s' }} />
    </div>
  );
};

export default StarField;
