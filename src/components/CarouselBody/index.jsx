import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FiPlay, FiInfo } from "react-icons/fi";
import { HiMiniStar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const CarouselBody = ({ movie }) => {
  const [idTrailer, setIdTrailer] = useState("");

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  useEffect(() => {
    const getTrailerMovie = async (movieId) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        const getTrailer = data?.results.find(
          (trailer) => trailer.type === "Trailer"
        );

        setIdTrailer(getTrailer?.key);
      } catch (error) {
        throw new Error(error);
      }
    };

    getTrailerMovie(movie.id);
  }, [AUTH_TOKEN, movie.id]);

  return (
    <div className="absolute top-0 transform translate-y-16 md:translate-x-40 md:translate-y-32 xl:translate-y-44 flex flex-col md:w-2/5 md:space-y-4 space-y-2 mx-3">
      <p className="text-white font-bold text-xl md:text-6xl">{movie?.title}</p>
      <div className="flex items-center space-x-2">
        <HiMiniStar className="font-semibold text-yellow-500 outline-none border-none drop-shadow-md" />{" "}
        <p className="font-semibold text-white">{movie?.vote_average}</p>
      </div>
      <p className="text-white text-sm md:text-base text-justify">
        {movie?.overview}
      </p>
      <div className="flex flex-col sm:flex-row justify-start items-start md:items-center space-y-2 sm:space-x-4">
        <div className="flex">
          <a
            className="px-4 py-2 flex items-center gap-2 rounded-full text-white bg-red-500 hover:bg-red-600 focus:bg-red-800 cursor-pointer"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
            rel="noreferrer"
          >
            <FiPlay />
            <span>Watch Trailer</span>
          </a>
        </div>
        <div>
          <Link
            to={`/movie/${movie?.id}`}
            className="px-4 py-2 flex items-center gap-2 rounded-full text-white bg-red-500 hover:bg-red-600 focus:bg-red-800 cursor-pointer"
          >
            <FiInfo /> <span>See Detail</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

CarouselBody.propTypes = {
  movie: PropTypes.object,
};

export default CarouselBody;
