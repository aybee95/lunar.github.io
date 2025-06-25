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
  {
    title: "Happy Wheels",
    description: "Physics-based obstacle course",
    url: "https://www.coolmathgames.com/0-happy-wheels",
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
  {
    title: "Bloons TD 6",
    description: "Tower defense with balloons",
    url: "https://www.coolmathgames.com/0-bloons-td-6",
    category: "Strategy"
  },
  {
    title: "Chess",
    description: "Classic strategy board game",
    url: "https://www.coolmathgames.com/0-chess",
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
  {
    title: "Moto X3M",
    description: "Motorcycle stunt racing",
    url: "https://www.coolmathgames.com/0-moto-x3m",
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
  {
    title: "Fireboy and Watergirl",
    description: "Co-op puzzle platformer",
    url: "https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-forest-temple",
    category: "Puzzle"
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
    title: "There Is No Game",
    description: "Meta puzzle adventure",
    url: "https://www.coolmathgames.com/0-there-is-no-game",
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
  {
    title: "Papa's Pizzeria",
    description: "Pizza making time management",
    url: "https://www.coolmathgames.com/0-papas-pizzeria",
    category: "Simulation"
  },
  {
    title: "Papa's Freezeria",
    description: "Ice cream shop management",
    url: "https://www.coolmathgames.com/0-papas-freezeria",
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
  {
    title: "Duck Life",
    description: "Train your duck for races",
    url: "https://www.coolmathgames.com/0-duck-life",
    category: "Adventure"
  },
  {
    title: "Getting Over It",
    description: "Frustratingly difficult climbing game",
    url: "https://www.coolmathgames.com/0-getting-over-it",
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
  {
    title: "Run 3",
    description: "Endless tunnel running game",
    url: "https://www.coolmathgames.com/0-run-3",
    category: "Arcade"
  },
  {
    title: "World's Hardest Game",
    description: "Extremely challenging maze game",
    url: "https://www.coolmathgames.com/0-worlds-hardest-game",
    category: "Arcade"
  },
  {
    title: "Snake",
    description: "Classic snake growing game",
    url: "https://www.coolmathgames.com/0-snake",
    category: "Arcade"
  },

  // HTML/Flash Games
  {
    title: "Super Smash Flash 2",
    description: "Fan-made Smash Bros clone",
    url: "https://www.ssf2.com/play/",
    category: "Flash"
  },
  {
    title: "Stick War",
    description: "Strategic stick figure warfare",
    url: "https://www.crazygames.com/game/stick-war-legacy",
    category: "Flash"
  },
  {
    title: "Madness Interactive",
    description: "Action-packed stick figure combat",
    url: "https://www.newgrounds.com/portal/view/118826",
    category: "Flash"
  },
  {
    title: "Territory War",
    description: "Turn-based stick figure battles",
    url: "https://www.crazygames.com/game/territory-war",
    category: "Flash"
  },
  {
    title: "Balloon Tower Defense",
    description: "Classic tower defense",
    url: "https://www.crazygames.com/game/bloons-tower-defense",
    category: "Flash"
  },
  {
    title: "Fancy Pants Adventure",
    description: "Stylish platformer adventure",
    url: "https://www.crazygames.com/game/fancy-pants-adventure",
    category: "Flash"
  },
  {
    title: "Bloxorz",
    description: "3D block puzzle game",
    url: "https://www.crazygames.com/game/bloxorz",
    category: "Flash"
  },
  {
    title: "Line Rider",
    description: "Physics-based sledding game",
    url: "https://www.linerider.com/",
    category: "Flash"
  },
  {
    title: "Raft Wars",
    description: "Turn-based shooting game",
    url: "https://www.crazygames.com/game/raft-wars",
    category: "Flash"
  },
  {
    title: "Bowman",
    description: "Archery physics game",
    url: "https://www.crazygames.com/game/bowman",
    category: "Flash"
  },

  // Neal.fun Games
  {
    title: "The Deep Sea",
    description: "Explore ocean depths",
    url: "https://neal.fun/deep-sea/",
    category: "Neal.fun"
  },
  {
    title: "The Size of Space",
    description: "Explore the universe scale",
    url: "https://neal.fun/size-of-space/",
    category: "Neal.fun"
  },
  {
    title: "Asteroid Launcher",
    description: "Simulate asteroid impacts",
    url: "https://neal.fun/asteroid-launcher/",
    category: "Neal.fun"
  },
  {
    title: "Absurd Trolley Problems",
    description: "Moral dilemma scenarios",
    url: "https://neal.fun/absurd-trolley-problems/",
    category: "Neal.fun"
  },
  {
    title: "Infinite Craft",
    description: "Combine elements to create new ones",
    url: "https://neal.fun/infinite-craft/",
    category: "Neal.fun"
  },
  {
    title: "Password Game",
    description: "Create increasingly complex passwords",
    url: "https://neal.fun/password-game/",
    category: "Neal.fun"
  },
  {
    title: "Spend Bill Gates' Money",
    description: "Shop with unlimited budget",
    url: "https://neal.fun/spend/",
    category: "Neal.fun"
  },
  {
    title: "Baby Map",
    description: "Visualize global birth rates",
    url: "https://neal.fun/baby-map/",
    category: "Neal.fun"
  },
  {
    title: "Internet Artifacts",
    description: "Explore web history",
    url: "https://neal.fun/internet-artifacts/",
    category: "Neal.fun"
  },
  {
    title: "Draw Your Island",
    description: "Create your own island paradise",
    url: "https://neal.fun/draw-your-island/",
    category: "Neal.fun"
  },

  // Emulator Games - Game Boy
  {
    title: "Pokemon Red",
    description: "Classic GB Pokemon adventure",
    url: "https://www.playretrogames.com/4911-pokemon-red-version",
    category: "Game Boy"
  },
  {
    title: "Pokemon Blue",
    description: "Original Pokemon journey",
    url: "https://www.playretrogames.com/4912-pokemon-blue-version",
    category: "Game Boy"
  },
  {
    title: "Super Mario Land",
    description: "Mario's first Game Boy adventure",
    url: "https://www.playretrogames.com/4913-super-mario-land",
    category: "Game Boy"
  },
  {
    title: "Tetris (GB)",
    description: "The definitive portable puzzle",
    url: "https://www.playretrogames.com/4914-tetris",
    category: "Game Boy"
  },
  {
    title: "Zelda: Link's Awakening",
    description: "Zelda's handheld masterpiece",
    url: "https://www.playretrogames.com/4915-zelda-links-awakening",
    category: "Game Boy"
  },

  // Emulator Games - Game Boy Color
  {
    title: "Pokemon Gold",
    description: "Enhanced Pokemon experience",
    url: "https://www.playretrogames.com/4916-pokemon-gold-version",
    category: "Game Boy Color"
  },
  {
    title: "Pokemon Silver",
    description: "Second generation Pokemon",
    url: "https://www.playretrogames.com/4917-pokemon-silver-version",
    category: "Game Boy Color"
  },
  {
    title: "Pokemon Crystal",
    description: "Ultimate Gen 2 Pokemon game",
    url: "https://www.playretrogames.com/4918-pokemon-crystal-version",
    category: "Game Boy Color"
  },
  {
    title: "Zelda: Oracle of Ages",
    description: "Time-traveling Zelda adventure",
    url: "https://www.playretrogames.com/4919-zelda-oracle-of-ages",
    category: "Game Boy Color"
  },
  {
    title: "Super Mario Bros. Deluxe",
    description: "Enhanced classic Mario",
    url: "https://www.playretrogames.com/4920-super-mario-bros-deluxe",
    category: "Game Boy Color"
  },

  // Emulator Games - Game Boy Advance
  {
    title: "Pokemon Ruby",
    description: "Third generation Pokemon",
    url: "https://www.playretrogames.com/4921-pokemon-ruby-version",
    category: "Game Boy Advance"
  },
  {
    title: "Pokemon Sapphire",
    description: "Hoenn region adventure",
    url: "https://www.playretrogames.com/4922-pokemon-sapphire-version",
    category: "Game Boy Advance"
  },
  {
    title: "Pokemon Emerald",
    description: "Enhanced Hoenn experience",
    url: "https://www.playretrogames.com/4923-pokemon-emerald-version",
    category: "Game Boy Advance"
  },
  {
    title: "Super Mario Advance",
    description: "Mario 2 remake for GBA",
    url: "https://www.playretrogames.com/4924-super-mario-advance",
    category: "Game Boy Advance"
  },
  {
    title: "Zelda: Minish Cap",
    description: "Shrinking Zelda adventure",
    url: "https://www.playretrogames.com/4925-zelda-minish-cap",
    category: "Game Boy Advance"
  },
  {
    title: "Fire Emblem",
    description: "Strategic RPG masterpiece",
    url: "https://www.playretrogames.com/4926-fire-emblem",
    category: "Game Boy Advance"
  },
  {
    title: "Metroid Fusion",
    description: "Sci-fi action adventure",
    url: "https://www.playretrogames.com/4927-metroid-fusion",
    category: "Game Boy Advance"
  },

  // Emulator Games - NES
  {
    title: "Super Mario Bros.",
    description: "The game that started it all",
    url: "https://www.playretrogames.com/4928-super-mario-bros",
    category: "NES"
  },
  {
    title: "Super Mario Bros. 3",
    description: "Mario's greatest NES adventure",
    url: "https://www.playretrogames.com/4929-super-mario-bros-3",
    category: "NES"
  },
  {
    title: "Zelda: Ocarina of Time",
    description: "Epic N64 Zelda adventure",
    url: "https://www.playretrogames.com/4930-zelda-ocarina-of-time",
    category: "N64"
  },
  {
    title: "Super Mario 64",
    description: "3D Mario revolution",
    url: "https://www.playretrogames.com/4931-super-mario-64",
    category: "N64"
  },
  {
    title: "Mario Kart 64",
    description: "Classic kart racing",
    url: "https://www.playretrogames.com/4932-mario-kart-64",
    category: "N64"
  },

  // Emulator Games - SNES
  {
    title: "Super Mario World",
    description: "Mario's SNES masterpiece",
    url: "https://www.playretrogames.com/4933-super-mario-world",
    category: "SNES"
  },
  {
    title: "Zelda: A Link to the Past",
    description: "Timeless Zelda classic",
    url: "https://www.playretrogames.com/4934-zelda-link-to-the-past",
    category: "SNES"
  },
  {
    title: "Super Metroid",
    description: "Atmospheric sci-fi adventure",
    url: "https://www.playretrogames.com/4935-super-metroid",
    category: "SNES"
  },
  {
    title: "Donkey Kong Country",
    description: "Jungle platforming adventure",
    url: "https://www.playretrogames.com/4936-donkey-kong-country",
    category: "SNES"
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
          Play games from now.gg, Cool Math Games, classic emulators, Neal.fun, and more!
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
