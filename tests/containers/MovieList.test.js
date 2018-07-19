import {mapStateToProps, mapDispatchToProps} from '../../src/containers/MovieList';

describe("MovieList [Container]", () => {
    it("should return state on mapStateToProps", () => {
        const state = {
            movieList: {
                movies: {title: 'test'}
            }
        };

        const props = mapStateToProps(state);

        expect(props.movies).toBe(state.movieList.movies)
    })

    it("should dispatch mapDispatchToProps on requestMovieList", () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        props.requestMovieList('NOW_SHOWING');

        expect(dispatch).toBeCalledWith({type: "REQUEST_MOVIE_LIST", payload: 'NOW_SHOWING'});
    })
});