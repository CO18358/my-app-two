import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import {
  MangaCount,
  MangaInfo,
  PaginatedResponse,
  RecommendManga,
} from 'src/app/helpers/jikan.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private http: HttpClient) {}

  genres(): Observable<MangaCount[]> {
    return this.http
      .get<{ data: MangaCount[] }>(`${baseUrls.jikan}genres/manga`)
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  magazines(page?: number): Observable<{
    pagination: PaginatedResponse;
    data: MangaCount[];
  }> {
    const url = page
      ? `${baseUrls.jikan}magazines?page=${page}`
      : `${baseUrls.jikan}magazines`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: MangaCount[] }>(url)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  topManga(params?: any): Observable<{
    pagination: PaginatedResponse;
    data: MangaInfo[];
  }> {
    const url = `${baseUrls.jikan}top/manga`;
    return this.http
      .get<{ pagination: PaginatedResponse; data: MangaInfo[] }>(url, {
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
    data: RecommendManga[];
  }> {
    const url = `${baseUrls.jikan}recommendations/manga`;
    return this.http
      .get<{
        pagination: { has_next_page: boolean; last_visible_page: number };
        data: RecommendManga[];
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
