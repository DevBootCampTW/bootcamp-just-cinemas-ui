import React from 'react';
import { NavLink } from 'react-router-dom';
import { UPCOMING, NOW_SHOWING } from '../containers/withTab';
import SelectionFilter from './SelectionFilter';

const activeTabClass = 'btn btn-dark';
const defaultTabClass = 'btn btn-secondary';
const location = ['Pune', 'Bangalore', 'Chennai'];
const language = ['English', 'Hindi']

class NavBar extends React.Component {
  render() {
    const activeTab = this.props.activeTab;
    return (
      <ul className="nav nav-tabs" role="tablist" id="nav">
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

        <SelectionFilter key={'Language'} filter={location} />
        <SelectionFilter key={'Location'} filter={language} />
      </ul>
    );
  }
}

export default NavBar;