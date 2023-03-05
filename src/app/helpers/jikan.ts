export namespace Anime {
  export const Type = ['tv', 'movie', 'ova', 'special', 'ona', 'music'];
  export const Filter = ['airing', 'upcoming', 'bypopularity', 'favorite'];
  export const Status = ['airing', 'complete', 'upcoming'];
  export const Rating = ['g', 'pg', 'pg13', 'r17', 'r', 'rx'];
  export enum Season {
    WINTER = 'winter',
    SPRING = 'spring',
    SUMMER = 'summer',
    FALL = 'fall',
  }
  export const OrderBy = [
    'title',
    'type',
    'rating',
    'start_date',
    'end_date',
    'episodes',
    'score',
    'scored_by',
    'rank',
    'popularity',
    'members',
    'favorites',
  ];
}

export namespace Manga {
  export const Status = [
    'publishing',
    'complete',
    'hiatus',
    'discontinued',
    'upcoming',
  ];
  export const Filter = ['publishing', 'upcoming', 'bypopularity', 'favorite'];
  export const Type = [
    'manga',
    'novel',
    'lightnovel',
    'oneshot',
    'doujin',
    'manhwa',
    'manhua',
  ];
  export const OrderBy = [
    'title',
    'start_date',
    'end_date',
    'chapters',
    'volumes',
    'score',
    'scored_by',
    'rank',
    'popularity',
    'members',
    'favorites',
  ];
}

export const Sort = ['desc', 'asc'];
export const Genre = ['genres', 'explicit_genres', 'themes', 'demographics'];
