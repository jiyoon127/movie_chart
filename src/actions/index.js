import * as types from './ActionTypes';

export const get_details = movie => ({
  type: types.GET_DETAILS,
  movie,
});
