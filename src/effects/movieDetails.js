import {MOVIE_ENDPOINT} from './endPoints';

export const fetchMovieDetails = (id) => {
  return window.fetch(`${MOVIE_ENDPOINT}${id}`)
  .then((res) => res.json())
}