import PropTypes from "prop-types";
import randomize from "../../utils/randomize";
import MovieItem from "../MovieItem";
import { Suspense } from "react";

const MovieList = ({ movies }) => {
  const randomMovie = randomize(movies);

  return (
    <div className="flex flex-col justify-center md:flex-row md:flex-wrap space-y-4 md:space-y-0 md:gap-8">
      <Suspense
        fallback={
          <div className="grid place-content-center">
            <p>Loading....</p>
          </div>
        }
      >
        {randomMovie.slice(0, 15)?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Suspense>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
