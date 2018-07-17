import React from 'react';

class UpComing extends React.Component {

  componentDidMount(){
    this.props.setActiveTab();
  }

  render(){
    return (<div>Coming soon..</div>)
  }
}

export default UpComing;