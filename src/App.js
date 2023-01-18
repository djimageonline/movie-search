import React from "react";
import { useEffect } from "react";
import "./App.css";

//
export function App() {
  const API_URL = "http://www.omdbapi.com?apikey=";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="movie-app">
      <h1>World of Movies</h1>
    </div>
  );
}
