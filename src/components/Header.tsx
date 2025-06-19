
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
          icon: 'text-blue-200 filter drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]',
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent'
        };
      case 'dark':
        return {
          icon: 'text-gray-200 filter drop-shadow-[0_0_10px_rgba(229,231,235,0.7)]',
          title: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent'
        };
      case 'light':
        return {
          icon: 'text-gray-800 filter drop-shadow-[0_0_10px_rgba(55,65,81,0.7)]',
          title: 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent'
        };
      default:
        return {
          icon: 'text-blue-200 filter drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]',
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={onLogoClick}
        >
          <div className="relative">
            <Moon 
              size={36} 
              className={classes.icon}
              fill="none"
              stroke="currentColor"
            />
          </div>
          <h1 className={`text-3xl font-bold ${classes.title}`}>
            Lunar Proxy
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
