import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../service/kkphim.service";
import { setupListeners } from "@reduxjs/toolkit/query";
import { castsApi } from "../service/tmdb.service";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import detailFilmReducer from "./features/DetailFilmSlice";
import playMovieReducer from "./features/PlayMovieSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [castsApi.reducerPath]: castsApi.reducer,
    detailFilm: detailFilmReducer,
    playMovie: playMovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, castsApi.middleware),
});
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
