import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import {
  PaginatedResponse,
  ResultCard,
  ItemCount,
  Recommended,
  Producer,
  Season,
} from 'src/app/helpers/jikan.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getAnimes(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = `${baseUrls.jikan}anime`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ResultCard[] }>(url, {
        params,
      })
      .pipe(map((res) => res));
  }

  genres(): Observable<ItemCount[]> {
    return this.http
      .get<{ data: ItemCount[] }>(`${baseUrls.jikan}genres/anime`)
      .pipe(map((res) => res.data));
  }

  producers(page?: number): Observable<{
    pagination: PaginatedResponse;
    data: Producer[];
  }> {
    const url = page
      ? `${baseUrls.jikan}producers?page=${page}`
      : `${baseUrls.jikan}producers`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: Producer[] }>(url)
      .pipe(map((res) => res));
  }

  topAnime(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = `${baseUrls.jikan}top/anime`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ResultCard[] }>(url, {
        params,
      })
      .pipe(map((res) => res));
  }

  recommendations(params?: any): Observable<{
    pagination: { has_next_page: boolean; last_visible_page: number };
    data: Recommended[];
  }> {
    const url = `${baseUrls.jikan}recommendations/anime`;
    return this.http
      .get<{
        pagination: { has_next_page: boolean; last_visible_page: number };
        data: Recommended[];
      }>(url, {
        params,
      })
      .pipe(map((res) => res));
  }

  seasonList(): Observable<Season[]> {
    const url = `${baseUrls.jikan}seasons`;
    return this.http.get<{ data: Season[] }>(url).pipe(map((res) => res.data));
  }

  seasonAnime(
    year: string,
    season: string,
    page?: number
  ): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = page
      ? `${baseUrls.jikan}seasons/${year}/${season}?page=${page}`
      : `${baseUrls.jikan}seasons/${year}/${season}`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ResultCard[] }>(url)
      .pipe(map((res) => res));
  }

  seasonNow(page?: number): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = page
      ? `${baseUrls.jikan}seasons/now?page=${page}`
      : `${baseUrls.jikan}seasons/now`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ResultCard[] }>(url)
      .pipe(map((res) => res));
  }
}
