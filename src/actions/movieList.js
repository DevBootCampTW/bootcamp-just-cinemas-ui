export const REQUEST_MOVIE_LIST = "REQUEST_MOVIE_LIST";
export const RECEIVE_MOVIE_LIST = "RECEIVE_MOVIE_LIST";
export const RECEIVE_MOVIE_LIST_FAILED = "RECEIVE_MOVIE_LIST_FAILED";

export const requestMovieList = () => {
  console.log("its finally here");
  return {
    type: REQUEST_MOVIE_LIST
  }
}

export const receiveMovieList = (data) => {
  return {
    type: RECEIVE_MOVIE_LIST,
    payload: data
  }
}

export const receiveMovieListFailed = (error) => {
  return {
    type: RECEIVE_MOVIE_LIST_FAILED,
    payload: error
  }
}