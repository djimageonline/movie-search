import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { MovieCard } from "./MovieCard";

//
export function App() {
  const [movies, setMovies] = useState();
  const [searchWord, setSearchWord] = useState();

  const API_URL = "http://www.omdbapi.com?apikey=";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="movie-app">
      <h1>World of Movies</h1>

      <div className="search">
        <input placeholder="Search a movie" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
        <img src="/icons8-search.svg" alt="search" onClick={() => searchMovies(searchWord)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nothing found</h2>
        </div>
      )}
    </div>
  );
}
