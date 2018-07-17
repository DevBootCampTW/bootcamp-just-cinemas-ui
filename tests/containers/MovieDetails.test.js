import {mapStateToProps, mapDispatchToProps} from '../../src/containers/MovieDetails';

describe('MovieDetailsContainer', ()=> {
  it('should map stateToProps', ()=> {
    const state = {
      movieDetails: {
        movie: {},
        loading: true,
        error: {}
      }
    }
    const props = mapStateToProps(state);

    expect(props.loading).toBeTruthy();
    expect(props.movie).toBe(state.movieDetails.movie)
    expect(props.error).toBe(state.movieDetails.error)
  })

  it('should map dispatchToProps', ()=> {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    props.getMovieDetails("123");
    expect(dispatch).toBeCalledWith({type: "REQUEST_MOVIE_DETAILS", payload: "123"});
  })
})