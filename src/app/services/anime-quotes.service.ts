import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeQuote } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnimeQuotesService {

  titlesUrl = 'https://animechan.vercel.app/api/available/anime';
  randomUrl = 'https://animechan.vercel.app/api/quotes'
  quoteUrl = 'https://animechan.vercel.app/api/quotes/anime?title='
  
  constructor(
    private http: HttpClient
  ) { }

  animeListUrl(): Observable<string[]> {
    return this.http.get<string[]>(this.titlesUrl)
  }

  randomQoutesUrl(): Observable<AnimeQuote[]> {
    return this.http.get<AnimeQuote[]>(this.randomUrl)
  }

  animeQuotesUrl(title: string): Observable<AnimeQuote[]> {
    const url = this.quoteUrl + title
    return this.http.get<AnimeQuote[]>(url)
  }
}
