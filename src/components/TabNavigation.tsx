
import { Button } from "@/components/ui/button";
import { Globe, Gamepad2, Film, Settings } from "lucide-react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  theme: string;
}

const TabNavigation = ({ activeTab, onTabChange, theme }: TabNavigationProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30',
          active: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25',
          inactive: 'text-blue-200 hover:text-white hover:bg-blue-500/20'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/30',
          active: 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg shadow-gray-500/25',
          inactive: 'text-gray-200 hover:text-white hover:bg-gray-600/20'
        };
      case 'light':
        return {
          container: 'backdrop-blur-sm bg-white/20 border-gray-300/30',
          active: 'bg-gradient-to-r from-gray-200 to-gray-400 text-black shadow-lg shadow-gray-300/25',
          inactive: 'text-gray-700 hover:text-black hover:bg-gray-200/20'
        };
      default:
        return {
          container: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30',
          active: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25',
          inactive: 'text-blue-200 hover:text-white hover:bg-blue-500/20'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <div className="flex justify-center mb-8">
      <div className={`${classes.container} rounded-full border p-1`}>
        <div className="flex space-x-1">
          <Button
            onClick={() => onTabChange('proxy')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeTab === 'proxy' ? classes.active : classes.inactive
            }`}
            variant="ghost"
          >
            <Globe size={18} className="mr-2" />
            Proxy
          </Button>
          <Button
            onClick={() => onTabChange('games')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeTab === 'games' ? classes.active : classes.inactive
            }`}
            variant="ghost"
          >
            <Gamepad2 size={18} className="mr-2" />
            Games
          </Button>
          <Button
            onClick={() => onTabChange('movies')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeTab === 'movies' ? classes.active : classes.inactive
            }`}
            variant="ghost"
          >
            <Film size={18} className="mr-2" />
            Movies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
