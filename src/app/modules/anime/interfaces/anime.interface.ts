export interface Anime {
  mal_id: number;
  title: string;
  episodes: number | null;
  score: number | null;
  synopsis: string | null;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

export interface JikanResponse {
  data: Anime[];
}