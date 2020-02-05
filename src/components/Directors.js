import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderMovies = dir => {
    return dir.movies.map(mov => {
      return <ul>{mov}</ul>
    })
  }

  const renderDirectors = () => {
    return directors.map(dir => {
      return (
        <div>
          <h3>{dir.name}</h3>
          Movies:
          {renderMovies(dir)}
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
