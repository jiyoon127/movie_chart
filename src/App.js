import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }, //equals to "movies.data.data.movies"
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rathing',
    );
    this.setState({ movies, isLoading: false }); //same as movies:movies
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? 'Loading...'
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
