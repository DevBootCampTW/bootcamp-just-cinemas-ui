import { MOVIE_ENDPOINT } from './endPoints';
import axios from 'axios';

export const fetchMovieList = () => {
    return axios.get(`${MOVIE_ENDPOINT}now-showing`)
        .then((res) => {
            return res.data
        })
}