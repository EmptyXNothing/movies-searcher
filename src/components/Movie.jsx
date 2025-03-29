import '../styles/App.css';
import { Component } from 'react';

class Movie extends Component {
  render() {
    const { Title, Year, Poster, Type } = this.props.movie;
    return (
      <div className="movie">
        <img
          src={
            Poster === 'N/A'
              ? 'https://placehold.co/400x650?text=No%20image'
              : Poster
          }
          alt=""
        />
        <div className="info">
          <h2>{Title}</h2>
          <div>
            <p>{Year}</p>
            <p>{Type}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
