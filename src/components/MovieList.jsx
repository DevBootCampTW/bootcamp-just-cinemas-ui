import React, { Component } from 'react';
import MovieItem from './MovieItem'

class MovieList extends Component {

    componentDidMount() {
        this.props.requestMovieList(this.props.listingType);
    }

    renderLoading() {
        return <h6 className="loader">Loading...</h6>
    }

    renderError() {
        return <h6 className="loadingError">Error Loading Movies...</h6>
    }

    render() {
        if (this.props.loading) {
            return this.renderLoading();
        }

        if (this.props.error) {
            return this.renderError();
        }

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
