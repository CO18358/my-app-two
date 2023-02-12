import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import {
  MangaGenre,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private http: HttpClient) {}

  genres(): Observable<MangaGenre[]> {
    return this.http
      .get<{ data: MangaGenre[] }>(`${baseUrls.jikan}genres/manga`)
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  magazines(): Observable<{
    pagination: PaginatedResponse;
    data: MangaGenre[];
  }> {
    return this.http
      .get<{ pagination: PaginatedResponse; data: MangaGenre[] }>(
        `${baseUrls.jikan}magazines`
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
