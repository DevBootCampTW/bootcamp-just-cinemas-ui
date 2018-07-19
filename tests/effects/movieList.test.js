import { fetchMovieList } from '../../src/effects/movieList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('MovieList [Effect]', () =>
    it('fetchMovieList should return movie json', () => {
        const mock = new MockAdapter(axios);

        const movie = { imdbId: "123", Title: "Test Movie" };
        mock.onGet('http://18.211.150.89:9090/movies/?listingType=NOW_SHOWING').reply(200, movie);

        return fetchMovieList('NOW_SHOWING')
            .then(res => {
                expect(res).toEqual(movie)
            })
    }))