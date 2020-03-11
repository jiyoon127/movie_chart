import Detail from '../components/Detail_redux';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getMovieInfo } from '../utils';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  get_details: () => {
    let movie; //???
    getMovieInfo(123).then(result => {
      movie = result;
      console.log(movie);
      dispatch(actions.get_details(movie));
    });
  },
});

const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailContainer;
