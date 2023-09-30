import PropTypes from "prop-types";
import randomize from "../../utils/randomize";
import MovieItem from "../MovieItem";

const MovieList = ({ movies }) => {
  const randomMovie = randomize(movies);

  return (
    <div className="flex flex-col justify-center md:flex-row md:flex-wrap space-y-4 md:space-y-0 md:gap-8">
      {randomMovie.slice(0, 15)?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
