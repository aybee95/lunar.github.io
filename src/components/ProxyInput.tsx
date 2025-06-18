
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProxyInputProps {
  theme: string;
  onOpenEmbedded?: (url: string, title: string) => void;
}

const ProxyInput = ({ theme, onOpenEmbedded }: ProxyInputProps) => {
  const [url, setUrl] = useState("");

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30',
          input: 'bg-blue-900/30 border-blue-400/40 text-blue-100 placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20',
          button: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
          text: 'text-blue-100',
          subtext: 'text-blue-200',
          quickButton: 'bg-blue-600/60 hover:bg-blue-500/60 text-blue-100'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/30',
          input: 'bg-gray-800/30 border-gray-600/40 text-gray-100 placeholder:text-gray-300 focus:border-gray-600 focus:ring-gray-600/20',
          button: 'bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900',
          text: 'text-gray-100',
          subtext: 'text-gray-200',
          quickButton: 'bg-gray-600/60 hover:bg-gray-500/60 text-gray-100'
        };
      case 'light':
        return {
          container: 'backdrop-blur-sm bg-white/20 border-gray-300/30',
          input: 'bg-white/30 border-gray-300/40 text-gray-800 placeholder:text-gray-600 focus:border-gray-400 focus:ring-gray-400/20',
          button: 'bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500',
          text: 'text-gray-800',
          subtext: 'text-gray-700',
          quickButton: 'bg-gray-200/60 hover:bg-gray-300/60 text-gray-800'
        };
      default:
        return {
          container: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30',
          input: 'bg-blue-900/30 border-blue-400/40 text-blue-100 placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20',
          button: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
          text: 'text-blue-100',
          subtext: 'text-blue-200',
          quickButton: 'bg-blue-600/60 hover:bg-blue-500/60 text-blue-100'
        };
    }
  };

  const classes = getThemeClasses();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Please enter a URL",
        description: "Enter a website URL to access through the proxy",
        variant: "destructive",
      });
      return;
    }
    
    let formattedUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      formattedUrl = 'https://' + url;
    }
    
    toast({
      title: "Connecting through Lunar Proxy",
      description: `Routing to ${formattedUrl}`,
    });
    
    if (onOpenEmbedded) {
      onOpenEmbedded(formattedUrl, url);
    } else {
      setTimeout(() => {
        window.open(formattedUrl, '_blank');
      }, 1000);
    }
  };

  const handleQuickAccess = (site: string, url: string) => {
    toast({
      title: `Opening ${site}`,
      description: "Loading in embedded browser",
    });
    
    if (onOpenEmbedded) {
      onOpenEmbedded(url, site);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className={`${classes.container} rounded-2xl border p-8 shadow-2xl`}>
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-semibold ${classes.text} mb-2`}>
            Access Any Website
          </h2>
          <p className={classes.subtext}>
            Bypass restrictions and browse freely through our secure proxy
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Globe className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${classes.subtext}`} size={20} />
            <Input
              type="text"
              placeholder="Enter website URL (e.g., youtube.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={`pl-12 h-14 ${classes.input}`}
            />
          </div>
          
          <Button 
            type="submit"
            className={`w-full h-14 ${classes.button} text-white font-semibold transition-all duration-200 shadow-lg`}
          >
            Connect Through Proxy
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </form>
        
        <div className="mt-6">
          <p className={`text-sm ${classes.subtext} mb-3 text-center`}>Quick Access:</p>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => handleQuickAccess('Google', 'https://google.com')}
              className={`${classes.quickButton} px-4 py-2`}
              variant="ghost"
            >
              Google
            </Button>
            <Button
              onClick={() => handleQuickAccess('DuckDuckGo', 'https://duckduckgo.com')}
              className={`${classes.quickButton} px-4 py-2`}
              variant="ghost"
            >
              DuckDuckGo
            </Button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className={`text-sm ${classes.subtext}`}>
            Secure • Fast • Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProxyInput;
