import * as types from '../actions/ActionTypes';

const initialState = {
  movie: [],
};

function detail(state = initialState, action) {
  switch (action.type) {
    case types.SET_MOVIE:
      return {
        movie: action.movie,
      };
    default:
      return state;
  }
}

export default detail;
