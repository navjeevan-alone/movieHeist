
const MovieDetails = ({ movie }) => {
  return (
    <div className="bg-red-700 text-white">
      {/* Full-size banner */}
      <div className="h-80 bg-gray-900 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="movie backdrop"
        />
      </div>

      {/* Details */}
      <div className="p-8">
        <div className="mb-4">
          {/* Genres */}
          <p className="text-sm">
            {movie.genres.map((genre) => genre.name).join(" . ")}
          </p>
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
  );
};

export default MovieDetails;
