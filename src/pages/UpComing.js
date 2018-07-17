import React from 'react';
import withTab from '../containers/withTab';

class UpComing extends React.Component {

  componentDidMount(){
    this.props.setActiveTab();
  }

  render(){
    return (<div>Coming soon..</div>)
  }
}

export default withTab(UpComing);