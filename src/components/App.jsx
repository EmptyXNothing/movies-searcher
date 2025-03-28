import { Component } from 'react';
import Movies from './Movies';
// import Preloader from './Preloader';
import Search from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      status: 'start',
    };
  }

  searchMovie = (search, type) => {
    this.setState({ status: 'animation' });
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}`)
      .then((value) => value.json())
      .then((value) =>
        value.Response === 'True'
          ? this.setState({ movies: value.Search, status: 'movies' })
          : this.setState({ status: 'error' })
      )
      .catch(() => this.setState({ status: 'error' }));
  };

  render() {
    const components = {
      start: <h1>Ищите фильмы</h1>,
      animation: (
        <div className="anime">
          <span className="loader"></span>
        </div>
      ),
      movies: <Movies movies={this.state.movies} />,
      error: <h2>Произошла ошибка при поиске или фильм не найден</h2>,
    };

    return (
      <div className="main">
        <Search searchMovie={this.searchMovie} />
        {components[this.state.status]}
      </div>
    );
  }
}

export default App;
