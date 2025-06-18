
interface MoviesGridProps {
  theme: string;
}

const MoviesGrid = ({ theme }: MoviesGridProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          card: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30 hover:bg-blue-800/30',
          text: 'text-blue-100',
          subtext: 'text-blue-200'
        };
      case 'dark':
        return {
          card: 'backdrop-blur-sm bg-gray-800/20 border-gray-600/30 hover:bg-gray-700/30',
          text: 'text-gray-100',
          subtext: 'text-gray-200'
        };
      case 'light':
        return {
          card: 'backdrop-blur-sm bg-white/20 border-gray-300/30 hover:bg-gray-200/30',
          text: 'text-gray-800',
          subtext: 'text-gray-700'
        };
      default:
        return {
          card: 'backdrop-blur-sm bg-blue-900/20 border-blue-400/30 hover:bg-blue-800/30',
          text: 'text-blue-100',
          subtext: 'text-blue-200'
        };
    }
  };

  const classes = getThemeClasses();

  const movies = [
    { name: "Netflix", url: "https://netflix.com", description: "Movies & TV Shows" },
    { name: "Hulu", url: "https://hulu.com", description: "Streaming Platform" },
    { name: "Disney+", url: "https://disneyplus.com", description: "Disney Content" },
    { name: "Amazon Prime", url: "https://primevideo.com", description: "Prime Video" },
    { name: "HBO Max", url: "https://hbomax.com", description: "HBO Content" },
    { name: "YouTube", url: "https://youtube.com", description: "Video Platform" },
    { name: "Twitch", url: "https://twitch.tv", description: "Live Streaming" },
    { name: "Crunchyroll", url: "https://crunchyroll.com", description: "Anime Streaming" }
  ];

  const handleMovieClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.name}
            onClick={() => handleMovieClick(movie.url)}
            className={`${classes.card} rounded-xl border p-4 cursor-pointer transition-all duration-200 hover:scale-105`}
          >
            <h3 className={`font-semibold ${classes.text} mb-2`}>{movie.name}</h3>
            <p className={`text-sm ${classes.subtext}`}>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
