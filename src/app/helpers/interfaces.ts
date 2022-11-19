export interface User {
  _id: string;
  name: string;
  user_id: string;
  email: string;
  password: string;
}

export interface AnimeQuote {
  quote: string;
  anime: string;
  character: string;
}

export interface InvoiceCompany {
  _id: string;
  user_id: string;
  name: string;
  address: string;
  country: string;
  pincode: string;
  email: string;
  contact: string;
}

export interface Item {
  name: string;
  price: string;
  quantity: string;
  discount?: string;
  tax?: string;
}

export interface Horoscope {
  horoscope: any;
  signData: any;
}

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  thumb?: string;
  price: string;
  priceChange: string;
  mktCap: string;
  volume: string;
}

export interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  description: string;
  url?: string;
  image: string;
  upVotes?: string;
  downVotes?: string;
  rank?: string;
}

export interface Poem {
  author: string;
  title: string;
  lines: string[];
  linecount: number;
}

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

export interface GameDetailsExtended extends GameDetails {
  status: string;
  description: string;
  screenshots: Screenshort[];
  minimum_system_requirements: SystemSpecs;
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

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealCategory {
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface MealPopularIngredient {
  strIngredient: string;
  strDescription: string;
}
