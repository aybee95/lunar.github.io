import { useState } from "react";
import { X, AlertTriangle, Info, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertBannerProps {
  theme: string;
  type?: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function AlertBanner({ 
  theme, 
  type = 'info', 
  title, 
  message, 
  dismissible = true, 
  onDismiss 
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'error': return AlertCircle;
      case 'success': return CheckCircle;
      default: return Info;
    }
  };

  const getThemeClasses = () => {
    const baseClasses = {
      cosmic: {
        info: 'bg-blue-600/20 border-blue-400/50 text-blue-100',
        warning: 'bg-yellow-600/20 border-yellow-400/50 text-yellow-100',
        error: 'bg-red-600/20 border-red-400/50 text-red-100',
        success: 'bg-green-600/20 border-green-400/50 text-green-100'
      },
      dark: {
        info: 'bg-blue-900/40 border-blue-600/50 text-blue-200',
        warning: 'bg-yellow-900/40 border-yellow-600/50 text-yellow-200',
        error: 'bg-red-900/40 border-red-600/50 text-red-200',
        success: 'bg-green-900/40 border-green-600/50 text-green-200'
      },
      light: {
        info: 'bg-blue-50 border-blue-300 text-blue-800',
        warning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
        error: 'bg-red-50 border-red-300 text-red-800',
        success: 'bg-green-50 border-green-300 text-green-800'
      }
    };

    return baseClasses[theme as keyof typeof baseClasses]?.[type] || baseClasses.cosmic[type];
  };

  const Icon = getIcon();

  return (
    <div className={`
      ${getThemeClasses()}
      border backdrop-blur-md px-4 py-3 flex items-center gap-3 w-full
      animate-fade-in
    `}>
      <Icon size={20} className="flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {dismissible && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="h-6 w-6 p-0 hover:bg-current/20"
        >
          <X size={16} />
        </Button>
      )}
    </div>
  );
}