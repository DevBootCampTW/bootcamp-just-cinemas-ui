import {fetchMovieDetails} from '../../src/effects/movieDetails'

describe('MovieDetails Effect', () =>
  it('fetchMovieDetails should return movie json', () => {
    const movie = { imdbId: "123", Title: "Some Movie" };
    window.fetch = jest.fn()
      .mockImplementation(() =>
        Promise.resolve(window.mockResponse(200, null, JSON.stringify(movie))))
    return fetchMovieDetails("123")
      .then(res => {
        expect(res).toEqual(movie)
      })
  }))