import { useSearchParams } from "react-router-dom";
import Layout from "../layouts/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const [searchResult, setSearchResult] = useState([]);

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  useEffect(() => {
    const getSearchMovieData = async (keyword) => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      setSearchResult(data?.results);
    };

    getSearchMovieData(title || "");
  }, [AUTH_TOKEN, title]);

  return (
    <Layout>
      <section className="my-12">
        <p className="mb-4">Search movies {`"${title}"`}</p>
        <MovieList movies={searchResult} />
      </section>
    </Layout>
  );
};

export default SearchPage;
