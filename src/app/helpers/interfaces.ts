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
