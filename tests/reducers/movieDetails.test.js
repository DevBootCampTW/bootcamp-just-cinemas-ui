import { Cmd, loop } from 'redux-loop';
import movieDetailsReducer from '../../src/reducers/movieDetails';
import {fetchMovieDetails} from '../../src/effects/movieDetails';
import {receiveMovieDetails, receiveMovieDetailsFailed} from '../../src/actions/movieDetails';

describe('MovieDetails Reducer', () => {
  it('should', () => {
    const action = {
      type: "REQUEST_MOVIE_DETAILS",
      payload: "123"
    };
    const newState = movieDetailsReducer(undefined, action);

    const expectedState = loop({
      loading: true,
      movie: null
    },
      Cmd.run(fetchMovieDetails, {
        args: ["123"],
        successActionCreator: receiveMovieDetails,
        failActionCreator: receiveMovieDetailsFailed
      }));

    
      expect(newState).toEqual(expectedState);

  })
})