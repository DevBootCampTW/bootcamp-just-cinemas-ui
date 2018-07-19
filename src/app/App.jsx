import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import MovieDetails from '../containers/MovieDetails';
import FourOhFour from '../pages/FourOhFour';
import './App.css'
import NavBar from '../containers/NavBar';
import UpComing from '../pages/UpComing';

const Routes = ({history}) => (
  <ConnectedRouter history={history}>
    <div>
      <NavBar />
      <div className="tab-content tabs">
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={UpComing} exact path="/upcoming" />
          <Route component={MovieDetails} exact path="/movie/:id" />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </div>
  </ConnectedRouter>
);

const Main = ({history}) => (
  <div className="container panel border">
    <Header />
    <Routes history={history}/>
    <Footer />
  </div>
);

const App = ({history}) => (
    <Main history={history} />
);

export default App;
