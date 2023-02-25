import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import { AnimeQuote } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  random(): Observable<AnimeQuote[]> {
    const url = `${baseUrls.quotes}quotes`;
    return this.http.get<AnimeQuote[]>(url).pipe(map((res) => res));
  }

  titles(): Observable<string[]> {
    const url = `${baseUrls.quotes}available/anime`;
    return this.http.get<string[]>(url).pipe(map((res) => res));
  }

  characters(): Observable<string[]> {
    const url = `${baseUrls.quotes}available/character`;
    return this.http.get<string[]>(url).pipe(map((res) => res));
  }

  animeQuotes(title: string, page?: number): Observable<AnimeQuote[]> {
    const url = `${baseUrls.quotes}quotes/anime`;
    const params: any = { title };
    page && (params.page = page);
    return this.http.get<AnimeQuote[]>(url, { params }).pipe(map((res) => res));
  }

  characterQuotes(name: string, page?: number): Observable<AnimeQuote[]> {
    const url = `${baseUrls.quotes}quotes/character`;
    const params: any = { name };
    page && (params.page = page);
    return this.http.get<AnimeQuote[]>(url, { params }).pipe(map((res) => res));
  }
}
