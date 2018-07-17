import UpComing from '../pages/UpComing';
import { connect } from 'react-redux';
import {setActiveTab} from '../actions/navBar';

const mapStateToProps = (state) => {
  return ({
     
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: () => dispatch(setActiveTab("UPCOMING"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpComing);
