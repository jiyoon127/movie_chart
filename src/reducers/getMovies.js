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
        };
      } else {
        console.log('action. nothing');
        action.movies = action.movies.filter(
          n => n.genres.indexOf(action.value) > -1,
        );
        return {
          isLoading: false,
          movies: action.movies,
        };
      }

    // return {
    //   isLoading: false,
    //   movies: action.movies,
    //   // movies: () => {
    //   //   console.log('HEYYYYYYY');
    //   //   if (action.value === 'All') {
    //   //     console.log('action ALLLL!!!');
    //   //     return action.movies;
    //   //   } else {
    //   //     action.movies.filter(n => {
    //   //       if (n.genres.indexOf(action.value)) {
    //   //         return n;
    //   //       } else return null;
    //   //     });
    //   //   }
    //   // },
    // };
    case types.SEND_VALUE:
      return {
        isLoading: false,
        value: action.value,
      };
    // return action.movies;
    default:
      return state;
  }
}

export default home;
