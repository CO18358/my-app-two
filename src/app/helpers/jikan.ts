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
  export enum MangaType {
    Manga = 'manga',
    Novel = 'novel',
    LightNovel = 'lightnovel',
    OneShot = 'oneshot',
    Doujin = 'doujin',
    Manhwa = 'manhwa',
    Manhua = 'manhua',
  }

  export enum MangaFilter {
    Ongoing = 'publishing',
    Upcoming = 'upcoming',
    Popular = 'bypopularity',
    Favorite = 'favorite',
  }
  export enum MangaStatus {
    Publishing = 'publishing',
    Complete = 'complete',
    Hiatus = 'hiatus',
    Discontinued = 'discontinued',
    Upcoming = 'upcoming',
  }

  export const OrderBy = ['name', 'count'];

  export const Genre = ['genres', 'explicit_genres', 'themes', 'demographics'];
}

export const Sort = ['desc', 'asc'];
