
import { Moon } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Moon 
              size={36} 
              className="text-cyan-400 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
              fill="none"
              stroke="currentColor"
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Lunar Proxy
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
