import * as types from './ActionTypes';
import axios from 'axios';

export const set_movie = movie => ({
  type: types.SET_MOVIE,
  movie,
});

export const set_movies = movies => ({
  type: types.GET_MOVIES,
  movies,
});

export const get_movies = () => {
  return dispatch => {
    return axios
      .get('https://yts.mx/api/v2/list_movies.json?sort_by=rathing')
      .then(response => {
        const {
          data: {
            data: { movies },
          },
        } = response;
        console.log(movies);
        dispatch(set_movies(movies));
      })
      .catch(error => {
        throw error;
      });
  };
};
