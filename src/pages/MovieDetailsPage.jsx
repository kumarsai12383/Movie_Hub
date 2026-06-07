import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getMovieById } from "../api/tmdb";
import {getSimilarMovies} from "../api/tmdb";
import { getPosterUrl, getBackdropUrl } from "../utils/helpFunctions";

import HeroLoading from "../components/HeroLoader";
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const movieData = await getMovieById(movieId);
      setMovie(movieData);
      setLoading(false);
    };
    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const similarMoviesData = await getSimilarMovies(movieId);
      setSimilarMovies(similarMoviesData);
    };
    if (movieId) {
      fetchSimilarMovies();
    }
  }, [movieId]);

  return (
    <>
      {loading ? (
        <HeroLoading />
      ) : (
        <>
          <div className="relative min-h-screen">
            <img
              src={getBackdropUrl(movie.backdrop_path)}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-black/80" />

            <div className="relative z-10">
              <div className="w-full h-auto mt-16 mx-auto p-4">
                <div className="flex justify-center items-center">
                  <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-4">
                      <img
                        src={getPosterUrl(movie.poster_path)}
                        alt={movie.title}
                        className="w-auto h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <h1 className="text-4xl font-bold mb-4 text-amber-300">
                        {movie.title}
                      </h1>

                      <p className="text-lg text-gray-300 mb-6">
                        {movie.tagline}
                      </p>
                      <p className="text-md text-gray-400 mb-6">
                        Genres:{" "}
                        {movie.genres.map((genre) => genre.name).join(", ")}
                      </p>
                      <div className="flex gap-4">
                        <p className="text-xl text-amber-300 font-bold mb-6">
                          ⭐ {movie.vote_average.toFixed(1)} / 10
                        </p>
                        <p className="text-md text-gray-400 mb-6">
                          Runtime: {movie.runtime} minutes
                        </p>
                        <p className="text-md text-gray-400 mb-6">
                          Release Date: {movie.release_date}
                        </p>
                      </div>

                      <p className="text-lg text-gray-300 mb-6">
                        {movie.overview}
                      </p>
                      <div className="flex gap-4">
                        <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                          Watch Trailer
                        </button>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                          ❤️ Favorite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MovieCard title="Similar Movies" Movies={similarMovies} />
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
