export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";
export const RECEIVE_MOVIE_DETAILS = "RECEIVE_MOVIE_DETAILS";
export const RECEIVE_MOVIE_DETAILS_FAILED = "RECEIVE_MOVIE_DETAILS_FAILED";

export const requestMovieDetails = (id) => {
  return {
    type: REQUEST_MOVIE_DETAILS,
    payload: id
  }
}

export const receiveMovieDetails = (data) => {
  return {
    type: RECEIVE_MOVIE_DETAILS,
    payload: data
  }
}

export const receiveMovieDetailsFailed = (error) => {
  return {
    type: RECEIVE_MOVIE_DETAILS_FAILED,
    payload: error
  }
}