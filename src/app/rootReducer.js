import { combineReducers } from 'redux-loop';
import { routerReducer } from 'react-router-redux';
import movies from '../reducers/movies';
import movieDetails from '../reducers/movieDetails';

const rootReducer = combineReducers({
  movies,
  movieDetails,
  routing: routerReducer,
});

export default rootReducer;