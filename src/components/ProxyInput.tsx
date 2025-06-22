
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Shield, Zap, Globe, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProxyInputProps {
  theme: string;
  onOpenEmbedded?: (url: string, title: string) => void;
}

const ProxyInput = ({ theme, onOpenEmbedded }: ProxyInputProps) => {
  const [input, setInput] = useState("");
  const [selectedProxy, setSelectedProxy] = useState("ultraviolet");

  const proxyOptions = [
    {
      id: "ultraviolet",
      name: "Ultraviolet",
      description: "Most reliable, handles modern sites",
      icon: <Shield size={16} />,
      color: "blue"
    },
    {
      id: "rammerhead",
      name: "Rammerhead",
      description: "Fast and lightweight proxy",
      icon: <Zap size={16} />,
      color: "purple"
    },
    {
      id: "womginx",
      name: "Womginx",
      description: "Advanced obfuscation",
      icon: <Globe size={16} />,
      color: "green"
    }
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          container: 'backdrop-blur-xl bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-blue-900/30 border-blue-400/40 shadow-2xl',
          input: 'bg-blue-900/40 border-blue-400/50 text-blue-100 placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/30',
          button: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/30',
          text: 'text-blue-100',
          subtext: 'text-blue-200',
          proxyCard: 'bg-blue-800/30 border-blue-400/30 hover:bg-blue-700/40 hover:border-blue-300/50',
          activeProxy: 'bg-blue-600/50 border-blue-300/60 shadow-lg shadow-blue-500/20'
        };
      case 'dark':
        return {
          container: 'backdrop-blur-xl bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-gray-900/30 border-gray-600/40 shadow-2xl',
          input: 'bg-gray-800/40 border-gray-600/50 text-gray-100 placeholder:text-gray-300 focus:border-gray-600 focus:ring-gray-600/30',
          button: 'bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 shadow-lg hover:shadow-gray-500/30',
          text: 'text-gray-100',
          subtext: 'text-gray-200',
          proxyCard: 'bg-gray-700/30 border-gray-600/30 hover:bg-gray-600/40 hover:border-gray-500/50',
          activeProxy: 'bg-gray-600/50 border-gray-400/60 shadow-lg shadow-gray-500/20'
        };
      case 'light':
        return {
          container: 'backdrop-blur-xl bg-gradient-to-br from-white/30 via-gray-50/20 to-white/30 border-gray-300/40 shadow-2xl',
          input: 'bg-white/40 border-gray-300/50 text-gray-800 placeholder:text-gray-600 focus:border-gray-400 focus:ring-gray-400/30',
          button: 'bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 shadow-lg hover:shadow-gray-400/30',
          text: 'text-gray-800',
          subtext: 'text-gray-700',
          proxyCard: 'bg-gray-200/30 border-gray-300/30 hover:bg-gray-300/40 hover:border-gray-400/50',
          activeProxy: 'bg-gray-300/50 border-gray-400/60 shadow-lg shadow-gray-400/20'
        };
      default:
        return {
          container: 'backdrop-blur-xl bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-blue-900/30 border-blue-400/40 shadow-2xl',
          input: 'bg-blue-900/40 border-blue-400/50 text-blue-100 placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/30',
          button: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/30',
          text: 'text-blue-100',
          subtext: 'text-blue-200',
          proxyCard: 'bg-blue-800/30 border-blue-400/30 hover:bg-blue-700/40 hover:border-blue-300/50',
          activeProxy: 'bg-blue-600/50 border-blue-300/60 shadow-lg shadow-blue-500/20'
        };
    }
  };

  const classes = getThemeClasses();

  const isUrl = (text: string) => {
    try {
      const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;
      const domainPattern = /^[a-z0-9-]+\.[a-z]{2,}$/i;
      
      return urlPattern.test(text) || domainPattern.test(text) || text.startsWith('http://') || text.startsWith('https://');
    } catch {
      return false;
    }
  };

  const getProxyUrl = (originalUrl: string) => {
    const baseUrl = originalUrl.startsWith('http://') || originalUrl.startsWith('https://') ? originalUrl : 'https://' + originalUrl;
    
    switch (selectedProxy) {
      case "ultraviolet":
        return `https://uv.astroid.gg/service/${encodeURIComponent(baseUrl)}`;
      case "rammerhead":
        return `https://ram.astroid.gg/service/${encodeURIComponent(baseUrl)}`;
      case "womginx":
        return `https://wom.astroid.gg/service/${encodeURIComponent(baseUrl)}`;
      default:
        return baseUrl;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast({
        title: "Please enter something",
        description: "Enter a website URL or search query",
        variant: "destructive",
      });
      return;
    }
    
    let finalUrl: string;
    let title: string;
    
    if (isUrl(input)) {
      finalUrl = getProxyUrl(input);
      title = input;
      
      toast({
        title: "Opening website",
        description: `Loading ${input} via ${proxyOptions.find(p => p.id === selectedProxy)?.name} proxy`,
      });
    } else {
      // Use DuckDuckGo for search queries
      const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
      finalUrl = getProxyUrl(searchUrl);
      title = `Search: ${input}`;
      
      toast({
        title: "Searching",
        description: `Searching for "${input}" via secure proxy`,
      });
    }
    
    console.log('Opening URL:', finalUrl);
    
    if (onOpenEmbedded) {
      onOpenEmbedded(finalUrl, title);
    } else {
      setTimeout(() => {
        window.open(finalUrl, '_blank');
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className={`${classes.container} rounded-3xl border-2 p-8 shadow-2xl`}>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className={`${classes.text} mr-3`} size={32} />
            <h2 className={`text-3xl font-bold ${classes.text}`}>
              Advanced Proxy
            </h2>
          </div>
          <p className={`${classes.subtext} text-lg`}>
            Bypass restrictions • Stay anonymous • Access everything
          </p>
        </div>

        {/* Proxy Selection */}
        <div className="mb-8">
          <h3 className={`text-lg font-semibold ${classes.text} mb-4 flex items-center`}>
            <Lock className="mr-2" size={20} />
            Choose Your Proxy Engine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {proxyOptions.map((proxy) => (
              <div
                key={proxy.id}
                onClick={() => setSelectedProxy(proxy.id)}
                className={`${
                  selectedProxy === proxy.id ? classes.activeProxy : classes.proxyCard
                } rounded-2xl border-2 p-4 cursor-pointer transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center mb-2">
                  {proxy.icon}
                  <h4 className={`ml-2 font-semibold ${classes.text}`}>{proxy.name}</h4>
                </div>
                <p className={`text-sm ${classes.subtext}`}>{proxy.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${classes.subtext}`} size={20} />
            <Input
              type="text"
              placeholder="Enter URL or search query"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`pl-14 h-16 text-lg ${classes.input} rounded-2xl border-2`}
            />
          </div>
          
          <Button 
            type="submit"
            className={`w-full h-16 text-lg ${classes.button} text-white font-bold transition-all duration-300 hover:scale-105 rounded-2xl`}
          >
            <Shield className="mr-3" size={20} />
            Connect Securely
            <ArrowRight className="ml-3" size={20} />
          </Button>
        </form>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className={`${classes.proxyCard} rounded-xl p-3 border`}>
            <Shield size={24} className={`${classes.text} mx-auto mb-2`} />
            <p className={`text-sm font-medium ${classes.text}`}>Secure</p>
          </div>
          <div className={`${classes.proxyCard} rounded-xl p-3 border`}>
            <Zap size={24} className={`${classes.text} mx-auto mb-2`} />
            <p className={`text-sm font-medium ${classes.text}`}>Fast</p>
          </div>
          <div className={`${classes.proxyCard} rounded-xl p-3 border`}>
            <Lock size={24} className={`${classes.text} mx-auto mb-2`} />
            <p className={`text-sm font-medium ${classes.text}`}>Private</p>
          </div>
          <div className={`${classes.proxyCard} rounded-xl p-3 border`}>
            <Globe size={24} className={`${classes.text} mx-auto mb-2`} />
            <p className={`text-sm font-medium ${classes.text}`}>Unblocked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProxyInput;
