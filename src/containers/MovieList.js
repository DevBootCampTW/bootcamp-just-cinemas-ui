import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { requestMovieList } from '../actions/movieList';

export const mapStateToProps = (state) => {
  return {
    movies: state.movieList.movies
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {

    requestMovieList: () => dispatch(requestMovieList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);