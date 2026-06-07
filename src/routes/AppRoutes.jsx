import {BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import MovieDetailsPage from '../pages/MovieDetailsPage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Favs from '../pages/Favs'
import FavContext from '../favContext/fav'
import { useState } from 'react'

import AllMoviesPage from '../pages/AllMoviesPage'
function AppRouting() {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavContext.Provider value={{ favorites, setFavorites }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<AllMoviesPage />} />
        <Route path="/favorites" element={<Favs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </FavContext.Provider>
  );
}
export default AppRouting;