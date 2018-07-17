import { Cmd, loop } from 'redux-loop';
import movieListReducer from '../../src/reducers/movieList';
import {fetchMovieList} from '../../src/effects/movieList';
import {receiveMovieList, receiveMovieListFailed} from '../../src/actions/movieList';

describe('MovieList [Reducer]', () => {

  it('should return same state if action does not match', ()=> {
    const newState = movieListReducer(undefined, {});

    expect(newState).toEqual({movies: [], loading: false});
  })

  it('should return a new state with loading on REQUEST_MOVIE_LIST action ', () => {
    const action = { type: "REQUEST_MOVIE_LIST" };
    const state = {movies: [], loading: false};

    const newState = movieListReducer(state, action);

    const expectedState = loop({
      loading: true,
      movies: [],
      error: null
    },
      Cmd.run(fetchMovieList, {
        args: [undefined],
        successActionCreator: receiveMovieList,
        failActionCreator: receiveMovieListFailed
      }));

    
      expect(newState).toEqual(expectedState);
  })

  it('should set movies list from payload to state', ()=> {
    const action = {
      type: "RECEIVE_MOVIE_LIST",
      payload: {movies: {title: 'Test Movies'}}
    };
    const state = {movies: [], loading: true};
    const newState = movieListReducer(state, action);

    const expectedState = {loading: false, movies: action.payload}
    expect(newState).toEqual(expectedState);
  })

  it('should set error from payload to state on failure to receive MovieList', ()=> {
    const action = {
      type: "RECEIVE_MOVIE_LIST_FAILED",
      payload: {}
    };
    const state = {movies: [], loading: true};
    const newState = movieListReducer(state, action);

    const expectedState = {loading: false, movies: [], error: action.payload}
    expect(newState).toEqual(expectedState);
  })
})