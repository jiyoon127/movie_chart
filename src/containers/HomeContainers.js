import Home from '../components/Home_redux';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onSetMovies: movies => dispatch(actions.set_movies(movies)),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
