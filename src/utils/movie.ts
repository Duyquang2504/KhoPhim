export interface Movie {
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  poster_url: string;
  thumb_url: string;
  year: number;

  tmdb: {
    type: string,
    id: string,
    season: string | null,
    vote_average: number,
    vote_count: number,
  };

  imdb: {
    id: string | null,
  };

  modified: {
    time: string, // ISO date string
  };
}
