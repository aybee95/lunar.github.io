
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProxyInput = () => {
  const [url, setUrl] = useState("");

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
    
    // In a real implementation, this would route through a proxy server
    let formattedUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      formattedUrl = 'https://' + url;
    }
    
    toast({
      title: "Connecting through Lunar Proxy",
      description: `Routing to ${formattedUrl}`,
    });
    
    // Simulate proxy routing (in reality this would go through your proxy backend)
    setTimeout(() => {
      window.open(formattedUrl, '_blank');
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Access Any Website
          </h2>
          <p className="text-gray-300">
            Bypass restrictions and browse freely through our secure proxy
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Enter website URL (e.g., youtube.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/20"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black font-semibold transition-all duration-200 shadow-lg hover:shadow-white/25"
          >
            Connect Through Proxy
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            🔒 Secure • 🚀 Fast • 🆓 Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProxyInput;
