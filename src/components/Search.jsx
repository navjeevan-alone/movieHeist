// Search.js

import { useState } from "react";
import useMovieSearch from "../hooks/useMovieSearch";
import { useEffect } from "react";

const Search = () => {
  const { loading, error, setSearchQuery, handleNextPage, handlePrevPage } =
    useMovieSearch("search");
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchText);
  };

  return (
    <>
      <form
        action="#"
        className="flex  xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center  items-center md:justify-start px-4 gap-2 ">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInputChange}
          placeholder="Bahubali, RRR, Kantara..."
          className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button
          onClick={handleSearchSubmit}
          disabled={loading}
          type="submit"
          className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
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
    </>
  );
};

export default Search;
