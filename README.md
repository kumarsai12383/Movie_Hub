🎬 MovieHub

MovieHub is a modern movie discovery web application built with React.js, Tailwind CSS, and the TMDB API. It allows users to explore trending, popular, top-rated, and upcoming movies, search for movies, view detailed information, and discover similar recommendations through a responsive and user-friendly interface.

🚀 Features
🎥 Browse Trending Movies
⭐ Explore Popular Movies
🏆 View Top Rated Movies
📅 Discover Upcoming Movies
🔍 Search Movies by Title
🎭 Filter Movies by Genre
🌍 Filter Movies by Language
📊 Sort Movies by Popularity, Rating, and Release Date
📄 Detailed Movie Information Page
🎬 Similar Movie Recommendations
⚡ Skeleton Loading States
📱 Fully Responsive Design
🔄 Dynamic Routing with React Router
🌙 Modern Dark Theme UI
🛠️ Tech Stack
Frontend
React.js
JavaScript (ES6+)
Tailwind CSS
React Router DOM
Vite
API
TMDB (The Movie Database) API
Deployment
Vercel
📸 Screenshots
Home Page
Hero Section
Trending Movies
Popular Movies
Top Rated Movies
Upcoming Movies
Search Page
Movie Search
Dynamic Results
Movie Details Page
Movie Information
Ratings
Runtime
Genres
Similar Movies
📂 Project Structure
src
│
├── api
│   └── tmdb.js
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── MovieCard.jsx
│   ├── SearchBar.jsx
│   ├── HeroLoader.jsx
│   └── MovieCardLoader.jsx
│
├── pages
│   ├── HomePage.jsx
│   ├── SearchPage.jsx
│   ├── AllMoviesPage.jsx
│   └── MovieDetailsPage.jsx
│
├── routes
│   └── AppRoutes.jsx
│
├── utils
│   └── helpFunctions.jsx
│
└── App.jsx
⚙️ Installation

Clone the repository:

git clone https://github.com/kumarsai12383/MovieHub.git

Navigate to the project:

cd MovieHub

Install dependencies:

npm install

Start development server:

npm run dev
🔑 Environment Variables

Create a .env file in the root directory:

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token
🌐 API Endpoints Used
/movie/popular
/movie/top_rated
/movie/upcoming
/movie/{movie_id}
/movie/{movie_id}/similar
/search/movie
/discover/movie
🎯 Learning Outcomes

Through this project I practiced:

API Integration
React Hooks
State Management
Dynamic Routing
Conditional Rendering
Responsive Design
Reusable Components
Search Functionality
Filtering & Sorting
Skeleton Loading UI
🔗 Live Demo

Live Website:
https://movie-hub-two-kappa.vercel.app/

GitHub Repository:
https://github.com/kumarsai12383/MovieHub

👨‍💻 Author

Kumar Sai

GitHub: https://github.com/kumarsai12383
LinkedIn: Add your LinkedIn profile here

⭐ If you like this project, consider giving it a star on GitHub!
