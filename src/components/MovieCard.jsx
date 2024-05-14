// MovieCard.js
import { Eye, Star } from "lucide-react";

const Card = ({ movie }) => {
  return (
    <div
      className="p-4 md:w-1/4 relative inset-0 bg-black opacity-100"
      key={movie.id}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 object-cover object-center"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="movie backdrop"
        />
       
        <div className="p-6 pb-2 relative z-10">
          <h1 className="title-font text-xl font-medium text-white mb-3">
            {movie.title}
          </h1>
          <p className="leading-relaxed text-white mb-3">
            {movie.overview.slice(0, 100)}...
          </p>
          <div className="flex movies-center flex-wrap position-bottom">
            <span className="text-red-700 font-bold inline-flex movies-center md:mb-2 lg:mb-0">
              {movie.release_date.slice(0, 4)}
            </span>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <Eye strokeWidth={1} absoluteStrokeWidth />
              {movie.vote_count}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <Star strokeWidth={1} absoluteStrokeWidth /> {movie.vote_average}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
