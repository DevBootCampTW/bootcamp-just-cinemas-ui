import {receiveMovieList, requestMovieList, receiveMovieListFailed} from "../../src/actions/movieList";

describe("MovieList Action", () => {
    it('requestMovieList should return correct action', () => {
        const action = requestMovieList();

        expect(action.type).toEqual("REQUEST_MOVIE_LIST");
    })

    it('receiveMovieList should return correct action and payload', () => {
        const data = {movies: [{title: 'test'}]};
        const action = receiveMovieList(data);
        const expected_payload = {"movies": [{"title": "test"}]};

        expect(action.type).toEqual("RECEIVE_MOVIE_LIST");
        expect(action.payload).toEqual(expected_payload);
    })

    it('receiveMovieListFailed should return error', () => {
        const error = {};
        const action = receiveMovieListFailed(error);

        expect(action.type).toEqual("RECEIVE_MOVIE_LIST_FAILED");
        expect(action.payload).toEqual({});
    })
});