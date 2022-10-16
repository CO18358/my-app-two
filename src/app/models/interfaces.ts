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
