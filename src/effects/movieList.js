import { MOVIE_ENDPOINT,PARAM_LISTING_TYPE, PARAM_LANGUAGE, PARAM_LOCATION } from './endPoints';
import axios from 'axios';

export const fetchMovieList = (movieFilter) => {
    return axios.get(`${MOVIE_ENDPOINT}?${PARAM_LISTING_TYPE}=${movieFilter.listingType}&${PARAM_LANGUAGE}=${movieFilter.language}&${PARAM_LOCATION}=${movieFilter.location}`)
        .then((res) => {
            return res.data
        })
}