// MovieCard.js
import { Eye, Star } from "lucide-react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      layout
      className="card relative w-full md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden">
      <Link
        to={`/movie/${movie.id}`}
        className="h-full w-full shadow absolute z-10">
        <div className="absolute bottom-0 w-full flex justify-between items-end p-3 z-20">
          <h1 className="text-white text-xl font-semibold  break-normal break-words">
            {movie.title}
          </h1>

          {(movie.vote_average || 0) > 7 ? (
            <h1 className="font-bold text-green-500 p-2 bg-zinc-900 rounded-full">
              {(movie.vote_average || 0).toFixed(1)}
            </h1>
          ) : (movie.vote_average || 0) > 5.5 ? (
            <h1 className="font-bold text-orange-400 p-2 bg-zinc-900 rounded-full">
              {(movie.vote_average || 0).toFixed(1)}
            </h1>
          ) : (
            <h1 className="font-bold text-red-600 p-2 bg-zinc-900 rounded-full">
              {(movie.vote_average || 0).toFixed(1)}
            </h1>
          )}
        </div>

        <div>
          {movie.poster_path === null ? (
            <img
              className="img object-cover"
              src="https://dummyimage.com/300x200/456/fff"
            />
          ) : (
            <img
              effect="blur"
              className="img object-cover"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
