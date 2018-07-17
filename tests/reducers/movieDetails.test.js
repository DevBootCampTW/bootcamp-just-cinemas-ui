import { Cmd, loop } from 'redux-loop';
import movieDetailsReducer from '../../src/reducers/movieDetails';
import {fetchMovieDetails} from '../../src/effects/movieDetails';
import {receiveMovieDetails, receiveMovieDetailsFailed} from '../../src/actions/movieDetails';

describe('MovieDetails Reducer', () => {

  it('should return same state if action does not match', ()=> {
    const newState = movieDetailsReducer(undefined, {});

    expect(newState).toEqual({movie: null, loading: false});
  })

  it('should return a new state with loading on REQUEST_MOVIE_DETAILS action ', () => {
    const action = {
      type: "REQUEST_MOVIE_DETAILS",
      payload: "123"
    };
    const state = {movie: {}, loading: false};

    const newState = movieDetailsReducer(state, action);

    const expectedState = loop({
      loading: true,
      movie: null,
      error: null
    },
      Cmd.run(fetchMovieDetails, {
        args: ["123"],
        successActionCreator: receiveMovieDetails,
        failActionCreator: receiveMovieDetailsFailed
      }));

    
      expect(newState).toEqual(expectedState);
  })

  it('should set movie data from payload to state', ()=> {
    const action = {
      type: "RECEIVE_MOVIE_DETAILS",
      payload: {}
    };
    const state = {movie: null, loading: true};
    const newState = movieDetailsReducer(state, action);

    const expectedState = {loading: false, movie: action.payload}
    expect(newState).toEqual(expectedState);
  })

  it('should set error from payload to state', ()=> {
    const action = {
      type: "RECEIVE_MOVIE_DETAILS_FAILED",
      payload: {}
    };
    const state = {movie: null, loading: true};
    const newState = movieDetailsReducer(state, action);

    const expectedState = {loading: false, movie: null, error: action.payload}
    expect(newState).toEqual(expectedState);
  })
})