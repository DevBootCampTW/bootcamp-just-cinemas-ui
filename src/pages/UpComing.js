import React from 'react';
import withTab, {UPCOMING} from '../containers/withTab';

class UpComing extends React.Component {

  componentDidMount(){
    this.props.setActiveTab(UPCOMING);
  }

  render(){
    return (<div>Coming soon..</div>)
  }
}

export default withTab(UpComing);