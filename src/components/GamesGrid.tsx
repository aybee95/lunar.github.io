
import { Button } from "@/components/ui/button";
import { Gamepad2, Play } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const games = [
  {
    title: "2048",
    description: "Addictive number puzzle game",
    url: "https://play2048.co/",
    category: "Puzzle"
  },
  {
    title: "Tetris",
    description: "Classic falling blocks game",
    url: "https://tetris.com/play-tetris",
    category: "Arcade"
  },
  {
    title: "Snake",
    description: "Retro snake eating game",
    url: "https://www.google.com/fbx?fbx=snake_arcade",
    category: "Arcade"
  },
  {
    title: "Pac-Man",
    description: "Classic maze chase game",
    url: "https://www.google.com/logos/2010/pacman10-i.html",
    category: "Arcade"
  },
  {
    title: "Slope",
    description: "High-speed ball rolling game",
    url: "https://slope-game.github.io/",
    category: "Action"
  },
  {
    title: "Flappy Bird",
    description: "Navigate through pipes",
    url: "https://flappybird.io/",
    category: "Arcade"
  },
  {
    title: "Subway Surfers",
    description: "Endless running adventure",
    url: "https://poki.com/en/g/subway-surfers",
    category: "Action"
  },
  {
    title: "Among Us",
    description: "Social deduction game",
    url: "https://www.crazygames.com/game/among-us",
    category: "Social"
  },
  {
    title: "Geometry Dash",
    description: "Rhythm-based platformer",
    url: "https://scratch.mit.edu/projects/105500895/",
    category: "Platform"
  },
  {
    title: "Minecraft Classic",
    description: "Block building sandbox",
    url: "https://classic.minecraft.net/",
    category: "Sandbox"
  },
  {
    title: "Shell Shockers",
    description: "Egg-based shooter game",
    url: "https://shellshock.io/",
    category: "Shooter"
  },
  {
    title: "Krunker",
    description: "Fast-paced FPS browser game",
    url: "https://krunker.io/",
    category: "Shooter"
  }
];

const GamesGrid = () => {
  const handleGameClick = (game: typeof games[0]) => {
    toast({
      title: `Launching ${game.title}`,
      description: "Opening game in new tab...",
    });
    window.open(game.url, '_blank');
  };

  const categories = [...new Set(games.map(game => game.category))];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Gamepad2 className="text-cyan-400" size={32} />
          <h2 className="text-3xl font-bold text-white">Game Center</h2>
        </div>
        <p className="text-gray-300">
          Play your favorite unblocked games directly in your browser
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
            {category} Games
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {games
              .filter(game => game.category === category)
              .map((game, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-200 group hover:border-cyan-400/50"
                >
                  <div className="flex flex-col h-full">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {game.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4 flex-grow">
                      {game.description}
                    </p>
                    <Button
                      onClick={() => handleGameClick(game)}
                      className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/30 text-cyan-400 hover:text-white transition-all duration-200"
                      variant="outline"
                    >
                      <Play size={16} className="mr-2" />
                      Play Now
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesGrid;
