import * as types from './ActionTypes';
import axios from 'axios';

export const set_movie = movie => ({
  type: types.SET_MOVIE,
  movie,
});

export const set_movies = ({ movies, value }) => ({
  type: types.GET_MOVIES,
  movies,
  value,
});

export const get_movies = value => {
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
        dispatch(set_movies({ movies, value }));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const sendValue = value => ({
  type: types.SEND_VALUE,
  value,
});
