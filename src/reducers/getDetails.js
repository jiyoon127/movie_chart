import * as types from '../actions/ActionTypes';
// import axios from 'axios';

const initialState = {
  movie: [],
};

const detail = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAILS:
      return {
        movie: action.movie,
      };
    default:
      return state;
  }
};

export default detail;
