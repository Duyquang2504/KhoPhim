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

export interface Imdb {
  id: string | null;
}

export interface Tmdb {
   type: string;
  id: string ;
  season: number;
  vote_average: number;
  vote_count: number;
}

export interface MovieData {
  _id: string;
  name: string;
  origin_name: string;
  slug: string;
  type: string; // "movie" hoặc "single"
  year: number;
  time: string; // "108 phút"
  lang: string; // "Vietsub"
  quality: string; // "FHD"
  status: string; // "completed"
  chieurap: boolean;
  sub_docquyen: boolean;
  is_copyright: boolean;
  view: number;
  season: string | null;
  episode_current: string; // "Full"
  episode_total: string;   // "1"
  notify: string;
  showtimes: string;
  content: string;
  poster_url: string;
  thumb_url: string;
  trailer_url: string;
  vote_average: number;
  vote_count: number;

  actor: string[];
  director: string[];
  category: Category[];
  country: Country[];

  imdb: Imdb;
  tmdb: Tmdb;

  created: {
    time: string; // ISO date string
  };
  modified: {
    time: string; // ISO date string
  };
}
