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
  const type = detailFilm?.tmdb?.type ?? detailFilm?.type;

  const type1 = detailFilm?.type;

  const type2 = detailFilm?.type;

  return (
    <>
      {type === "movie" ? (
        <SingleFilm detailFilm={detailFilm} epiposidesFilm={epiposidesFilm} />
      ) : (
        (type === "tv" || type1 === "hoathinh" || type2 === "series") && (
          <SeriesFilm detailFilm={detailFilm} epiposidesFilm={epiposidesFilm} />
        )
      )}
    </>
  );
}
