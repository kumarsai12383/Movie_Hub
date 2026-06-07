import {useContext,useState,useEffect} from "react";
import { getPosterUrl } from "../utils/helpFunctions";
import { Link } from "react-router-dom";
import FavContext from "../favContext/fav";
function Favs() {
    const { favorites} = useContext(FavContext);
    const [localFavorites, setLocalFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setLocalFavorites(JSON.parse(storedFavorites));
            
        } else {
            setLocalFavorites(favorites);
            
        }
    }, [favorites]);


  return (
    <>
    <div className="w-full bg-gray-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        <div className="bg-gray-950 w-full py-8">
      <h1 className="text-3xl font-bold text-amber-50 mb-4">My Favorite Movies</h1>
      <p className="text-gray-600">This is the favorites page.</p>
      </div>
      {localFavorites.length === 0 ? (
        <p className="text-gray-500">You haven't added any favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {localFavorites.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-amber-50">{movie.title}</h2>
                <p className="text-gray-400">Rating: {movie.vote_average.toFixed(1)}</p>
                <Link to={`/movie/${movie.id}`}>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </>
  );
}
export default Favs;