import React, {Component} from 'react';
import {requestMovieList} from '../containers/MovieList'
import MovieItem from './MovieItem'

class MovieList extends Component {

    componentDidMount() {
        console.log('check if its even here')
        this.props.requestMovieList();

    }

    render() {
        return this.showMovies();
    }

    showMovies() {
        return (
            <div className="row">
            {
                this.props.movies.map((movie) => <MovieItem movie = {movie}/>)
            }
            </div>
        );
    }

    showProgress() {
        return (
            < div > Loading... < /div>
    )
        ;
    }

    showError() {
        return (
            < div > Error... < /div>
    )
        ;
    }
}

export default MovieList;
