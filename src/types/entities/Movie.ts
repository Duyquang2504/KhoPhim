/* =========================
   TMDB / IMDB
========================= */

export interface TmdbInfo {
  type: "movie" | "tv";
  id: string;
  season: number;
  vote_average: number;
  vote_count: number;
}

export interface ImdbInfo {
  id: string | null;
}

/* =========================
   CATEGORY / COUNTRY
========================= */

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
}

/* =========================
   MOVIE
========================= */

export interface MovieData {
  _id: string;

  name: string;
  slug: string;
  origin_name: string;
  content: string;

  type: "series" | "single";
  status: "ongoing" | "completed";

  poster_url: string;
  thumb_url: string;
  trailer_url: string;

  time: string;
  episode_current: string;
  episode_total: string;

  quality: string;
  lang: string;
  year: number;
  view: number;

  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;

  notify: string;
  showtimes: string;

  actor: string[];
  director: string[];

  category: Category[];
  country: Country[];

  tmdb: TmdbInfo;
  imdb: ImdbInfo;

  created: {
    time: string;
  };

  modified: {
    time: string;
  };
}

/* =========================
   EPISODE
========================= */

export interface Episode {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

export interface EpisodeServer {
  server_name: string;
  server_data: Episode[];
}

/* =========================
   API RESPONSE
========================= */

export interface ResponseDetailMovie {
  status: boolean;
  msg: string;
  movie: MovieData;
  episodes: EpisodeServer[];
}
