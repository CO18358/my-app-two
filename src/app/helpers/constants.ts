export const baseUrls = {
  quotes: 'https://animechan.vercel.app/api/',
  cocktailDb: 'https://www.thecocktaildb.com/api/json/v1/1/',
  mealDb: 'https://www.themealdb.com/api/json/v1/1/',
  crypto: 'https://api.coingecko.com/api/v3/',
  forex: 'https://api.exchangerate.host/',
  f2pGames: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  horoscope: 'https://aztro.sameerkumar.website/',
  poetry: 'https://poetrydb.org/',
  trivia: 'https://opentdb.com/',
  weather: 'https://foreca-weather.p.rapidapi.com',
  jikan: 'https://api.jikan.moe/v4/',
};

export const REGEX = {
  number: new RegExp('^[0-9]*$'),
  mobileNumber: new RegExp('^[0-9]{10}$'),
  postalCode: new RegExp('^[0-9]{4,6}$'),
};
