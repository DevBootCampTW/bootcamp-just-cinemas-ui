import { MOVIE_ENDPOINT, PARAM_LISTING_TYPE, PARAM_LANGUAGE, PARAM_LOCATION } from './endPoints';
import axios from 'axios';

export const fetchMovieList = (movieFilter) => {
    let queryParams = `${PARAM_LISTING_TYPE}=${movieFilter.listingType}&${PARAM_LOCATION}=${movieFilter.location}`;
    if (movieFilter.language !== 'All') {
        queryParams = queryParams + `&${PARAM_LANGUAGE}=${movieFilter.language}`;
    }

    console.log(`${MOVIE_ENDPOINT}?${queryParams}`);

    return axios.get(`${MOVIE_ENDPOINT}?${queryParams}`)
        .then((res) => {
            return res.data
        })
}