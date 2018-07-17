import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import MovieDetails from '../containers/MovieDetails';
import FourOhFour from '../pages/FourOhFour';
import './App.css'

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={MovieDetails} exact path="/movie/:id" />
      <Route component={FourOhFour} />
    </Switch>
  </ConnectedRouter>
);

const Main = () => (
  <div className="container panel">
    <Header />
    <Routes />
    <Footer />
  </div>
);

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
