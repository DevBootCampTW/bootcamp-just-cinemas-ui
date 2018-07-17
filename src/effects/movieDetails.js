import { MOVIE_ENDPOINT } from './endPoints';
import axios from 'axios';

export const fetchMovieDetails = (id) => {
  return axios.get(`${MOVIE_ENDPOINT}${id}`)
    .then((res) => {
      return res.data
    })
}