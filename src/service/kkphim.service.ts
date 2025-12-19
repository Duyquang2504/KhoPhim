import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, ResponeMovie } from "../types/entities/movienew";
import { MovieData, ResponseDetailMovie } from "../types/entities/Movie";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://phimapi.com",
  }),
  endpoints: (build) => ({
    getNewMovies: build.query<ResponeMovie, void>({
      query: () => `/danh-sach/phim-moi-cap-nhat`,
      transformResponse: (response: ResponeMovie) => {
        const uniqueItems = Array.from(
          new Map(response.items.map((item) => [item.tmdb?.id, item])).values()
        );

        return {
          ...response,
          items: uniqueItems,
        };
      },
    }),

    getDetailMovie: build.query<ResponseDetailMovie, string>({
      query: (slug) => `/phim/${slug}`,
    }),
  }),
});

export const { useGetNewMoviesQuery } = moviesApi;
export const { useGetDetailMovieQuery } = moviesApi;
