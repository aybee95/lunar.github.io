
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight, RotateCcw, Home, Plus } from "lucide-react";

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
          container: 'backdrop-blur-sm bg-blue-900/90 border-blue-400/30',
          tab: 'bg-blue-800/40 border-blue-400/20 text-blue-100',
          activeTab: 'bg-blue-600/60 border-blue-400/40 text-white',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/20'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-sm bg-gray-800/90 border-gray-600/30',
          tab: 'bg-gray-700/40 border-gray-600/20 text-gray-100',
          activeTab: 'bg-gray-600/60 border-gray-600/40 text-white',
          button: 'text-gray-200 hover:text-white hover:bg-gray-600/20'
        };
      case 'light':
        return {
          container: 'backdrop-blur-sm bg-white/90 border-gray-300/30',
          tab: 'bg-gray-200/40 border-gray-300/20 text-gray-800',
          activeTab: 'bg-gray-300/60 border-gray-300/40 text-black',
          button: 'text-gray-700 hover:text-black hover:bg-gray-200/20'
        };
      default:
        return {
          container: 'backdrop-blur-sm bg-blue-900/90 border-blue-400/30',
          tab: 'bg-blue-800/40 border-blue-400/20 text-blue-100',
          activeTab: 'bg-blue-600/60 border-blue-400/40 text-white',
          button: 'text-blue-200 hover:text-white hover:bg-blue-500/20'
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
    <div className={`fixed top-0 left-0 right-0 z-50 ${classes.container} border-b p-2`}>
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <Button
            className={`p-2 ${classes.button}`}
            variant="ghost"
            size="sm"
          >
            <ArrowLeft size={16} />
          </Button>
          <Button
            className={`p-2 ${classes.button}`}
            variant="ghost"
            size="sm"
          >
            <ArrowRight size={16} />
          </Button>
          <Button
            className={`p-2 ${classes.button}`}
            variant="ghost"
            size="sm"
          >
            <RotateCcw size={16} />
          </Button>
          <Button
            onClick={onClose}
            className={`p-2 ${classes.button}`}
            variant="ghost"
            size="sm"
          >
            <Home size={16} />
          </Button>
        </div>

        <div className="flex-1 flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center ${tab.active ? classes.activeTab : classes.tab} rounded border px-3 py-1 min-w-[120px] max-w-[200px] cursor-pointer`}
              onClick={() => switchTab(tab.id)}
            >
              <span className="truncate text-sm mr-2">{tab.title}</span>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                className="p-0 h-4 w-4 ml-auto"
                variant="ghost"
                size="sm"
              >
                <X size={12} />
              </Button>
            </div>
          ))}
          
          <Button
            onClick={addNewTab}
            className={`p-1 ${classes.button}`}
            variant="ghost"
            size="sm"
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProxyTaskbar;
