import Home from '../pages/Home';
import { connect } from 'react-redux';
import {setActiveTab} from '../actions/navBar';

const mapStateToProps = (state) => {
  return ({
     
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: () => dispatch(setActiveTab("NOW_SHOWING"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
