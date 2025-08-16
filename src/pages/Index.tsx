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
import GamePage from "@/components/GamePage";
import BackgroundMusic from "@/components/BackgroundMusic";
import { Globe, Gamepad2, Film } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('');
  const [theme, setTheme] = useState('cosmic');
  const [showSettings, setShowSettings] = useState(false);
  const [embeddedBrowser, setEmbeddedBrowser] = useState<{url: string, title: string} | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showStartup, setShowStartup] = useState(true);
  const [currentGame, setCurrentGame] = useState<{title: string, url: string} | null>(null);
  const [panicUrl, setPanicUrl] = useState('https://google.com');

  useEffect(() => {
    // Show loading screen for 3 seconds after password is entered
    if (!showStartup) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showStartup]);

  useEffect(() => {
    // Load panic URL from localStorage
    const savedPanicUrl = localStorage.getItem('panicUrl');
    if (savedPanicUrl) {
      setPanicUrl(savedPanicUrl);
    }

    // Add keyboard shortcut for panic (Ctrl+Shift+P)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        window.open(panicUrl, '_blank');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [panicUrl]);

  const handleStartupSuccess = () => {
    setShowStartup(false);
  };

  const handleOpenEmbedded = (url: string, title: string) => {
    setEmbeddedBrowser({ url, title });
  };

  const handleCloseBrowser = () => {
    setEmbeddedBrowser(null);
  };

  const handleLogoClick = () => {
    setActiveTab('');
    setCurrentGame(null);
  };

  const handleGameClick = (title: string, url: string) => {
    setCurrentGame({ title, url });
  };

  const handleBackFromGame = () => {
    setCurrentGame(null);
  };

  const handlePanicUrlChange = (url: string) => {
    setPanicUrl(url);
    localStorage.setItem('panicUrl', url);
  };

  const getWelcomeThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl',
          subtitle: 'text-blue-200/90 drop-shadow-lg',
          card: 'backdrop-blur-lg bg-blue-900/40 border-blue-400/50 hover:bg-blue-800/50 hover:border-blue-300/70 shadow-2xl hover:shadow-blue-500/30 hover:shadow-2xl',
          icon: 'text-white drop-shadow-lg',
          categoryTitle: 'text-blue-100 drop-shadow-md',
          glow: 'shadow-3xl shadow-blue-500/20 hover:shadow-blue-400/40'
        };
      case 'dark':
        return {
          title: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl',
          subtitle: 'text-gray-200/90 drop-shadow-lg',
          card: 'backdrop-blur-lg bg-gray-800/40 border-gray-600/50 hover:bg-gray-700/50 hover:border-gray-500/70 shadow-2xl hover:shadow-gray-500/30',
          icon: 'text-white drop-shadow-lg',
          categoryTitle: 'text-gray-100 drop-shadow-md',
          glow: 'shadow-3xl shadow-gray-500/20 hover:shadow-gray-400/40'
        };
      case 'light':
        return {
          title: 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 bg-clip-text text-transparent drop-shadow-2xl',
          subtitle: 'text-gray-700/90 drop-shadow-lg',
          card: 'backdrop-blur-lg bg-white/50 border-gray-300/60 hover:bg-gray-100/60 hover:border-gray-400/80 shadow-2xl hover:shadow-gray-300/40',
          icon: 'text-black drop-shadow-lg',
          categoryTitle: 'text-gray-800 drop-shadow-md',
          glow: 'shadow-3xl shadow-gray-300/30 hover:shadow-gray-400/50'
        };
      default:
        return {
          title: 'bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl',
          subtitle: 'text-blue-200/90 drop-shadow-lg',
          card: 'backdrop-blur-lg bg-blue-900/40 border-blue-400/50 hover:bg-blue-800/50 hover:border-blue-300/70 shadow-2xl hover:shadow-blue-500/30',
          icon: 'text-white drop-shadow-lg',
          categoryTitle: 'text-blue-100 drop-shadow-md',
          glow: 'shadow-3xl shadow-blue-500/20 hover:shadow-blue-400/40'
        };
    }
  };

  const renderContent = () => {
    if (currentGame) {
      return (
        <GamePage
          title={currentGame.title}
          url={currentGame.url}
          theme={theme}
          onBack={handleBackFromGame}
        />
      );
    }

    if (!activeTab) {
      const classes = getWelcomeThemeClasses();
      return (
        <div className="w-full flex flex-col items-center justify-center min-h-[500px] space-y-12 px-4">
          <div className="text-center space-y-6">
            <h1 className={`text-6xl font-bold ${classes.title} drop-shadow-lg`}>
              WELCOME
            </h1>
            <p className={`text-2xl ${classes.subtitle} font-medium`}>
              Choose what you'd like to explore
            </p>
          </div>
          
          <div className="max-w-6xl w-full">
            <div className="flex justify-center gap-8 flex-wrap">
              <div
                onClick={() => setActiveTab('proxy')}
                className={`${classes.card} ${classes.glow} rounded-2xl border-2 p-10 cursor-pointer transition-all duration-300 hover:scale-105 text-center w-80 group`}
              >
                <Globe size={64} className={`${classes.icon} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-2xl font-bold ${classes.title} mb-3`}>Proxy</h3>
                <p className={`${classes.subtitle} text-lg leading-relaxed`}>Access any website through our secure proxy service</p>
              </div>

              <div
                onClick={() => setActiveTab('games')}
                className={`${classes.card} ${classes.glow} rounded-2xl border-2 p-10 cursor-pointer transition-all duration-300 hover:scale-105 text-center w-80 group`}
              >
                <Gamepad2 size={64} className={`${classes.icon} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-2xl font-bold ${classes.title} mb-3`}>Games</h3>
                <p className={`${classes.subtitle} text-lg leading-relaxed`}>Enjoy your favorite unblocked games</p>
              </div>

              <div
                onClick={() => setActiveTab('movies')}
                className={`${classes.card} ${classes.glow} rounded-2xl border-2 p-10 cursor-pointer transition-all duration-300 hover:scale-105 text-center w-80 group`}
              >
                <Film size={64} className={`${classes.icon} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-2xl font-bold ${classes.title} mb-3`}>Movies</h3>
                <p className={`${classes.subtitle} text-lg leading-relaxed`}>Watch movies and TV shows</p>
              </div>
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
        return <GamesGrid theme={theme} onGameClick={handleGameClick} />;
      case 'movies':
        return <MoviesGrid theme={theme} onMovieClick={handleGameClick} />;
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
      <BackgroundMusic theme={theme} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header theme={theme} onLogoClick={handleLogoClick} panicUrl={panicUrl} />
        
        <SettingsBar 
          theme={theme} 
          onThemeChange={setTheme}
          isOpen={showSettings}
          onToggle={() => setShowSettings(!showSettings)}
          panicUrl={panicUrl}
          onPanicUrlChange={handlePanicUrlChange}
        />
        
        <main className="flex-grow flex flex-col items-center justify-start px-4">
          {activeTab && !currentGame && (
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
