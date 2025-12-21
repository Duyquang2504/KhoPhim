import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, ResponeMovie } from "../types/entities/movienew";
import { MovieData } from "../types/entities/Movie";
import { Cast, Credits, MovieTmdb } from "../types/entities/Cast";

export const castsApi = createApi({
  reducerPath: "actorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTkwMTA5MmZkYzg0ZWJiNmUwYmMyZmVmNjZkODljOCIsInN1YiI6IjY0ZTE4MTMyZGE5ZWYyMDEwMjMyZGFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RvcKF0YAMLumRPlx3u01NaN_NeG-uBmstl41QXEVwvM",
    },
  }),
  endpoints: (build) => ({
    getMovieCredist: build.query<Credits, { movieId: number; type: string }>({
      query: ({ movieId, type }) =>
        `/3/${type}/${movieId}?language=en-US&append_to_response=videos,credits,similar`,
      transformResponse: (response: any) => response.credits as Credits,
    }),
  }),
});
export const { useGetMovieCredistQuery } = castsApi;
