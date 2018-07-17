import { combineReducers } from 'redux-loop';
import { routerReducer } from 'react-router-redux';
import movieList from '../reducers/movieList';
import movieDetails from '../reducers/movieDetails';
import navBar from '../reducers/navBar';

const rootReducer = combineReducers({
  movieList,
  movieDetails,
  navBar,
  routing: routerReducer,
});

export default rootReducer;