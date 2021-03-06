import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Detail.css';
import axios from 'axios';

class Detail extends Component {
  // state = {
  //   movie: [],
  // };

  getDetails = async id => {
    console.log(id);
    if (id) {
      const {
        data: {
          data: { movie },
        },
      } = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
      );
      console.log(this.props);
      // this.setState({ movie });
      this.props.onSetMovie(movie);
    }
  };

  componentDidMount() {
    console.log(this.props);
    const { history, match } = this.props;
    if (match.params === undefined) {
      history.push('/');
    }
    this.getDetails(match.params.id);
  }

  ///axios 분리하기

  render() {
    const { movie } = this.props;
    // this.getDetails(match.params.id);
    // const { movie } = this.state;
    console.log({ movie });
    if (movie.length !== 0) {
      return (
        <div className="movie__detail">
          <div className="center">
            <div
              className="img"
              style={{ backgroundImage: `url(${movie.large_cover_image})` }}
            />
          </div>

          <div className="movie__descriptions">
            <p className="movie__title">{movie.title}</p>
            <div className="movie__sub">
              <p style={{ float: 'left' }} className="movie__year">
                {movie.year}
              </p>
              <ul className="movie__genres">
                {movie.genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <div
                style={{ color: 'grey', fontFamily: 'sans-serif' }}
                className="info__title"
              >
                <p>Rating</p>
                <p>Language</p>
                <p>Length</p>
              </div>
              <div className="info__content">
                <p>{movie.rating}</p>
                <p>{movie.language}</p>
                <p>{movie.runtime}min</p>
              </div>
            </div>
            <div className="synopsis">
              <p style={{ fontWeight: 800 }}>Synopsis</p>
              <p className="movie__summary">{movie.description_full}</p>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

Detail.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSetMovie: PropTypes.func,
};

Detail.defaultProps = {
  movie: [],
  onSetMovie: () => console.warn('setMovie is not defined'),
};

export default withRouter(Detail);
