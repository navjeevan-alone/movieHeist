// Search.js

import React from "react";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieCard from "./MovieCard";

const Search = () => {
  const { loading, error, setSearchQuery, handleNextPage, handlePrevPage } =
    useMovieSearch("search");
  const [searchText, setSearchText] = React.useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchText);
  };

  return (
    <div className="flex  xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center  items-center md:justify-start px-4 gap-2 ">
    

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {/* Render MovieCard components here */}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={loading}
          className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={loading}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
