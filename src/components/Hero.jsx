import { getBackdropUrl } from "../utils/helpFunctions";
import { Link } from "react-router-dom";
function Hero({ movies }) {
  return (
    <>
      {movies.length > 0 && (
        <div className="hero h-screen w-full relative">
          <img
            src={getBackdropUrl(movies[0].backdrop_path)}
            alt={movies[0].title}
            className="absolute inset-0 opacity-99% w-full h-full object-cover bg-gradient-to-r bg-gradient-to-b from-black via-black to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

          {/* Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <div className="relative z-10 top-70 p-4 h-screen inset-0">
            <div classname="container mx-auto px-4 h-full flex flex-col justify-center items-start">
              <h1 className="text-red-700 text-lg md:text-2xl font-bold mb-4 flex items-center gap-2">
                Trending
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {movies[0].title}
              </h1>
              <p className="text-md md:text-xl text-white mb-3 max-w-2xl">
                {(() => {
                  if (movies[0].overview.length > 200) {
                    return movies[0].overview.substring(0, 150) + "...";
                  } else {
                    return movies[0].overview;
                  }
                })()}
              </p>
              <div className="">
                <p className="text-xl text-amber-300 font-bold mb-2">
                ⭐ {movies[0].vote_average.toFixed(1)} / 10 
              </p>
              <p className="text-lg text-gray-300">
                Release Date: {movies[0].release_date}
              </p>
              </div>
              
              <div className="flex gap-4">
                <Link to={`/movie/${movies[0].id}`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </Link>
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
                  More info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Hero;
