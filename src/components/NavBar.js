import React from 'react';
import { NavLink } from 'react-router-dom';

const activeTabClass = 'btn btn-dark';
const defaultTabClass = 'btn btn-secondary';

class NavBar extends React.Component {
  render() {
    const activeTab = this.props.activeTab;
    console.log(activeTab);
    return (
      <ul className="nav nav-tabs" role="tablist" id="nav">
        <li style={{'margin-right':3+'px'}} className={activeTab === "NOW_SHOWING" ? activeTabClass : defaultTabClass}>
          <NavLink style={{color:'white','text-decoration':'none'}} activeClassName="active" to='/'>
            <span>Now Showing</span>
          </NavLink>
        </li>

        <li className={activeTab === "UPCOMING" ? activeTabClass : defaultTabClass}>
          <NavLink style={{color:'white','text-decoration':'none'}} activeClassName="active" to='/upcoming'>
            <span>Upcoming Releases</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;