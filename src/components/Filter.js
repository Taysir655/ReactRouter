import React, { useState } from 'react';
//import { Rating } from 'react-simple-star-rating'


function Filter({ onFilter, addNewMovie, movies }) {
  //state for movie filter values
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // stat for managing the add movie form
  const [isAddingMovie, setIsAddingMovie] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    rating: 0,
    imageUrl: '',
  });

  

 // const handleTitleChange = (e) => {
   // setTitleFilter(e.target.value);
   // onFilter({ title: e.target.value, rating: ratingFilter });
  //};


  
  const handleRatingChange = (nextValue) => {
    const newRating = ratingFilter === nextValue ? 0 : nextValue;
    setRatingFilter(newRating);
    onFilter({ title: titleFilter, rating: newRating });
  };

  // handle adding new movie 
  const handleAddMovie = () => {
    if (isAddingMovie) {
      addNewMovie(newMovie);
      setNewMovie({ title: '', description: '', rating: 0, imageUrl: '' });
    }
    setIsAddingMovie(!isAddingMovie);
  };

  const handleCancel = () => {
    setIsAddingMovie(false);
    setNewMovie({ title: '', description: '', rating: 0, imageUrl: '' });
  };

  return (
    <div className="flex">
      <h2>Find Your Movie</h2>
      <div className="input-box">
        <div className="flexo">
          <h3>By Name</h3>
          <input
            type="text"
            placeholder="Write the movie name"
            value={titleFilter}
            //onChange={handleTitleChange}
          />
        </div>
       //
      </div>
      {/* Add Movie form */}
      
      {isAddingMovie ? (
        <div>
          <h3>Add Movie</h3>
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newMovie.imageUrl}
            onChange={(e) =>
              setNewMovie({ ...newMovie, imageUrl: e.target.value })
            }
          />
          <button className="btn btn-danger" onClick={handleAddMovie}>
            Add Movie
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="btn btn-danger" onClick={handleAddMovie}>
          Add Movie
        </button>
      )}
    </div>
  );
}

export default Filter;