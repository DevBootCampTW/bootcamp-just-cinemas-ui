import { RECEIVE_MOVIE_LIST, receiveMovieList, receiveMovieListFailed, REQUEST_MOVIE_LIST, RECEIVE_MOVIE_LIST_FAILED } from "../actions/movieList";
import { loop, Cmd } from "redux-loop";
import { fetchMovieList } from "../effects/movieList";

const movieListReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case REQUEST_MOVIE_LIST: return loop({
                ...state,
            loading: true,
            movies: [],
            error: null
    }, Cmd.run(fetchMovieList, {
        args: [action.payload],
        successActionCreator: receiveMovieList,
        failActionCreator: receiveMovieListFailed
    }))

case RECEIVE_MOVIE_LIST:
        return {
            ...state,
            loading: false,
            error: null,
        movies: action.payload
}

case RECEIVE_MOVIE_LIST_FAILED:
        return {
            ...state,
            loading: false,
        movies: [],
        error: action.payload
}
}
    return state;
}

export default movieListReducer;