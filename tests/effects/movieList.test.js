import { fetchMovieList } from '../../src/effects/movieList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('MovieList [Effect]', () => {
    it('fetchMovieList should return movie json with language', () => {
        const mock = new MockAdapter(axios);
        const payloadFilter = {
            listingType: "NOW_SHOWING",
            language: "English",
            location: "Pune"
        }
        const movie = { imdbId: "123", Title: "Test Movie" };
        mock.onGet('http://localhost:9090/movies/?listingType=NOW_SHOWING&location=Pune&language=English').reply(200, movie);

        return fetchMovieList(payloadFilter)
            .then(res => {
                expect(res).toEqual(movie)
            })
    });

    it('fetchMovieList should return movie json without language filter', () => {
        const mock = new MockAdapter(axios);
        const payloadFilter = {
            listingType: "NOW_SHOWING",
            language: "All",
            location: "Pune"
        }
        const movie = { imdbId: "123", Title: "Test Movie" };
        mock.onGet('http://localhost:9090/movies/?listingType=NOW_SHOWING&location=Pune').reply(200, movie);

        return fetchMovieList(payloadFilter)
            .then(res => {
                expect(res).toEqual(movie)
            })
    });
})