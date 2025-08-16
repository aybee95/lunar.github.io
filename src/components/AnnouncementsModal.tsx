import { useState } from "react";
import { X, Calendar, Star, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface AnnouncementsModalProps {
  theme: string;
  isOpen: boolean;
  onClose: () => void;
}

export function AnnouncementsModal({ theme, isOpen, onClose }: AnnouncementsModalProps) {
  const [activeTab, setActiveTab] = useState<'announcements' | 'updates'>('announcements');

  const announcements = [
    {
      id: 1,
      title: "New Proxy Servers Added",
      content: "We've added 5 new high-speed proxy servers for better performance and reliability.",
      date: "2024-12-15",
      type: "info",
      icon: Zap
    },
    {
      id: 2,
      title: "Holiday Gaming Tournament",
      content: "Join our special holiday gaming tournament! Win prizes and compete with other users.",
      date: "2024-12-14",
      type: "event",
      icon: Gift
    },
    {
      id: 3,
      title: "Enhanced Security Features",
      content: "New encryption protocols have been implemented for better privacy protection.",
      date: "2024-12-12",
      type: "security",
      icon: Star
    }
  ];

  const updates = [
    {
      id: 1,
      version: "v2.1.0",
      title: "Major UI Overhaul",
      changes: [
        "New sidebar navigation",
        "Improved proxy performance",
        "Enhanced gaming section",
        "Better mobile responsiveness"
      ],
      date: "2024-12-15"
    },
    {
      id: 2,
      version: "v2.0.5",
      title: "Bug Fixes & Improvements",
      changes: [
        "Fixed proxy timeout issues",
        "Improved search functionality",
        "Enhanced security protocols",
        "Performance optimizations"
      ],
      date: "2024-12-10"
    }
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          modal: 'bg-slate-900/95 border-blue-500/30',
          tab: 'text-blue-200/80 hover:text-blue-100 hover:bg-blue-800/30',
          activeTab: 'text-blue-100 bg-blue-600/50 border-blue-400/50',
          card: 'bg-slate-800/50 border-blue-500/30 hover:border-blue-400/50',
          text: 'text-blue-100',
          subtitle: 'text-blue-200/70',
          badge: {
            info: 'bg-blue-600/30 text-blue-200',
            event: 'bg-purple-600/30 text-purple-200',
            security: 'bg-green-600/30 text-green-200'
          }
        };
      case 'dark':
        return {
          modal: 'bg-gray-900/95 border-gray-600/30',
          tab: 'text-gray-300/80 hover:text-gray-100 hover:bg-gray-700/30',
          activeTab: 'text-gray-100 bg-gray-600/50 border-gray-400/50',
          card: 'bg-gray-800/50 border-gray-600/30 hover:border-gray-500/50',
          text: 'text-gray-100',
          subtitle: 'text-gray-300/70',
          badge: {
            info: 'bg-blue-600/30 text-blue-200',
            event: 'bg-purple-600/30 text-purple-200',
            security: 'bg-green-600/30 text-green-200'
          }
        };
      case 'light':
        return {
          modal: 'bg-white/95 border-gray-300/50',
          tab: 'text-gray-600/80 hover:text-gray-900 hover:bg-gray-100/30',
          activeTab: 'text-gray-900 bg-gray-200/50 border-gray-400/50',
          card: 'bg-gray-50/50 border-gray-300/30 hover:border-gray-400/50',
          text: 'text-gray-900',
          subtitle: 'text-gray-600/70',
          badge: {
            info: 'bg-blue-100 text-blue-800',
            event: 'bg-purple-100 text-purple-800',
            security: 'bg-green-100 text-green-800'
          }
        };
      default:
        return {
          modal: 'bg-slate-900/95 border-blue-500/30',
          tab: 'text-blue-200/80 hover:text-blue-100 hover:bg-blue-800/30',
          activeTab: 'text-blue-100 bg-blue-600/50 border-blue-400/50',
          card: 'bg-slate-800/50 border-blue-500/30 hover:border-blue-400/50',
          text: 'text-blue-100',
          subtitle: 'text-blue-200/70',
          badge: {
            info: 'bg-blue-600/30 text-blue-200',
            event: 'bg-purple-600/30 text-purple-200',
            security: 'bg-green-600/30 text-green-200'
          }
        };
    }
  };

  const classes = getThemeClasses();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${classes.modal} backdrop-blur-md border max-w-2xl max-h-[80vh] overflow-hidden`}>
        <DialogHeader>
          <DialogTitle className={`${classes.text} text-xl font-bold`}>
            News & Updates
          </DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex space-x-1 border-b border-current/20 mb-4">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`
              px-4 py-2 rounded-t-lg font-medium transition-all duration-200 border-b-2
              ${activeTab === 'announcements' ? classes.activeTab : classes.tab}
              ${activeTab === 'announcements' ? 'border-current' : 'border-transparent'}
            `}
          >
            Announcements
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={`
              px-4 py-2 rounded-t-lg font-medium transition-all duration-200 border-b-2
              ${activeTab === 'updates' ? classes.activeTab : classes.tab}
              ${activeTab === 'updates' ? 'border-current' : 'border-transparent'}
            `}
          >
            Updates
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-96 space-y-4">
          {activeTab === 'announcements' && (
            <div className="space-y-4">
              {announcements.map((announcement) => {
                const Icon = announcement.icon;
                return (
                  <div
                    key={announcement.id}
                    className={`${classes.card} border rounded-lg p-4 transition-all duration-200 hover:scale-[1.02]`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon size={20} className={`${classes.text} mt-1 flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className={`${classes.text} font-semibold`}>{announcement.title}</h3>
                          <Badge className={classes.badge[announcement.type as keyof typeof classes.badge]}>
                            {announcement.type}
                          </Badge>
                        </div>
                        <p className={`${classes.subtitle} mb-2`}>{announcement.content}</p>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className={classes.subtitle} />
                          <span className={`${classes.subtitle} text-sm`}>
                            {formatDate(announcement.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'updates' && (
            <div className="space-y-4">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className={`${classes.card} border rounded-lg p-4 transition-all duration-200 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={classes.badge.info}>{update.version}</Badge>
                    <h3 className={`${classes.text} font-semibold`}>{update.title}</h3>
                  </div>
                  <ul className={`${classes.subtitle} space-y-1 mb-3 ml-4`}>
                    {update.changes.map((change, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-current opacity-60"></span>
                        {change}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className={classes.subtitle} />
                    <span className={`${classes.subtitle} text-sm`}>
                      {formatDate(update.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}