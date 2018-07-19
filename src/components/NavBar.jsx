import React from 'react';
import { NavLink } from 'react-router-dom';
import { UPCOMING, NOW_SHOWING } from '../containers/withTab';

const activeTabClass = 'btn btn-dark';
const defaultTabClass = 'btn btn-secondary';

class NavBar extends React.Component {
  render() {
    const activeTab = this.props.activeTab;
    return (
      <ul className="nav" role="tablist" id="nav">
        <li style={{ 'marginRight': 3 + 'px' }} className={activeTab === NOW_SHOWING ? activeTabClass : defaultTabClass}>
          <NavLink style={{ color: 'white', 'textDecoration': 'none' }} activeClassName="active" to='/'>
            <span>Now Showing</span>
          </NavLink>
        </li>

        <li className={activeTab === UPCOMING ? activeTabClass : defaultTabClass}>
          <NavLink style={{ color: 'white', 'textDecoration': 'none' }} activeClassName="active" to='/upcoming'>
            <span>Upcoming Releases</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;