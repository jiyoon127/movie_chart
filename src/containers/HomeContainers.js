import Home from '../components/Home';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  movies: state.moviesData.movies,
  isLoading: state.moviesData.isLoading,
  value: state.moviesData.value,
});

const mapDispatchToProps = dispatch => ({
  // onSetMovies: movies => dispatch(actions.set_movies(movies)),
  onGetMovies: value => {
    dispatch(actions.get_movies(value));
    // console.log(this.state.isLoading);
  },
  onSendValue: value => {
    dispatch(actions.sendValue(value));
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(HomeContainer);
