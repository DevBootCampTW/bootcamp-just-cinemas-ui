import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/NavBar';
import { NavLink } from 'react-router-dom';

describe('NavBar component', () => {
  it('should render active Now Showing tab', () => {
    const wrapper = shallow(<NavBar activeTab="NOW_SHOWING" />);

    const links = wrapper.find(NavLink);
    const lists = wrapper.find('li');

    expect(links.at(0).prop('to')).toEqual('/');
    expect(lists.at(0).prop('className')).toEqual('btn btn-dark');
    expect(links.at(1).prop('to')).toEqual('/upcoming');
    expect(lists.at(1).prop('className')).toEqual('btn btn-secondary');
  })

  it('should render active upcoming tab', ()=> {
    const wrapper = shallow(<NavBar activeTab="UP_COMING" />);

    const links = wrapper.find(NavLink);
    const lists = wrapper.find('li');

    expect(links.at(0).prop('to')).toEqual('/');
    expect(lists.at(0).prop('className')).toEqual('btn btn-secondary');
    expect(links.at(1).prop('to')).toEqual('/upcoming');
    expect(lists.at(1).prop('className')).toEqual('btn btn-dark');
  })

  it('should render language dropdown', () => {
    const wrapper = shallow(<NavBar />);
    const lists = wrapper.find('SelectionFilter');

    expect(lists.length).toEqual(2);
  })
})