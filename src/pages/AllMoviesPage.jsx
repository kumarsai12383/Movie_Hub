import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getMoviesBySort } from "../api/tmdb";

import { getPosterUrl } from "../utils/helpFunctions";
import { searchMovies } from "../api/tmdb";
import MovieCardLoading from "../components/MoviecardLoader";
function AllMoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("all");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [input, setInput] = useState("");
  const [Genre, setGenre] = useState("all");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
  function NextPageChange() {
    const newPage = page + 1;
    setPage(newPage);
  }
  function PreviousPageChange() {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
    }
  }
  async function handleSearch() {
    setLoading(true);
    setQuery(input);
    const results = await searchMovies(input);
    setMovies(results);
    setLoading(false);
  }
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      let url = `https://api.themoviedb.org/3/discover/movie?&page=${page}`;
      if (language !== "all") {
        url += `&with_original_language=${language}`;
      }
      if (sortBy) {
        url += `&sort_by=${sortBy}`;
      }
      if (Genre !== "all") {
        url += `&with_genres=${Genre}`;
      }
      const moviesData = await getMoviesBySort(url);
      setMovies(moviesData);
      setLoading(false);
    };
    fetchMovies();
  }, [language, sortBy, Genre, page]);

  return (
    <>
      <div className="w-full h-250 h-auto mx-auto px-4 bg-gray-950 py-8 mt-16">
        <div className="flex items-center justify-center gap-4">
          <div className="flex w-1/2 gap-4">
            <input
              type="text"
              placeholder="Enter movie title..."
              value={input}
              className="flex-1 px-4  text-white placeholder:text-red-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <select
              value={language}
              className="bg-gray-800 px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="all">All Languages</option>
              <option value="te">Telugu</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
              <option value="en">English</option>
            </select>
            <select
              value={sortBy}
              className="bg-gray-800 px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity.desc">Sort by Popularity</option>
              <option value="vote_average.desc">Sort by Rating</option>
              <option value="release_date.desc">Sort by Release Date</option>
            </select>
            <select
              value={Genre}
              className="bg-gray-800 px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="all">All Genres</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="release_date.desc">Sort by Release Date</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="max-w-7xl mx-auto mt-8">
            <MovieCardLoading />
          </div>
        ) : movies.length > 0 ? (
          <div className="max-w-7xl mx-auto mt-8">
            <p className="text-white text-center">
              Search Results for {query} ({movies.length})
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="flex flex-col justify-between h-auto bg-gray-950 rounded-lg  shadow-lg hover:scale-102 transition-transform duration-300 "
                >
                  <img
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <div>
                      <h2 className="text-lg font-bold text-white mb-2">
                        {movie.title}{" "}
                        {movie.original_title !== movie.title &&
                          `(${movie.original_title})`}
                      </h2>
                      <span className="text-sm text-amber-300 mb-2">
                        Lang: {movie.original_language}
                      </span>
                    </div>

                    <span className="text-sm text-gray-400 mb-2">
                      {movie.overview.length > 100
                        ? movie.overview.substring(0, 100) + "..."
                        : movie.overview}
                    </span>

                    <p className="text-sm text-amber-300 font-bold mb-2">
                      Rating :{" "}
                      {movie.vote_average > 0
                        ? `${movie.vote_average.toFixed(1)}⭐`
                        : "Coming Soon"}
                    </p>
                    <p className="text-sm text-gray-400 ">
                      Release Date: {movie.release_date}
                    </p>
                  </div>
                  <div className="p-4">
                    <Link to={`/movie/${movie.id}`}>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </Link>
                  </div>
                 
                </div>
              ))}
            </div>
             <div className="flex items-center justify-center gap-4 mt-8">
                    
                   
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded" onClick={() => PreviousPageChange()} disabled={page === 1}>
                      Previous Page
                    </button>
                     <span className="mx-2 text-white">Page of {page}</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded" onClick={() => NextPageChange()} >
                      Next Page
                    </button>
                  </div>
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-white text-center">No movies found.</p>
          </div>
        )}
      </div>
    </>
  );
}
export default AllMoviesPage;
