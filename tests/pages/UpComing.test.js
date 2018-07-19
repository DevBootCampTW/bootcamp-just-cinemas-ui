import UpComing, {UpComing as UpComingComp} from '../../src/pages/UpComing';
import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

const initialState = {};
const mockStore = configureStore();
let store = null;

describe('UpComing page', ()=> {

  beforeEach(() => {
    store = mockStore(initialState)
   });

  it('should render upcoming', () => {
    const wrapper = shallow(<UpComing store={store}/>);

    expect(wrapper.html()).toContain('Coming soon..')
  });

  it('should call setActiveTab on mount', () => {
    const setActiveTab = jest.fn();
    shallow(<UpComingComp setActiveTab={setActiveTab}/>);

    expect(setActiveTab).toBeCalledWith("UP_COMING");

  });
})