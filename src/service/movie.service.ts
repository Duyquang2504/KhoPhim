import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, ResponeMovie } from "../types/entities/movienew";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://phimapi.com",
  }),
  endpoints: (build) => ({
    getNewMovies: build.query<ResponeMovie, void>({
      query: () => `/danh-sach/phim-moi-cap-nhat`,
    }),
  }),
});

export const { useGetNewMoviesQuery } = moviesApi;
