import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/hooks";
import { PlayCircle } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    movie && (
      <div
        className="text-white h-screen relative mt-2"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}>
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black via-95% via-transparent to-transparent"></div>

        {/* Details Section */}
        <div className="absolute bottom-0 left-0 w-[50%] p-8 bg-opacity-50">
          <div className="mb-4">
            {/* Movie name */}
            <h1 className="text-4xl font-bold">{movie.title}</h1>
          </div>

          <div className="flex flex-row gap-2 ">
            <span>{movie.original_language.toUpperCase()}</span>
            <span> • </span>
            <span>{movie.origin_country[0]}</span>
            <span> • </span>
            {movie.genres.map((item, index) => (
              <span key={item.id}>
                {item.name}
                {index !== movie.genres.length - 1 && " • "}
              </span>
            ))}
          </div>

          <p className="mb-8">{movie.overview}</p>

          <button className="bg-red-600 text-white-700 py-4 px-8 rounded shadow-md flex flex-row gap-2 focus:outline-none hover:bg-red-700">
            <PlayCircle />
            <span>Watch Now</span>
          </button>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
