import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { baseUrls } from 'src/app/helpers/constants';
import { Poem } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  constructor(private http: HttpClient) {}

  getPoets() {
    return this.http.get(`${baseUrls.poetry}/author`).pipe(
      map((res: any) => {
        return res.authors as string[];
      })
    );
  }

  getPoembyPoets(poet: string): Observable<Poem[]> {
    return this.http
      .get<Poem[]>(`${baseUrls.poetry}/author/${encodeURIComponent(poet)}`)
      .pipe(
        map((res: Poem[]) => {
          return res;
        })
      );
  }

  getRandomPoem(): Observable<Poem> {
    return this.http.get<Poem[]>(`${baseUrls.poetry}/random`).pipe(
      map((res: Poem[]) => {
        return res.pop() as Poem;
      })
    );
  }

  searchPoem(title: string): Observable<Poem[]> {
    return this.http
      .get<Poem[]>(`${baseUrls.poetry}/title/${encodeURIComponent(title)}`)
      .pipe(
        map((res: Poem[]) => {
          return res;
        })
      );
  }

  getPoem(title: string): Observable<Poem> {
    return this.http
      .get<Poem[]>(`${baseUrls.poetry}/title/${encodeURIComponent(title)}`)
      .pipe(
        map((res: Poem[]) => {
          return res.pop() as Poem;
        })
      );
  }

  totalPoems() {
    return this.http.get(`${baseUrls.poetry}/title`).pipe(
      map((res: any) => {
        return res.titles as string[];
      })
    );
  }
}
