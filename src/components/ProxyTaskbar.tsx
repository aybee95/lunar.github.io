
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight, RotateCcw, Home, Plus, Shield, Lock } from "lucide-react";

interface Tab {
  id: string;
  title: string;
  url: string;
  active: boolean;
}

interface ProxyTaskbarProps {
  theme: string;
  onClose: () => void;
}

const ProxyTaskbar = ({ theme, onClose }: ProxyTaskbarProps) => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', title: 'Proxy Tab', url: 'example.com', active: true }
  ]);

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-xl bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-blue-900/95 border-blue-400/20 shadow-2xl shadow-blue-500/20',
          tab: 'bg-gradient-to-r from-blue-800/60 to-blue-700/60 border-blue-400/30 text-blue-100 hover:from-blue-700/70 hover:to-blue-600/70 shadow-lg',
          activeTab: 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 border-blue-300/50 text-white shadow-xl shadow-blue-500/30',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20',
          securityIndicator: 'bg-green-500/20 border-green-400/30 text-green-300'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-xl bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 border-gray-600/20 shadow-2xl shadow-gray-800/50',
          tab: 'bg-gradient-to-r from-gray-700/60 to-gray-600/60 border-gray-500/30 text-gray-100 hover:from-gray-600/70 hover:to-gray-500/70 shadow-lg',
          activeTab: 'bg-gradient-to-r from-gray-600/80 to-gray-500/80 border-gray-400/50 text-white shadow-xl shadow-gray-600/30',
          button: 'text-gray-200 hover:text-white hover:bg-gray-600/30 hover:shadow-lg hover:shadow-gray-600/20',
          securityIndicator: 'bg-green-500/20 border-green-400/30 text-green-300'
        };
      case 'light':
        return {
          container: 'backdrop-blur-xl bg-gradient-to-r from-white/95 via-gray-50/95 to-white/95 border-gray-300/20 shadow-2xl shadow-gray-400/20',
          tab: 'bg-gradient-to-r from-gray-200/70 to-gray-100/70 border-gray-300/40 text-gray-800 hover:from-gray-300/80 hover:to-gray-200/80 shadow-lg',
          activeTab: 'bg-gradient-to-r from-gray-300/90 to-gray-200/90 border-gray-400/60 text-black shadow-xl shadow-gray-400/30',
          button: 'text-gray-700 hover:text-black hover:bg-gray-200/40 hover:shadow-lg hover:shadow-gray-400/20',
          securityIndicator: 'bg-green-500/20 border-green-400/30 text-green-700'
        };
      default:
        return {
          container: 'backdrop-blur-xl bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-blue-900/95 border-blue-400/20 shadow-2xl shadow-blue-500/20',
          tab: 'bg-gradient-to-r from-blue-800/60 to-blue-700/60 border-blue-400/30 text-blue-100 hover:from-blue-700/70 hover:to-blue-600/70 shadow-lg',
          activeTab: 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 border-blue-300/50 text-white shadow-xl shadow-blue-500/30',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20',
          securityIndicator: 'bg-green-500/20 border-green-400/30 text-green-300'
        };
    }
  };

  const classes = getThemeClasses();

  const addNewTab = () => {
    const newTab: Tab = {
      id: Date.now().toString(),
      title: 'New Tab',
      url: 'about:blank',
      active: false
    };
    setTabs([...tabs, newTab]);
  };

  const closeTab = (tabId: string) => {
    const updatedTabs = tabs.filter(tab => tab.id !== tabId);
    if (updatedTabs.length === 0) {
      onClose();
    } else {
      setTabs(updatedTabs);
    }
  };

  const switchTab = (tabId: string) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      active: tab.id === tabId
    })));
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${classes.container} border-b p-3 rounded-b-3xl`}>
      <div className="flex items-center space-x-3">
        {/* Navigation Controls */}
        <div className="flex space-x-2">
          <Button
            className={`p-3 rounded-xl ${classes.button} transition-all duration-200 hover:scale-105`}
            variant="ghost"
            size="sm"
          >
            <ArrowLeft size={18} />
          </Button>
          <Button
            className={`p-3 rounded-xl ${classes.button} transition-all duration-200 hover:scale-105`}
            variant="ghost"
            size="sm"
          >
            <ArrowRight size={18} />
          </Button>
          <Button
            className={`p-3 rounded-xl ${classes.button} transition-all duration-200 hover:scale-105`}
            variant="ghost"
            size="sm"
          >
            <RotateCcw size={18} />
          </Button>
          <Button
            onClick={onClose}
            className={`p-3 rounded-xl ${classes.button} transition-all duration-200 hover:scale-105`}
            variant="ghost"
            size="sm"
          >
            <Home size={18} />
          </Button>
        </div>

        {/* Security Indicator */}
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-2xl border ${classes.securityIndicator}`}>
          <Shield size={16} />
          <Lock size={14} />
          <span className="text-sm font-medium">Secure Proxy</span>
        </div>

        {/* Tabs Container */}
        <div className="flex-1 flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center ${tab.active ? classes.activeTab : classes.tab} rounded-2xl border px-4 py-2 min-w-[140px] max-w-[220px] cursor-pointer transition-all duration-200 hover:scale-105 group`}
              onClick={() => switchTab(tab.id)}
            >
              <span className="truncate text-sm font-medium mr-3 flex-1">{tab.title}</span>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                className="p-1 h-6 w-6 ml-auto rounded-lg opacity-70 hover:opacity-100 transition-all duration-200 hover:scale-110"
                variant="ghost"
                size="sm"
              >
                <X size={14} />
              </Button>
            </div>
          ))}
          
          <Button
            onClick={addNewTab}
            className={`p-3 rounded-2xl ${classes.button} transition-all duration-200 hover:scale-105`}
            variant="ghost"
            size="sm"
          >
            <Plus size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProxyTaskbar;
