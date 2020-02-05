import React from 'react';
import { movies } from '../data';



const Movies = () => {

  const renderGenres = movie => {
    return movie.genres.map(genre => {
      return <ul>{genre}</ul>
    })
  }

  const renderMovies = () => {
    return movies.map(movie => {
      return (
      <div>
        <h3>{movie.title}</h3>
        Time: {movie.time}
        <br></br>
        <br></br>
        Genres:
        {renderGenres(movie)}
      </div>
      )
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
