import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: 'none', color: 'blue' }}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
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
