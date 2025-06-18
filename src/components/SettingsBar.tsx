
import { Button } from "@/components/ui/button";
import { Settings, X } from "lucide-react";

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
          container: 'backdrop-blur-sm bg-blue-900/90 border-blue-400/30',
          button: 'bg-blue-600/60 hover:bg-blue-500/60 text-blue-100',
          activeButton: 'bg-blue-500 text-white',
          text: 'text-blue-100'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-sm bg-gray-800/90 border-gray-600/30',
          button: 'bg-gray-600/60 hover:bg-gray-500/60 text-gray-100',
          activeButton: 'bg-gray-500 text-white',
          text: 'text-gray-100'
        };
      case 'light':
        return {
          container: 'backdrop-blur-sm bg-white/90 border-gray-300/30',
          button: 'bg-gray-200/60 hover:bg-gray-300/60 text-gray-800',
          activeButton: 'bg-gray-300 text-black',
          text: 'text-gray-800'
        };
      default:
        return {
          container: 'backdrop-blur-sm bg-blue-900/90 border-blue-400/30',
          button: 'bg-blue-600/60 hover:bg-blue-500/60 text-blue-100',
          activeButton: 'bg-blue-500 text-white',
          text: 'text-blue-100'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <>
      <div className="fixed top-4 right-4 z-40">
        <Button
          onClick={onToggle}
          className={`p-3 rounded-full ${classes.button}`}
          variant="ghost"
        >
          <Settings size={20} />
        </Button>
      </div>

      {isOpen && (
        <div className={`fixed top-0 right-0 h-full w-80 ${classes.container} border-l p-6 z-50`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${classes.text}`}>Settings</h3>
            <Button
              onClick={onToggle}
              className={`p-2 ${classes.button}`}
              variant="ghost"
              size="sm"
            >
              <X size={16} />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className={`text-sm font-medium ${classes.text} mb-3`}>Theme</h4>
              <div className="space-y-2">
                {['cosmic', 'dark', 'light'].map((themeOption) => (
                  <Button
                    key={themeOption}
                    onClick={() => onThemeChange(themeOption)}
                    className={`w-full justify-start ${
                      theme === themeOption ? classes.activeButton : classes.button
                    }`}
                    variant="ghost"
                  >
                    {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsBar;
