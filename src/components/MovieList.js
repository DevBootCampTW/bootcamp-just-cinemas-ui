import React, { Component } from 'react';
import MovieItem from './MovieItem'

class MovieList extends Component {

    componentDidMount() {
        this.props.requestMovieList();
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
                }
            </div>
        );
    }
}

export default MovieList;
