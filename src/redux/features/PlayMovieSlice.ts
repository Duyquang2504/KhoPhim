"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cast, Credits } from "@/src/types/entities/Cast";
import { EpisodeServer, MovieData } from "@/src/types/entities/Movie";
interface PlayMovieState {
  seriesFilm: {
    movieSlug: string;
    episodeSlug: string;
    link_embed: string;
  };
  singleFilm: {
    movieSlug: string;
    episodeSlug: string;
    link_embed: string;
  };
}
const initialState: PlayMovieState = {
  seriesFilm: {
    movieSlug: "",
    episodeSlug: "",
    link_embed: "",
  },
  singleFilm: {
    movieSlug: "",
    episodeSlug: "",
    link_embed: "",
  },
};

const playMovieSlice = createSlice({
  name: "playMovie",
  initialState,
  reducers: {
    setSeriesFilm(
      state,
      action: PayloadAction<{
        movieSlug: string;
        episodeSlug: string;
        link_embed: string;
      }>
    ) {
      state.seriesFilm = action.payload;
    },
    resetSeriesFilm(state) {
      state.seriesFilm = initialState.seriesFilm;
    },
    setSingleFilm(
      state,
      action: PayloadAction<{
        movieSlug: string;
        episodeSlug: string;
        link_embed: string;
      }>
    ) {
      state.singleFilm = action.payload;
    },
    resetSingleFilm(state) {
      state.singleFilm = initialState.singleFilm;
    },
  },
});

export const {
  setSeriesFilm,
  resetSeriesFilm,
  setSingleFilm,
  resetSingleFilm,
} = playMovieSlice.actions;
export default playMovieSlice.reducer;
