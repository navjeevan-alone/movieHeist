import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Header from "./components/Header";
import GenresList from "./components/GenresList";
import { useState, useEffect } from "react";
import { fetchMovies } from "./api";
import useMovieSearch from "./hooks/hooks";
import { useMovieContext } from "./context/MovieContext";
import MovieDetails from "./components/MovieDetails";
function App() {
  const { state, dispatch } = useMovieContext();
  const { loading, error } = useMovieSearch("genre/movie/list");

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
    <div className="bg-gray-900 min-h-screen">
      <Header></Header>
      <Search />
      <GenresList></GenresList>
      <MovieList />
    </div>
  );
}

export default App;
