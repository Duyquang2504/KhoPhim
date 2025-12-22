import { EpisodeServer, MovieData } from "@/src/types/entities/Movie";

import SingleFilm from "./components/SingleFilm";
import SeriesFilm from "./components/SeriesFilm";

interface ContentfilmProps {
  detailFilm: MovieData;
  epiposidesFilm: EpisodeServer[];
}
export default function EpisodesFilm({
  detailFilm,
  epiposidesFilm,
}: ContentfilmProps) {
  const type = detailFilm.tmdb.type;
  console.log("🚀 ~ EpisodesFilm ~ type:", type);
  const lang = detailFilm.lang;
  console.log("🚀 ~ EpisodesFilm ~ lang:", lang);

  return (
    <>
      {type === "movie" && (
        <SingleFilm detailFilm={detailFilm} epiposidesFilm={epiposidesFilm} />
      )}
      {type === "tv" && (
        <SeriesFilm detailFilm={detailFilm} epiposidesFilm={epiposidesFilm} />
      )}
    </>
  );
}
