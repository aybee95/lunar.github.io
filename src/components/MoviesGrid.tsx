
import { Button } from "@/components/ui/button";
import { Film, Play } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const movies = [
  {
    title: "Tubi",
    description: "Free movies and TV shows",
    url: "https://tubitv.com/",
    category: "Streaming"
  },
  {
    title: "Crackle",
    description: "Free movies and original series",
    url: "https://crackle.com/",
    category: "Streaming"
  },
  {
    title: "Pluto TV",
    description: "Free live TV and movies",
    url: "https://pluto.tv/",
    category: "Streaming"
  },
  {
    title: "IMDb TV",
    description: "Free movies and TV shows",
    url: "https://www.imdb.com/tv/",
    category: "Streaming"
  },
  {
    title: "Plex",
    description: "Free movies and TV shows",
    url: "https://watch.plex.tv/",
    category: "Streaming"
  },
  {
    title: "Vudu",
    description: "Movies on demand",
    url: "https://www.vudu.com/",
    category: "VOD"
  },
  {
    title: "YouTube Movies",
    description: "Rent or buy movies",
    url: "https://www.youtube.com/movies",
    category: "VOD"
  },
  {
    title: "Popcornflix",
    description: "Free full-length movies",
    url: "https://popcornflix.com/",
    category: "Streaming"
  },
  {
    title: "Filmzie",
    description: "Independent films",
    url: "https://filmzie.com/",
    category: "Streaming"
  },
  {
    title: "Kanopy",
    description: "Educational and art films",
    url: "https://kanopy.com/",
    category: "Educational"
  },
  {
    title: "Hoopla",
    description: "Library streaming service",
    url: "https://hoopladigital.com/",
    category: "Educational"
  },
  {
    title: "Archive.org",
    description: "Classic and public domain films",
    url: "https://archive.org/details/movies",
    category: "Classic"
  }
];

interface MoviesGridProps {
  theme: string;
}

const MoviesGrid = ({ theme }: MoviesGridProps) => {
  const handleMovieClick = (movie: typeof movies[0]) => {
    toast({
      title: `Opening ${movie.title}`,
      description: "Loading movie service...",
    });
    window.open(movie.url, '_blank');
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
  const categories = [...new Set(movies.map(movie => movie.category))];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Film className={classes.title} size={32} />
          <h2 className={`text-3xl font-bold ${classes.title}`}>Movie Center</h2>
        </div>
        <p className={classes.subtitle}>
          Stream movies and shows from various platforms
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className={`text-xl font-semibold ${classes.title} mb-4 flex items-center`}>
            <span className={`w-2 h-2 ${classes.accent} rounded-full mr-3`}></span>
            {category}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {movies
              .filter(movie => movie.category === category)
              .map((movie, index) => (
                <div
                  key={index}
                  className={`${classes.card} rounded-xl border p-4 transition-all duration-200 group`}
                >
                  <div className="flex flex-col h-full">
                    <h4 className={`font-semibold ${classes.cardTitle} mb-2 transition-colors`}>
                      {movie.title}
                    </h4>
                    <p className={`text-sm ${classes.cardDesc} mb-4 flex-grow`}>
                      {movie.description}
                    </p>
                    <Button
                      onClick={() => handleMovieClick(movie)}
                      className={`w-full ${classes.button} transition-all duration-200`}
                      variant="outline"
                    >
                      <Play size={16} className="mr-2" />
                      Watch Now
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

export default MoviesGrid;
