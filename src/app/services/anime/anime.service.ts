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
} from 'src/app/helpers/jikan.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getAnime(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: ResultCard[];
  }> {
    const url = `${baseUrls.jikan}anime`;
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
      .get<{ data: ItemCount[] }>(`${baseUrls.jikan}genres/anime`)
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  producers(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: Producer[];
  }> {
    const url = `${baseUrls.jikan}producers`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: Producer[] }>(url, {
        params,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
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
    const url = `${baseUrls.jikan}recommendations/anime`;
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
