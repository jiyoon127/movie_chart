import React, { Component } from 'react';
// import axios from 'axios';
import Movie from './Movie';
import './Home_redux.css';
import PropTypes from 'prop-types';

class Home extends Component {
  // state = {
  //   isLoading: true,
  //   movies: [],
  // };

  // getMovies = async () => {
  //   const {
  //     data: {
  //       data: { movies },
  //     }, //equals to "movies.data.data.movies"
  //   } = await axios.get(
  //     'https://yts.mx/api/v2/list_movies.json?sort_by=rathing',
  //   );
  //   // this.setState({ movies, isLoading: false }); //same as movies:movies
  //   this.props.onSetMovies(movies);
  // };

  componentDidMount() {
    // this.getMovies();
    const { onGetMovies } = this.props;
    onGetMovies();
  }

  render() {
    const { isLoading, movies } = this.props;
    console.log(this.props);
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
export default Home;
