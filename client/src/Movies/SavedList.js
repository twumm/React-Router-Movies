import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            <span className="saved-movie">{movie.title}</span>
          </Link>
        ))}
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
