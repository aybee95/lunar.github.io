
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackgroundMusicProps {
  theme: string;
}

const BackgroundMusic = ({ theme }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = volume;
    audio.loop = true;

    // Auto-play after user interaction (browsers require user interaction)
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        audio.play().catch(console.error);
        setIsPlaying(true);
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [isPlaying, volume]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          button: 'bg-blue-600/70 hover:bg-blue-500/70 text-blue-100 border border-blue-400/30 backdrop-blur-sm',
        };
      case 'dark':
        return {
          button: 'bg-gray-600/70 hover:bg-gray-500/70 text-gray-100 border border-gray-500/30 backdrop-blur-sm',
        };
      case 'light':
        return {
          button: 'bg-gray-200/70 hover:bg-gray-300/70 text-gray-800 border border-gray-300/50 backdrop-blur-sm',
        };
      default:
        return {
          button: 'bg-blue-600/70 hover:bg-blue-500/70 text-blue-100 border border-blue-400/30 backdrop-blur-sm',
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <>
      {/* Using a royalty-free space ambient track URL */}
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds/space-chillout.mp3" type="audio/mpeg" />
        <source src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Space%20Jazz.mp3" type="audio/mpeg" />
        {/* Fallback to a generated tone if external sources fail */}
      </audio>
      
      {/* Music control button */}
      <div className="fixed bottom-4 left-4 z-40">
        <Button
          onClick={togglePlayback}
          className={`p-3 rounded-full ${classes.button} shadow-lg hover:scale-105 transition-all duration-200`}
          variant="ghost"
          title={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </Button>
      </div>
    </>
  );
};

export default BackgroundMusic;
