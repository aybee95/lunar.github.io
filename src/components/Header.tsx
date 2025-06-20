
import { Moon } from "lucide-react";

interface HeaderProps {
  theme: string;
  onLogoClick?: () => void;
}

const Header = ({ theme, onLogoClick }: HeaderProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          icon: 'text-blue-200 filter drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] hover:drop-shadow-[0_0_25px_rgba(147,197,253,1)]',
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl'
        };
      case 'dark':
        return {
          icon: 'text-gray-200 filter drop-shadow-[0_0_15px_rgba(229,231,235,0.9)] hover:drop-shadow-[0_0_25px_rgba(229,231,235,1)]',
          title: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl'
        };
      case 'light':
        return {
          icon: 'text-gray-800 filter drop-shadow-[0_0_15px_rgba(55,65,81,0.9)] hover:drop-shadow-[0_0_25px_rgba(55,65,81,1)]',
          title: 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent drop-shadow-2xl'
        };
      default:
        return {
          icon: 'text-blue-200 filter drop-shadow-[0_0_15px_rgba(147,197,253,0.9)] hover:drop-shadow-[0_0_25px_rgba(147,197,253,1)]',
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <header className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
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
    </header>
  );
};

export default Header;
