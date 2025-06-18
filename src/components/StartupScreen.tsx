
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface StartupScreenProps {
  theme: string;
  onSuccess: () => void;
}

const StartupScreen = ({ theme, onSuccess }: StartupScreenProps) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      if (password === 'dogcat2') {
        setMessage('SUCCESS');
        setTimeout(() => {
          onSuccess();
        }, 1000);
      } else {
        setMessage('INCORRECT');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
          text: 'text-white',
          input: 'bg-white/10 border-white/20 text-white placeholder:text-white/60',
        };
      case 'dark':
        return {
          bg: 'bg-gradient-to-br from-gray-900 to-black',
          text: 'text-white',
          input: 'bg-white/10 border-white/20 text-white placeholder:text-white/60',
        };
      case 'light':
        return {
          bg: 'bg-gradient-to-br from-gray-100 to-white',
          text: 'text-gray-900',
          input: 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500',
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900',
          text: 'text-white',
          input: 'bg-white/10 border-white/20 text-white placeholder:text-white/60',
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <div className={`fixed inset-0 z-50 ${classes.bg} flex flex-col items-center justify-center`}>
      <div className="text-center space-y-8 p-8">
        <h1 className={`text-4xl font-bold ${classes.text}`}>Welcome</h1>
        <p className={`text-xl ${classes.text} opacity-80`}>Please enter the password</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`text-center text-lg h-12 ${classes.input}`}
            disabled={isLoading}
          />
          
          <Button 
            type="submit" 
            disabled={isLoading || !password}
            className="w-full h-12 text-lg"
          >
            {isLoading ? 'Checking...' : 'Enter'}
          </Button>
        </form>
        
        {message && (
          <div className={`text-2xl font-bold ${classes.text} ${
            message === 'SUCCESS' ? 'text-green-400' : 'text-red-400'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupScreen;
