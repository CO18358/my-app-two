export interface PaginatedResponse {
  current_page: number;
  has_next_page: boolean;
  items: { count: number; total: number; per_page: number };
  last_visible_page: number;
}

export interface MangaCount {
  count: number;
  mal_id: number;
  name: string;
  url: string;
}

export interface MangaType {
  type: string;
  mal_id: number;
  name: string;
  url: string;
}

export interface MangaImage {
  jpg: { image_url: string; small_image_url: string; large_image_url: string };
  webp: { image_url: string; small_image_url: string; large_image_url: string };
}

export interface RecommendManga {
  content: string;
  entry: {
    images: MangaImage;
    mal_id: string;
    title: string;
    url: string;
  }[];
}

export interface MangaInfo {
  mal_id: number;
  url: string;
  images: MangaImage;
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters?: number;
  volumes?: number;
  status: string;
  publishing: boolean;
  published: {
    string: string;
  };
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: MangaType[];
  serializations: MangaType[];
  genres: MangaType[];
  explicit_genres: MangaType[];
  themes: MangaType[];
  demographics: MangaType[];
}
