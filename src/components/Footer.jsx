import { Link } from "react-router-dom";
import Img from "../assets/MoviesHubLogo.png";
function Footer() {
  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           
            <div>
               <div className="flex items-center justify-center">
                          <img src={Img} alt="Logo" className="h-10 w-auto" />
                          <Link
                            to="/"
                            className="text-amber-300 font-bold font-Poppins text-2xl"
                          >
                            MovieHub
                          </Link>
                        </div>

              <p className="text-slate-400">
                Discover trending, popular and upcoming movies from around the
                world.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>

              <ul className="space-y-2 text-slate-400">
                <Link to="/" className="block hover:text-white">
                  Home
                </Link>
                <Link to="/search" className="block hover:text-white">
                  Search
                </Link>
                <Link to="/movies" className="block hover:text-white">
                  All Movies
                </Link>
                
              </ul>
            </div>

            {/* Credits */}
            <div>
              <h3 className="text-white font-semibold mb-4">Powered By</h3>

              <p className="text-slate-400">TMDB API</p>

              <p className="text-slate-500 text-sm mt-2">
                This product uses the TMDB API but is not endorsed or certified
                by TMDB.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} MovieHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
