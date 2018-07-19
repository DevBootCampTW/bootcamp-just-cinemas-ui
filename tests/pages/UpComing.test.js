import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import UpComing from '../../src/pages/UpComing';
import MovieList from '../../src/containers/MovieList';

const initialState = {
  movieList: {
    movies: []
  }
};
const mockStore = configureStore();
let store = null;

describe('Upcoming movies Page', ()=> {

  beforeEach(() => {
    store = mockStore(initialState)
   });
  
  it('should render upcoming page with movie list', () => {
    const wrapper = mount(<Provider store={store}><UpComing /></Provider>);

    expect(wrapper.find(MovieList).exists()).toBeTruthy();
    expect(wrapper.find(MovieList).prop('listingType')).toBe('UP_COMING');
  })
})