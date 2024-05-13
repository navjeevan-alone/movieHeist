// Search.js

import { useState } from "react";
import { fetchMovies } from "./api";
import { useMovieContext } from "./MovieContext";

const Search = () => {
  const { state, dispatch } = useMovieContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const movies = await fetchMovies(searchQuery.trim());

      console.log("fetching godfather", await fetchMovies("godfather"));

      console.log("movies search ", movies);
      dispatch({ type: "SET_MOVIES", payload: movies });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  return (
    <div className="flex  xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center  items-center md:justify-start px-4 gap-2 ">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Bahubali, RRR, Kantara..."
        className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <button
        onClick={handleSearchSubmit}
        className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        Search
      </button>
    </div>
  );
};

export default Search;
