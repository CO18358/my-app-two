export const GENRES = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts',
];

export const SORT_ORDERS = [
  'release-date',
  'popularity',
  'alphabetical',
  'relevance',
];

export const PLATFORMS = ['all', 'pc', 'browser'];

export interface GameDetails {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

interface Screenshort {
  id: number;
  image: string;
}

interface SystemSpecs {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}
export interface GameDetailsExtended extends GameDetails {
  status: string;
  description: string;
  screenshots: Screenshort[];
  minimum_system_requirements: SystemSpecs;
}
