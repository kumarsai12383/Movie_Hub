import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getMovieById } from "../api/tmdb";
import YoutubeLogo from "../assets/Youtube_Icon.png";
import { getMovieVideos } from "../api/tmdb";
import { useContext } from "react";
import FavContext from "../favContext/fav";
import { getSimilarMovies } from "../api/tmdb";
import { getPosterUrl, getBackdropUrl } from "../utils/helpFunctions";

import HeroLoading from "../components/HeroLoader";
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { favorites, setFavorites } = useContext(FavContext);
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  function handleAddToFavorites() {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id))
      localStorage.setItem("favorites", JSON.stringify(favorites.filter((fav) => fav.id !== movie.id)));
      setAddedToFavorites(false);
    } else {
      setFavorites([...favorites, movie]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
      setAddedToFavorites(true);
    }
  }
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
    const fetchVideos = async () => {
      const videosData = await getMovieVideos(movieId);
      const trailer = videosData.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );
      setVideos(trailer ? [trailer] : []);
    };
    if (movieId) {
      fetchSimilarMovies();
      fetchVideos();
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
                <div className="">
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
                        <a
                          href={videos.length > 0 ? `#YoutubeSection` : "#"}
                          className=" text-white font-bold py-2 px-4 rounded cursor-pointer glassy"
                        >
                          {videos.length > 0 ? (
                            <div className="flex">
                              <img
                                src={YoutubeLogo}
                                alt="Play Icon"
                                className="w-6 h-6 mr-2"
                              />{" "}
                              Watch Trailer
                            </div>
                          ) : (
                            "Trailer Not Available"
                          )}
                        </a>
                        <button
                          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {handleAddToFavorites()}}
                        >
                          {addedToFavorites ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
                        </button>
                      </div>
                    </div>
                  </div>
                  {videos.length > 0 && (
                    <div id="YoutubeSection" className="mt-8 max-w-6xl mx-auto">
                      <iframe
                        src={`https://www.youtube.com/embed/${videos[0].key}`}
                        title="Movie Trailer"
                        allowFullScreen
                        className="w-full h-screen rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {similarMovies.length > 0 ? (
            <div>
              <MovieCard
                title={`Similar Movies (${similarMovies.length})`}
                Movies={similarMovies}
              />
            </div>
          ) : (
            <div className="w-full bg-gray-950 mx-auto h-50 flex items-center justify-center">
              <div className="gap-2">
                <p className="text-white text-center mb-5">
                  No similar movies found.
                </p>
                <Link
                  to="/movies"
                  className="text-white bg-red-800 hover:text-amber-400 mt-4 p-3 rounded font-bold"
                >
                  Explore Movies
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
