import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { requestMovieList } from '../actions/movieList';

export const mapStateToProps = (state) => {
  return {
    movies: state.movieList.movies,
    loading: state.movieList.loading,
    location : state.movieList.location,
    language : state.movieList.language,
    error: state.movieList.error
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {

    requestMovieList: (listingType, language, location) => dispatch(requestMovieList(listingType, language, location), )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);