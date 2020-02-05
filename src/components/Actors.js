import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderMovies = act => {
    return act.movies.map(mov => {
      return <ul>{mov}</ul>
    })
  }

  const renderActors = () => {
    return actors.map(act => {
      return (
        <div>
          <h3>{act.name}</h3>
          {renderMovies(act)}
        </div>)
    })
  }


  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
