
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
      <div className="backdrop-blur-sm bg-white/5 rounded-full border border-white/10 p-1">
        <div className="flex space-x-1">
          <Button
            onClick={() => onTabChange('proxy')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeTab === 'proxy'
                ? 'bg-gradient-to-r from-white to-gray-200 text-black shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
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
                ? 'bg-gradient-to-r from-white to-gray-200 text-black shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
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
