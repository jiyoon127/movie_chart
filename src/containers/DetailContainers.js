import Detail from '../components/Detail_redux';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  onSetMovie: movie => dispatch(actions.set_movie(movie)),
});

const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailContainer;
