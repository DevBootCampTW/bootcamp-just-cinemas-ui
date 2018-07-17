import {MOVIE_ENDPOINT} from './endPoints';

export const fetchMovieList = () => {
    console.log("fetchMovieList")
    return window.fetch(`${MOVIE_ENDPOINT}now-showing`)
        .then((res) => res.json())
}