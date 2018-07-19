import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

export class MovieItem extends Component {


    render() {
        return this.showMovies();
    }

    onMovieClick = () => this.props.history.push(`/movie/${this.props.movie.imdbID}`);

    showMovies() {
        return (
            <div className="card-movie">
                <img src={this.props.movie['poster']} className="card-img-top"
                     style={{width: 200 + 'px', height: 200 + 'px', cursor: "pointer"}}
                     onClick={this.onMovieClick} alt={`${this.props.movie['title']}-poster`}
                />
                <div className="container-movie">
                    <p className="card-title-movie " style={{cursor: "pointer"}}
                       onClick={this.onMovieClick}>
                        {this.props.movie['title']}
                    </p>
                    <div className="card-text-wrapper">
                        <div className="card-text-movie"
                             style={{float: 'left'}}>{this.props.movie['soundEffects'].join(' | ')}</div>
                        <div className="card-text-movie text-muted"
                             style={{float: 'right'}}> {this.props.movie['imdbRating']}/10
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieItem);
