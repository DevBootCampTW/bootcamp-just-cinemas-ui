import { fetchMovieDetails } from '../../src/effects/movieDetails';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('MovieDetails Effect', () =>
  it('fetchMovieDetails should return movie json', () => {
    const mock = new MockAdapter(axios);

    const movie = { imdbId: "123", Title: "Some Movie" };
    mock.onGet('http://18.211.150.89:9090/movies/123').reply(200, movie);

    return fetchMovieDetails("123")
      .then(res => {
        expect(res).toEqual(movie)
      })
  }))