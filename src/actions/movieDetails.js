export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";

export const requestMovieDetails = (id) => {
  return {
    type: "REQUEST_MOVIE_DETAILS",
    payload: id
  }
}