import { useState, useEffect } from "react";
import randomize from "../utils/randomize";
import Layout from "../layouts/layout";
import axios from "axios";
import MovieItem from "../components/MovieItem";

const PopularMovies = () => {
  const [data, setData] = useState([]);

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        setData(data?.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    getPopularMovies();
  }, [AUTH_TOKEN]);

  const randomizePopularMovies = randomize(data);

  return (
    <Layout>
      <div className="mt-12">
        <h2 className="my-8 text-center font-semibold text-4xl">
          Popular Movies
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {randomizePopularMovies?.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default PopularMovies;
