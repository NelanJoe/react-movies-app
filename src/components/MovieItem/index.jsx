import PropTypes from "prop-types";
import { HiMiniStar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="flex flex-row md:flex-col space-x-4  md:space-x-0 shadow-md rounded-md px-4 py-4 w-full hover:shadow-xl md:w-[250px] md:hover:transform md:hover:-translate-y-4 transition-all ease-out duration-75">
          <div className="w-1/2 md:w-full">
            <img
              className="w-full h-full md:w-[250px] md:h-[250px] object-cover rounded-sm"
              src={`https://image.tmdb.org/t/p/original/${
                movie?.backdrop_path || movie.poster_path
              }`}
              alt={movie?.title}
            />
          </div>
          <div className="md:space-y-2 w-1/2 md:w-full md:mt-3">
            <h2 className="text-blue-500 font-semibold">{movie?.title}</h2>
            <div className="flex items-center gap-2">
              <HiMiniStar className="text-yellow-500" /> {movie.vote_average}
            </div>
            <p className="text-gray-500 text-sm italic">
              {movie?.release_date}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
