import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history'
import { routerMiddleware, push } from 'react-router-redux';

import App from '../../src/app/App';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import NavBar from '../../src/containers/NavBar';
import Home from '../../src/pages/Home';
import UpComing from '../../src/pages/UpComing';
import MovieDetails from '../../src/pages/MovieDetails';
import FourOhFour from '../../src/pages/FourOhFour';

const fakeHistory = createMemoryHistory("/")
const middlewares = [routerMiddleware(fakeHistory)];
const mockStore = configureStore(middlewares);

const initialState = {
  navBar: {
    activeTab: "NOW_SHOWING"
  },
  movieList: {
    movies: []
  },
  movieDetails: {
    movie: null
  }
}

let store = null;

describe('App test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render Home page with Header, NavBar, Footer', () => {

    const wrapper = mount(<Provider store={store}><App history={fakeHistory} /></Provider>);

    expect(wrapper.find(Header).exists()).toBeTruthy();
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
    expect(wrapper.find(Footer).exists()).toBeTruthy();
    expect(wrapper.find(Home).exists()).toBeTruthy();
  })

  it('should render UpComing page with Header, NavBar, Footer', () => {
    store.dispatch(push("/upcoming"))

    const wrapper = mount(<Provider store={store}><App history={fakeHistory} /></Provider>);

    expect(wrapper.find(Header).exists()).toBeTruthy();
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
    expect(wrapper.find(Footer).exists()).toBeTruthy();
    expect(wrapper.find(UpComing).exists()).toBeTruthy();
  })

  it('should render MovieDetails page with Header, NavBar, Footer', () => {
    store.dispatch(push("/movie/123"))

    const wrapper = mount(<Provider store={store}><App history={fakeHistory} /></Provider>);

    expect(wrapper.find(Header).exists()).toBeTruthy();
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
    expect(wrapper.find(Footer).exists()).toBeTruthy();
    expect(wrapper.find(MovieDetails).exists()).toBeTruthy();
  })

  it('should render 404 page with Header, NavBar, Footer', () => {
    store.dispatch(push("/blahhh"))

    const wrapper = mount(<Provider store={store}><App history={fakeHistory} /></Provider>);

    expect(wrapper.find(Header).exists()).toBeTruthy();
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
    expect(wrapper.find(Footer).exists()).toBeTruthy();
    expect(wrapper.find(FourOhFour).exists()).toBeTruthy();
  })
})