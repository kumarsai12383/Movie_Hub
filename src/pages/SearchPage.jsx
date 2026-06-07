import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api/tmdb";
function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
  async function handleSearch() {
    setQuery(input);
    const results = await searchMovies(input);
    setMovies(results);
  }
  return (
    <>
      <div className="w-full h-250 h-auto mx-auto px-4 bg-gray-950 py-8 mt-16">
        <h1 className="text-3xl font-bold text-amber-300 mb-4 bg-gray-950 text-center">
          Discover Your Next Favorite Movie Search from thousands of movies
          worldwide.
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter movie title..."
            value={input}
            className="flex-1 px-4 text-white placeholder:text-red-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>

        {movies.length > 0 ? (
          <MovieCard title={`Search Results for ${query} (${movies.length})`} Movies={movies} />
        ) : (
          <div className="mt-8">
            <p className="text-white text-center">No movies found.</p>
          </div>
        )}
      </div>
    </>
  );
}
export default SearchPage;
