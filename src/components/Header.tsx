
import { Moon, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  theme: string;
  onLogoClick?: () => void;
  panicUrl?: string;
}

const Header = ({ theme, onLogoClick, panicUrl = "https://google.com" }: HeaderProps) => {
  const handlePanic = () => {
    window.open(panicUrl, '_blank');
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          icon: 'text-blue-200 filter drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] hover:drop-shadow-[0_0_25px_rgba(147,197,253,1)]',
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl',
          button: 'bg-red-600/80 hover:bg-red-500/80 text-white border border-red-400/50'
        };
      case 'dark':
        return {
          icon: 'text-gray-200 filter drop-shadow-[0_0_15px_rgba(229,231,235,0.9)] hover:drop-shadow-[0_0_25px_rgba(229,231,235,1)]',
          title: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl',
          button: 'bg-red-600/80 hover:bg-red-500/80 text-white border border-red-400/50'
        };
      case 'light':
        return {
          icon: 'text-gray-800 filter drop-shadow-[0_0_15px_rgba(55,65,81,0.9)] hover:drop-shadow-[0_0_25px_rgba(55,65,81,1)]',
          title: 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent drop-shadow-2xl',
          button: 'bg-red-600/80 hover:bg-red-500/80 text-white border border-red-400/50'
        };
      default:
        return {
          icon: 'text-blue-200 filter drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] hover:drop-shadow-[0_0_25px_rgba(147,197,253,1)]',
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl',
          button: 'bg-red-600/80 hover:bg-red-500/80 text-white border border-red-400/50'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <header className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Button
          onClick={handlePanic}
          className={`${classes.button} px-4 py-2 font-bold hover:scale-105 transition-all duration-200 shadow-lg`}
          variant="ghost"
        >
          <AlertTriangle size={18} className="mr-2" />
          PANIC
        </Button>
        
        <div className="flex-1 flex justify-center">
        <div 
          className="flex items-center space-x-4 cursor-pointer hover:scale-110 transition-all duration-300 group"
          onClick={onLogoClick}
        >
          <div className="relative">
            <Moon 
              size={42} 
              className={`${classes.icon} transition-all duration-300 group-hover:rotate-12`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            {/* Subtle rotating ring effect */}
            <div className="absolute inset-0 rounded-full border border-current opacity-20 animate-spin" 
                 style={{ animationDuration: '10s' }} />
          </div>
          <h1 className={`text-4xl font-bold ${classes.title} transition-all duration-300 group-hover:scale-105`}>
            Lunar Proxy
          </h1>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
