import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleGoBack = () => {
    // Use the `navigate` function to go back to the previous route
    navigate(-1);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        allowFullScreen
      ></iframe>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
