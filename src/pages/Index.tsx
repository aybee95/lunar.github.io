
import { useState } from "react";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import ProxyInput from "@/components/ProxyInput";
import GamesGrid from "@/components/GamesGrid";
import MoviesGrid from "@/components/MoviesGrid";
import SettingsBar from "@/components/SettingsBar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const Index = () => {
  const [activeTab, setActiveTab] = useState('proxy');
  const [theme, setTheme] = useState('cosmic');
  const [showSettings, setShowSettings] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'proxy':
        return (
          <div className="w-full flex items-center justify-center min-h-[400px]">
            <ProxyInput theme={theme} />
          </div>
        );
      case 'games':
        return <GamesGrid theme={theme} />;
      case 'movies':
        return <MoviesGrid theme={theme} />;
      default:
        return (
          <div className="w-full flex items-center justify-center min-h-[400px]">
            <ProxyInput theme={theme} />
          </div>
        );
    }
  };

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
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} theme={theme} />
          
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
