import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import {
  ItemCount,
  MangaInfo,
  ResultCard,
  PaginatedResponse,
  Recommended,
} from 'src/app/helpers/jikan.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private http: HttpClient) {}

  getMangas(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = `${baseUrls.jikan}manga`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ResultCard[] }>(url, {
        params,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  genres(): Observable<ItemCount[]> {
    return this.http
      .get<{ data: ItemCount[] }>(`${baseUrls.jikan}genres/manga`)
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  magazines(page?: number): Observable<{
    pagination: PaginatedResponse;
    data: ItemCount[];
  }> {
    const url = page
      ? `${baseUrls.jikan}magazines?page=${page}`
      : `${baseUrls.jikan}magazines`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ItemCount[] }>(url)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  topManga(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = `${baseUrls.jikan}top/manga`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: ResultCard[] }>(url, {
        params,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  recommendations(params?: any): Observable<{
    pagination: { has_next_page: boolean; last_visible_page: number };
    data: Recommended[];
  }> {
    const url = `${baseUrls.jikan}recommendations/manga`;
    return this.http
      .get<{
        pagination: { has_next_page: boolean; last_visible_page: number };
        data: Recommended[];
      }>(url, {
        params,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
