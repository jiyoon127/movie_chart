import * as types from '../actions/ActionTypes';

const initialState = {
  movie: [],
  movies: [],
  isLoading: true,
};

function detail(state = initialState, action) {
  switch (action.type) {
    case types.SET_MOVIE:
      return {
        movie: action.movie,
      };
    case types.SET_MOVIES:
      return {
        movies: action.movies,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default detail;
