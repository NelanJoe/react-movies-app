import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import randomize from "../../utils/randomize";
import { useState, useEffect } from "react";
import axios from "axios";
import CarouselBody from "../CarouselBody";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      setTrendingMovies(data?.results);
    };

    getTrendingMovies();
  }, [AUTH_TOKEN]);

  const randomSlider = randomize(trendingMovies);

  return (
    <div
      className="overflow-hidden bg-gray-200 w-full h-[400px] mx-auto md:h-full group"
      ref={emblaRef}
    >
      <div className="flex">
        {randomSlider.slice(0, 3)?.map((movie) => {
          return (
            <div className="embla__slide relative cursor-grab" key={movie?.id}>
              <img
                className="w-full h-[400px] md:h-screen blur-[2px] contrast-50 object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  movie?.backdrop_path || movie.poster_path
                }`}
                alt={movie?.title}
              />
              <CarouselBody movie={movie} />
            </div>
          );
        })}
      </div>
      <div className="absolute top-[40%] left-1 md:top-1/2 cursor-pointer md:left-10">
        <FiChevronLeft
          onClick={scrollPrev}
          className="hidden group-hover:block rounded-full bg-white shadow-sm w-8 h-8"
        />
      </div>
      <div className="absolute top-[40%] right-1 md:top-1/2 cursor-pointer md:right-10">
        <FiChevronRight
          onClick={scrollNext}
          className="hidden group-hover:block rounded-full bg-white shadow-sm w-8 h-8"
        />
      </div>
    </div>
  );
};
