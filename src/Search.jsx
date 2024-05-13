// Search.js

import { useState } from "react";
import useMovieSearch from "./useMovieSearch";

const Search = () => {
  const { loading, error, setSearchQuery } = useMovieSearch("search");
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchText);
    
  };

  return (
    <div className="flex  xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center  items-center md:justify-start px-4 gap-2 ">
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
        className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Search;
