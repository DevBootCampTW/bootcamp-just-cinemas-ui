import React from 'react';
import { NavLink } from 'react-router-dom';

const activeTabClass = 'rounded active';
const defaultTabClass = 'rounded';

class NavBar extends React.Component {
  render() {
    const activeTab = this.props.activeTab;
    console.log(activeTab);
    return (
      <ul className="nav nav-tabs" role="tablist" id="nav">
        <li className={activeTab === "NOW_SHOWING" ? activeTabClass : defaultTabClass}>
          <NavLink activeClassName="active" to='/'>
            <span>Now Showing</span>
          </NavLink>
        </li>

        <li className={activeTab === "UPCOMING" ? activeTabClass : defaultTabClass}>
          <NavLink activeClassName="active" to='/upcoming'>
            <span>Upcoming Releases</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;