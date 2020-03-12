import * as types from './ActionTypes';

export const set_movie = movie => ({
  type: types.SET_MOVIE,
  movie,
});
