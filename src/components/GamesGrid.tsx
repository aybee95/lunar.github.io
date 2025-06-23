import { Button } from "@/components/ui/button";
import { Gamepad2, Play } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const games = [
  // Action Games
  {
    title: "Fortnite",
    description: "Battle royale phenomenon",
    url: "https://now.gg/play/epic-games/4927/fortnite",
    category: "Action"
  },
  {
    title: "PUBG Mobile",
    description: "Mobile battle royale classic",
    url: "https://now.gg/play/proxima-beta/5052/pubg-mobile-resistance",
    category: "Action"
  },
  {
    title: "Call of Duty Mobile",
    description: "Premium mobile FPS experience",
    url: "https://now.gg/play/activision-publishing-inc/2609/call-of-duty-mobile",
    category: "Action"
  },
  {
    title: "Free Fire",
    description: "Fast-paced battle royale",
    url: "https://now.gg/play/garena-international-i/2124/free-fire",
    category: "Action"
  },
  {
    title: "Subway Surfers",
    description: "Endless running adventure",
    url: "https://now.gg/play/sybo/1942/subway-surfers",
    category: "Action"
  },
  {
    title: "Temple Run 2",
    description: "Endless temple adventure",
    url: "https://now.gg/play/imangi-studios/1819/temple-run-2",
    category: "Action"
  },
  {
    title: "Jetpack Joyride",
    description: "High-flying action game",
    url: "https://now.gg/play/halfbrick-studios/1695/jetpack-joyride",
    category: "Action"
  },
  {
    title: "Crossy Road",
    description: "Endless arcade hopper",
    url: "https://now.gg/play/hipster-whale/1933/crossy-road",
    category: "Action"
  },

  // Strategy Games
  {
    title: "Clash of Clans",
    description: "Build and battle strategy",
    url: "https://now.gg/play/supercell/1441/clash-of-clans",
    category: "Strategy"
  },
  {
    title: "Clash Royale",
    description: "Real-time strategy battles",
    url: "https://now.gg/play/supercell/1053/clash-royale",
    category: "Strategy"
  },
  {
    title: "Boom Beach",
    description: "Combat strategy on tropical islands",
    url: "https://now.gg/play/supercell/1958/boom-beach",
    category: "Strategy"
  },
  {
    title: "Plants vs Zombies 2",
    description: "Tower defense with plants",
    url: "https://now.gg/play/electronic-arts/1677/plants-vs-zombies-2",
    category: "Strategy"
  },
  {
    title: "Age of Empires Mobile",
    description: "Classic RTS on mobile",
    url: "https://now.gg/play/timi-studio-group/5658/age-of-empires-mobile",
    category: "Strategy"
  },

  // Racing Games
  {
    title: "Asphalt 9",
    description: "High-speed arcade racing",
    url: "https://now.gg/play/gameloft/1677/asphalt-9-legends",
    category: "Racing"
  },
  {
    title: "CSR Racing 2",
    description: "Drag racing at its finest",
    url: "https://now.gg/play/naturalmotion/1396/csr-racing-2",
    category: "Racing"
  },
  {
    title: "Real Racing 3",
    description: "Realistic racing simulation",
    url: "https://now.gg/play/electronic-arts/1677/real-racing-3",
    category: "Racing"
  },
  {
    title: "Hill Climb Racing",
    description: "Physics-based driving game",
    url: "https://now.gg/play/fingersoft/1819/hill-climb-racing",
    category: "Racing"
  },

  // RPG Games
  {
    title: "Genshin Impact",
    description: "Open-world action RPG",
    url: "https://now.gg/play/cognosphere-pte-ltd/5430/genshin-impact",
    category: "RPG"
  },
  {
    title: "Raid Shadow Legends",
    description: "Fantasy turn-based RPG",
    url: "https://now.gg/play/plarium-llc/2609/raid-shadow-legends",
    category: "RPG"
  },
  {
    title: "AFK Arena",
    description: "Idle RPG adventure",
    url: "https://now.gg/play/lilith-games/3139/afk-arena",
    category: "RPG"
  },
  {
    title: "Epic Seven",
    description: "Anime-style turn-based RPG",
    url: "https://now.gg/play/smilegate-megaport/2946/epic-seven",
    category: "RPG"
  },

  // Sports Games
  {
    title: "FIFA Mobile",
    description: "Ultimate football experience",
    url: "https://now.gg/play/electronic-arts/1677/fifa-mobile",
    category: "Sports"
  },
  {
    title: "NBA 2K Mobile",
    description: "Professional basketball action",
    url: "https://now.gg/play/2k-inc/4758/nba-2k-mobile-basketball",
    category: "Sports"
  },
  {
    title: "8 Ball Pool",
    description: "Classic billiards game",
    url: "https://now.gg/play/miniclip/1063/8-ball-pool",
    category: "Sports"
  },
  {
    title: "Golf Clash",
    description: "Real-time golf duels",
    url: "https://now.gg/play/playdemic/1396/golf-clash",
    category: "Sports"
  },

  // Puzzle Games
  {
    title: "Candy Crush Saga",
    description: "Sweet match-3 puzzle game",
    url: "https://now.gg/play/king/1441/candy-crush-saga",
    category: "Puzzle"
  },
  {
    title: "Gardenscapes",
    description: "Match-3 garden restoration",
    url: "https://now.gg/play/playrix/1677/gardenscapes",
    category: "Puzzle"
  },
  {
    title: "Homescapes",
    description: "Match-3 home renovation",
    url: "https://now.gg/play/playrix/1677/homescapes",
    category: "Puzzle"
  },
  {
    title: "Monument Valley",
    description: "Surreal puzzle adventure",
    url: "https://now.gg/play/ustwo-games/3847/monument-valley",
    category: "Puzzle"
  },
  {
    title: "Cut the Rope",
    description: "Physics puzzle with Om Nom",
    url: "https://now.gg/play/zeptolab/1819/cut-the-rope",
    category: "Puzzle"
  },

  // Simulation Games
  {
    title: "SimCity BuildIt",
    description: "City building simulation",
    url: "https://now.gg/play/electronic-arts/1677/simcity-buildit",
    category: "Simulation"
  },
  {
    title: "The Sims Mobile",
    description: "Life simulation game",
    url: "https://now.gg/play/electronic-arts/1677/the-sims-mobile",
    category: "Simulation"
  },
  {
    title: "RollerCoaster Tycoon Touch",
    description: "Theme park building sim",
    url: "https://now.gg/play/atari/2946/rollercoaster-tycoon-touch",
    category: "Simulation"
  },
  {
    title: "Hay Day",
    description: "Farm building and management",
    url: "https://now.gg/play/supercell/1441/hay-day",
    category: "Simulation"
  },

  // Adventure Games
  {
    title: "Roblox",
    description: "Create and play together",
    url: "https://now.gg/play/roblox-corporation/5349/roblox",
    category: "Adventure"
  },
  {
    title: "Minecraft",
    description: "Block building sandbox",
    url: "https://now.gg/play/mojang/4128/minecraft",
    category: "Adventure"
  },
  {
    title: "Among Us",
    description: "Social deduction game",
    url: "https://now.gg/play/innersloth-llc/4047/among-us",
    category: "Adventure"
  },
  {
    title: "Pokemon GO",
    description: "Augmented reality adventure",
    url: "https://now.gg/play/niantic-inc/1677/pokemon-go",
    category: "Adventure"
  },

  // Card Games
  {
    title: "Hearthstone",
    description: "Strategic card battles",
    url: "https://now.gg/play/blizzard-entertainment/3758/hearthstone",
    category: "Card"
  },
  {
    title: "UNO",
    description: "Classic card game",
    url: "https://now.gg/play/mattel163/2946/uno",
    category: "Card"
  },
  {
    title: "Solitaire",
    description: "Classic patience card game",
    url: "https://now.gg/play/microsoft-corporation/1677/microsoft-solitaire-collection",
    category: "Card"
  },

  // Arcade Games
  {
    title: "Pac-Man",
    description: "Classic maze chase game",
    url: "https://now.gg/play/bandai-namco/1819/pac-man",
    category: "Arcade"
  },
  {
    title: "Fruit Ninja",
    description: "Slice fruit with precision",
    url: "https://now.gg/play/halfbrick-studios/1695/fruit-ninja",
    category: "Arcade"
  },
  {
    title: "Angry Birds",
    description: "Physics-based puzzle game",
    url: "https://now.gg/play/rovio-entertainment/1942/angry-birds-reloaded",
    category: "Arcade"
  },
  {
    title: "Doodle Jump",
    description: "Endless jumping adventure",
    url: "https://now.gg/play/lima-sky/1819/doodle-jump",
    category: "Arcade"
  },

  // Cool Math Games
  {
    title: "Run 3",
    description: "Endless tunnel running game",
    url: "https://www.coolmathgames.com/0-run-3",
    category: "Arcade"
  },
  {
    title: "Papa's Pizzeria",
    description: "Pizza making time management",
    url: "https://www.coolmathgames.com/0-papas-pizzeria",
    category: "Simulation"
  },
  {
    title: "Fireboy and Watergirl",
    description: "Co-op puzzle platformer",
    url: "https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-forest-temple",
    category: "Puzzle"
  },
  {
    title: "Bloons TD 6",
    description: "Tower defense with balloons",
    url: "https://www.coolmathgames.com/0-bloons-td-6",
    category: "Strategy"
  },
  {
    title: "Duck Life",
    description: "Train your duck for races",
    url: "https://www.coolmathgames.com/0-duck-life",
    category: "Adventure"
  },
  {
    title: "World's Hardest Game",
    description: "Extremely challenging maze game",
    url: "https://www.coolmathgames.com/0-worlds-hardest-game",
    category: "Arcade"
  },
  {
    title: "Moto X3M",
    description: "Motorcycle stunt racing",
    url: "https://www.coolmathgames.com/0-moto-x3m",
    category: "Racing"
  },
  {
    title: "Papa's Freezeria",
    description: "Ice cream shop management",
    url: "https://www.coolmathgames.com/0-papas-freezeria",
    category: "Simulation"
  },
  {
    title: "Chess",
    description: "Classic strategy board game",
    url: "https://www.coolmathgames.com/0-chess",
    category: "Strategy"
  },
  {
    title: "Snake",
    description: "Classic snake growing game",
    url: "https://www.coolmathgames.com/0-snake",
    category: "Arcade"
  },
  {
    title: "2048",
    description: "Number sliding puzzle game",
    url: "https://www.coolmathgames.com/0-2048",
    category: "Puzzle"
  },
  {
    title: "Tetris",
    description: "Classic block puzzle game",
    url: "https://www.coolmathgames.com/0-tetris",
    category: "Puzzle"
  },
  {
    title: "Getting Over It",
    description: "Frustratingly difficult climbing game",
    url: "https://www.coolmathgames.com/0-getting-over-it",
    category: "Adventure"
  },
  {
    title: "Happy Wheels",
    description: "Physics-based obstacle course",
    url: "https://www.coolmathgames.com/0-happy-wheels",
    category: "Action"
  },
  {
    title: "There Is No Game",
    description: "Meta puzzle adventure",
    url: "https://www.coolmathgames.com/0-there-is-no-game",
    category: "Puzzle"
  }
];

interface GamesGridProps {
  theme: string;
  onGameClick: (title: string, url: string) => void;
}

const GamesGrid = ({ theme, onGameClick }: GamesGridProps) => {
  const handleGameClick = (game: typeof games[0]) => {
    toast({
      title: `Loading ${game.title}`,
      description: "Preparing game...",
    });
    onGameClick(game.title, game.url);
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
          Play your favorite games directly in your browser via now.gg and Cool Math Games
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
