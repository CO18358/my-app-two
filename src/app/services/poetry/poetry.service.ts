import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Poem } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  baseUrl = 'https://poetrydb.org/';

  constructor(private http: HttpClient) {}

  getPoets() {
    return this.http.get(`${this.baseUrl}/author`).pipe(
      map((res: any) => {
        return res.authors as string[];
      })
    );
  }

  getPoembyPoets(poet: string): Observable<Poem[]> {
    return this.http
      .get<Poem[]>(`${this.baseUrl}/author/${encodeURIComponent(poet)}`)
      .pipe(
        map((res: Poem[]) => {
          return res;
        })
      );
  }

  getRandomPoem(): Observable<Poem> {
    return this.http.get<Poem[]>(`${this.baseUrl}/random`).pipe(
      map((res: Poem[]) => {
        return res.pop() as Poem;
      })
    );
  }

  searchPoem(title: string): Observable<Poem[]> {
    return this.http
      .get<Poem[]>(`${this.baseUrl}/title/${encodeURIComponent(title)}`)
      .pipe(
        map((res: Poem[]) => {
          return res;
        })
      );
  }

  getPoem(title: string): Observable<Poem> {
    return this.http
      .get<Poem[]>(`${this.baseUrl}/title/${encodeURIComponent(title)}`)
      .pipe(
        map((res: Poem[]) => {
          return res.pop() as Poem;
        })
      );
  }

  totalPoems() {
    return this.http.get(`${this.baseUrl}/title`).pipe(
      map((res: any) => {
        return res.titles as string[];
      })
    );
  }
}
