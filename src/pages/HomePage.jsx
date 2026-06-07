import Hero from "../components/Hero";
import { getPopularMovies ,getTopRatedMovies,getUpcomingMovies} from "../Api/tmdb";
import { useState, useEffect } from "react";
import HeroLoading from "../components/HeroLoader";
import MovieCardLoading from "../components/MoviecardLoader";
import Moviecard from "../components/MovieCard";
function HomePage() {
   const [PopularMovies, setMovies] = useState([]);
   const [TopRatedMovies, setTopRatedMovies] = useState([]);
   const [UpcomingMovies, setUpcomingMovies] = useState([]);
   const [HeroLoadingState, setLoading] = useState(true);
  const [MovieCardLoadingState, setMovieCardLoading] = useState(true);
  useEffect(() => {
    const PopularMoves = getPopularMovies();
    const TopRatedMoves = getTopRatedMovies();
    const UpcomingMovies = getUpcomingMovies();
    PopularMoves.then((data) => {
      setMovies(data);
      setLoading(false);
      setMovieCardLoading(false);
    }).catch((error) => {
      console.error("Error fetching popular movies:", error);
      setLoading(false);
      setMovieCardLoading(false);
    });
    TopRatedMoves.then((data) => {
      setTopRatedMovies(data);
    }).catch((error) => {
      console.error("Error fetching top rated movies:", error);
    });
    UpcomingMovies.then((data) => {
      setUpcomingMovies(data);
    }).catch((error) => {
      console.error("Error fetching upcoming movies:", error);
    });
  }, []);

  
  return (
    <div>
       {HeroLoadingState ? <HeroLoading /> : <Hero movies={PopularMovies} />}
      {MovieCardLoadingState ? <MovieCardLoading /> : <Moviecard title="Popular Movies" Movies={PopularMovies} />}
      {MovieCardLoadingState ? <MovieCardLoading /> : <Moviecard title="Top Rated Movies" Movies={TopRatedMovies} />}
      {MovieCardLoadingState ? <MovieCardLoading /> : <Moviecard title="Upcoming Movies" Movies={UpcomingMovies} />}
    </div>
  );
}
export default HomePage;