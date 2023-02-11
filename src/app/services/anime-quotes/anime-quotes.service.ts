import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable, of } from 'rxjs';
import { BASE_URLS } from 'src/app/helpers/constants';
import { AnimeQuote } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AnimeQuotesService {
  quotesDb!: AnimeQuote[];

  constructor(private http: HttpClient) {}

  getData(): Observable<AnimeQuote[]> {
    return this.http.get<AnimeQuote[]>('assets/data/animequotes.json');
  }
}
