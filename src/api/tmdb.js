const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDgwMDI5NDY1NzA5OThkODI3NTQyNmM2YzYxZWE4YSIsIm5iZiI6MTc4MDc1MzY2My4wMTMsInN1YiI6IjZhMjQyNGZmMWRiYzUzODQ1OTc2Njc5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M7lDBLoyD2xyn9w6qkp7FgSjX7OiZwEXtY2YUNJ3d0U";

async function getPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Popular Movies:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
}

async function getTopRatedMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Top Rated Movies:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
  }
}

async function getUpcomingMovies() {
  const url =
     'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Upcoming Movies:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
}
async function getMovieById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Movie Details:", data);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}
async function getSimilarMovies(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Similar Movies:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
  }
}
async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`;
 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + TMBD_TOKEN,
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}
export { getPopularMovies, getTopRatedMovies ,getUpcomingMovies ,getMovieById, getSimilarMovies,searchMovies};
