import { combineReducers } from 'redux-loop';
import { routerReducer } from 'react-router-redux';
import movieList from '../reducers/movieList';
import movieDetails from '../reducers/movieDetails';

const rootReducer = combineReducers({
  movieList,
  movieDetails,
  routing: routerReducer,
});

export default rootReducer;