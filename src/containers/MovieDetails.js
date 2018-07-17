import { connect } from "react-redux";
import MovieDetails from "../pages/MovieDetails";
import {requestMovieDetails} from '../actions/movieDetails';

export const mapStateToProps = (state) => {
  return {
    movie: state.movieDetails.movie,
    loading: state.movieDetails.loading,
    error: state.movieDetails.error
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (id) => dispatch(requestMovieDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);