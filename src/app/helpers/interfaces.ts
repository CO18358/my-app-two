// ANIME QUOTE
export interface AnimeQuote {
  quote: string;
  anime: string;
  character: string;
  ID: number;
}

// Trivia

export interface TriviaResponse {
  response_code: number;
  results: TriviaQuestion[];
}
export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface TriviaQuestionDecoded {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  answer: string;
  options: string[];
}

// CRYPTO
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

// GAMES
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

// WEATHER
export interface WeatherCity {
  adminArea: string;
  adminArea2: string;
  adminArea3: string;
  country: string;
  id: number;
  language: string;
  lat: number;
  lon: number;
  name: string;
  timezone: string;
}

export interface Weather {
  cloudiness: number;
  dewPoint: number;
  feelsLikeTemp: number;
  precipProb: number;
  precipRate: number;
  pressure: number;
  relHumidity: number;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  thunderProb: number;
  time: string;
  uvIndex: number;
  visibility: number;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
}

// HOROSCOPE
export interface Horoscope {
  color: string;
  compatibility: string;
  current_date: string;
  date_range: string;
  description: string;
  lucky_number: string;
  lucky_time: string;
  mood: string;
}

// POETRY
export interface Poem {
  author: string;
  title: string;
  lines: string[];
  linecount: number;
}

// MEAL DB
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

interface MealIngredient {
  ingredient: string;
  measure: string;
}

export interface MealDetails extends Meal {
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strYoutube: string;
  ingredients: MealIngredient[];
}

// COCKTAIL DB
export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface DrinkIngredient {
  ingredient: string;
  measure: string;
}

export interface DrinkDetails extends Drink {
  strAlcoholic: string;
  strGlass: string;
  strCategory: string;
  strInstructions: string;
  ingredients: DrinkIngredient[];
}
