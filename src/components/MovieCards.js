import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



function MovieCard({ id, title, description, imageUrl, onRemove, onEdit,ratingstars }) {
  console.log(ratingstars)
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState({
    id,
    title,
    description,
   
    imageUrl,
  });

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

     //other logic
  };
  // Optinal callback functions;

  const handleRemove = () => {
    onRemove(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedMovie);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedMovie({
      id,
      title,
      description,
      rating,
      imageUrl,
    });
  };

  const handleImageUrlChange = (e) => {
    setEditedMovie({ ...editedMovie, imageUrl: e.target.value });
  };

  return (
    <Card
      className="card bg-light"
      style={{ width: "18rem", margin: "10px", padding: "10px" }}
    >
      
      <Link to={`/details/${id}`}>
        <Card.Img
          style={{ width: "17rem", height: "18rem" }}
          variant="top"
          src={editedMovie.imageUrl}
        />
      </Link>
    
      <br />
      {isEditing && (
        <input
          type="text"
          value={editedMovie.imageUrl}
          onChange={handleImageUrlChange}
        />
      )}
      <Card.Body className="container">
        <Card.Title>
          {isEditing ? (
            <input
              type="text"
              value={editedMovie.title}
              onChange={(e) =>
                setEditedMovie({ ...editedMovie, title: e.target.value })
              }
            />
          ) : (
            title
          )}
        </Card.Title>

        <Card.Text>
          {isEditing ? (
            <input
              type="text"
              value={editedMovie.description}
              onChange={(e) =>
                setEditedMovie({ ...editedMovie, description: e.target.value })
              }
            />
          ) : (
            `Description: ${description}`
          )}
        </Card.Text>
        <div className="cardtext">
          Rating:
          <div className="cardtexto">
            {isEditing ? (
              <input
                className="editstyle"
                type="number"
                value={editedMovie.rating}
                onChange={(e) =>
                  setEditedMovie({
                    ...editedMovie,
                    rating: parseInt(e.target.value),
                  })
                }
              />
            ) : (
              <Rating
                onClick={handleRating}
                initialValue={ratingstars}
                /* Available Props */
              />
            )}
          </div>
        </div>
        <br />

        {isEditing && (
          <div className="movie-card-actions">
            <button className="btn btn-success mr-3" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}

        {!isEditing && (
          <div className="movie-card-actions ">
            <button className="btn btn-danger mr-3" onClick={handleRemove}>
              Remove
            </button>
            <button className="btn btn-warning" onClick={handleEdit}>
              Edit
            </button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
