
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Gamepad2 } from "lucide-react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="backdrop-blur-sm bg-blue-900/20 rounded-full border border-blue-400/30 p-1">
        <div className="flex space-x-1">
          <Button
            onClick={() => onTabChange('proxy')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeTab === 'proxy'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-blue-200 hover:text-white hover:bg-blue-500/20'
            }`}
            variant="ghost"
          >
            <Globe size={18} className="mr-2" />
            Proxy
          </Button>
          <Button
            onClick={() => onTabChange('games')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeTab === 'games'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-blue-200 hover:text-white hover:bg-blue-500/20'
            }`}
            variant="ghost"
          >
            <Gamepad2 size={18} className="mr-2" />
            Games
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
