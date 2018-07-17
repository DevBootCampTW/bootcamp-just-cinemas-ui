import NavBar from '../components/NavBar';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  return ({
      activeTab: state.navBar.activeTab
  })
}

export default connect(mapStateToProps)(NavBar);
