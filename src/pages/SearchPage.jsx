import { useSearchParams } from "react-router-dom";
import Layout from "../layouts/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { Suspense } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const [searchResult, setSearchResult] = useState([]);

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  useEffect(() => {
    const getSearchMovieData = async (keyword) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        setSearchResult(data?.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    getSearchMovieData(title || "");
  }, [AUTH_TOKEN, title]);

  return (
    <Layout>
      <section className="my-12">
        <p className="mb-4">
          Search Movies <span>{`"${title}"`}</span>
        </p>
        <Suspense
          fallback={
            <div className="grid place-content-center">
              <p>Loading content...</p>
            </div>
          }
        >
          {searchResult.length ? (
            <MovieList movies={searchResult} />
          ) : (
            <div className="grid place-content-center">
              <p className="text-2xl font-semibold">
                Not found data movies with title{" "}
                <span className="bg-red-500 italic text-white rounded-md px-2">{`"${title}"`}</span>
              </p>
            </div>
          )}
        </Suspense>
      </section>
    </Layout>
  );
};

export default SearchPage;
