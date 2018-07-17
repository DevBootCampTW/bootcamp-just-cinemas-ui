import * as actions from '../../src/actions/movieDetails';

describe('MovieDetails actions', ()=> {
  it('should create RECEIVE_MOVIE_DETAILS action', ()=> {
    const data = {}
    const action = actions.receiveMovieDetails(data);

    expect(action).toEqual({type: "RECEIVE_MOVIE_DETAILS", payload: data})
  })

  it('should create RECEIVE_MOVIE_DETAILS action', ()=> {
    const err = {}
    const action = actions.receiveMovieDetailsFailed(err);

    expect(action).toEqual({type: "RECEIVE_MOVIE_DETAILS_FAILED", payload: err})
  })
})