import React from "react";
import MovieCard from "../components/MovieCards";

function MovieList({ movies, onRemove, onEdit }) {
  //callback function to handdle movie removal
  const handleRemoveMovie = (id) => {
    onRemove(id);
  };

  return (
    <div className="movie-list-container">
      {/*map through the list of movies and render a MovieCard compo for each */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie} 
          ratingstars={movie.rating}
          onRemove={handleRemoveMovie}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default MovieList;
