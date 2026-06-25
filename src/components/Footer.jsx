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
          <div className="logo text-slate-500 flex items-center justify-end  mt-4">
            <div>
              Build by {"  "}
              <a
                href="https://codelabs-by-kumarsai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em>
                  <span
                    style={{
                      fontSize: "larger",
                      fontWeight: "bolder",
                      marginRight: "5px",
                      color: "#dc3545",
                    }}
                  >
                    {"{"}
                  </span>
                  <span
                    className="brand-name-1"
                    style={{
                      fontSize: "larger",
                      fontWeight: "bolder",
                      color: "#ffffff",
                    }}
                  >
                    Code
                  </span>
                  <span
                    className="brand-name-2 text-danger"
                    style={{
                      color: "#dc3545",
                      fontSize: "larger",
                      fontWeight: "bolder",
                      textDecoration: "underline",
                      textDecorationColor: "#dc3545",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Labs
                  </span>
                  <span
                    style={{
                      fontSize: "larger",
                      fontWeight: "bolder",
                      marginLeft: "5px",
                      color: "#dc3545",
                    }}
                  >
                    {"}"}
                  </span>
                </em>
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-6 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()}{" "}
              <img
                src={Img}
                alt="Logo"
                className="h-6 w-auto inline-block align-middle"
              />{" "}
              MovieHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
