import { Component } from 'react';
import '../styles/App.css';
import { ReactComponent as SearchIcon } from '../searchIcon.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: '',
      type: '',
    };
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.s, this.state.type);
    }
  };

  handleSearching = (e) => {
    this.setState({ s: e.target.value });
  };

  handleType = (e) => {
    this.setState({ type: e.target.value });
  };

  handleClick = () => {
    this.props.searchMovie(this.state.s, this.state.type);
  };

  render() {
    return (
      <div className="search">
        <div className='searching'>
          <input
            type="text"
            className="search-input"
            onChange={this.handleSearching}
            value={this.state.s}
            onKeyDown={this.handleKey}
          />
          <button className="search-button" onClick={this.handleClick}>
            <SearchIcon />
          </button>
        </div>
        <div className='types'>
          <div className='rbtn'>
            <input type="radio" name="type" value="" onClick={this.handleType} />
            <span>All</span>
          </div>
          <div className='rbtn'>
            <input
              type="radio"
              name="type"
              value="movie"
              onClick={this.handleType}
            />
            <span>Movie</span>
          </div>
          <div className='rbtn'>
            <input
              type="radio"
              name="type"
              value="series"
              onClick={this.handleType}
            />
            <span>Series</span>
          </div>
          <div className='rbtn'>
            <input
              type="radio"
              name="type"
              value="game"
              onClick={this.handleType}
            />
            <span>Game</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
