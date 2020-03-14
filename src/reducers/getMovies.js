import * as types from '../actions/ActionTypes';

const initialState = {
  movies: [],
  isLoading: true,
  value: 'All',
};

function home(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      console.log(action.value);
      if (action.value === 'All') {
        console.log('action. Alllll');
        return {
          isLoading: false,
          movies: action.movies,
          value: action.value,
        };
      } else {
        action.movies = action.movies.filter(
          n => n.genres.indexOf(action.value) > -1,
        );
        // if (action.movies.length === 0) {
        //   return {
        //     isLoading: false,
        //     movies:action.movies
        //   };
        // }
        return {
          isLoading: false,
          movies: action.movies,
          value: action.value,
        };
      }

    case types.SEND_VALUE:
      return {
        isLoading: true,
        value: action.value,
      };
    default:
      return state;
  }
}

export default home;
