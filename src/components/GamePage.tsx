
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize } from "lucide-react";

interface GamePageProps {
  title: string;
  url: string;
  theme: string;
  onBack: () => void;
}

const GamePage = ({ title, url, theme, onBack }: GamePageProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          header: 'bg-blue-900/30 border-blue-400/40',
          title: 'text-blue-100',
          button: 'bg-blue-600/70 hover:bg-blue-500/70 text-blue-100 border-blue-400/30',
          container: 'bg-blue-900/20'
        };
      case 'dark':
        return {
          header: 'bg-gray-800/30 border-gray-600/40',
          title: 'text-gray-100',
          button: 'bg-gray-600/70 hover:bg-gray-500/70 text-gray-100 border-gray-500/30',
          container: 'bg-gray-800/20'
        };
      case 'light':
        return {
          header: 'bg-white/40 border-gray-300/50',
          title: 'text-gray-800',
          button: 'bg-gray-200/70 hover:bg-gray-300/70 text-gray-800 border-gray-300/50',
          container: 'bg-white/20'
        };
      default:
        return {
          header: 'bg-blue-900/30 border-blue-400/40',
          title: 'text-blue-100',
          button: 'bg-blue-600/70 hover:bg-blue-500/70 text-blue-100 border-blue-400/30',
          container: 'bg-blue-900/20'
        };
    }
  };

  const classes = getThemeClasses();

  const handleFullscreen = () => {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      if (!isFullscreen) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <iframe
          id="game-iframe"
          src={url}
          className="w-full h-full border-0"
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className={`${classes.header} backdrop-blur-sm rounded-lg border mb-6 p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              className={`${classes.button} border`}
              variant="ghost"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back
            </Button>
            <h1 className={`text-2xl font-bold ${classes.title}`}>{title}</h1>
          </div>
          <Button
            onClick={handleFullscreen}
            className={`${classes.button} border`}
            variant="ghost"
          >
            <Maximize size={18} className="mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>

      <div className={`${classes.container} backdrop-blur-sm rounded-lg border p-4`}>
        <iframe
          id="game-iframe"
          src={url}
          className="w-full h-[600px] rounded-lg border-0"
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
        />
      </div>
    </div>
  );
};

export default GamePage;
