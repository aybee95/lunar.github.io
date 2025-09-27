import { Play } from "lucide-react";
import fnafPoster from "@/assets/posters/fnaf-poster.jpg";
import venomPoster from "@/assets/posters/venom-poster.jpg";
import spidermanPoster from "@/assets/posters/spiderman-poster.jpg";
import blackpantherPoster from "@/assets/posters/blackpanther-poster.jpg";
import homealonePoster from "@/assets/posters/homealone-poster.jpg";
import maskPoster from "@/assets/posters/mask-poster.jpg";
import ironmanPoster from "@/assets/posters/ironman-poster.jpg";
import shrekPoster from "@/assets/posters/shrek-poster.jpg";

interface MoviesGridProps {
  theme: string;
  onMovieClick: (title: string, url: string) => void;
}

const MoviesGrid = ({ theme, onMovieClick }: MoviesGridProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          card: 'backdrop-blur-sm bg-slate-900/20 border-blue-400/20 hover:bg-blue-800/30',
          text: 'text-blue-100',
          title: 'text-blue-100',
          year: 'text-blue-300',
          overlay: 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
        };
      case 'dark':
        return {
          card: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/20 hover:bg-gray-700/30',
          text: 'text-gray-100',
          title: 'text-gray-100',
          year: 'text-gray-300',
          overlay: 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
        };
      case 'light':
        return {
          card: 'backdrop-blur-sm bg-white/20 border-gray-300/20 hover:bg-gray-200/30',
          text: 'text-gray-800',
          title: 'text-gray-800',
          year: 'text-gray-600',
          overlay: 'bg-gradient-to-t from-white/80 via-white/20 to-transparent'
        };
      default:
        return {
          card: 'backdrop-blur-sm bg-slate-900/20 border-blue-400/20 hover:bg-blue-800/30',
          text: 'text-blue-100',
          title: 'text-blue-100',
          year: 'text-blue-300',
          overlay: 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
        };
    }
  };

  const classes = getThemeClasses();

  const movies = [
    { 
      title: "Five Nights at Freddy's", 
      year: "2023",
      poster: fnafPoster,
      url: "https://drive.google.com/file/d/1U9iKneXKo4ViYy4bFQIvE_yY6V7RlLVK/view",
      genre: "Horror"
    },
    { 
      title: "Venom: Let There Be Carnage", 
      year: "2021",
      poster: venomPoster,
      url: "https://drive.google.com/file/d/13d5gq3Kx3koobcfRTVyH9Hhum3s8Fxag/view",
      genre: "Action"
    },
    { 
      title: "Spider-Man", 
      year: "2002",
      poster: spidermanPoster,
      url: "https://drive.google.com/file/d/1bQpgzMav6AHi3UYnAagHPsGyraC0GWK_/view",
      genre: "Action"
    },
    { 
      title: "Black Panther", 
      year: "2018",
      poster: blackpantherPoster,
      url: "https://drive.google.com/file/d/1GdMksUpH7ghCBF1j4sEmJU9hmZ3pPpkn/view",
      genre: "Action"
    },
    { 
      title: "Home Alone", 
      year: "1990",
      poster: homealonePoster,
      url: "https://drive.google.com/file/d/18YKNCTokG3B7ZWzCE3thunyDJMktLxnm/view?usp=drive_link",
      genre: "Comedy"
    },
    { 
      title: "The Mask", 
      year: "1994",
      poster: maskPoster,
      url: "https://drive.google.com/file/d/1ExVaSRcps4wvIcRczczvBPSGYxUkfvXE/view?usp=drive_link",
      genre: "Comedy"
    },
    { 
      title: "Iron Man", 
      year: "2008",
      poster: ironmanPoster,
      url: "https://drive.google.com/file/d/1fY14oN36eGTIl6PF8_b03-1cg4bN6jwL/view?usp=drive_link",
      genre: "Action"
    },
    { 
      title: "Shrek", 
      year: "2001",
      poster: shrekPoster,
      url: "https://drive.google.com/file/d/1ohXNP73ZyD2VISZZ0aV_rL2MSWskf9NX/view?usp=drive_link",
      genre: "Animation"
    }
  ];

  const handleMovieClick = (movie: typeof movies[0]) => {
    onMovieClick(movie.title, movie.url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className={`text-3xl font-bold ${classes.title} mb-8`}>Movies & Shows</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.title}
            onClick={() => handleMovieClick(movie)}
            className={`group relative ${classes.card} rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border`}
          >
            {/* Movie Poster */}
            <div className="relative aspect-[2/3] overflow-hidden">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${classes.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              
              {/* Genre Badge */}
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                <span className="text-xs text-white font-medium">{movie.genre}</span>
              </div>
            </div>
            
            {/* Movie Info */}
            <div className="p-4">
              <h3 className={`font-semibold ${classes.title} mb-1 truncate`}>{movie.title}</h3>
              <p className={`text-sm ${classes.year}`}>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
