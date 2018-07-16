import React from 'react';

class MovieDetails extends React.Component {

  componentDidMount(){
    const movieId = this.props.match.params.id;
    if(movieId){
      this.props.getMovieDetails(movieId);
    }
  }

  render(){
    return (
      <div>
        Movie Details coming soon...
      </div>
    )
  }

}

export default MovieDetails;