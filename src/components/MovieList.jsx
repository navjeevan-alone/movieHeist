// MovieList.js

import { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { fetchMovies } from "../api";
import MovieCard from "./MovieCard";
import MovieCardPoster from "./MovieCardPoster";

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
          <div className="flex flex-wrap gap-4 m-4">
            {state.movies.map((movie) => (
              <MovieCardPoster key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieList;
