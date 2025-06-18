
import { Button } from "@/components/ui/button";
import { Settings, Palette, X } from "lucide-react";

interface SettingsBarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const SettingsBar = ({ theme, onThemeChange, isOpen, onToggle }: SettingsBarProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30',
          text: 'text-blue-100',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/20',
          activeButton: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/30',
          text: 'text-gray-100',
          button: 'text-gray-200 hover:text-white hover:bg-gray-600/20',
          activeButton: 'bg-gradient-to-r from-gray-600 to-gray-800 text-white'
        };
      case 'light':
        return {
          container: 'backdrop-blur-sm bg-white/20 border-gray-300/30',
          text: 'text-gray-800',
          button: 'text-gray-700 hover:text-black hover:bg-gray-200/20',
          activeButton: 'bg-gradient-to-r from-gray-200 to-gray-400 text-black'
        };
      default:
        return {
          container: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30',
          text: 'text-blue-100',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/20',
          activeButton: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={onToggle}
          className={`p-2 rounded-full ${classes.button} transition-all duration-200`}
          variant="ghost"
        >
          <Settings size={20} />
        </Button>
      </div>

      {isOpen && (
        <div className={`fixed top-16 right-4 z-50 ${classes.container} rounded-lg border p-4 min-w-[250px]`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-semibold ${classes.text} flex items-center`}>
              <Palette size={18} className="mr-2" />
              Themes
            </h3>
            <Button
              onClick={onToggle}
              className={`p-1 ${classes.button}`}
              variant="ghost"
              size="sm"
            >
              <X size={16} />
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={() => onThemeChange('cosmic')}
              className={`w-full justify-start ${theme === 'cosmic' ? classes.activeButton : classes.button}`}
              variant="ghost"
            >
              Cosmic
            </Button>
            <Button
              onClick={() => onThemeChange('dark')}
              className={`w-full justify-start ${theme === 'dark' ? classes.activeButton : classes.button}`}
              variant="ghost"
            >
              Dark
            </Button>
            <Button
              onClick={() => onThemeChange('light')}
              className={`w-full justify-start ${theme === 'light' ? classes.activeButton : classes.button}`}
              variant="ghost"
            >
              Light
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsBar;
