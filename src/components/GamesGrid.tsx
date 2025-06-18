
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
  },
  {
    title: "Wordle",
    description: "Daily word guessing game",
    url: "https://www.nytimes.com/games/wordle/index.html",
    category: "Puzzle"
  },
  {
    title: "Sudoku",
    description: "Number placement puzzle",
    url: "https://sudoku.com/",
    category: "Puzzle"
  },
  {
    title: "Chess.com",
    description: "Online chess platform",
    url: "https://chess.com/",
    category: "Strategy"
  },
  {
    title: "Checkers",
    description: "Classic board game",
    url: "https://cardgames.io/checkers/",
    category: "Strategy"
  },
  {
    title: "Backgammon",
    description: "Ancient board game",
    url: "https://cardgames.io/backgammon/",
    category: "Strategy"
  },
  {
    title: "Solitaire",
    description: "Classic card game",
    url: "https://solitaired.com/",
    category: "Card"
  },
  {
    title: "Hearts",
    description: "Trick-taking card game",
    url: "https://cardgames.io/hearts/",
    category: "Card"
  },
  {
    title: "Spades",
    description: "Partnership card game",
    url: "https://cardgames.io/spades/",
    category: "Card"
  },
  {
    title: "Run 3",
    description: "Endless running in space",
    url: "https://www.coolmathgames.com/0-run-3",
    category: "Action"
  },
  {
    title: "Happy Wheels",
    description: "Physics-based obstacle course",
    url: "https://totaljerkface.com/happy_wheels.tjf",
    category: "Action"
  },
  {
    title: "Bloons TD",
    description: "Tower defense strategy",
    url: "https://www.coolmathgames.com/0-bloons-tower-defense-4",
    category: "Strategy"
  },
  {
    title: "Cookie Clicker",
    description: "Incremental clicking game",
    url: "https://orteil.dashnet.org/cookieclicker/",
    category: "Idle"
  }
];

interface GamesGridProps {
  theme: string;
}

const GamesGrid = ({ theme }: GamesGridProps) => {
  const handleGameClick = (game: typeof games[0]) => {
    toast({
      title: `Launching ${game.title}`,
      description: "Opening game in new tab...",
    });
    window.open(game.url, '_blank');
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          title: 'text-blue-100',
          subtitle: 'text-blue-200',
          card: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30 hover:bg-blue-800/30 hover:border-blue-400/50',
          cardTitle: 'text-blue-100 group-hover:text-blue-50',
          cardDesc: 'text-blue-300',
          button: 'bg-gradient-to-r from-blue-500/40 to-purple-600/40 hover:from-blue-500/60 hover:to-purple-600/60 border-blue-400/40 text-blue-100 hover:text-white',
          accent: 'bg-blue-400'
        };
      case 'dark':
        return {
          title: 'text-gray-100',
          subtitle: 'text-gray-200',
          card: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/30 hover:bg-gray-700/30 hover:border-gray-600/50',
          cardTitle: 'text-gray-100 group-hover:text-gray-50',
          cardDesc: 'text-gray-300',
          button: 'bg-gradient-to-r from-gray-600/40 to-gray-800/40 hover:from-gray-600/60 hover:to-gray-800/60 border-gray-600/40 text-gray-100 hover:text-white',
          accent: 'bg-gray-400'
        };
      case 'light':
        return {
          title: 'text-gray-800',
          subtitle: 'text-gray-600',
          card: 'backdrop-blur-sm bg-white/20 border-gray-300/30 hover:bg-white/30 hover:border-gray-300/50',
          cardTitle: 'text-gray-800 group-hover:text-gray-900',
          cardDesc: 'text-gray-600',
          button: 'bg-gradient-to-r from-gray-200/40 to-gray-400/40 hover:from-gray-200/60 hover:to-gray-400/60 border-gray-300/40 text-gray-800 hover:text-black',
          accent: 'bg-gray-500'
        };
      default:
        return {
          title: 'text-blue-100',
          subtitle: 'text-blue-200',
          card: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30 hover:bg-blue-800/30 hover:border-blue-400/50',
          cardTitle: 'text-blue-100 group-hover:text-blue-50',
          cardDesc: 'text-blue-300',
          button: 'bg-gradient-to-r from-blue-500/40 to-purple-600/40 hover:from-blue-500/60 hover:to-purple-600/60 border-blue-400/40 text-blue-100 hover:text-white',
          accent: 'bg-blue-400'
        };
    }
  };

  const classes = getThemeClasses();
  const categories = [...new Set(games.map(game => game.category))];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Gamepad2 className={classes.title} size={32} />
          <h2 className={`text-3xl font-bold ${classes.title}`}>Game Center</h2>
        </div>
        <p className={classes.subtitle}>
          Play your favorite unblocked games directly in your browser
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className={`text-xl font-semibold ${classes.title} mb-4 flex items-center`}>
            <span className={`w-2 h-2 ${classes.accent} rounded-full mr-3`}></span>
            {category} Games
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {games
              .filter(game => game.category === category)
              .map((game, index) => (
                <div
                  key={index}
                  className={`${classes.card} rounded-xl border p-4 transition-all duration-200 group`}
                >
                  <div className="flex flex-col h-full">
                    <h4 className={`font-semibold ${classes.cardTitle} mb-2 transition-colors`}>
                      {game.title}
                    </h4>
                    <p className={`text-sm ${classes.cardDesc} mb-4 flex-grow`}>
                      {game.description}
                    </p>
                    <Button
                      onClick={() => handleGameClick(game)}
                      className={`w-full ${classes.button} transition-all duration-200`}
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
