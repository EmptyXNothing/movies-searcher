import '../styles/App.css';
import { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {movies?.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </div>
    );
  }
}

export default Movies;
