import React from 'react';
import MovieList from '../containers/MovieList';
import withTab from '../containers/withTab';

class Home extends React.Component {

  componentDidMount(){
    this.props.setActiveTab();
  }

  render() {
    return (<div>
      <MovieList />
    </div>)
  }
}

export default withTab(Home);