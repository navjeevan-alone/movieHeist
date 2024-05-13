// MovieCard.js

import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="p-4 md:w-1/4" key={movie.id}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36  object-cover object-center"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="blog"
        />
        <div className="p-6">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2> */}
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {movie.title}
          </h1>
          <p className="leading-relaxed mb-3">
            {movie.overview.slice(0, 100)}...
          </p>
          <div className="flex movies-center flex-wrap ">
            <span className="text-indigo-500 inline-flex movies-center md:mb-2 lg:mb-0">
              {movie.release_date}
            </span>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
               {movie.vote_count}
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
               {movie.vote_average}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
