import { fetchMovieList } from '../../src/effects/movieList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('MovieList [Effect]', () =>
    it('fetchMovieList should return movie json', () => {
        const mock = new MockAdapter(axios);

        const movie = { imdbId: "123", Title: "Test Movie" };
        mock.onGet('http://localhost:9090/movies/now-showing').reply(200, movie);

        return fetchMovieList()
            .then(res => {
                expect(res).toEqual(movie)
            })
    }))