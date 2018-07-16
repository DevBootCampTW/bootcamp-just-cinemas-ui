import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails';
import FourOhFour from '../pages/FourOhFour';


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
  <div>
    <Header />
    <Routes />
  </div>
);

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
