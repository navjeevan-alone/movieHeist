import { useState } from "react";
import useMovieSearch, { endpoints } from "../hooks/useMovieSearch";
import { useEffect } from "react";
import { useMovieContext } from "../context/MovieContext";

const Search = () => {
  const { loading, error } = useMovieSearch(endpoints.genres);
  const { state, dispatch } = useMovieContext();
  useEffect(() => {
    if (state.genres !== "") console.log("genres ", state.genres);
  }, [state.genres]);
  return (
    <>
      <h2>Movie Genre</h2>

      {error && <p className="text-red-700">{error}</p>}
    </>
  );
};

export default Search;
