import { PlayCircle } from "lucide-react";
import { useMovieContext } from "../context/MovieContext";
import { useGenreFetch } from "../hooks/hooks";
const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const movie = {
  adult: false,
  backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
  genre_ids: [18, 80],
  id: 278,
  original_language: "en",
  original_title: "The Shawshank Redemption",
  overview:
    "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  popularity: 151.357,
  poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
  release_date: "1994-09-23",
  title: "The Shawshank Redemption",
  video: false,
  vote_average: 8.705,
  vote_count: 26172,
};

const MovieDetails = () => {
  // const { state } = useMovieContext();

  const getGenreNames = (genreIds, genres) => {
    let genreNames = genreIds
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : null;
      })
      .filter((name) => name !== null)
      .join(" • ");
    return genreNames;
  };
  return (
    <div
      className="text-white h-screen relative"
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
        {/* Genres */}
        <p className="text-sm font-bold">
          {getGenreNames(movie.genre_ids, genres)}
        </p>

        {/* Overview */}
        <p className="mb-8">{movie.overview}</p>

        {/* Watch now button */}
        <button className="bg-red-600 text-white-700 py-4 px-8 rounded shadow-md flex flex-row gap-2 focus:outline-none hover:bg-red-700 ">
          <PlayCircle />
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
