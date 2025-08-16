import { useState } from "react";
import { Home, Globe, Gamepad2, Film, Wrench, Bell, ExternalLink, Github, MessageCircle } from "lucide-react";

interface AppSidebarProps {
  theme: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAnnouncementsOpen: () => void;
  onToolsOpen: () => void;
  collapsed?: boolean;
}

export function AppSidebar({ theme, activeTab, onTabChange, onAnnouncementsOpen, onToolsOpen, collapsed = false }: AppSidebarProps) {
  
  const mainItems = [
    { title: "Home", tab: "", icon: Home },
    { title: "Proxy", tab: "proxy", icon: Globe },
    { title: "Games", tab: "games", icon: Gamepad2 },
    { title: "Movies", tab: "movies", icon: Film },
  ];

  const toolItems = [
    { title: "Tools", action: onToolsOpen, icon: Wrench },
    { title: "Announcements", action: onAnnouncementsOpen, icon: Bell },
  ];

  const linkItems = [
    { title: "Discord", url: "https://discord.gg/example", icon: MessageCircle },
    { title: "GitHub", url: "https://github.com", icon: Github },
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          sidebar: 'bg-slate-900/95 border-blue-500/30',
          active: 'bg-blue-600/80 text-blue-100 border-blue-400/50',
          inactive: 'text-blue-200/80 hover:bg-blue-800/50 hover:text-blue-100',
          label: 'text-blue-300/90'
        };
      case 'dark':
        return {
          sidebar: 'bg-gray-900/95 border-gray-600/30',
          active: 'bg-gray-600/80 text-gray-100 border-gray-400/50',
          inactive: 'text-gray-300/80 hover:bg-gray-700/50 hover:text-gray-100',
          label: 'text-gray-400/90'
        };
      case 'light':
        return {
          sidebar: 'bg-white/95 border-gray-300/50',
          active: 'bg-gray-200/80 text-gray-900 border-gray-400/50',
          inactive: 'text-gray-700/80 hover:bg-gray-100/50 hover:text-gray-900',
          label: 'text-gray-600/90'
        };
      default:
        return {
          sidebar: 'bg-slate-900/95 border-blue-500/30',
          active: 'bg-blue-600/80 text-blue-100 border-blue-400/50',
          inactive: 'text-blue-200/80 hover:bg-blue-800/50 hover:text-blue-100',
          label: 'text-blue-300/90'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <div
      className={`${collapsed ? "w-16" : "w-64"} ${classes.sidebar} backdrop-blur-md border-r transition-all duration-300 flex flex-col`}
    >
      <div className="p-2">
        {/* Main Navigation */}
        <div>
          <div className={`${classes.label} text-sm font-semibold mb-2 ${collapsed ? 'hidden' : ''}`}>
            Navigation
          </div>
          <div className="space-y-1">
            {mainItems.map((item) => (
              <button
                key={item.title}
                onClick={() => onTabChange(item.tab)}
                className={`
                  ${activeTab === item.tab ? classes.active : classes.inactive}
                  flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border
                  ${activeTab === item.tab ? 'border-current/30' : 'border-transparent'}
                  hover:scale-105 w-full
                `}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && <span className="font-medium">{item.title}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-6">
          <div className={`${classes.label} text-sm font-semibold mb-2 ${collapsed ? 'hidden' : ''}`}>
            Tools
          </div>
          <div className="space-y-1">
            {toolItems.map((item) => (
              <button
                key={item.title}
                onClick={item.action}
                className={`
                  ${classes.inactive}
                  flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border-transparent
                  hover:scale-105 w-full
                `}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && <span className="font-medium">{item.title}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6">
          <div className={`${classes.label} text-sm font-semibold mb-2 ${collapsed ? 'hidden' : ''}`}>
            Links
          </div>
          <div className="space-y-1">
            {linkItems.map((item) => (
              <button
                key={item.title}
                onClick={() => window.open(item.url, '_blank')}
                className={`
                  ${classes.inactive}
                  flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 border-transparent
                  hover:scale-105 w-full
                `}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="font-medium flex-1">{item.title}</span>
                    <ExternalLink size={14} className="opacity-60" />
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}