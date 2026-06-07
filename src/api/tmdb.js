const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDgwMDI5NDY1NzA5OThkODI3NTQyNmM2YzYxZWE4YSIsIm5iZiI6MTc4MDc1MzY2My4wMTMsInN1YiI6IjZhMjQyNGZmMWRiYzUzODQ1OTc2Njc5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M7lDBLoyD2xyn9w6qkp7FgSjX7OiZwEXtY2YUNJ3d0U"
const BASE_URL = "https://api.themoviedb.org/3";
async function getPopularMovies() {
  const url =
    `${BASE_URL}/movie/popular?language=en-US&page=1`;
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
    console.error("Error fetching popular movies:", error);
  }
}

async function getTopRatedMovies() {
  const url =
    `${BASE_URL}/movie/top_rated?language=en-US&page=1`;

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
    console.error("Error fetching top rated movies:", error);
  }
}

async function getUpcomingMovies() {
  const url =
     `${BASE_URL}/movie/upcoming?language=en-US&page=1`;

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
    console.error("Error fetching upcoming movies:", error);
  }
}
async function getMovieById(id) {
  const url = `${BASE_URL}/movie/${id}?language=en-US`;

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
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}
async function getSimilarMovies(id) {
  const url = `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`;
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
    console.error("Error fetching similar movies:", error);
  }
}
async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?query=${query}&language=en-US&page=1`;
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

async function getMovieVideos(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
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
    console.error("Error fetching videos:", error);
    return [];
  }
}
async function getMovies() {
  const url ='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
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
    console.log("All Movies:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}


async function getMoviesBySort(urlEndPoint) {
  const url = urlEndPoint;
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
    console.log("All Movies:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export { getPopularMovies, getTopRatedMovies ,getUpcomingMovies ,getMovieById, getSimilarMovies,searchMovies,getMovieVideos,getMovies,getMoviesBySort};
