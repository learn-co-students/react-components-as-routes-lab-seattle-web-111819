import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map(director => {
      return (
        <div>
          <h4>{director.name}</h4>
          <h4>{renderMovies(director)}</h4>
        </div>
      )
    })
  }

  const renderMovies = (director) => {
    return director.movies.map(movie => {
      return (
        <div>
          <h4>
            {movie}
          </h4>
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
