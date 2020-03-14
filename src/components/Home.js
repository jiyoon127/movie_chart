import React, { Component } from 'react';
import Movie from './Movie';
import { withRouter } from 'react-router-dom';
import './Home.css';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount() {
    const { onGetMovies } = this.props;
    onGetMovies('All');
  }

  handleChange = e => {
    console.log(e.target.value);
    this.props.onSendValue(e.target.value);
    this.props.onGetMovies(e.target.value);
  };
  render() {
    const { isLoading, movies } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <form className="movie__sort">
          <select
            id="genres"
            name="genres"
            // value={this.props}
            onChange={e => {
              this.handleChange(e);
            }}
          >
            <option value="All">All</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Animation">Animation</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
            <option value="War">War</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Adventure">Adventure</option>
            <option value="Mystery">Mystery</option>
            <option value="Sport">Sport</option>
            <option value="Musical">Musical</option>
            <option value="Crime">Crime</option>
          </select>
        </form>
        <section>
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="sort__content">
              {movies[0] ? (
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
              ) : (
                <div className="loader">
                  <div className="no__movies">
                    <span>
                      Currently, there's no {this.props.value} movies in the
                      chart.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onSetMovies: PropTypes.func,
  onGetMovies: PropTypes.func,
  onSendValue: PropTypes.func,
};

Home.defaultProps = {
  isLoading: true,
  movies: [],
  value: 'All',
  onSetMovies: () => console.warn('setMovies is not defined'),
  onGetMovies: () => console.warn('getMovies is not defined'),
  onSendValue: () => console.warn('sendValue is not defined'),
};
export default withRouter(Home);
