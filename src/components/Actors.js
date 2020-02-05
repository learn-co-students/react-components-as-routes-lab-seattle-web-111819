import React from 'react';
import { actors } from '../data';

const Actors = () => {

 const renderActors = () => {
   return actors.map(actor => {
     return (
       <div>
         <h4>
           {actor.name}
         </h4>
         <h4>{renderMovies(actor)}</h4>
       </div>
     )
   })
 }

 const renderMovies = (actor) => {
   return actor.movies.map(movie => {
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
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
