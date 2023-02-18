export namespace Anime {
  export enum AnimeType {
    TV = 'tv',
    Movie = 'movie',
    OVA = 'ova',
    Special = 'special',
    ONA = 'ona',
    Music = 'music',
  }

  export enum AnimeFilter {
    Airing = 'airing',
    Upcoming = 'upcoming',
    Popular = 'bypopularity',
    Favorite = 'favorite',
  }
  export enum AnimeStatus {
    Airing = 'airing',
    Complete = 'complete',
    Upcoming = 'upcoming',
  }
  export enum AnimeRating {
    All = 'g',
    Childer = 'pg',
    Teen = 'pg13',
    AdultLang = 'r17',
    Adult = 'r',
    Hentai = 'rx',
  }
}

export namespace Manga {
  export const Status = [
    'publishing',
    'complete',
    'hiatus',
    'discontinued',
    'upcoming',
  ];
  export const Genre = ['genres', 'explicit_genres', 'themes', 'demographics'];
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
