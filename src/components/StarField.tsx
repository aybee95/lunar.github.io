
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface StarFieldProps {
  theme: string;
}

const StarField = ({ theme }: StarFieldProps) => {
  const [stars, setStars] = useState<Star[]>([]);

  const getStarColor = () => {
    switch (theme) {
      case 'cosmic':
        return {
          color: 'bg-blue-200',
          shadow: 'rgba(147, 197, 253, 0.5)'
        };
      case 'dark':
        return {
          color: 'bg-gray-200',
          shadow: 'rgba(229, 231, 235, 0.5)'
        };
      case 'light':
        return {
          color: 'bg-gray-400',
          shadow: 'rgba(156, 163, 175, 0.5)'
        };
      default:
        return {
          color: 'bg-blue-200',
          shadow: 'rgba(147, 197, 253, 0.5)'
        };
    }
  };

  useEffect(() => {
    // Generate initial stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Handle window resize
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Animate stars
    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          y: star.y + star.speed,
          // Reset star position when it goes off screen
          ...(star.y > window.innerHeight && {
            y: -10,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, []);

  const starColors = getStarColor();

  return (
    <div className="fixed inset-0 z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className={`absolute rounded-full ${starColors.color}`}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${starColors.shadow.replace('0.5', (star.opacity * 0.5).toString())}`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
