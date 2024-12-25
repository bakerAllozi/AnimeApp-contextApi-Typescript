export interface AnimeType {
  mal_id: number;
  title: string;
  image_url: string;
  score: number;
  rank: number;
  type: string;
  episodes: number;
  url: string;
  members: number;
  duration: string;
  synopsis: string;
  imdbID: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}
