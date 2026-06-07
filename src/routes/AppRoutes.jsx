import {BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import MovieDetailsPage from '../pages/MovieDetailsPage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function AppRouting() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default AppRouting;