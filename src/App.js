import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";  //import Routes , Route
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { v4 as uuidv4 } from "uuid";


function App() {
  //initial movie data

  const [initialMovies] = useState([
    {
      id: uuidv4(),
      title: "Avatar",
      description: "Action",
      rating: 2,
      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
        trailerLink:"https://youtu.be/5PSNL1qE6VY"
    },
 
  ]);

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  //callback function to filter movies based on tittle and rating

  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === 0 || movie.rating === rating)
      );
    });
    setFilteredMovies(filteredMovies);
  };

  //callback function to add new movie
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, id: uuidv4() }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const editMovie = (editedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editedMovie.id ? { ...editedMovie } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };
// callback function to remove movie
  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <Router>
    <div className="App">
      {/* Navbar */}
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start text-xl">
          <Navbar.Brand className="sizetext" href="#home">
            Movies
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Filter component for searching */}
      <Filter onFilter={filterMovies} addNewMovie={addMovie} />
      <br />

      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} onRemove={removeMovie} onEdit={editMovie} />} />
        {/* Movie Details Page */}
        <Route path="/details/:id" element={<MovieDetails movies={filteredMovies} />} />

      </Routes>

    </div>
  </Router>

  );
}

export default App;
