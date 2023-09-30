import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiMiniStar } from "react-icons/hi2";
import { FiPlay } from "react-icons/fi";
import axios from "axios";

const DetailMovie = () => {
  const { id } = useParams();
  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

  const [movie, setMovie] = useState([]);
  const [idTrailer, setIdTrailer] = useState("");

  useEffect(() => {
    const getDetailMovie = async (movieId) => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      setMovie(data);
    };

    getDetailMovie(id);
  }, [AUTH_TOKEN, id]);

  useEffect(() => {
    const getTrailerMovie = async (movieId) => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      setIdTrailer(data?.results[0]?.key);
    };

    getTrailerMovie(movie.id);
  }, [AUTH_TOKEN, movie.id]);

  const genres = movie?.genres?.map((genre) => genre.name).join(", ");

  return (
    <>
      <div className="w-full h-screen sm:h-[800px]">
        <div
          className="relative w-full h-full contrast-50 blur-sm"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute top-[30%] md:top-[40%] xl:top-[30%] md:left-40 right-0 bottom-0 transform">
          <div className="flex flex-col md:flex-row mx-4 items-center md:items-start sm:flex-col sm:w-10/12 sm:space-x-10">
            <div className="sm:w-1/2 mb-3">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt={movie?.title}
                className="w-full h-[250px] sm:h-full object-cover object-center rounded-xl shadow-md"
              />
            </div>
            <div className="sm:w-1/2 break-words space-y-3">
              <h2 className="text-4xl sm:text-6xl font-semibold text-white">
                {movie?.title}
              </h2>
              <div className="flex items-center space-x-2">
                <HiMiniStar className="font-semibold text-yellow-500 outline-none border-none drop-shadow-md" />{" "}
                <p className="font-semibold text-white">
                  {movie?.vote_average}
                </p>
              </div>
              <p className="text-base text-white">
                Tagline:{" "}
                <span className="italic text-white bg-red-500 px-2 py-1 rounded-full">{`"${
                  movie?.tagline || "Not found tagline"
                }"`}</span>
              </p>
              <p className="text-white text-justify">{genres}</p>
              <p className="text-white text-justify">{movie?.overview}</p>
              <div className="flex">
                <a
                  href={`https://www.youtube.com/watch?v=${idTrailer ?? ""}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 flex items-center gap-2 rounded-full text-white bg-red-500 hover:bg-red-600 focus:bg-red-800 cursor-pointer"
                >
                  <FiPlay />
                  <span>Watch Trailer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
