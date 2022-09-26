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
  description?: string;
  price: string;
  quantity: string;
  discount?: string;
  tax?: string;
  subtotal: number;
}
