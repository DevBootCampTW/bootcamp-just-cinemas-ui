import React from 'react';
import MovieList from '../containers/MovieList';
import withTab, {UPCOMING} from '../containers/withTab';

class Home extends React.Component {

  componentDidMount(){
    this.props.setActiveTab(UPCOMING);
  }

  render() {
    return (<div>
      <MovieList listingType ={`${UPCOMING}`} />
    </div>)
  }
}

export default withTab(Home);