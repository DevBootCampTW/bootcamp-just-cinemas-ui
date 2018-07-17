import { connect } from 'react-redux';
import {setActiveTab} from '../actions/navBar';

const withTab = (Component) => {

  const mapStateToProps = (state) => {
    return {}
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      setActiveTab: (tab) => dispatch(setActiveTab(tab))
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}

export default withTab;

export const UPCOMING = "UPCOMING";
export const NOW_SHOWING = "NOW_SHOWING";