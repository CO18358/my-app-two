export interface PaginatedResponse {
  current_page: number;
  has_next_page: boolean;
  items: { count: number; total: number; per_page: number };
  last_visible_page: number;
}

export interface ItemCount {
  count: number;
  mal_id: number;
  name: string;
  url: string;
}

export interface ItemType {
  type: string;
  mal_id: number;
  name: string;
  url: string;
}

export interface Image {
  jpg: { image_url: string; small_image_url: string; large_image_url: string };
  webp: { image_url: string; small_image_url: string; large_image_url: string };
}

export interface Recommended {
  content: string;
  entry: {
    images: Image;
    mal_id: string;
    title: string;
    url: string;
  }[];
}

export interface Producer {
  mal_id: number;
  url: string;
  titles: {
    type: string;
    title: string;
  }[];
  images: Image;
  favorites: number;
  about: string;
  count: number;
}

export interface Season {
  year: string;
  seasons: string[];
}

export interface ResultCard {
  mal_id: number;
  images: Image;
  title: string;
  score: number;
  scored_by: number;
  favorites: number;
  type: string;
  synopsis: string;
  status: string;
}
export interface AnimeInfo extends ResultCard {
  url: string;
  approved: boolean;
  trailer: {
    embed_url: string;
    images: {
      image_url: string;
      medium_image_url: string;
      maximum_image_url: string;
    };
  };
  titles: { type: string; title: string }[];
  title_english: string;
  title_japanese: string;
  source: string;
  episodes?: number;
  status: string;
  airing: boolean;
  aired: {
    string: string;
  };
  duration: string;
  rating: string;
  rank: number;
  popularity: number;
  members: number;
  background: string;
  season: string;
  year: string;
  producers: ItemType[];
  licensors: ItemType[];
  studios: ItemType[];
  genres: ItemType[];
  explicit_genres: ItemType[];
  themes: ItemType[];
  demographics: ItemType[];
}

export interface MangaInfo extends ResultCard {
  url: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  chapters?: number;
  volumes?: number;
  status: string;
  published: {
    string: string;
  };
  rank: number;
  popularity: number;
  background: string;
  authors: ItemType[];
  serializations: ItemType[];
  genres: ItemType[];
  explicit_genres: ItemType[];
  themes: ItemType[];
  demographics: ItemType[];
}

export interface Character {
  role: string;
  character: {
    name: string;
    images: Image;
  };
}

export interface Score {
  score: number;
  vote: number;
  percentage: number;
}

export interface Recommendation {
  mal_id: string;
  images: Image;
  title: string;
}
