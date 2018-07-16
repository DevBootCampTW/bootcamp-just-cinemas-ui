export const fetchMovieDetails = () => {
  return window.fetch("http://somemovieapi.com/movie/123")
  .then((res) => res.json())
  .catch(console.log)
}