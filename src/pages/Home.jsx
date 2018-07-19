import React from 'react';
import MovieList from '../containers/MovieList';
import withTab, {NOW_SHOWING} from '../containers/withTab';

class Home extends React.Component {

  componentDidMount(){
    this.props.setActiveTab(NOW_SHOWING);
  }

  render() {
    return (<div className="movie-grid-container">
      <MovieList listingType ={`${NOW_SHOWING}`} />
    </div>)
  }
}

export default withTab(Home);