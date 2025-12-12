import { useEffect, useState } from "react";
import { Movie } from "../utils/movie";
import { getMoviesByCategory, getNewMovies } from "../service/moviesApi";
import MoviesList from "./MoviesList";
import BannerHome from "./BannerHome";

export default function MoviesSection({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const [newmovies, setNewMovies] = useState<Movie[]>([]);
  // console.log("🚀 ~ MoviesSection ~ newmovies:", newmovies);
  const [typemovies, setTypeMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getNewMovies(category).then(setNewMovies);
    getMoviesByCategory(category).then(setTypeMovies);
  }, [category]);

  return (
    <div>
      <MoviesList title={`Mới: ${title}`} movies={newmovies} />
      <MoviesList title={`Loại: ${title}`} movies={typemovies} />
    </div>
  );
}
