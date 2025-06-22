
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight, RotateCcw, Home, Plus, Shield, Lock, Zap, Globe } from "lucide-react";

interface Tab {
  id: string;
  title: string;
  url: string;
  active: boolean;
  proxyType: string;
}

interface ProxyTaskbarProps {
  theme: string;
  onClose: () => void;
}

const ProxyTaskbar = ({ theme, onClose }: ProxyTaskbarProps) => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', title: 'Secure Browsing', url: 'proxied-site.com', active: true, proxyType: 'ultraviolet' }
  ]);
  const [proxyStats, setProxyStats] = useState({
    blocked: 247,
    encrypted: true,
    speed: 'Fast'
  });

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-2xl bg-gradient-to-r from-blue-900/98 via-purple-900/98 to-indigo-900/98 border-blue-400/30 shadow-2xl shadow-blue-500/30',
          tab: 'bg-gradient-to-r from-blue-800/70 to-blue-700/70 border-blue-400/40 text-blue-100 hover:from-blue-700/80 hover:to-blue-600/80 shadow-xl backdrop-blur-lg',
          activeTab: 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border-blue-300/60 text-white shadow-2xl shadow-blue-500/40 backdrop-blur-xl',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/40 hover:shadow-xl hover:shadow-blue-500/30 backdrop-blur-lg',
          securityIndicator: 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400/40 text-green-300 shadow-lg shadow-green-500/20',
          statsCard: 'bg-blue-800/40 border-blue-400/30 text-blue-100 backdrop-blur-lg'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-2xl bg-gradient-to-r from-gray-900/98 via-gray-800/98 to-slate-900/98 border-gray-600/30 shadow-2xl shadow-gray-800/50',
          tab: 'bg-gradient-to-r from-gray-700/70 to-gray-600/70 border-gray-500/40 text-gray-100 hover:from-gray-600/80 hover:to-gray-500/80 shadow-xl backdrop-blur-lg',
          activeTab: 'bg-gradient-to-r from-gray-600/90 to-gray-500/90 border-gray-400/60 text-white shadow-2xl shadow-gray-600/40 backdrop-blur-xl',
          button: 'text-gray-200 hover:text-white hover:bg-gray-600/40 hover:shadow-xl hover:shadow-gray-600/30 backdrop-blur-lg',
          securityIndicator: 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400/40 text-green-300 shadow-lg shadow-green-500/20',
          statsCard: 'bg-gray-700/40 border-gray-600/30 text-gray-100 backdrop-blur-lg'
        };
      case 'light':
        return {
          container: 'backdrop-blur-2xl bg-gradient-to-r from-white/98 via-gray-50/98 to-slate-50/98 border-gray-300/30 shadow-2xl shadow-gray-400/30',
          tab: 'bg-gradient-to-r from-gray-200/80 to-gray-100/80 border-gray-300/50 text-gray-800 hover:from-gray-300/90 hover:to-gray-200/90 shadow-xl backdrop-blur-lg',
          activeTab: 'bg-gradient-to-r from-gray-300/95 to-gray-200/95 border-gray-400/70 text-black shadow-2xl shadow-gray-400/40 backdrop-blur-xl',
          button: 'text-gray-700 hover:text-black hover:bg-gray-200/50 hover:shadow-xl hover:shadow-gray-400/30 backdrop-blur-lg',
          securityIndicator: 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400/40 text-green-700 shadow-lg shadow-green-500/20',
          statsCard: 'bg-gray-200/40 border-gray-300/30 text-gray-800 backdrop-blur-lg'
        };
      default:
        return {
          container: 'backdrop-blur-2xl bg-gradient-to-r from-blue-900/98 via-purple-900/98 to-indigo-900/98 border-blue-400/30 shadow-2xl shadow-blue-500/30',
          tab: 'bg-gradient-to-r from-blue-800/70 to-blue-700/70 border-blue-400/40 text-blue-100 hover:from-blue-700/80 hover:to-blue-600/80 shadow-xl backdrop-blur-lg',
          activeTab: 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border-blue-300/60 text-white shadow-2xl shadow-blue-500/40 backdrop-blur-xl',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/40 hover:shadow-xl hover:shadow-blue-500/30 backdrop-blur-lg',
          securityIndicator: 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400/40 text-green-300 shadow-lg shadow-green-500/20',
          statsCard: 'bg-blue-800/40 border-blue-400/30 text-blue-100 backdrop-blur-lg'
        };
    }
  };

  const classes = getThemeClasses();

  const addNewTab = () => {
    const newTab: Tab = {
      id: Date.now().toString(),
      title: 'New Secure Tab',
      url: 'about:blank',
      active: false,
      proxyType: 'ultraviolet'
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

  const getProxyIcon = (proxyType: string) => {
    switch (proxyType) {
      case 'ultraviolet': return <Shield size={14} />;
      case 'rammerhead': return <Zap size={14} />;
      case 'womginx': return <Globe size={14} />;
      default: return <Shield size={14} />;
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${classes.container} border-b-2 p-4`}>
      <div className="flex items-center space-x-4">
        {/* Navigation Controls */}
        <div className="flex space-x-2">
          <Button
            className={`p-3 rounded-2xl ${classes.button} transition-all duration-300 hover:scale-110 shadow-lg`}
            variant="ghost"
            size="sm"
          >
            <ArrowLeft size={18} />
          </Button>
          <Button
            className={`p-3 rounded-2xl ${classes.button} transition-all duration-300 hover:scale-110 shadow-lg`}
            variant="ghost"
            size="sm"
          >
            <ArrowRight size={18} />
          </Button>
          <Button
            className={`p-3 rounded-2xl ${classes.button} transition-all duration-300 hover:scale-110 shadow-lg`}
            variant="ghost"
            size="sm"
          >
            <RotateCcw size={18} />
          </Button>
          <Button
            onClick={onClose}
            className={`p-3 rounded-2xl ${classes.button} transition-all duration-300 hover:scale-110 shadow-lg`}
            variant="ghost"
            size="sm"
          >
            <Home size={18} />
          </Button>
        </div>

        {/* Enhanced Security Indicator */}
        <div className={`flex items-center space-x-3 px-4 py-3 rounded-2xl border-2 ${classes.securityIndicator}`}>
          <div className="flex items-center space-x-2">
            <Shield size={18} />
            <Lock size={16} />
            <span className="text-sm font-bold">SECURE PROXY</span>
          </div>
          <div className="h-6 w-px bg-current opacity-30"></div>
          <div className="flex space-x-3 text-xs">
            <span className="font-medium">{proxyStats.blocked} blocked</span>
            <span className="font-medium">Encrypted</span>
            <span className="font-medium">{proxyStats.speed}</span>
          </div>
        </div>

        {/* Tabs Container */}
        <div className="flex-1 flex space-x-3 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center ${tab.active ? classes.activeTab : classes.tab} rounded-2xl border-2 px-5 py-3 min-w-[180px] max-w-[250px] cursor-pointer transition-all duration-300 hover:scale-105 group shadow-lg`}
              onClick={() => switchTab(tab.id)}
            >
              <div className="flex items-center mr-3">
                {getProxyIcon(tab.proxyType)}
              </div>
              <span className="truncate text-sm font-semibold mr-3 flex-1">{tab.title}</span>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                className="p-1 h-7 w-7 ml-auto rounded-xl opacity-70 hover:opacity-100 transition-all duration-200 hover:scale-125 hover:bg-red-500/20"
                variant="ghost"
                size="sm"
              >
                <X size={14} />
              </Button>
            </div>
          ))}
          
          <Button
            onClick={addNewTab}
            className={`p-4 rounded-2xl ${classes.button} transition-all duration-300 hover:scale-110 shadow-lg min-w-[50px]`}
            variant="ghost"
            size="sm"
          >
            <Plus size={20} />
          </Button>
        </div>

        {/* Stats Display */}
        <div className={`${classes.statsCard} px-4 py-2 rounded-2xl border flex items-center space-x-3 shadow-lg`}>
          <Zap size={16} />
          <span className="text-sm font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};

export default ProxyTaskbar;
