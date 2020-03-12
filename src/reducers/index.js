import { combineReducers } from 'redux';
import getMovies from './getMovies';
import setMovie from './setMovie';

const reducers = combineReducers({
  moviesData: getMovies,
  movieData: setMovie,
});

export default reducers;
