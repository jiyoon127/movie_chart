import Home from '../components/Home';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  movies: state.moviesData.movies,
  isLoading: state.moviesData.isLoading,
});

const mapDispatchToProps = dispatch => ({
  // onSetMovies: movies => dispatch(actions.set_movies(movies)),
  onGetMovies: () => {
    dispatch(actions.get_movies());
    // console.log(this.state.isLoading);
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(HomeContainer);
