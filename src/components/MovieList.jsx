// src/components/MovieList.js

import { useState } from 'react';
import moviesDataJSON from '../movies-data.json';
import MovieCard from './MovieCard';
import AddMovie from './addMovie';

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Display Add Movie form'}
      </button>
      {showForm && <AddMovie />}
    </div>
  );
}

export default MovieList;
