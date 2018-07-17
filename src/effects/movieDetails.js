import {MOVIE_ENDPOINT} from './endPoints';

export const fetchMovieDetails = (id) => {
  console.log("fetchMovieDetails ")
  return window.fetch(`${MOVIE_ENDPOINT}${id}`)
  .then((res) => res.json())
}