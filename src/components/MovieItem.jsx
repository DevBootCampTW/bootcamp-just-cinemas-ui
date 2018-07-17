import React, {Component} from 'react';

class MovieItem extends Component {


    render() {
        return this.showMovies();
    }

    showMovies() {
        return (
            <div className="col-md-2">
                <img src={this.props.movie['poster']} className="card-img-top" style={{width:150+'px',height:200+'px'}}/>
                <div className="card-body" style={{width:120+'px',height:150+'px'}}>
                    <h5 className="card-title text-primary">{this.props.movie['title']}</h5>
                    <p className="card-text">{this.props.movie['soundEffects'].join(' | ')}</p>
                    <p className="card-text text-muted">IMDB Rating : {this.props.movie['imdbRating']}</p>
                </div>
            </div>
        )
    }
}

export default MovieItem;
