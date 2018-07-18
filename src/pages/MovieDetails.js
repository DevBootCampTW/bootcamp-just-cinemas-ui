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

  renderStills(stills) {
    return stills.map(imgSrc => {
      return (<div key={imgSrc} className="col-md-2">
        <img style={{ width: 100 + '%' }} src={imgSrc} alt="still" />

      </div>
      )
    })
  }

  render() {

    if (this.props.loading) {
      return this.renderLoading();
    }

    if (this.props.error) {
      return this.renderError();
    }

    const movie = this.props.movie;

    if (!movie) {
      return <div></div>
    }

    return (
      <div>
        <div className="clearfix">
          <b>{movie.title}</b>
        </div>
        <img src={movie.poster} alt="Movie Poster" className="poster" width="100%" height="300rem" />
        <div style={{ paddingTop: "1rem" }}>
          <div>
            <div style={{ float: "left", 'padding-top': '10px' }}><b>SYNOPSIS</b></div>
            <div style={{ float: "right" }}><button className="btn btn-danger">BOOK SEAT</button></div>
          </div>
          <div style={{ paddingTop: "3rem" }}><p>{movie.plot}</p>
            <p><b>Sound Effects:</b> {movie.soundEffects.join(" | ")}</p>
            <p><b>IMDB Ratings:</b> {movie.imdbRating}</p>
          </div>
          <div>
            <div><b>IMAGES</b></div>
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