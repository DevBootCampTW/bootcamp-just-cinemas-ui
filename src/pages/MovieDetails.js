import React from 'react';

class MovieDetails extends React.Component {

  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId) {
      this.props.getMovieDetails(movieId);
    }
  }

  renderLoading() {
    return <h6 className="loader">Loading...</h6>
  }

  renderError() {
    return <h6 className="loadingError">Error loading movie details</h6>
  }

  renderMovieNotFound() {
    return <h6 className="movieNotFound">Movie not found</h6>
  }

  renderStills(stills){
    return stills.map(imgSrc => {
      return(<div className="col-xs-6 col-md-3">
        <a href="#" className="thumbnail">
          <img src={imgSrc} alt="still" />
        </a>
      </div>
      )})
  }
    
  render(){

    if(this.props.loading){
      return this.renderLoading();
    }

    if(this.props.error) {
      return this.renderError();
    }

    const movie = this.props.movie;
    if(!movie){
      return this.renderMovieNotFound();
    }


    return (
      <div>
        <div className="clearfix">
          <b>{movie.title}</b> English | Hindi
          </div>
        <img src={movie.poster} alt="Movie Poster" className="poster" />
        <div>
          <div className="clearfix">
            <b className="float-left">SYNOPSIS</b>
            <button className="float-right">BOOK SEAT</button>
          </div>
          <p>{movie.plot}</p>
          <p><b>Sound Effects:</b> {movie.soundEffects.join(" | ")}</p>
          <p><b>IMDB Ratings:</b> {movie.imdbRating}</p>
          <div>
            <b>IMAGES</b>
            <div className="row stills">
            {this.renderStills(movie.stills)}
            </div>
          </div>
        </div>

      </div>
      )
    }
  
  }
  
export default MovieDetails;