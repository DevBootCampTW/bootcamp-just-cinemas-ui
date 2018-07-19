import { MOVIE_ENDPOINT,PARAM_LISTING_TYPE } from './endPoints';
import axios from 'axios';

export const fetchMovieList = (listingType) => {
    return axios.get(`${MOVIE_ENDPOINT}?${PARAM_LISTING_TYPE}=${listingType}`)
        .then((res) => {
            return res.data
        })
}