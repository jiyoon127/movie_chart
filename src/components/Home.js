import React, { Component } from 'react';
import Movie from './Movie';
import { withRouter } from 'react-router-dom';
import './Home.css';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount() {
    const { onGetMovies } = this.props;
    onGetMovies();
  }

  render() {
    const { isLoading, movies } = this.props;
    // console.log(this.props);
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.string),
  onSetMovies: PropTypes.func,
  onGetMovies: PropTypes.func,
};

Home.defaultProps = {
  isLoading: true,
  movies: [],
  onSetMovies: () => console.warn('setMovies is not defined'),
  onGetMovies: () => console.warn('setMovies is not defined'),
};
export default withRouter(Home);
