import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { requestMovieList } from '../actions/movieList';

export const mapStateToProps = (state) => {
  return {
    movies: state.movieList.movies,
    loading: state.movieList.loading,
    error: state.movieList.error
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {

    requestMovieList: (listingType) => dispatch(requestMovieList(listingType))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);