import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

export class MovieItem extends Component {


    render() {
        return this.showMovies();
    }

    showMovies() {
        return (
            <div className="card-movie">
                <img src={this.props.movie['poster']} className="card-img-top" 
                    style={{width:150+'px',height:200+'px', cursor: "pointer"}} 
                    onClick={()=>this.props.history.push(`/movie/${this.props.movie.imdbID}`)}
                />
                <div className="container-movie" style={{width:150+'px'}}>
                    <h5 className="card-title-movie " style={{cursor: "pointer"}}
                        onClick={()=>this.props.history.push(`/movie/${this.props.movie.imdbID}`)}>
                        {this.props.movie['title']}
                    </h5>
                    <div>
                    <div className="card-text-movie">{this.props.movie['soundEffects'].join(' | ')}</div>
                    <div className="card-text-movie text-muted">IMDB Rating : {this.props.movie['imdbRating']}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieItem);
