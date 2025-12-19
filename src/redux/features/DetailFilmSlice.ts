import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cast, Credits } from "@/src/types/entities/Cast";
interface DetailFilmState {
  credits: Credits | null;
}
const initialState: DetailFilmState = {
  credits: null,
};
const detailFilmSlice = createSlice({
  name: "detailFilm",
  initialState,
  reducers: {
    setCredits(state, action: PayloadAction<Credits>) {
      state.credits = action.payload;
    },
  },
});
export const { setCredits } = detailFilmSlice.actions;
export default detailFilmSlice.reducer;
