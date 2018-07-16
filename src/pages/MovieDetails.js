import React from 'react';

class MovieDetails extends React.Component {

  componentDidMount(){
    const movieId = this.props.match.params.id;
    if(movieId){
      console.log(movieId);
      // api call
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