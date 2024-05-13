import "./App.css";
import MovieList from "./MovieList";
import Search from "./Search";
import Header from "./Header";
import { useState, useEffect } from "react";
import { fetchMovies } from "./api";
import { useMovieContext } from "./MovieContext";
function App() {
  const { state, dispatch } = useMovieContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const movies = await fetchMovies("");
        dispatch({ type: "SET_MOVIES", payload: movies });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header></Header>
      <Search />
      <MovieList />
    </>
  );
}

export default App;
