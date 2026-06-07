const getBackdropUrl = (path) => {
  return `https://image.tmdb.org/t/p/original${path}`;
}
const getPosterUrl = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
}
export { getBackdropUrl , getPosterUrl};