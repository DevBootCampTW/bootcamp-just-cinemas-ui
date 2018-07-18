import { RECEIVE_MOVIE_DETAILS, receiveMovieDetails, receiveMovieDetailsFailed, REQUEST_MOVIE_DETAILS, RECEIVE_MOVIE_DETAILS_FAILED } from "../actions/movieDetails";
import { loop, Cmd } from "redux-loop";
import { fetchMovieDetails } from "../effects/movieDetails";

const movieDetailsReducer = (state = { loading: false, movie: null }, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_DETAILS: return loop({
      ...state,
      loading: true,
      movie: null,
      error: null
    }, Cmd.run(fetchMovieDetails, {
      args: [action.payload],
      successActionCreator: receiveMovieDetails,
      failActionCreator: receiveMovieDetailsFailed
    }))

    case RECEIVE_MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        movie: action.payload
      }

    case RECEIVE_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        movie: null,
        error: action.payload
      }

    default: return state;
  }
}

export default movieDetailsReducer;