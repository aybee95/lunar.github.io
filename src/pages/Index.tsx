
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import ProxyInput from "@/components/ProxyInput";
import GamesGrid from "@/components/GamesGrid";
import MoviesGrid from "@/components/MoviesGrid";
import SettingsBar from "@/components/SettingsBar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import EmbeddedBrowser from "@/components/EmbeddedBrowser";
import LoadingScreen from "@/components/LoadingScreen";
import StartupScreen from "@/components/StartupScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState('');
  const [theme, setTheme] = useState('cosmic');
  const [showSettings, setShowSettings] = useState(false);
  const [embeddedBrowser, setEmbeddedBrowser] = useState<{url: string, title: string} | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds after password is entered
    if (!showStartup) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showStartup]);

  const handleStartupSuccess = () => {
    setShowStartup(false);
  };

  const handleOpenEmbedded = (url: string, title: string) => {
    setEmbeddedBrowser({ url, title });
  };

  const handleCloseBrowser = () => {
    setEmbeddedBrowser(null);
  };

  const getWelcomeThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent',
          subtitle: 'text-blue-200/80',
          card: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30 hover:bg-blue-800/30'
        };
      case 'dark':
        return {
          title: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent',
          subtitle: 'text-gray-200/80',
          card: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/30 hover:bg-gray-700/30'
        };
      case 'light':
        return {
          title: 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent',
          subtitle: 'text-gray-700/80',
          card: 'backdrop-blur-sm bg-white/20 border-gray-300/30 hover:bg-gray-200/30'
        };
      default:
        return {
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent',
          subtitle: 'text-blue-200/80',
          card: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30 hover:bg-blue-800/30'
        };
    }
  };

  const renderContent = () => {
    if (!activeTab) {
      const classes = getWelcomeThemeClasses();
      return (
        <div className="w-full flex flex-col items-center justify-center min-h-[400px] space-y-8">
          <div className="text-center space-y-4">
            <h1 className={`text-5xl font-bold ${classes.title}`}>
              WELCOME
            </h1>
            <p className={`text-xl ${classes.subtitle}`}>
              Choose what you'd like to explore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
            <div
              onClick={() => setActiveTab('proxy')}
              className={`${classes.card} rounded-xl border p-8 cursor-pointer transition-all duration-200 hover:scale-105 text-center`}
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className={`text-2xl font-semibold ${classes.title} mb-2`}>Proxy</h3>
              <p className={`${classes.subtitle}`}>Browse the web securely</p>
            </div>
            
            <div
              onClick={() => setActiveTab('games')}
              className={`${classes.card} rounded-xl border p-8 cursor-pointer transition-all duration-200 hover:scale-105 text-center`}
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className={`text-2xl font-semibold ${classes.title} mb-2`}>Games</h3>
              <p className={`${classes.subtitle}`}>Play your favorite games</p>
            </div>
            
            <div
              onClick={() => setActiveTab('movies')}
              className={`${classes.card} rounded-xl border p-8 cursor-pointer transition-all duration-200 hover:scale-105 text-center`}
            >
              <div className="text-4xl mb-4">🎬</div>
              <h3 className={`text-2xl font-semibold ${classes.title} mb-2`}>Movies</h3>
              <p className={`${classes.subtitle}`}>Stream movies and shows</p>
            </div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'proxy':
        return (
          <div className="w-full flex items-center justify-center min-h-[400px]">
            <ProxyInput theme={theme} onOpenEmbedded={handleOpenEmbedded} />
          </div>
        );
      case 'games':
        return <GamesGrid theme={theme} />;
      case 'movies':
        return <MoviesGrid theme={theme} />;
      default:
        return null;
    }
  };

  if (showStartup) {
    return <StartupScreen theme={theme} onSuccess={handleStartupSuccess} />;
  }

  if (isLoading) {
    return <LoadingScreen theme={theme} />;
  }

  if (embeddedBrowser) {
    return (
      <EmbeddedBrowser
        url={embeddedBrowser.url}
        title={embeddedBrowser.title}
        theme={theme}
        onClose={handleCloseBrowser}
      />
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'cosmic' ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900' : theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-100 to-white'} flex flex-col relative overflow-hidden`}>
      <StarField theme={theme} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header theme={theme} />
        
        <SettingsBar 
          theme={theme} 
          onThemeChange={setTheme}
          isOpen={showSettings}
          onToggle={() => setShowSettings(!showSettings)}
        />
        
        <main className="flex-grow flex flex-col items-center justify-start px-4">
          {activeTab && (
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} theme={theme} />
          )}
          
          <div className="w-full flex-grow flex items-start justify-center">
            {renderContent()}
          </div>
        </main>
        
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default Index;
