import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/hooks";

const getGenreNames = (genreIds, genres) => {
  return genreIds
    .map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : null;
    })
    .filter((name) => name !== null)
    .join(" . ");
};

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    movie && (
      <div
        className="text-white h-screen relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}>
        {console.log("movie ", movie)}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* Details Section */}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-black bg-opacity-50">
          <div className="mb-4">
            {/* Genres */}
            {/* <p className="text-sm">{getGenreNames(movie.genre_ids, genres)}</p> */}
            {/* Movie name */}
            <h1 className="text-3xl font-bold">{movie.title}</h1>
          </div>

          {/* Overview */}
          <p className="mb-8">{movie.overview}</p>

          {/* Watch now button */}
          <button className="bg-white text-red-700 py-2 px-4 rounded shadow-md">
            Watch Now
          </button>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
