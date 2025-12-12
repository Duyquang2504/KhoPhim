import { MovieData } from "../types/entities/Movie";
import { Movie } from "../types/entities/movienew";
//new film
const API_NEWFILMS = "https://phimapi.com/danh-sach/";
// type film
const API_TYPE = "https://phimapi.com/v1/api/danh-sach";
//detail film
const DETAIL_FILM = "https://phimapi.com/phim";

export async function getNewMovies(category: string): Promise<Movie[]> {
  const res = await fetch(`${API_NEWFILMS}/${category}`);
  const data = await res.json();
  return data.items || [];
}

export async function getMoviesByCategory(category: string): Promise<Movie[]> {
  const res = await fetch(`${API_TYPE}/${category}`);
  const data1 = await res.json();
  return data1.data?.items || [];
}

export async function getDetailFilm(slug: string): Promise<MovieData> {
  const res = await fetch(`${DETAIL_FILM}/${slug}`);
  const data = await res.json();
  return data.movie || {};
}
