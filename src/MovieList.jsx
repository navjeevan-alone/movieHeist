// MovieList.js

import { useEffect, useState } from "react";
import { useMovieContext } from "./MovieContext";
import { fetchMovies } from "./api";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { state, dispatch } = useMovieContext();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        {state.loading ? (
          <p>Loading...</p>
        ) : state.error ? (
          <p>Error: {state.error}</p>
        ) : (
          <div className="flex flex-wrap -m-4">
            {state.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieList;
