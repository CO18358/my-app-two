export interface MangaGenre {
  count: number;
  mal_id: number;
  name: string;
  url: string;
}

export interface PaginatedResponse {
  current_page: number;
  has_next_page: boolean;
  items: { count: number; total: number; per_page: number };
  last_visible_page: number;
}
