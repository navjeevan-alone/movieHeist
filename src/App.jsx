import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Header from "./components/Header";
import GenresList from "./components/GenresList";
import { useState, useEffect } from "react";
import { fetchMovies } from "./api";
import useMovieSearch from "./hooks/hooks";
import { useMovieContext } from "./context/MovieContext";
import MovieDetails from "./components/MovieDetails";
import ToggleSidebar from "./components/ToggleSidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const id = "";
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Search />
                <GenresList />
                <MovieList />
              </div>
            }></Route>
          {/* <ToggleSidebar /> */}
          <Route path="/movie/:id" element={<MovieDetails id={""} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
