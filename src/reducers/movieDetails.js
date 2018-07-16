import { RECEIVE_MOVIE_DETAILS, receiveMovieDetails, receiveMovieDetailsFailed, REQUEST_MOVIE_DETAILS } from "../actions/movieDetails";
import { loop, Cmd } from "redux-loop";
import { fetchMovieDetails } from "../effects/movieDetails";

const movieDetailsReducer = (state = { loading: false, movie: null }, action) => {
  console.log(action.type); 
  switch(action.type){
    case REQUEST_MOVIE_DETAILS: return loop({
      ...state,
      loading: true
    }, Cmd.run(fetchMovieDetails, {
      args: [action.payload],
      successActionCreator: receiveMovieDetails,
      failActionCreator: receiveMovieDetailsFailed
    }))
  }
  return state;
}

export default movieDetailsReducer;