import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { fetchMovies } from "./api";
import useMovieSearch from "./hooks/useMovieSearch";
import { useMovieContext } from "./MovieContext";
function App() {
  const { state, dispatch } = useMovieContext();
  const { loading, error } = useMovieSearch("top_rated");

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
