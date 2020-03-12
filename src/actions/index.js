import * as types from './ActionTypes';

export const set_movie = movie => ({
  type: types.SET_MOVIE,
  movie,
});

export const set_movies = movies => ({
  type: types.SET_MOVIES,
  movies,
});
