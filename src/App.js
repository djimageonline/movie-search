import React from "react";
import { useEffect } from "react";
import "./App.css";
import { MovieCard } from "./MovieCard";

//
export function App() {
  const API_URL = "http://www.omdbapi.com?apikey=";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  const movie1 = {
    Title: "Italian Spiderman",
    Year: "2007",
    imdbID: "tt2705436",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="movie-app">
      <h1>World of Movies</h1>

      <div className="search">
        <input placeholder="Search a movie" value="Superman" onChange={() => {}} />
        <img src="/icons8-search.svg" alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
}
