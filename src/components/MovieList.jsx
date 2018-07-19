import React, { Component } from 'react';
import MovieItem from './MovieItem'
import SelectionFilter from './SelectionFilter';

const locationList = ['Pune', 'Bangalore', 'Chennai'];
const languageList = ['English', 'Hindi']

class MovieList extends Component {

    constructor(props){
        super(props);

        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
    }

    onLanguageChange(newLanguage){
        this.props.requestMovieList(this.props.listingType, newLanguage.value, this.props.location);
    }

    onLocationChange(newLocation){
        this.props.requestMovieList(this.props.listingType, this.props.language, newLocation.value);
    }

    componentDidMount() {
        this.props.requestMovieList(this.props.listingType, this.props.language, this.props.location);
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
        <div>
        <div className="filter">
                  <SelectionFilter key={'Language'} filter={languageList} onFilterChange={this.onLanguageChange} value={this.props.language} />
                  <SelectionFilter key={'Location'} filter={locationList} onFilterChange={this.onLocationChange} value={this.props.location} />
        </div>
            <div className="row">

                {
                    this.props.movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
                }
            </div>
            </div>
        );
    }
}

export default MovieList;
