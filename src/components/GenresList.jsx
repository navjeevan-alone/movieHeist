import { useState } from "react";
import useMovieSearch, {
  endpoints,
  useGenreFetch,
} from "../hooks/useMovieSearch";
import { useEffect } from "react";
import { useMovieContext } from "../context/MovieContext";

const Search = () => {
  const {
    genres,
    loading: genreLoading,
    error: genreError,
    fetchGenres,
  } = useGenreFetch();

  // Fetch genres when the component mounts
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  return (
    <>
      <div className="container flex flex-wrap justify-center my-4">
        {genreLoading && <div>Loading genres...</div>}
        {genreError && <div>Error fetching genres: {genreError}</div>}

        {genres.map((genre) => (
          <button
            className="px-4 py-2 m-2 text-[15px] bg-slate-800 text-white font-semibold rounded-3xl"
            key={genre.id}>
            {genre.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Search;
