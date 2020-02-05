import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
   return  movies.map(movie => {
      return(
      <div>
        <h4>{movie.title}</h4>
        <h4>{movie.time}</h4>
        <h4>{renderGenres(movie)}</h4>
      </div> )
    })
  }

  const renderGenres = (movie) => {
    return movie.genres.map(genre => {
      return(
      <div>
        <h4>{genre}</h4>
      </div>)
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
