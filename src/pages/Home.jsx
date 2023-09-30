import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import Layout from "../layouts/layout";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      setPopularMovies(data?.results);
    };

    getPopularMovies();
  }, [AUTH_TOKEN]);

  return (
    <>
      <Carousel />
      <Layout>
        <div className="mt-12">
          <div className="flex justify-between mb-8">
            <p>Popular Movies</p>
            <Link
              to="/popular-movies"
              className="italic text-red-500 hover:underline"
            >
              See All Popular
            </Link>
          </div>
          <MovieList movies={popularMovies} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
