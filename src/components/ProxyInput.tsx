
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
      <div className="backdrop-blur-sm bg-blue-900/20 rounded-2xl border border-blue-400/30 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-blue-100 mb-2">
            Access Any Website
          </h2>
          <p className="text-blue-200">
            Bypass restrictions and browse freely through our secure proxy
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={20} />
            <Input
              type="text"
              placeholder="Enter website URL (e.g., youtube.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-12 h-14 bg-blue-900/30 border-blue-400/40 text-blue-100 placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            Connect Through Proxy
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-blue-300">
            🔒 Secure • 🚀 Fast • 🆓 Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProxyInput;
