import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiMiniStar } from "react-icons/hi2";
import { FiPlay } from "react-icons/fi";
import axios from "axios";
import { Suspense } from "react";

const DetailMovie = () => {
  const { id } = useParams();
  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

  const [movie, setMovie] = useState([]);
  const [idTrailer, setIdTrailer] = useState("");

  useEffect(() => {
    const getDetailMovie = async (movieId) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        setMovie(data);
      } catch (error) {
        throw new Error(error);
      }
    };

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

    getDetailMovie(id);
    getTrailerMovie(id);
  }, [AUTH_TOKEN, id]);

  const genres = movie?.genres?.map((genre) => genre.name).join(", ");

  return (
    <Suspense
      fallback={
        <div className="grid place-content-center">
          <p>Loading....</p>
        </div>
      }
    >
      <div className="w-full h-[100dvh] sm:h-[800px]">
        <div
          className="relative w-full h-full contrast-50 blur-sm"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute top-[28%] md:top-[30%] xl:top-[20%] md:left-40 right-0 bottom-0 transform">
          <div className="flex flex-col md:flex-row mx-4 justify-center items-center md:items-start sm:flex-col sm:w-10/12 md:space-x-6">
            <div className="md:w-2/6 mb-2 sm:mb-3">
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie?.poster_path || movie?.backdrop_path
                }`}
                alt={movie?.title}
                className="w-[800px] h-[250px] md:w-[400px] sm:h-full object-cover object-top rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-1/2 break-words space-y-2 md:space-y-3">
              <h2 className="text-3xl sm:text-6xl font-semibold text-white">
                {movie?.title}
              </h2>
              <div className="flex items-center space-x-2">
                <HiMiniStar className="font-semibold text-yellow-500 outline-none border-none drop-shadow-md" />{" "}
                <p className="font-semibold text-white">
                  {movie?.vote_average}
                </p>
              </div>
              <p className=" text-white">
                Tagline:{" "}
                <span className="italic text-[12px] xl:text-base text-white bg-red-500 px-2 py-1 rounded-full">{`"${
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
    </Suspense>
  );
};

export default DetailMovie;
