import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BASE_URLS } from 'src/app/helpers/constants';
import { AnimeQuote } from 'src/app/helpers/interfaces';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AnimeQuotesService {
  titlesUrl = 'https://animechan.vercel.app/api/available/anime';
  baseUrl = BASE_URLS.animeQuotes;

  constructor(private http: HttpClient) {}

  // animeListUrl(): Observable<string[]> {
  //   return this.http.get<string[]>(this.titlesUrl);
  // }

  random(): Observable<AnimeQuote[]> {
    return this.http.get<AnimeQuote[]>(`${this.baseUrl}`).pipe(
      map((res: AnimeQuote[]) => {
        return res;
      })
    );
  }

  byAnime(query: string): Observable<AnimeQuote[]> {
    return this.http
      .get<AnimeQuote[]>(`${this.baseUrl}/anime?title=${query}`)
      .pipe(
        map((res: AnimeQuote[]) => {
          return res;
        })
      );
  }

  byCharacter(query: string): Observable<AnimeQuote[]> {
    return this.http
      .get<AnimeQuote[]>(`${this.baseUrl}/character?name=${query}`)
      .pipe(
        map((res: AnimeQuote[]) => {
          return res;
        })
      );
  }
}
