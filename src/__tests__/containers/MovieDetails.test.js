import {mapStateToProps, mapDispatchToProps} from '../../containers/MovieDetails';

describe('MovieDetailsContainer', ()=> {
  it('should map stateToProps', ()=> {
    const state = {
      movieDetails: {
        movie: {},
        loading: true
      }
    }
    const props = mapStateToProps(state);

    expect(props.loading).toBeTruthy();
    expect(props.movie).toBe(state.movieDetails.movie)
  })

  it('should map dispatchToProps', ()=> {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    props.getMovieDetails("123");
    expect(dispatch).toBeCalledWith({type: "REQUEST_MOVIE_DETAILS", payload: "123"});
  })
})