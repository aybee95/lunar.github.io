import { useState } from "react";
import { Code, Search, MessageSquare, Hash, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface ToolsModalProps {
  theme: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ToolsModal({ theme, isOpen, onClose }: ToolsModalProps) {
  const [activeTool, setActiveTool] = useState<'encoder' | 'injector' | 'search' | 'chat'>('encoder');
  const [encoderInput, setEncoderInput] = useState('');
  const [encoderOutput, setEncoderOutput] = useState('');
  const [encoderMode, setEncoderMode] = useState<'encode' | 'decode'>('encode');
  const [injectorCode, setInjectorCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [chatQuery, setChatQuery] = useState('');

  const tools = [
    { id: 'encoder', title: 'Encoder/Decoder', icon: Hash, description: 'Encode or decode text' },
    { id: 'injector', title: 'JS Injector', icon: Code, description: 'Inject JavaScript code' },
    { id: 'search', title: 'Enhanced Search', icon: Search, description: 'Advanced search tools' },
    { id: 'chat', title: 'Chat Assistant', icon: MessageSquare, description: 'AI chat helper' }
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          modal: 'bg-slate-900/95 border-blue-500/30',
          sidebar: 'bg-slate-800/50 border-blue-500/30',
          content: 'bg-slate-800/30',
          button: 'text-blue-200/80 hover:text-blue-100 hover:bg-blue-800/30',
          activeButton: 'text-blue-100 bg-blue-600/50 border-blue-400/50',
          text: 'text-blue-100',
          subtitle: 'text-blue-200/70',
          input: 'bg-slate-800/50 border-blue-500/30 text-blue-100',
          primaryButton: 'bg-blue-600 hover:bg-blue-700 text-white'
        };
      case 'dark':
        return {
          modal: 'bg-gray-900/95 border-gray-600/30',
          sidebar: 'bg-gray-800/50 border-gray-600/30',
          content: 'bg-gray-800/30',
          button: 'text-gray-300/80 hover:text-gray-100 hover:bg-gray-700/30',
          activeButton: 'text-gray-100 bg-gray-600/50 border-gray-400/50',
          text: 'text-gray-100',
          subtitle: 'text-gray-300/70',
          input: 'bg-gray-800/50 border-gray-600/30 text-gray-100',
          primaryButton: 'bg-gray-600 hover:bg-gray-700 text-white'
        };
      case 'light':
        return {
          modal: 'bg-white/95 border-gray-300/50',
          sidebar: 'bg-gray-50/50 border-gray-300/30',
          content: 'bg-gray-50/30',
          button: 'text-gray-600/80 hover:text-gray-900 hover:bg-gray-100/30',
          activeButton: 'text-gray-900 bg-gray-200/50 border-gray-400/50',
          text: 'text-gray-900',
          subtitle: 'text-gray-600/70',
          input: 'bg-white/50 border-gray-300/30 text-gray-900',
          primaryButton: 'bg-gray-800 hover:bg-gray-900 text-white'
        };
      default:
        return {
          modal: 'bg-slate-900/95 border-blue-500/30',
          sidebar: 'bg-slate-800/50 border-blue-500/30',
          content: 'bg-slate-800/30',
          button: 'text-blue-200/80 hover:text-blue-100 hover:bg-blue-800/30',
          activeButton: 'text-blue-100 bg-blue-600/50 border-blue-400/50',
          text: 'text-blue-100',
          subtitle: 'text-blue-200/70',
          input: 'bg-slate-800/50 border-blue-500/30 text-blue-100',
          primaryButton: 'bg-blue-600 hover:bg-blue-700 text-white'
        };
    }
  };

  const classes = getThemeClasses();

  const handleEncode = () => {
    if (encoderMode === 'encode') {
      setEncoderOutput(btoa(encoderInput));
    } else {
      try {
        setEncoderOutput(atob(encoderInput));
      } catch (error) {
        setEncoderOutput('Invalid base64 string');
      }
    }
  };

  const handleInjectCode = () => {
    try {
      // In a real implementation, you would inject this into the current page
      // For demo purposes, we'll just show an alert
      eval(injectorCode);
    } catch (error) {
      alert('Error executing code: ' + error);
    }
  };

  const handleSearch = () => {
    const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`;
    window.open(searchUrl, '_blank');
  };

  const handleChatSubmit = () => {
    // Placeholder for chat functionality
    alert('Chat feature coming soon!');
  };

  const renderToolContent = () => {
    switch (activeTool) {
      case 'encoder':
        return (
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button
                onClick={() => setEncoderMode('encode')}
                variant={encoderMode === 'encode' ? 'default' : 'outline'}
                className={encoderMode === 'encode' ? classes.primaryButton : ''}
              >
                Encode
              </Button>
              <Button
                onClick={() => setEncoderMode('decode')}
                variant={encoderMode === 'decode' ? 'default' : 'outline'}
                className={encoderMode === 'decode' ? classes.primaryButton : ''}
              >
                Decode
              </Button>
            </div>
            <div>
              <Label className={classes.text}>Input Text</Label>
              <Textarea
                value={encoderInput}
                onChange={(e) => setEncoderInput(e.target.value)}
                className={`${classes.input} mt-1`}
                placeholder={`Enter text to ${encoderMode}...`}
                rows={4}
              />
            </div>
            <Button onClick={handleEncode} className={classes.primaryButton}>
              {encoderMode === 'encode' ? 'Encode' : 'Decode'} Text
            </Button>
            <div>
              <Label className={classes.text}>Output</Label>
              <Textarea
                value={encoderOutput}
                readOnly
                className={`${classes.input} mt-1`}
                rows={4}
              />
            </div>
          </div>
        );

      case 'injector':
        return (
          <div className="space-y-4">
            <div>
              <Label className={classes.text}>JavaScript Code</Label>
              <Textarea
                value={injectorCode}
                onChange={(e) => setInjectorCode(e.target.value)}
                className={`${classes.input} mt-1 font-mono`}
                placeholder="console.log('Hello World!');"
                rows={8}
              />
            </div>
            <Button onClick={handleInjectCode} className={classes.primaryButton}>
              <Code size={16} className="mr-2" />
              Execute Code
            </Button>
            <div className={`${classes.subtitle} text-sm`}>
              <strong>Warning:</strong> Only run trusted JavaScript code. This will execute on the current page.
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="space-y-4">
            <div>
              <Label className={classes.text}>Search Query</Label>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${classes.input} mt-1`}
                placeholder="Enter your search query..."
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} className={classes.primaryButton}>
              <Search size={16} className="mr-2" />
              Search with DuckDuckGo
            </Button>
            <div className="space-y-2">
              <h4 className={`${classes.text} font-semibold`}>Quick Searches</h4>
              <div className="flex flex-wrap gap-2">
                {['Proxy sites', 'Unblocked games', 'VPN services', 'Privacy tools'].map((query) => (
                  <Badge
                    key={query}
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => {
                      setSearchQuery(query);
                      const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
                      window.open(searchUrl, '_blank');
                    }}
                  >
                    {query}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );

      case 'chat':
        return (
          <div className="space-y-4">
            <div>
              <Label className={classes.text}>Ask a Question</Label>
              <Textarea
                value={chatQuery}
                onChange={(e) => setChatQuery(e.target.value)}
                className={`${classes.input} mt-1`}
                placeholder="How can I improve my privacy online?"
                rows={4}
              />
            </div>
            <Button onClick={handleChatSubmit} className={classes.primaryButton}>
              <MessageSquare size={16} className="mr-2" />
              Send Message
            </Button>
            <div className={`${classes.subtitle} text-sm`}>
              <strong>Coming Soon:</strong> AI-powered chat assistant for proxy and privacy questions.
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${classes.modal} backdrop-blur-md border max-w-4xl max-h-[80vh] overflow-hidden`}>
        <DialogHeader>
          <DialogTitle className={`${classes.text} text-xl font-bold`}>
            Tools & Utilities
          </DialogTitle>
        </DialogHeader>

        <div className="flex h-96">
          {/* Sidebar */}
          <div className={`${classes.sidebar} border-r w-48 p-4 space-y-2`}>
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id as any)}
                  className={`
                    w-full p-3 rounded-lg text-left transition-all duration-200 border
                    ${activeTool === tool.id ? classes.activeButton : classes.button}
                    ${activeTool === tool.id ? 'border-current/30' : 'border-transparent'}
                    hover:scale-105
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} />
                    <span className="font-medium text-sm">{tool.title}</span>
                  </div>
                  <p className="text-xs opacity-70">{tool.description}</p>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className={`${classes.content} flex-1 p-6 overflow-y-auto`}>
            {renderToolContent()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}