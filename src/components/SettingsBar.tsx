
import { Button } from "@/components/ui/button";
import { Settings, X, Eye, EyeOff, Volume2, VolumeX, Zap, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface SettingsBarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const SettingsBar = ({ theme, onThemeChange, isOpen, onToggle }: SettingsBarProps) => {
  const [animations, setAnimations] = useState(true);
  const [sounds, setSounds] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(true);

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-lg bg-blue-900/95 border-blue-400/40 shadow-2xl shadow-blue-500/20',
          button: 'bg-blue-600/70 hover:bg-blue-500/70 text-blue-100 border border-blue-400/30',
          activeButton: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border border-blue-300/50',
          text: 'text-blue-100',
          accent: 'text-blue-200',
          divider: 'border-blue-400/30'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-lg bg-gray-800/95 border-gray-600/40 shadow-2xl shadow-gray-500/20',
          button: 'bg-gray-600/70 hover:bg-gray-500/70 text-gray-100 border border-gray-500/30',
          activeButton: 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg border border-gray-400/50',
          text: 'text-gray-100',
          accent: 'text-gray-200',
          divider: 'border-gray-600/30'
        };
      case 'light':
        return {
          container: 'backdrop-blur-lg bg-white/95 border-gray-300/40 shadow-2xl shadow-gray-300/30',
          button: 'bg-gray-200/70 hover:bg-gray-300/70 text-gray-800 border border-gray-300/50',
          activeButton: 'bg-gradient-to-r from-gray-200 to-gray-400 text-black shadow-lg border border-gray-400/70',
          text: 'text-gray-800',
          accent: 'text-gray-600',
          divider: 'border-gray-300/40'
        };
      default:
        return {
          container: 'backdrop-blur-lg bg-blue-900/95 border-blue-400/40 shadow-2xl shadow-blue-500/20',
          button: 'bg-blue-600/70 hover:bg-blue-500/70 text-blue-100 border border-blue-400/30',
          activeButton: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border border-blue-300/50',
          text: 'text-blue-100',
          accent: 'text-blue-200',
          divider: 'border-blue-400/30'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <>
      <div className="fixed top-4 right-4 z-40">
        <Button
          onClick={onToggle}
          className={`p-4 rounded-full ${classes.button} shadow-lg hover:scale-105 transition-all duration-200`}
          variant="ghost"
        >
          <Settings size={22} />
        </Button>
      </div>

      {isOpen && (
        <div className={`fixed top-0 right-0 h-full w-96 ${classes.container} border-l-2 p-8 z-50 overflow-y-auto`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className={`text-2xl font-bold ${classes.text}`}>Settings</h3>
            <Button
              onClick={onToggle}
              className={`p-2 ${classes.button} hover:scale-105 transition-all duration-200`}
              variant="ghost"
              size="sm"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="space-y-8">
            {/* Theme Section */}
            <div>
              <h4 className={`text-lg font-semibold ${classes.text} mb-4 flex items-center gap-2`}>
                <Eye size={18} />
                Theme
              </h4>
              <div className="space-y-3">
                {['cosmic', 'dark', 'light'].map((themeOption) => (
                  <Button
                    key={themeOption}
                    onClick={() => onThemeChange(themeOption)}
                    className={`w-full justify-start text-left transition-all duration-200 ${
                      theme === themeOption ? classes.activeButton : classes.button
                    }`}
                    variant="ghost"
                  >
                    <span className="capitalize font-medium">{themeOption}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className={`border-t ${classes.divider} pt-6`}>
              <h4 className={`text-lg font-semibold ${classes.text} mb-4 flex items-center gap-2`}>
                <Zap size={18} />
                Performance
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${classes.text} font-medium`}>Animations</p>
                    <p className={`${classes.accent} text-sm`}>Enable smooth transitions</p>
                  </div>
                  <Switch checked={animations} onCheckedChange={setAnimations} />
                </div>
              </div>
            </div>

            <div className={`border-t ${classes.divider} pt-6`}>
              <h4 className={`text-lg font-semibold ${classes.text} mb-4 flex items-center gap-2`}>
                {sounds ? <Volume2 size={18} /> : <VolumeX size={18} />}
                Audio
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${classes.text} font-medium`}>Sound Effects</p>
                    <p className={`${classes.accent} text-sm`}>Enable audio feedback</p>
                  </div>
                  <Switch checked={sounds} onCheckedChange={setSounds} />
                </div>
              </div>
            </div>

            <div className={`border-t ${classes.divider} pt-6`}>
              <h4 className={`text-lg font-semibold ${classes.text} mb-4 flex items-center gap-2`}>
                <Shield size={18} />
                Privacy & Security
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${classes.text} font-medium`}>Notifications</p>
                    <p className={`${classes.accent} text-sm`}>Show system alerts</p>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${classes.text} font-medium`}>Enhanced Privacy</p>
                    <p className={`${classes.accent} text-sm`}>Clear browsing data</p>
                  </div>
                  <Switch checked={privacy} onCheckedChange={setPrivacy} />
                </div>
              </div>
            </div>

            <div className={`border-t ${classes.divider} pt-6`}>
              <Button
                className={`w-full ${classes.button} hover:scale-105 transition-all duration-200`}
                variant="ghost"
              >
                Reset to Defaults
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsBar;
