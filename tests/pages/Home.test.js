import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Home from '../../src/pages/Home';
import MovieList from '../../src/containers/MovieList';

const initialState = {
  movieList: {
    movies: []
  }
};
const mockStore = configureStore();
let store = null;

describe('Home Page', ()=> {

  beforeEach(() => {
    store = mockStore(initialState)
   });
  
  it('should render home page', () => {
    const wrapper = mount(<Provider store={store}><Home /></Provider>);

    expect(wrapper.find(MovieList).exists()).toBeTruthy();
  })
})