import * as types from '../actions/ActionTypes';

const initialState = {
  movies: [],
  isLoading: true,
};

function home(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        isLoading: false,
        movies: action.movies,
      };
    // return action.movies;
    default:
      return state;
  }
}

export default home;
