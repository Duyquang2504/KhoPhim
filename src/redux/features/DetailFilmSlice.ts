"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cast, Credits } from "@/src/types/entities/Cast";
import { EpisodeServer, MovieData } from "@/src/types/entities/Movie";
interface DetailFilmState {
  credits: Credits | null;
  dataDetailMovie: MovieData | null;
  episodes: EpisodeServer[];
}
const initialState: DetailFilmState = {
  credits: null,
  dataDetailMovie: null,
  episodes: [],
};

const detailFilmSlice = createSlice({
  name: "detailFilm",
  initialState,
  reducers: {
    setCredits(state, action: PayloadAction<Credits>) {
      state.credits = action.payload;
    },
    setDataDetailMovie(state, action: PayloadAction<MovieData>) {
      state.dataDetailMovie = action.payload;
    },
    setEpisodes(state, action: PayloadAction<EpisodeServer[]>) {
      state.episodes = action.payload;
    },
  },
});
export const { setCredits, setDataDetailMovie, setEpisodes } =
  detailFilmSlice.actions;
export default detailFilmSlice.reducer;
