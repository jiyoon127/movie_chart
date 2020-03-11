import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Detail_redux.css';

class Detail extends Component {
  componentDidMount() {
    // const { getDetails, id } = this.props;
    // // console.log(this.props);
    // // const { history, match } = this.props;
    // // if (match.params === undefined) {
    // //   history.push('/');
    // // }
    // getDetails(id);
    // console.log(id);
  }

  render() {
    const { get_details } = this.props;
    get_details();
    const { movie } = this.props;
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
  movie: PropTypes.arrayOf(PropTypes.string),
  get_details: PropTypes.func,
};

Detail.defaultProps = {
  movie: [],
  get_details: () => console.warn('getDetails not defined'),
};

export default Detail;
